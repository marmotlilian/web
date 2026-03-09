import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useThemeStore } from '../store/themeStore';

// ─── Quill Ink Catcher Mini-Game ───
function QuillGame({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({
    quillX: 150,
    score: 0,
    drops: [] as { x: number; y: number; speed: number; caught: boolean }[],
    splats: [] as { x: number; y: number; age: number }[],
    gameOver: false,
    missed: 0,
    frame: 0,
  });
  const keysRef = useRef<Set<string>>(new Set());
  const isDark = useThemeStore((s) => s.isDark);

  const colors = useMemo(() => isDark
    ? { bg: '#2C1E14', quill: '#F0E6D8', ink: '#C4836A', text: '#F0E6D8', accent: '#8B7355', splat: '#C4836A' }
    : { bg: '#FAF7F0', quill: '#1A1A1A', ink: '#8B0000', text: '#1A1A1A', accent: '#6B6B6B', splat: '#8B0000' },
    [isDark]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 320, H = 400;
    canvas.width = W;
    canvas.height = H;

    const handleKey = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === 'r' && stateRef.current.gameOver) {
        stateRef.current = { quillX: 150, score: 0, drops: [], splats: [], gameOver: false, missed: 0, frame: 0 };
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => keysRef.current.delete(e.key);

    const handleMove = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      stateRef.current.quillX = Math.max(15, Math.min(W - 15, ((clientX - rect.left) / rect.width) * W));
    };
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); handleMove(e.touches[0].clientX); };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });

    const loop = () => {
      const s = stateRef.current;
      s.frame++;

      if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a')) s.quillX = Math.max(15, s.quillX - 5);
      if (keysRef.current.has('ArrowRight') || keysRef.current.has('d')) s.quillX = Math.min(W - 15, s.quillX + 5);

      if (!s.gameOver) {
        const spawnRate = Math.max(20, 50 - Math.floor(s.score / 3));
        if (s.frame % spawnRate === 0) {
          s.drops.push({
            x: Math.random() * (W - 40) + 20,
            y: -10,
            speed: 1.5 + Math.random() * 1.5 + s.score * 0.05,
            caught: false,
          });
        }

        s.drops.forEach((d) => {
          if (d.caught) return;
          d.y += d.speed;
          if (d.y >= H - 50 && d.y <= H - 30 && Math.abs(d.x - s.quillX) < 22) {
            d.caught = true;
            s.score++;
          }
          if (d.y > H + 10 && !d.caught) {
            d.caught = true;
            s.missed++;
            s.splats.push({ x: d.x, y: H - 5, age: 0 });
            if (s.missed >= 5) s.gameOver = true;
          }
        });

        s.drops = s.drops.filter((d) => d.y < H + 20 || !d.caught);
        s.splats = s.splats.filter((sp) => { sp.age++; return sp.age < 60; });
      }

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = isDark ? 'rgba(139,115,85,0.08)' : 'rgba(42,42,42,0.04)';
      for (let y = 0; y < H; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      s.drops.forEach((d) => {
        if (d.caught) return;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = colors.ink;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(d.x - 3, d.y - 4);
        ctx.lineTo(d.x, d.y - 12);
        ctx.lineTo(d.x + 3, d.y - 4);
        ctx.fillStyle = colors.ink;
        ctx.fill();
      });

      s.splats.forEach((sp) => {
        const alpha = 1 - sp.age / 60;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = colors.splat;
        ctx.beginPath();
        ctx.ellipse(sp.x, sp.y, 10, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      const qx = s.quillX, qy = H - 40;
      ctx.save();
      ctx.translate(qx, qy);
      ctx.beginPath();
      ctx.moveTo(0, 10);
      ctx.lineTo(-4, -25);
      ctx.lineTo(0, -30);
      ctx.lineTo(4, -25);
      ctx.closePath();
      ctx.fillStyle = colors.quill;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-2, 10);
      ctx.lineTo(0, 18);
      ctx.lineTo(2, 10);
      ctx.fillStyle = colors.ink;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 18, 12, 0, Math.PI, false);
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      ctx.fillStyle = colors.text;
      ctx.font = '700 16px "Playfair Display", Georgia, serif';
      ctx.fillText(`墨 ${s.score}`, 12, 28);
      ctx.font = '12px sans-serif';
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = i < 5 - s.missed ? colors.ink : (isDark ? 'rgba(139,115,85,0.2)' : 'rgba(42,42,42,0.1)');
        ctx.fillText('●', W - 20 - i * 16, 26);
      }

      if (s.gameOver) {
        ctx.fillStyle = isDark ? 'rgba(44,30,20,0.85)' : 'rgba(250,247,240,0.85)';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = colors.text;
        ctx.font = '700 24px "Playfair Display", Georgia, serif';
        ctx.textAlign = 'center';
        ctx.fillText('墨尽笔停', W / 2, H / 2 - 20);
        ctx.font = '14px "Noto Serif SC", serif';
        ctx.fillStyle = colors.accent;
        ctx.fillText(`收集了 ${s.score} 滴墨水`, W / 2, H / 2 + 15);
        ctx.font = '12px "Noto Sans SC", sans-serif';
        ctx.fillText('按 R 或点击重来', W / 2, H / 2 + 45);
        ctx.textAlign = 'start';
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
    };
  }, [colors, isDark]);

  const handleCanvasClick = () => {
    if (stateRef.current.gameOver) {
      stateRef.current = { quillX: 150, score: 0, drops: [], splats: [], gameOver: false, missed: 0, frame: 0 };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="relative bg-paper dark:bg-walnut-bg rounded-sm shadow-2xl p-3 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-2 px-1">
          <h3 className="font-masthead text-base font-bold text-ink dark:text-walnut-text">鹅毛笔接墨水</h3>
          <button onClick={onClose} className="text-ink-light dark:text-walnut-text-secondary text-sm hover:text-ink dark:hover:text-walnut-text">✕</button>
        </div>
        <p className="font-sans-cn text-xs text-ink-light dark:text-walnut-text-secondary mb-2 px-1">← → 或鼠标移动接住墨滴，漏掉5滴游戏结束</p>
        <canvas
          ref={canvasRef}
          className="block mx-auto rounded-sm border border-ink-line/10 dark:border-walnut-line/20"
          style={{ width: 320, height: 400, touchAction: 'none' }}
          onClick={handleCanvasClick}
        />
      </div>
    </div>
  );
}

// ─── Masthead Component ───
export default function Masthead() {
  const [gameOpen, setGameOpen] = useState(false);

  const dateStr = useMemo(() => {
    const d = new Date();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${weekdays[d.getDay()]}`;
  }, []);

  return (
    <>
      <header className="pt-8 pb-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          {/* Left: Masthead title - Playfair Display italic (elegant newspaper) */}
          <h1 className="font-masthead italic text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink dark:text-walnut-text leading-none select-none">
            The Yahao Post
          </h1>

          {/* Right: Easter egg icon + date */}
          <div className="text-right flex flex-col items-end">
            <button
              onClick={() => setGameOpen(true)}
              className="group flex items-center gap-1.5 transition-all hover:scale-105"
              title="点我有惊喜 ✦"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-ink-light dark:text-walnut-text-secondary group-hover:text-accent-red dark:group-hover:text-walnut-accent transition-colors">
                <path d="M20 2C16 6 13 9 10 13L8 20L5 22L7 18C7 18 10 11 14 7C16 5 18 3 20 2Z" fill="currentColor" opacity="0.8" />
                <path d="M10 13L8 20L7 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="font-masthead text-xs text-ink-light/40 dark:text-walnut-text-secondary/40 group-hover:text-accent-red/60 dark:group-hover:text-walnut-accent/60 tracking-widest transition-colors">
                Vol. I
              </span>
            </button>
            <span className="font-sans-cn text-xs text-ink-light dark:text-walnut-text-secondary mt-1 tracking-wide">
              {dateStr}
            </span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="max-w-6xl mx-auto mt-4">
          <div className="newspaper-line-double" />
        </div>
      </header>

      {gameOpen && <QuillGame onClose={() => setGameOpen(false)} />}
    </>
  );
}
