/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#FAF7F0',
          DEFAULT: '#F5F0E8',
          card: '#FEFCF8',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#6B6B6B',
          line: '#2A2A2A',
        },
        accent: {
          red: '#8B0000',
          hover: '#333333',
        },
        walnut: {
          bg: '#2C1E14',
          'bg-light': '#3A2A1E',
          card: '#3E2D20',
          'card-light': '#4A372A',
          text: '#F0E6D8',
          'text-secondary': '#B8A898',
          line: '#8B7355',
          accent: '#C4836A',
        },
      },
      fontFamily: {
        'masthead': ['"Playfair Display"', 'Georgia', 'serif'],
        'gothic': ['"UnifrakturMaguntia"', '"Playfair Display"', 'Georgia', 'serif'],
        'handwriting': ['"Dancing Script"', 'cursive'],
        'serif-cn': ['"Noto Serif SC"', '"Playfair Display"', 'Georgia', 'serif'],
        'sans-cn': ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'newspaper': '0.15em',
      },
      animation: {
        'ink-bleed': 'inkBleed 0.3s ease-out forwards',
        'stamp': 'stampDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        inkBleed: {
          '0%': { textShadow: '0 0 0px rgba(26,26,26,0)' },
          '100%': { textShadow: '0 0 8px rgba(26,26,26,0.15), 0 0 16px rgba(26,26,26,0.05)' },
        },
        stampDown: {
          '0%': { transform: 'scale(1.5) rotate(-15deg)', opacity: '0' },
          '60%': { transform: 'scale(0.95) rotate(2deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
