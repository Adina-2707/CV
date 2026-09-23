import { Menu, X } from 'lucide-react';
import { navItems } from '../data/site';

type NavbarProps = {
  activeSection: string;
  mobileOpen: boolean;
  onToggleMobile: () => void;
};

export default function Navbar({ activeSection, mobileOpen, onToggleMobile }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ivory/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="text-lg font-semibold tracking-[0.25em] text-charcoal uppercase" aria-label="Go to top">
          ADINA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-200 ${
                activeSection === item.href.slice(1)
                  ? 'text-charcoal'
                  : 'text-muted hover:text-charcoal'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border bg-white/30 p-2 text-charcoal transition hover:border-gold/50 hover:text-gold md:hidden"
          onClick={onToggleMobile}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-border bg-ivory md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  activeSection === item.href.slice(1)
                    ? 'bg-ivory-soft text-charcoal'
                    : 'text-muted hover:bg-white/40 hover:text-charcoal'
                }`}
                onClick={onToggleMobile}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
