import { useThemeStore } from '../store/themeStore';
import { Volume2, VolumeX } from 'lucide-react';

export default function SoundToggle() {
  const { soundEnabled, toggleSound } = useThemeStore();

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-paper-card dark:bg-walnut-card shadow-lg border border-ink-line/10 dark:border-walnut-line/30 hover:scale-110 transition-transform"
      aria-label={soundEnabled ? '关闭声效' : '开启声效'}
      title={soundEnabled ? '关闭快门声效' : '开启快门声效'}
    >
      {soundEnabled ? (
        <Volume2 size={18} className="text-ink dark:text-walnut-text" />
      ) : (
        <VolumeX size={18} className="text-ink-light dark:text-walnut-text-secondary" />
      )}
    </button>
  );
}
