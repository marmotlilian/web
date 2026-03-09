import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { articles } from '../data/articles';

export default function BreakingNews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const headlines = articles.slice(0, 5);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif-cn text-xs font-bold tracking-newspaper uppercase text-accent-red dark:text-walnut-accent px-2 py-1 border border-accent-red dark:border-walnut-accent">
            头条速递
          </span>
          <div className="flex-1 newspaper-line" />
          <div className="flex gap-1">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-1 disabled:opacity-20 text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-1 disabled:opacity-20 text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable headlines */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {headlines.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="flex-shrink-0 w-72 group"
            >
              <div className="flex items-start gap-3">
                <span className="font-masthead text-3xl font-bold text-ink/10 dark:text-walnut-text/10 leading-none select-none">
                  {String(headlines.indexOf(article) + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="text-xs font-sans-cn text-accent-red dark:text-walnut-accent">
                    {article.categoryIcon} {article.category}
                  </span>
                  <h3 className="font-serif-cn text-sm font-bold text-ink dark:text-walnut-text mt-1 leading-snug ink-bleed-hover group-hover:text-accent-hover dark:group-hover:text-walnut-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-ink-light/60 dark:text-walnut-text-secondary/60">
                    <Clock size={10} />
                    <span className="text-xs font-sans-cn">{article.readTime} 分钟</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
