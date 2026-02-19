import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import type { Article } from '../data/articles';

interface Props {
  article: Article;
}

export default function FeaturedHero({ article }: Props) {
  return (
    <section className="relative w-full">
      <Link to={`/article/${article.id}`} className="group block">
        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-paper-card dark:bg-walnut-card">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] grayscale-[15%] group-hover:grayscale-0"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-3">
              {article.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 text-[10px] md:text-xs font-sans-cn tracking-wider text-white/90 border border-white/30 bg-white/10 backdrop-blur-sm"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="font-serif-cn text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
              {article.title}
            </h2>

            {/* Highlight quote */}
            <p className="font-masthead italic text-sm md:text-base lg:text-lg text-white/85 leading-relaxed max-w-2xl mb-4">
              "{article.highlight}"
            </p>

            {/* Date */}
            <div className="flex items-center gap-1.5 text-white/60">
              <Calendar size={13} />
              <span className="font-sans-cn text-xs md:text-sm">{article.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
