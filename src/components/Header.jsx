import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, Mail, ChevronDown, 
  Menu, X, Send, Award, ArrowRight, Package, Sparkles, Leaf, Globe2
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { HERBAL_POWDERS, BOTANICAL_EXTRACTS } from '../data/products';

export default function Header({ onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-xs xl:text-[13px] font-bold tracking-wide transition-colors py-2 whitespace-nowrap inline-block ${
      isActive ? 'text-amber-400 border-b-2 border-amber-400' : 'text-ivory-200 hover:text-amber-300'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full shadow-premium-lg">
      
      {/* 1. Top Bar */}
      <div className="bg-forest-950 text-ivory-200 text-xs py-2 px-4 border-b border-forest-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-3 flex-wrap justify-center text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> Herbal Powders: USDA Organic Certified
            </span>
            <span className="hidden md:inline text-forest-700">•</span>
            <span className="flex items-center gap-1 text-ivory-200 font-medium whitespace-nowrap">
              <Package className="w-3.5 h-3.5 text-emerald-400" /> MOQ: <strong className="text-amber-300 font-bold">50 KG</strong>
            </span>
            <span className="hidden lg:inline text-forest-700">•</span>
            <span className="hidden lg:flex items-center gap-1 text-emerald-300 font-semibold whitespace-nowrap">
              <Globe2 className="w-3.5 h-3.5" /> Direct Export from India to Global B2B Buyers
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a href={`tel:${COMPANY.phone.india}`} className="hover:text-amber-300 transition flex items-center gap-1 whitespace-nowrap">
              <Phone className="w-3 h-3 text-amber-400" /> India: {COMPANY.phone.indiaDisplay}
            </a>
            <a href={`mailto:${COMPANY.email.primary}`} className="hover:text-amber-300 transition flex items-center gap-1 hidden md:flex whitespace-nowrap">
              <Mail className="w-3 h-3 text-amber-400" /> {COMPANY.email.primary}
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-forest-900/95 backdrop-blur-md text-white border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-forest-950 font-serif font-black text-2xl shadow-md group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <div className="font-serif font-extrabold text-xl tracking-tight text-white group-hover:text-amber-300 transition whitespace-nowrap">
                PRAGATI EXIM
              </div>
              <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold whitespace-nowrap">
                Herbal Powders & Botanical Extracts
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            <NavLink to="/" className={navLinkClass}>HOME</NavLink>
            <NavLink to="/about-us" className={navLinkClass}>ABOUT US</NavLink>

            {/* Combined PRODUCTS Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className="flex items-center gap-1 text-xs xl:text-[13px] font-bold tracking-wide text-ivory-200 hover:text-amber-300 transition py-2 whitespace-nowrap"
              >
                PRODUCTS <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform shrink-0 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-forest-950 text-white rounded-3xl shadow-2xl border border-forest-800 p-6 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 space-y-4"
                >
                  <div className="grid grid-cols-2 gap-6">
                    
                    {/* Left Column: Herbal Powders */}
                    <div className="space-y-3 bg-forest-900/60 p-4 rounded-2xl border border-forest-800/80">
                      <div className="flex items-center justify-between border-b border-forest-800 pb-2">
                        <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                          <Leaf className="w-4 h-4 text-emerald-400" /> Herbal Powders
                        </div>
                        <span className="text-[9px] bg-amber-400 text-forest-950 font-black px-2 py-0.5 rounded">
                          USDA ORGANIC
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-1 max-h-[320px] overflow-y-auto pr-1 no-scrollbar scrollbar-none">
                        {HERBAL_POWDERS.map((p) => (
                          <Link
                            key={p.id}
                            to={`/herbal-powders/${p.slug}`}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="p-1.5 rounded-lg hover:bg-forest-800/90 transition flex items-center justify-between group"
                          >
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-amber-300 whitespace-nowrap">
                                {p.name}
                              </div>
                              <div className="text-[10px] text-forest-300 italic whitespace-nowrap">
                                {p.botanicalName}
                              </div>
                            </div>
                            <span className="text-[9px] bg-forest-950 text-forest-300 px-1.5 py-0.5 rounded">
                              {p.filterTag}
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-forest-800">
                        <Link
                          to="/herbal-powders"
                          onClick={() => setProductsDropdownOpen(false)}
                          className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-forest-950 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition"
                        >
                          View All 8 Herbal Powders <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Botanical Extracts */}
                    <div className="space-y-3 bg-forest-900/60 p-4 rounded-2xl border border-forest-800/80 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-forest-800 pb-2">
                          <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
                            <Sparkles className="w-4 h-4 text-emerald-400" /> Botanical Extracts
                          </div>
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/40">
                            42 EXTRACTS
                          </span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <Link
                            to="/botanical-extracts?range=Registered+%2F+Clinically+Studied"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="block p-2 rounded-xl bg-forest-950/60 hover:bg-forest-800 transition group border border-forest-800/50"
                          >
                            <div className="font-bold text-white group-hover:text-emerald-300">
                              1. Registered & Clinically Studied
                            </div>
                            <div className="text-[11px] text-forest-300 line-clamp-1">
                              Turmeric (95% Curcumin USP), Kalmegh, Gymnema, Ginkgo, Ginseng & more.
                            </div>
                          </Link>

                          <Link
                            to="/botanical-extracts?range=Indigenous+Range"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="block p-2 rounded-xl bg-forest-950/60 hover:bg-forest-800 transition group border border-forest-800/50"
                          >
                            <div className="font-bold text-white group-hover:text-emerald-300">
                              2. Indigenous Extract Range
                            </div>
                            <div className="text-[11px] text-forest-300 line-clamp-1">
                              Berberine 97% HPLC, Bacopa 50%, Garcinia 60%, Banaba, Amla & 20 extracts.
                            </div>
                          </Link>

                          <Link
                            to="/botanical-extracts?range=Global+Range"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="block p-2 rounded-xl bg-forest-950/60 hover:bg-forest-800 transition group border border-forest-800/50"
                          >
                            <div className="font-bold text-white group-hover:text-emerald-300">
                              3. Global Extract Range
                            </div>
                            <div className="text-[11px] text-forest-300 line-clamp-1">
                              Cranberry, Grapeseed 95% OPC, Astaxanthin, Resveratrol 98% & 14 extracts.
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-forest-800">
                        <Link
                          to="/botanical-extracts"
                          onClick={() => setProductsDropdownOpen(false)}
                          className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-forest-950 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition"
                        >
                          Explore Complete 42+ Extract Catalog <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <NavLink to="/certifications" className={navLinkClass}>CERTIFICATIONS</NavLink>
            <NavLink to="/export-markets" className={navLinkClass}>GLOBAL REACH</NavLink>
            <NavLink to="/resources" className={navLinkClass}>RESOURCES</NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>CONTACT US</NavLink>
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenRfq(null, 'quote')}
              className="px-4 xl:px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-forest-950 text-xs xl:text-sm font-extrabold rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-1.5 shrink-0 whitespace-nowrap"
            >
              <Send className="w-4 h-4 fill-forest-950" /> REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-forest-950 text-white border border-forest-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950 text-white border-b border-forest-800 px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto no-scrollbar scrollbar-none">
          <nav className="flex flex-col space-y-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm text-white hover:text-amber-300 whitespace-nowrap">HOME</Link>
            <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm text-white hover:text-amber-300 whitespace-nowrap">ABOUT US</Link>
            
            {/* Mobile PRODUCTS Accordion Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between font-bold text-sm text-white hover:text-amber-300 py-1"
              >
                <span>PRODUCTS</span>
                <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="space-y-3 pl-2 pt-1 animate-in fade-in duration-200">
                  
                  {/* Herbal Powders Section */}
                  <div className="space-y-2 pl-3 border-l-2 border-amber-500/40 bg-forest-900/40 p-2.5 rounded-xl">
                    <div className="flex items-center justify-between text-xs font-bold uppercase text-amber-400">
                      <span className="flex items-center gap-1">
                        <Leaf className="w-3.5 h-3.5" /> Herbal Powders
                      </span>
                      <span className="text-[9px] bg-amber-400 text-forest-950 font-black px-1.5 py-0.2 rounded">
                        USDA ORGANIC
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-1 pt-1 max-h-48 overflow-y-auto no-scrollbar scrollbar-none">
                      {HERBAL_POWDERS.map((p) => (
                        <Link
                          key={p.id}
                          to={`/herbal-powders/${p.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs text-ivory-200 hover:text-white py-1 block"
                        >
                          • {p.name}
                        </Link>
                      ))}
                    </div>

                    <Link
                      to="/herbal-powders"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[11px] text-amber-300 font-bold hover:underline pt-1"
                    >
                      Browse All 8 Herbal Powders →
                    </Link>
                  </div>

                  {/* Botanical Extracts Section */}
                  <div className="space-y-2 pl-3 border-l-2 border-emerald-500/40 bg-forest-900/40 p-2.5 rounded-xl">
                    <div className="flex items-center justify-between text-xs font-bold uppercase text-emerald-400">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Botanical Extracts
                      </span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.2 rounded">
                        42 EXTRACTS
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-forest-200 pt-1">
                      <Link
                        to="/botanical-extracts?range=Registered+%2F+Clinically+Studied"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-ivory-200 hover:text-white"
                      >
                        • 1. Registered & Clinically Studied Extracts
                      </Link>
                      <Link
                        to="/botanical-extracts?range=Indigenous+Range"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-ivory-200 hover:text-white"
                      >
                        • 2. Indigenous Extract Range
                      </Link>
                      <Link
                        to="/botanical-extracts?range=Global+Range"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-ivory-200 hover:text-white"
                      >
                        • 3. Global Extract Range
                      </Link>
                    </div>

                    <Link
                      to="/botanical-extracts"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[11px] text-emerald-300 font-bold hover:underline pt-1"
                    >
                      Browse All 42 Standardized Extracts →
                    </Link>
                  </div>

                </div>
              )}
            </div>

            <Link to="/certifications" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm text-white whitespace-nowrap">CERTIFICATIONS</Link>
            <Link to="/export-markets" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm text-white whitespace-nowrap">GLOBAL REACH / EXPORT</Link>
            <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm text-white whitespace-nowrap">RESOURCES / GUIDES</Link>
            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm text-white whitespace-nowrap">CONTACT US</Link>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRfq(null, 'quote');
            }}
            className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-forest-950 font-extrabold rounded-xl text-center text-xs flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Send className="w-4 h-4 fill-forest-950" /> REQUEST A BULK QUOTE
          </button>
        </div>
      )}

    </header>
  );
}
