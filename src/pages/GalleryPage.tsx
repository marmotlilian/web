import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { photos } from '../data/gallery';
import Lightbox from '../components/Lightbox';
import { playShutterSound } from '../store/themeStore';
import type { Photo } from '../data/gallery';

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('全部');

  const series = ['全部', ...Array.from(new Set(photos.map((p) => p.series)))];

  const filtered = activeFilter === '全部'
    ? photos
    : photos.filter((p) => p.series === activeFilter);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    playShutterSound();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      {/* Header */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text transition-colors mb-6"
      >
        <ArrowLeft size={14} />
        返回首页
      </Link>

      <h1 className="font-masthead text-3xl md:text-4xl font-bold text-ink dark:text-walnut-text">
        摄影集
      </h1>
      <p className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary mt-2">
        用镜头捕捉生活中的光影瞬间
      </p>

      <div className="newspaper-line-double mt-4 mb-6" />

      {/* Filter tabs */}
      <div className="flex gap-4 mb-8 font-sans-cn text-sm">
        {series.map((s) => (
          <button
            key={s}
            onClick={() => setActiveFilter(s)}
            className={`pb-1 border-b-2 transition-colors ${
              activeFilter === s
                ? 'border-accent-red dark:border-walnut-accent text-ink dark:text-walnut-text'
                : 'border-transparent text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((photo, i) => (
          <div
            key={photo.id}
            className="group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
            onClick={() => handlePhotoClick(photo)}
          >
            <div className="old-photo-border transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-2 px-1">
              <p className="font-sans-cn text-xs text-ink-light/50 dark:text-walnut-text-secondary/50 tracking-widest">
                {photo.filmNo}
              </p>
              <p className="font-serif-cn text-sm font-bold text-ink dark:text-walnut-text mt-0.5">
                {photo.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}
