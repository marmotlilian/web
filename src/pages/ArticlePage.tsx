import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { articles } from '../data/articles';
import CommentSection from '../components/CommentSection';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif-cn text-2xl text-ink dark:text-walnut-text">文章未找到</h2>
        <Link to="/" className="font-sans-cn text-sm text-accent-red dark:text-walnut-accent mt-4 inline-block">
          ← 返回首页
        </Link>
      </div>
    );
  }

  const dateStr = new Date(article.date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        返回首页
      </Link>

      {/* Category */}
      <span className="inline-block font-sans-cn text-xs tracking-wider text-accent-red dark:text-walnut-accent border border-accent-red/30 dark:border-walnut-accent/30 px-2 py-0.5">
        {article.categoryIcon} {article.category}
      </span>

      {/* Title */}
      <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-ink dark:text-walnut-text mt-4 leading-tight">
        {article.title}
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mt-4 font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary">
        <span>By {article.author}</span>
        <span>·</span>
        <span>{dateStr}</span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {article.readTime} 分钟
        </span>
      </div>

      {/* Fold crease */}
      <div className="fold-crease my-6">
        <div className="newspaper-line" />
      </div>

      {/* Featured image */}
      <div className="aspect-[16/9] overflow-hidden bg-paper-card dark:bg-walnut-card mb-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Excerpt as content (MVP) */}
      <div className="font-serif-cn text-base md:text-lg text-ink dark:text-walnut-text leading-relaxed space-y-6">
        <p className="first-letter:text-5xl first-letter:font-masthead first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none first-letter:text-accent-red dark:first-letter:text-walnut-accent">
          {article.excerpt}
        </p>
        <p className="text-ink-light dark:text-walnut-text-secondary italic text-sm text-center py-8 border-y border-ink-line/10 dark:border-walnut-line/20">
          ✦ 完整文章即将发布，敬请期待 ✦
        </p>
      </div>

      {/* Fold crease */}
      <div className="fold-crease my-8">
        <div className="newspaper-line" />
      </div>

      {/* Comments */}
      <CommentSection />
    </article>
  );
}
