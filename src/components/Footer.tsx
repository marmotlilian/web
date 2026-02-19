import { useState } from 'react';
import BusinessCard from './BusinessCard';

export default function Footer() {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <footer className="px-4 md:px-8 lg:px-16 py-10 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="newspaper-line-double mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Copyright */}
            <div className="text-center md:text-left">
              <p className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary">
                © 2026 Yahao Digest. All Rights Reserved.
              </p>
              <p className="font-sans-cn text-xs text-ink-light/50 dark:text-walnut-text-secondary/50 mt-1">
                RSS 订阅 · 付费订阅（即将推出）
              </p>
            </div>

            {/* Center: Stamp seal */}
            <button
              onClick={() => setCardOpen(true)}
              className="stamp-seal hover:scale-110"
              title="点击查看名片"
            >
              娅
            </button>

            {/* Right: Info */}
            <div className="text-center md:text-right">
              <p className="font-handwriting text-lg text-ink dark:text-walnut-text">
                Yahao Digest
              </p>
              <p className="font-sans-cn text-xs text-ink-light/50 dark:text-walnut-text-secondary/50 mt-1">
                用文字和摄影记录人生
              </p>
            </div>
          </div>
        </div>
      </footer>

      <BusinessCard isOpen={cardOpen} onClose={() => setCardOpen(false)} />
    </>
  );
}
