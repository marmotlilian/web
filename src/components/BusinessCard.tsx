import { useState } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessCard({ isOpen, onClose }: Props) {
  const [stamped, setStamped] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md bg-paper-card dark:bg-walnut-card-light p-8 shadow-2xl transition-all duration-500 ${
          stamped ? 'animate-fade-in' : 'animate-stamp'
        }`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={() => setStamped(true)}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text"
        >
          <X size={18} />
        </button>

        {/* Card content */}
        <div className="text-center">
          {/* Silhouette avatar */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-ink/10 dark:bg-walnut-line/30 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-ink/30 dark:text-walnut-text/30">
              <circle cx="20" cy="15" r="8" fill="currentColor" />
              <path d="M6 38 Q6 26 20 24 Q34 26 34 38" fill="currentColor" />
            </svg>
          </div>

          <h3 className="font-masthead text-2xl font-bold text-ink dark:text-walnut-text">Yahao</h3>
          <p className="font-sans-cn text-sm text-accent-red dark:text-walnut-accent mt-1">
            产品经理 · 前新闻人 · 摄影爱好者
          </p>

          <div className="newspaper-line my-4" />

          <p className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary leading-relaxed">
            前新闻人，后产品经理。工作15年+，用文字和摄影记录人生。
          </p>

          <div className="newspaper-line my-4" />

          <div className="flex justify-center gap-8 font-sans-cn text-xs text-ink-light dark:text-walnut-text-secondary">
            <div>
              <p className="font-bold text-ink dark:text-walnut-text text-lg">15+</p>
              <p>年工作经验</p>
            </div>
            <div>
              <p className="font-bold text-ink dark:text-walnut-text text-lg">8</p>
              <p>篇文章</p>
            </div>
            <div>
              <p className="font-bold text-ink dark:text-walnut-text text-lg">7</p>
              <p>组摄影</p>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute inset-2 border border-ink/10 dark:border-walnut-line/20 pointer-events-none" />
      </div>
    </div>
  );
}
