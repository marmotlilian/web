import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: '首页', path: '/' },
  { label: '深度报道', path: '/?cat=深度报道' },
  { label: 'AI速递', path: '/?cat=AI速递' },
  { label: '美妆洞察', path: '/?cat=美妆洞察' },
  { label: '生活随笔', path: '/?cat=生活随笔' },
  { label: '摄影集', path: '/gallery' },
  { label: '更多', path: '/more' },
  { label: '关于', path: '/about' },
];

export default function Navigation() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-4 md:px-8 lg:px-16 py-3">
      <div className="max-w-6xl mx-auto">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-1 font-serif-cn text-sm tracking-newspaper">
            {navItems.map((item, i) => (
              <span key={item.path} className="flex items-center">
                {i > 0 && <span className="mx-2 text-ink-light dark:text-walnut-text-secondary select-none">·</span>}
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-accent-red dark:hover:text-walnut-accent ${
                    location.pathname === item.path ||
                    (item.path === '/' && location.pathname === '/' && !location.search)
                      ? 'text-ink dark:text-walnut-text font-semibold'
                      : 'text-ink-light dark:text-walnut-text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-fade-in">
                <input
                  type="text"
                  placeholder="搜索文章..."
                  className="bg-transparent border-b border-ink-line dark:border-walnut-line text-sm font-serif-cn px-2 py-1 outline-none text-ink dark:text-walnut-text w-48 placeholder:text-ink-light/50 dark:placeholder:text-walnut-text-secondary/50"
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X size={16} className="text-ink-light dark:text-walnut-text-secondary" />
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)}>
                <Search size={16} className="text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text transition-colors" />
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="font-serif-cn text-sm text-ink dark:text-walnut-text"
          >
            {mobileMenuOpen ? '✕ 关闭' : '☰ 导航'}
          </button>
          <ThemeToggle />
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-2 flex flex-col gap-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-cn text-sm text-ink-light dark:text-walnut-text-secondary hover:text-ink dark:hover:text-walnut-text py-1 border-b border-ink-line/10 dark:border-walnut-line/20"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto mt-3">
        <div className="newspaper-line" />
      </div>
    </nav>
  );
}
