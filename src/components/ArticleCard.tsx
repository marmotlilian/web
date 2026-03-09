import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import type { Article } from '../data/articles';

interface Props {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: Props) {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-paper-card dark:bg-walnut-card mb-3">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
          loading="lazy"
        />
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 mb-1.5">
        {article.keywords.map((kw) => (
          <span
            key={kw}
            className="font-sans-cn text-[10px] tracking-wider text-accent-red/70 dark:text-walnut-accent/70"
          >
            #{kw}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-serif-cn text-base sm:text-lg font-bold text-ink dark:text-walnut-text mt-1 leading-snug ink-bleed-hover line-clamp-2 transition-colors group-hover:text-accent-hover dark:group-hover:text-walnut-accent">
        {article.title}
      </h3>

      {/* Highlight quote */}
      <p className="font-serif-cn text-xs italic text-accent-red/70 dark:text-walnut-accent/80 mt-2 leading-relaxed line-clamp-2 border-l-2 border-accent-red/30 dark:border-walnut-accent/40 pl-2">
        "{article.highlight}"
      </p>

      {/* Summary (梗概) */}
      <p className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary mt-2 leading-relaxed line-clamp-3">
        {article.summary}
      </p>

      {/* Read time */}
      <div className="flex items-center gap-1 mt-3 text-ink-light/50 dark:text-walnut-text-secondary/50">
        <Clock size={11} />
        <span className="text-xs font-sans-cn">{article.readTime} 分钟阅读</span>
      </div>
    </Link>
  );
}
