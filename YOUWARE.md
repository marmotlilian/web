# Yahao Digest — 个人文摘网站

## 项目概述
- **项目名称**: Yahao Digest — 复古报纸风格个人网站
- **技术栈**: React 18 + TypeScript + Vite + Tailwind CSS
- **路由**: React Router DOM v6
- **状态管理**: Zustand
- **风格**: 经典英文报纸 Digest 排版，Twitter Digest 风格参考

## 设计系统
- **字体**: Playfair Display(报头), Dancing Script(手写署名), Noto Serif SC(中文正文), Noto Sans SC(元信息)
- **浅色模式**: 米黄纸张背景(#FAF7F0), 墨黑文字(#1A1A1A), 暗红强调(#8B0000)
- **暗夜模式**: 胡桃木深褐色系(#2C1E14), 暖白文字(#F0E6D8), 暖陶土强调(#C4836A)
- **光标**: 自定义鹅毛笔 SVG（暗夜模式自适应颜色）
- **纹理**: CSS 微妙纸张纹理，暗夜木纹质感

## 核心功能
- 报头区（Masthead）+ 手写署名 + 实时日期
- 导航栏（含搜索图标 + 暗夜模式油灯切换）
- 引言区（多条引言随机轮换，12秒自动切换，点击手动切换）
- 头条新闻滚动条（Breaking News Ticker）
- 三栏等宽文章网格（竖线分隔，墨水晕染悬停效果）
- 摄影穿插区
- 文章详情页（标题+摘要+首字下沉+折痕线+评论区UI）
- 摄影集页面（胶片编号 FILM No. 系列、老照片白边效果）
- 摄影灯箱（颗粒感噪点+快门参数面板+拍摄故事）
- 快门声效（Web Audio API 合成）+ 右下角声效开关
- 页脚印章 → 个人名片弹窗（盖章动效）
- 关于我页面（人生时间线）
- 响应式布局（桌面三栏/手机单栏）

## 页面路由
| 路由 | 页面 |
|------|------|
| `/` | 首页（Digest 风格） |
| `/article/:id` | 文章详情 |
| `/gallery` | 摄影集 |
| `/about` | 关于我 |

## 文件结构
```
src/
├── data/          # Mock 数据（articles, quotes, gallery）
├── store/         # Zustand 状态管理（主题/声效）
├── components/    # 复用组件
├── layouts/       # 主布局
└── pages/         # 页面组件
```

## 配图来源
- 文章配图：Unsplash（新闻/美妆/生活/亲子主题）
- 摄影集：Unsplash（城市街拍/美妆产品静物）

## 构建
```bash
npm install
npm run build
```
