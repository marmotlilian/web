export default function CommentSection() {
  const sampleComments = [
    {
      id: 1,
      author: '小鱼',
      date: '2026-02-17',
      text: '读完之后很有共鸣，产品经理和记者的共同点总结得太精辟了。期待更多这样的分享！',
    },
    {
      id: 2,
      author: '咖啡与猫',
      date: '2026-02-16',
      text: '文字很温暖，让人想起自己转行的那些年。加油 Yahao！',
    },
    {
      id: 3,
      author: '路过的设计师',
      date: '2026-02-15',
      text: '网站风格好棒，复古报纸的感觉让阅读体验很沉浸。内容也很有深度。',
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="font-handwriting text-xl text-ink dark:text-walnut-text whitespace-nowrap">
          在报纸边角留下你的感悟
        </h3>
        <div className="flex-1 newspaper-line" />
      </div>

      {/* Input area (decorative) */}
      <div className="bg-paper dark:bg-walnut-bg-light/50 p-4 mb-6 border border-dashed border-ink-line/20 dark:border-walnut-line/30">
        <textarea
          placeholder="写下你的想法..."
          className="w-full bg-transparent font-handwriting text-base text-ink dark:text-walnut-text placeholder:text-ink-light/30 dark:placeholder:text-walnut-text-secondary/30 resize-none outline-none h-20"
          readOnly
        />
        <div className="flex justify-end mt-2">
          <button className="font-sans-cn text-xs px-4 py-1.5 border border-ink-line/30 dark:border-walnut-line/40 text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text hover:border-ink dark:hover:border-walnut-line transition-colors">
            留言
          </button>
        </div>
      </div>

      {/* Sample comments */}
      <div className="space-y-4">
        {sampleComments.map((comment) => (
          <div
            key={comment.id}
            className="border-l-2 border-ink-line/10 dark:border-walnut-line/20 pl-4 py-2"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-handwriting text-base text-ink dark:text-walnut-text">
                {comment.author}
              </span>
              <span className="font-sans-cn text-xs text-ink-light/50 dark:text-walnut-text-secondary/50">
                {comment.date}
              </span>
            </div>
            <p className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary leading-relaxed">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
