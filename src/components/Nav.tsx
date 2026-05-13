import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (href: string) => isHome ? href : `/${href}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src="/Arclink_v3--orange_symbol_white_text%20copy.svg" alt="Arclink" className="h-8 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'PRODUCT', href: '#solution' },
            { label: 'HOW IT WORKS', href: '#how-it-works' },
            { label: 'PRICING', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map(item => (
            <a key={item.label} href={navLink(item.href)}
              className="text-[#E7E6E6]/50 hover:text-[#E7E6E6] text-xs font-mono tracking-widest transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <a href={navLink('#cta')} className="hidden md:flex items-center gap-2 bg-[#FB5005] hover:bg-[#e04504] text-white text-xs font-mono font-semibold tracking-widest px-5 py-2.5 rounded transition-colors">
          GET STARTED
        </a>
      </div>
    </nav>
  );
}
