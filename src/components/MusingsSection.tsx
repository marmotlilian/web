import { useState } from 'react';
import { Feather } from 'lucide-react';
import { musings } from '../data/musings';

export default function MusingsSection() {
  const [expanded, setExpanded] = useState(false);
  const displayMusings = expanded ? musings : musings.slice(0, 3);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <Feather size={14} className="text-accent-red dark:text-walnut-accent" />
          <h2 className="font-serif-cn text-lg font-bold text-ink dark:text-walnut-text whitespace-nowrap">
            随想
          </h2>
          <div className="flex-1 newspaper-line" />
        </div>

        {/* Musings list */}
        <div className="space-y-4">
          {displayMusings.map((musing) => (
            <div
              key={musing.id}
              className="group pl-4 border-l-2 border-ink/10 dark:border-walnut-line/30 hover:border-accent-red dark:hover:border-walnut-accent transition-colors duration-300"
            >
              <p className="font-serif-cn text-sm md:text-base text-ink/80 dark:text-walnut-text/85 leading-relaxed">
                {musing.text}
              </p>
              <span className="font-sans-cn text-[11px] text-ink-light/40 dark:text-walnut-text-secondary/40 mt-1 block">
                {musing.date}
              </span>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        {musings.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 font-sans-cn text-xs text-ink-light/50 dark:text-walnut-text-secondary/50 hover:text-accent-red dark:hover:text-walnut-accent transition-colors"
          >
            {expanded ? '收起' : `查看更多随想 (${musings.length - 3}+)`}
          </button>
        )}
      </div>
    </section>
  );
}
