export interface Article {
  id: string;
  title: string;
  category: string;
  categoryIcon: string;
  keywords: string[];
  excerpt: string;
  summary: string;
  highlight: string;
  image: string;
  date: string;
  readTime: number;
  author: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    title: '从新闻编辑室到产品经理：我的十五年跨界之旅',
    category: '深度报道',
    categoryIcon: '🔍',
    keywords: ['职业转型', '产品思维', '新闻素养'],
    excerpt: '从每天追逐新闻截稿线，到为用户体验反复打磨产品细节。十五年间，两段看似迥异的职业生涯，教会我同一件事——好的故事和好的产品，本质上都在解决同一个问题。',
    summary: '十五年间从新闻编辑室到互联网产品经理的跨界旅程。作者回顾了在传统媒体中锤炼出的叙事能力如何无缝迁移到产品设计，探讨了"用户即读者"的核心理念，以及两个行业在信息架构、需求洞察上的惊人相似性。',
    highlight: '好的故事和好的产品，本质上都在解决同一个问题。',
    image: 'https://images.unsplash.com/photo-1579308343343-6557a756d515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-18',
    readTime: 12,
    author: 'Yahao',
    featured: true,
  },
  {
    id: '2',
    title: '2026 年美妆行业十大趋势预测',
    category: '美妆洞察',
    categoryIcon: '💄',
    keywords: ['美妆趋势', '行业分析', '消费升级'],
    excerpt: '从"以油养肤"到"生物发酵成分"，从"精简护肤"到"情绪美妆"。当科技与自然的边界越来越模糊，2026年的美妆行业将迎来哪些不可忽视的变革？',
    summary: '深度解析2026年美妆行业的十大前沿趋势：生物发酵成分的崛起、情绪美妆概念的落地、AI个性化配方、可持续包装革命、男性护肤市场爆发等。结合全球市场数据与品牌案例，勾勒出一幅行业变革的全景图。',
    highlight: '当科技与自然的边界越来越模糊，变革已悄然发生。',
    image: 'https://images.unsplash.com/photo-1595051665600-afd01ea7c446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-16',
    readTime: 8,
    author: 'Yahao',
  },
  {
    id: '3',
    title: '在快节奏中寻找慢生活的艺术',
    category: '生活随笔',
    categoryIcon: '📝',
    keywords: ['慢生活', '自我觉察', '日常仪式'],
    excerpt: '清晨五点半的闹钟，一杯手冲咖啡，窗外还没完全亮起的天色。在所有人还在沉睡的时刻，我找到了属于自己的"慢"。这不是逃避，而是一种重新出发的仪式。',
    summary: '探索在都市快节奏中构建个人慢生活的实践方法。从清晨独处的仪式感、手冲咖啡的专注时刻，到周末的数字排毒，分享了一系列可操作的生活节奏调整策略，以及这些微小改变带来的心态转变。',
    highlight: '这不是逃避，而是一种重新出发的仪式。',
    image: 'https://images.unsplash.com/photo-1768168211215-231b9a487d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-14',
    readTime: 6,
    author: 'Yahao',
  },
  {
    id: '4',
    title: '当产品经理思维遇上育儿：我的实验笔记',
    category: '带娃日常',
    categoryIcon: '👶',
    keywords: ['育儿', '产品思维', '亲子教育'],
    excerpt: '用MVP思维规划女儿的兴趣班，用A/B测试找到最佳哄睡方案，用用户画像理解孩子的真实需求。当职业病遇上亲子时光，意想不到的化学反应就这样发生了。',
    summary: '一位产品经理爸爸将工作方法论应用于育儿的趣味实验记录。从用数据分析优化哄睡流程、用MVP思维筛选兴趣班，到发现孩子才是最好的"产品经理"——他们天生懂得用最直接的方式表达需求。',
    highlight: '职业病遇上亲子时光，意想不到的化学反应就这样发生了。',
    image: 'https://images.unsplash.com/photo-1758598737505-90a3084105ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-12',
    readTime: 7,
    author: 'Yahao',
  },
  {
    id: '5',
    title: '国货美妆崛起背后的故事',
    category: '深度报道',
    categoryIcon: '🔍',
    keywords: ['国货崛起', '品牌故事', '市场变革'],
    excerpt: '五年前，国际大牌还牢牢占据着中国美妆市场的金字塔顶端。而今天，一批本土品牌正用科研实力和文化自信，重新书写行业格局。这场变革的背后，有怎样的故事？',
    summary: '追溯中国本土美妆品牌从代工贴牌到自主创新的蜕变之路。通过三家代表性品牌的深度访谈，揭示了国货崛起背后的三大驱动力：成分研发突破、供应链数字化、以及年轻一代消费者文化认同感的觉醒。',
    highlight: '科研实力和文化自信，正在重新书写行业格局。',
    image: 'https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-10',
    readTime: 15,
    author: 'Yahao',
  },
  {
    id: '6',
    title: '成分党必读：如何科学解读护肤品标签',
    category: '美妆洞察',
    categoryIcon: '💄',
    keywords: ['成分解读', '护肤科学', '消费指南'],
    excerpt: '烟酰胺、视黄醇、玻尿酸……这些成分到底有什么用？浓度越高越好吗？成分表的顺序又意味着什么？作为一个在美妆行业浸润多年的产品人，我想分享一份最实用的解读指南。',
    summary: '从产品经理的专业视角解读护肤品成分标签的实用指南。详解六大明星成分的功效与适用人群、成分表排列的真实逻辑、浓度迷思的真相，以及如何根据自身肤质构建最优的护肤搭配方案。',
    highlight: '浓度越高越好吗？答案可能出乎你的意料。',
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-08',
    readTime: 10,
    author: 'Yahao',
  },
  {
    id: '7',
    title: '周末厨房实验：烘焙与生活的隐喻',
    category: '生活随笔',
    categoryIcon: '📝',
    keywords: ['烘焙', '生活哲学', '周末时光'],
    excerpt: '揉面团的手感，等待发酵的耐心，烤箱里渐渐膨胀的面包。每一次烘焙都像是一场微型人生——你需要精确的配比，也需要恰到好处的等待，更需要接受偶尔的失败。',
    summary: '以烘焙为线索展开的生活哲学随笔。从揉面到发酵、从精确称量到随性创造，发现烘焙过程与人生的种种平行：耐心等待的价值、失败中的领悟、以及"刚刚好"这个词在厨房和生活中的不同含义。',
    highlight: '你需要精确的配比，也需要恰到好处的等待。',
    image: 'https://images.unsplash.com/photo-1607358111408-fe7e0f32c865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-06',
    readTime: 5,
    author: 'Yahao',
  },
  {
    id: '8',
    title: '和女儿一起画画的周末',
    category: '带娃日常',
    categoryIcon: '👶',
    keywords: ['亲子', '艺术启蒙', '童真视角'],
    excerpt: '她画了一个紫色的太阳和绿色的大象，然后认真地告诉我"这才是真正的颜色"。有时候，孩子比大人更懂艺术的真谛——不是描摹现实，而是表达内心。',
    summary: '一个与女儿共同绘画的周末午后引发的思考。当孩子用"错误"的颜色画出"正确"的世界时，我们是否应该重新审视成人世界对"正确"的执念？从一张紫色太阳的画开始，探索童真视角带给成年人的启示。',
    highlight: '不是描摹现实，而是表达内心。',
    image: 'https://images.unsplash.com/photo-1758598737901-6d892a0cf533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    date: '2026-02-04',
    readTime: 4,
    author: 'Yahao',
  },
];

export const categoryColors: Record<string, string> = {
  '深度报道': 'text-accent-red dark:text-walnut-accent',
  '美妆洞察': 'text-accent-red dark:text-walnut-accent',
  '生活随笔': 'text-ink-light dark:text-walnut-text-secondary',
  '带娃日常': 'text-ink-light dark:text-walnut-text-secondary',
  '摄影集': 'text-ink-light dark:text-walnut-text-secondary',
};
