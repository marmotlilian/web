import { useThemeStore } from '../store/themeStore';
import { Flame } from 'lucide-react';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all hover:bg-ink/5 dark:hover:bg-walnut-line/20"
      aria-label={isDark ? '切换到浅色模式' : '切换到暗夜模式'}
      title={isDark ? '点亮油灯' : '熄灭油灯'}
    >
      <Flame
        size={18}
        className={`transition-all duration-300 ${
          isDark
            ? 'text-walnut-accent fill-walnut-accent/30'
            : 'text-ink-light hover:text-accent-red'
        }`}
      />
      {/* Glow effect when lit */}
      {!isDark && (
        <span className="absolute inset-0 rounded-full bg-amber-400/0 hover:bg-amber-400/10 transition-colors" />
      )}
    </button>
  );
}
