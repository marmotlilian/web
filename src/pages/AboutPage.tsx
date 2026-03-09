import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        返回首页
      </Link>

      {/* Title */}
      <h1 className="font-masthead text-3xl md:text-4xl font-bold text-ink dark:text-walnut-text">
        关于 Yahao
      </h1>

      <div className="newspaper-line-double mt-4 mb-8" />

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Silhouette portrait */}
        <div className="w-40 h-48 flex-shrink-0 bg-paper-card dark:bg-walnut-card flex items-center justify-center border border-ink-line/10 dark:border-walnut-line/20">
          <svg width="80" height="100" viewBox="0 0 80 100" className="text-ink/20 dark:text-walnut-text/20">
            <circle cx="40" cy="30" r="18" fill="currentColor" />
            <path d="M10 95 Q10 60 40 55 Q70 60 70 95" fill="currentColor" />
          </svg>
        </div>

        {/* Bio */}
        <div className="flex-1">
          <h2 className="font-handwriting text-2xl text-ink dark:text-walnut-text mb-2">
            Yahao
          </h2>
          <p className="font-sans-cn text-sm text-accent-red dark:text-walnut-accent mb-4">
            产品经理 · 前新闻人 · 摄影爱好者
          </p>
          <div className="font-serif-cn text-base text-ink-light dark:text-walnut-text-secondary leading-relaxed space-y-4">
            <p>
              新闻传播学出身，在传媒行业摸爬滚打数年后，转身投入了产品经理的世界。如今在美妆个护行业深耕，工作已超过15年。
            </p>
            <p>
              我相信好的产品和好的报道有着相同的内核——都在寻找被忽视的真相，都在为用户（读者）创造真正的价值。从新闻编辑室到产品白板，变的是工具和方法论，不变的是对"好故事"的执着。
            </p>
            <p>
              工作之余，我喜欢用相机记录城市的光影，在厨房里做烘焙实验，和女儿一起画那些"不像"但很快乐的画。这个网站是我的数字角落——用来分享深度思考、行业洞察、生活感悟，以及那些值得被记住的瞬间。
            </p>
          </div>
        </div>
      </div>

      <div className="fold-crease my-10">
        <div className="newspaper-line" />
      </div>

      {/* Timeline */}
      <h3 className="font-serif-cn text-lg font-bold text-ink dark:text-walnut-text mb-6">
        人生节选
      </h3>
      <div className="space-y-6">
        {[
          { year: '2011', event: '新闻传播学毕业，入行传媒' },
          { year: '2015', event: '转型产品经理，进入互联网行业' },
          { year: '2018', event: '深耕美妆个护赛道' },
          { year: '2021', event: '成为母亲，生活维度再次展开' },
          { year: '2026', event: '创办 Yahao Digest，用文字和摄影记录人生' },
        ].map((item) => (
          <div key={item.year} className="flex gap-4 items-start">
            <span className="font-masthead text-2xl font-bold text-ink/15 dark:text-walnut-text/15 flex-shrink-0 w-16">
              {item.year}
            </span>
            <div>
              <div className="w-2 h-2 rounded-full bg-accent-red dark:bg-walnut-accent mt-2 mb-1" />
            </div>
            <p className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary">
              {item.event}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-12 py-8 text-center">
        <blockquote className="font-masthead italic text-xl text-ink/60 dark:text-walnut-text/60">
          "用文字记录思考，用镜头捕捉时光"
        </blockquote>
        <p className="font-handwriting text-base text-ink-light dark:text-walnut-text-secondary mt-3">
          — Yahao
        </p>
      </div>
    </div>
  );
}
