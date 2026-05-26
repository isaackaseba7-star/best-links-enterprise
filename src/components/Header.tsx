import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50 -mt-8 md:-mt-12">
          <img 
            src="https://i.ibb.co/LXCyTZLw/BEST-LINKS-ENTERP-removebg-preview-1.png" 
            alt="Best Links Enterprise" 
            className="h-32 md:h-40 lg:h-48 w-auto object-contain transform group-hover:scale-105 transition-transform drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-accent-gold font-medium text-xs transition-colors uppercase tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-accent-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call CTA Desktop */}
        <div className="hidden md:flex items-center">
          <a href="tel:0978860008" className="flex items-center gap-2 bg-gradient-to-r from-accent-gold/10 to-accent-orange/10 hover:from-accent-gold/20 hover:to-accent-orange/20 border border-accent-gold/30 hover:border-accent-gold/60 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] group relative overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]"></span>
            <Phone className="w-4 h-4 text-accent-gold fill-accent-gold/20" />
            <span className="tracking-wide">097 8860008</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-primary-navy shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] border-t border-white/10' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-sm font-medium hover:text-accent-gold transition-colors py-2 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:0978860008" className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-accent-gold to-accent-orange text-white py-3 rounded-full font-bold relative overflow-hidden group shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]"></span>
            <Phone className="w-5 h-5 fill-current" />
            <span className="tracking-wide">Call: 097 8860008</span>
          </a>
        </div>
      </div>
    </header>
  );
}
