export interface Photo {
  id: string;
  title: string;
  image: string;
  series: string;
  filmNo: string;
  story: string;
  camera: string;
  aperture: string;
  shutter: string;
  iso: string;
  focal: string;
}

export const photos: Photo[] = [
  {
    id: 'p1',
    title: '夜归人',
    image: 'https://images.unsplash.com/photo-1679227679356-7a3d5bd5d8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '城市街拍',
    filmNo: 'FILM No. 001',
    story: '深夜的街道上，骑车的人赶着回家。车灯在湿漉漉的路面上拉出长长的光影，像是城市写给每一个晚归人的情书。',
    camera: 'Sony A7IV',
    aperture: 'f/2.8',
    shutter: '1/60s',
    iso: 'ISO 3200',
    focal: '35mm',
  },
  {
    id: 'p2',
    title: '雨中即景',
    image: 'https://images.unsplash.com/photo-1613718085716-171c200db48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '城市街拍',
    filmNo: 'FILM No. 002',
    story: '雨天的街头总有一种安静的戏剧感。伞下的人们各怀心事，而街角的老店依然亮着暖黄的灯。',
    camera: 'Sony A7IV',
    aperture: 'f/1.8',
    shutter: '1/125s',
    iso: 'ISO 800',
    focal: '50mm',
  },
  {
    id: 'p3',
    title: '街角守望',
    image: 'https://images.unsplash.com/photo-1613766511529-b6924fc16c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '城市街拍',
    filmNo: 'FILM No. 003',
    story: '路边闲聊的老人和飞驰而过的外卖骑手，快与慢的对比构成了这座城市最真实的节奏。',
    camera: 'Sony A7IV',
    aperture: 'f/4.0',
    shutter: '1/250s',
    iso: 'ISO 400',
    focal: '24mm',
  },
  {
    id: 'p4',
    title: '日出骑行',
    image: 'https://images.unsplash.com/photo-1613766512466-fb0a00fcffbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '城市街拍',
    filmNo: 'FILM No. 004',
    story: '清晨的摩托车声打破了街巷的寂静。有些人的一天，从引擎的轰鸣开始。',
    camera: 'Fujifilm X-T5',
    aperture: 'f/2.0',
    shutter: '1/500s',
    iso: 'ISO 200',
    focal: '23mm',
  },
  {
    id: 'p5',
    title: '唇色研究',
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '美妆产品',
    filmNo: 'FILM No. 005',
    story: '一支口红的诞生需要经过上百次色彩调试。每一个色号背后，都藏着配色师对美的极致追求。',
    camera: 'Canon R5',
    aperture: 'f/2.8',
    shutter: '1/160s',
    iso: 'ISO 100',
    focal: '100mm',
  },
  {
    id: 'p6',
    title: '瓶中世界',
    image: 'https://images.unsplash.com/photo-1623248509111-0bbf620a0af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '美妆产品',
    filmNo: 'FILM No. 006',
    story: '简约的瓶身设计，是产品经理与设计师反复博弈后的最优解。好的包装不喧宾夺主，却让人过目难忘。',
    camera: 'Canon R5',
    aperture: 'f/4.0',
    shutter: '1/125s',
    iso: 'ISO 200',
    focal: '85mm',
  },
  {
    id: 'p7',
    title: '光影质感',
    image: 'https://images.unsplash.com/photo-1688955665338-fb430ff8436d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    series: '美妆产品',
    filmNo: 'FILM No. 007',
    story: '自然光下的产品拍摄，追求的是那种"刚好"的质感。不过度修饰，让产品本身成为主角。',
    camera: 'Fujifilm X-T5',
    aperture: 'f/2.8',
    shutter: '1/200s',
    iso: 'ISO 400',
    focal: '56mm',
  },
];
