import { Link } from 'react-router-dom';
import type { Article } from '../data/articles';

interface Props {
  article: Article;
  index: number;
}

export default function ArticleListItem({ article, index }: Props) {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex gap-5 md:gap-8 py-6 border-t border-ink/8 dark:border-walnut-line/25 first:border-t-0">
        {/* Left: Text content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          {/* Title - large and bold like Substack */}
          <h3 className="font-serif-cn text-lg md:text-xl lg:text-2xl font-bold text-ink dark:text-walnut-text leading-snug line-clamp-2 transition-colors group-hover:text-ink/70 dark:group-hover:text-walnut-text/70">
            {article.title}
          </h3>

          {/* Summary / subtitle */}
          <p className="font-serif-cn text-sm md:text-base text-ink-light dark:text-walnut-text-secondary mt-2 leading-relaxed line-clamp-2">
            {article.summary}
          </p>

          {/* Date + Keywords (No Author) */}
          <div className="flex items-center gap-3 mt-3">
            <span className="font-sans-cn text-xs tracking-wider text-ink-light/50 dark:text-walnut-text-secondary/50 uppercase">
              {article.date.replace(/-/g, '.').slice(5)}
            </span>
            <span className="text-ink-light/30 dark:text-walnut-text-secondary/30">·</span>
            <div className="flex items-center gap-2">
              {article.keywords.map((kw) => (
                <span
                  key={kw}
                  className="font-sans-cn text-xs tracking-wider text-ink-light/50 dark:text-walnut-text-secondary/50 hover:text-accent-red dark:hover:text-walnut-accent transition-colors"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Cover image */}
        <div className="flex-shrink-0 w-20 h-20 md:w-36 md:h-28 lg:w-40 lg:h-32 overflow-hidden bg-paper-card dark:bg-walnut-card rounded-sm self-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
}
