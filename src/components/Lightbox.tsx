import { useState } from 'react';
import { X } from 'lucide-react';
import { playShutterSound } from '../store/themeStore';
import type { Photo } from '../data/gallery';

interface Props {
  photo: Photo | null;
  onClose: () => void;
}

export default function Lightbox({ photo, onClose }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (!photo) return null;

  const handleOpen = () => {
    playShutterSound();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
      onAnimationStart={handleOpen}
    >
      <div
        className="relative max-w-4xl w-full animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Old photo with white border */}
        <div className="old-photo-border film-grain">
          <div className="vintage-photo">
            <img
              src={photo.image}
              alt={photo.title}
              className={`w-full max-h-[60vh] object-contain transition-opacity duration-500 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>

        {/* Photo info panel */}
        <div className="mt-4 text-center">
          <p className="font-sans-cn text-xs text-white/40 tracking-widest uppercase">
            {photo.filmNo}
          </p>
          <h3 className="font-serif-cn text-xl text-white font-bold mt-1">
            {photo.title}
          </h3>
          <p className="font-serif-cn text-sm text-white/60 mt-2 max-w-lg mx-auto leading-relaxed">
            {photo.story}
          </p>

          {/* Camera params */}
          <div className="flex items-center justify-center gap-3 mt-4 font-sans-cn text-xs text-white/40">
            <span>{photo.aperture}</span>
            <span>·</span>
            <span>{photo.shutter}</span>
            <span>·</span>
            <span>{photo.iso}</span>
            <span>·</span>
            <span>{photo.focal}</span>
          </div>
          <p className="font-sans-cn text-xs text-white/30 mt-1">{photo.camera}</p>
        </div>
      </div>
    </div>
  );
}
