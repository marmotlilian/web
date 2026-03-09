import Link from "next/link";
import Header from "@/components/header";
import Author from "@/components/author";
import ArticleCard from "@/components/article-card";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";

// Mock data - 后续可以从文件或CMS读取
const author = {
  name: "Yahao",
  bio: "一名热爱技术和设计的开发者。喜欢探索新事物，专注于 Web 开发、用户体验与个人成长。分享工作中的思考和生活中的感悟。",
  socials: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    email: "hello@example.com",
  },
};

const articles = [
  {
    title: "我是如何从零开始学习前端的",
    excerpt: "回顾自己学习前端开发的历程，分享一些有用的学习资源和经验教训。",
    date: new Date("2024-01-15"),
    slug: "how-i-learned-frontend",
    tags: ["学习", "前端"],
    featured: true,
  },
  {
    title: "React 19 新特性详解",
    excerpt: "深入了解 React 19 带来的新功能，包括 Server Components、Actions 等。",
    date: new Date("2024-01-08"),
    slug: "react-19-features",
    tags: ["React", "技术"],
    featured: false,
  },
  {
    title: "设计系统的重要性",
    excerpt: "为什么我们需要设计系统，以及如何从零开始构建一个简单但实用的设计系统。",
    date: new Date("2024-01-01"),
    slug: "design-system-importance",
    tags: ["设计", "UI/UX"],
    featured: false,
  },
  {
    title: "2024 年技术展望",
    excerpt: "对新的一年技术发展趋势的预测和思考。",
    date: new Date("2023-12-25"),
    slug: "tech-2024-outlook",
    tags: ["思考", "趋势"],
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        title="Yahao's Newsletter"
        subtitle="分享技术与生活"
      />

      <main>
        {/* Hero Section */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h1 className="text-4xl font-serif font-medium sm:text-5xl">
                你好，我是 Yahao
              </h1>
              <p className="text-muted-foreground text-lg">
                一名热爱技术和设计的开发者。喜欢探索新事物，专注于 Web 开发与用户体验。
              </p>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <Author
          name={author.name}
          bio={author.bio}
          socials={author.socials}
        />

        {/* Articles Section */}
        <section id="posts" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-serif font-medium mb-8">精选文章</h2>
            <div className="space-y-12">
              {/* 第一个文章：大图推荐 */}
              <ArticleCard key={articles[0].slug} {...articles[0]} featured={true} />
              {/* 其他文章：左边文字右边封面 */}
              {articles.slice(1).map((article) => (
                <ArticleCard key={article.slug} {...article} featured={false} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                查看 <Link href="/archive" className="text-[#ff5919] hover:underline">全部文章</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <Subscribe subscriberCount={128} />
      </main>

      <Footer name="Yahao" />
    </div>
  );
}
