import { useSearchParams } from 'react-router-dom';
import FeaturedHero from '../components/FeaturedHero';
import BreakingNews from '../components/BreakingNews';
import ArticleGrid from '../components/ArticleGrid';
import ArticleListItem from '../components/ArticleListItem';
import PhotoInsert from '../components/PhotoInsert';
import { articles } from '../data/articles';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get('cat');

  const filteredArticles = cat
    ? articles.filter((a) => a.category === cat)
    : articles;

  // Featured article = first article with featured flag, or first article
  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  // Remaining articles (exclude featured)
  const remaining = filteredArticles.filter((a) => a.id !== featuredArticle.id);

  // 精选文章: only 1 row = 3 articles
  const gridArticles = remaining.slice(0, 3);

  // 其他文章: all remaining after grid - Substack-style list
  const listArticles = remaining.slice(3);

  return (
    <>
      {/* 1. 封推热文 - Featured hero */}
      {!cat && <FeaturedHero article={featuredArticle} />}

      {/* 2. 头条速递 - Breaking news ticker */}
      <BreakingNews />

      {/* 3. 精选文章 (1行 = 3 cards) with "更多" */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="newspaper-line" />
      </div>
      <ArticleGrid
        articles={gridArticles}
        title={cat ? `${cat}` : '精选文章'}
        showMore={!cat && remaining.length > 3}
      />

      {/* 4. 摄影集速览 */}
      {!cat && gridArticles.length >= 3 && (
        <>
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="newspaper-line" />
          </div>
          <PhotoInsert />
        </>
      )}

      {/* 5. 其他文章 - Substack-style single column list */}
      {listArticles.length > 0 && (
        <>
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="newspaper-line" />
          </div>
          <section className="px-4 md:px-8 lg:px-16 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-serif-cn text-lg font-bold text-ink dark:text-walnut-text whitespace-nowrap">
                  全部文章
                </h2>
                <div className="flex-1 newspaper-line" />
              </div>
              <div>
                {listArticles.map((article, i) => (
                  <ArticleListItem key={article.id} article={article} index={i} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
