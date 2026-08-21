import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Sparkles, Send } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import { PRODUCT_CATEGORIES } from '../../data/products';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'About Us', path: '/about' },
    { name: 'Quality', path: '/quality' },
    { name: 'Customisation', path: '/customisation' },
    { name: 'Packaging', path: '/packaging' },
    { name: 'Industries', path: '/industries' },
    { name: 'Export', path: '/export' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top utility contact strip */}
      <div className="bg-brand-green-950 text-brand-charcoal-200 text-xs py-1.5 px-4 sm:px-8 border-b border-brand-green-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-brand-gold-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Surat, Gujarat, India • Pan-India Domestic & Global Export</span>
            </span>
            <span className="text-brand-charcoal-400">|</span>
            <span className="text-brand-charcoal-300">
              MOQ from 5 kg (Standard) / 10 kg (Custom)
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_DATA.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-brand-gold-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-gold-400" />
              <span>{COMPANY_DATA.contact.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DATA.contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand-gold-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-gold-400" />
              <span>{COMPANY_DATA.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-brand-ivory-300 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-brand-ivory-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Component */}
          <Logo variant="light" size="md" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-sm font-medium text-brand-charcoal-700">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative shrink-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className={`px-2 xl:px-3 py-2 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap ${
                        isActive || location.pathname.startsWith('/products')
                          ? 'text-brand-green-900 font-semibold bg-brand-green-50'
                          : 'hover:text-brand-green-800 hover:bg-brand-ivory-100'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-brand-green-900' : 'opacity-70'}`} />
                    </Link>

                    {/* Dropdown Menu Container with invisible hover bridge */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50">
                        <div className="w-80 bg-white rounded-xl shadow-premium-lg border border-brand-ivory-300 p-3 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-brand-charcoal-400 px-3 py-1.5">
                            Product Catalogue
                          </div>
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${cat.id}`}
                              className="block p-2.5 rounded-lg hover:bg-brand-ivory-100 transition-colors group"
                            >
                              <div className="font-semibold text-xs text-brand-charcoal-900 group-hover:text-brand-green-800">
                                {cat.name}
                              </div>
                              <div className="text-[11px] text-brand-charcoal-500 line-clamp-1 mt-0.5">
                                {cat.tagline}
                              </div>
                            </Link>
                          ))}
                          <div className="pt-2 mt-2 border-t border-brand-ivory-200 px-3">
                            <Link
                              to="/products"
                              className="text-xs font-semibold text-brand-green-800 hover:text-brand-green-900 flex items-center justify-between"
                            >
                              <span>View All 17 Products</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2 xl:px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-brand-green-900 font-semibold bg-brand-green-50'
                      : 'hover:text-brand-green-800 hover:bg-brand-ivory-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 xl:px-4 py-2.5 rounded-lg text-xs xl:text-sm font-semibold bg-brand-green-800 hover:bg-brand-green-700 text-white shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-300" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-charcoal-800 hover:bg-brand-ivory-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-ivory-50 border-b border-brand-ivory-300 shadow-premium animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-green-800 text-white font-semibold'
                      : 'text-brand-charcoal-800 hover:bg-brand-ivory-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-brand-ivory-300 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-lg text-sm font-semibold bg-brand-green-800 text-white flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-brand-gold-300" />
                <span>Request a Quote</span>
              </button>

              <div className="pt-2 text-xs text-brand-charcoal-600 space-y-1 text-center">
                <p>📍 Surat, Gujarat, India</p>
                <p>📞 +91 7990966295 • contact@pragatiexim.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
