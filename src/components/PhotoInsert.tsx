import { Link } from 'react-router-dom';
import { photos } from '../data/gallery';
import { ArrowRight } from 'lucide-react';

export default function PhotoInsert() {
  const previewPhotos = photos.slice(0, 3);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-serif-cn text-xs font-bold tracking-newspaper text-ink-light dark:text-walnut-text-secondary">
            📷 摄影集速览
          </span>
          <div className="flex-1 newspaper-line" />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewPhotos.map((photo) => (
            <Link
              key={photo.id}
              to={`/gallery`}
              className="group relative aspect-[4/3] overflow-hidden bg-paper-card dark:bg-walnut-card"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-sans-cn text-xs text-white/70">{photo.filmNo}</p>
                <p className="font-serif-cn text-sm text-white font-bold">{photo.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to gallery */}
        <Link
          to="/gallery"
          className="inline-flex items-center gap-1 mt-4 font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary hover:text-accent-red dark:hover:text-walnut-accent transition-colors group"
        >
          查看完整摄影集
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
