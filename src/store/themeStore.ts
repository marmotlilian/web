import { create } from 'zustand';

interface ThemeState {
  isDark: boolean;
  soundEnabled: boolean;
  toggleTheme: () => void;
  toggleSound: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  soundEnabled: true,
  toggleTheme: () =>
    set((state) => {
      const newDark = !state.isDark;
      if (newDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { isDark: newDark };
    }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
}));

// Shutter sound utility
let shutterAudio: HTMLAudioElement | null = null;

export function playShutterSound() {
  const { soundEnabled } = useThemeStore.getState();
  if (!soundEnabled) return;

  if (!shutterAudio) {
    // Create a synthetic shutter click using Web Audio API
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.15, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
      const t = i / audioCtx.sampleRate;
      // Sharp click attack + quick decay
      const envelope = Math.exp(-t * 80) * 0.6;
      const noise = (Math.random() * 2 - 1);
      // Add mechanical click resonance
      const click = Math.sin(t * 3000) * Math.exp(-t * 200) * 0.4;
      data[i] = (noise * envelope + click) * 0.3;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start();
    return;
  }

  shutterAudio.currentTime = 0;
  shutterAudio.play().catch(() => {});
}
