import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import type { Article } from '../data/articles';

interface Props {
  articles: Article[];
  title?: string;
  showMore?: boolean;
}

export default function ArticleGrid({ articles, title, showMore = false }: Props) {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-serif-cn text-lg font-bold text-ink dark:text-walnut-text whitespace-nowrap">
              {title}
            </h2>
            <div className="flex-1 newspaper-line" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <div key={article.id} className="relative pb-8">
              {/* Column divider - placed in the middle of the gap (left: -24px) */}
              {i % 3 !== 0 && (
                <div className="hidden md:block absolute -left-6 top-0 bottom-8 column-divider" />
              )}
              <ArticleCard article={article} index={i} />
            </div>
          ))}
        </div>

        {/* "更多" link at bottom-right */}
        {showMore && (
          <div className="flex justify-end mt-2">
            <Link
              to="/?cat="
              className="font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary hover:text-accent-red dark:hover:text-walnut-accent transition-colors group inline-flex items-center gap-1"
            >
              更多
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
