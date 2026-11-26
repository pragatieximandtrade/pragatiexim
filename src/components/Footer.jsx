import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Footer({ onOpenRfq }) {
  return (
    <footer className="bg-forest-950 text-ivory-200 pt-16 pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800/80">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-forest-950 font-serif font-black text-2xl shadow-md">
                P
              </div>
              <div>
                <div className="font-serif font-bold text-2xl text-white">PRAGATI EXIM</div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                  Herbal & Botanical Ingredients Export
                </div>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Pragati Exim & Trade is an India-based B2B export company supplying USDA Organic Certified herbal powders and standardized botanical extracts to international buyers, nutraceutical manufacturers, and ingredient distributors worldwide.
            </p>

            <div className="space-y-2 pt-2 text-sm text-ivory-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY.email.primary}`} className="hover:text-amber-300 transition">
                  {COMPANY.email.primary}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY.phone.india}`} className="hover:text-amber-300 transition block">
                    India: {COMPANY.phone.indiaDisplay}
                  </a>
                  <a href={`tel:${COMPANY.phone.usa}`} className="hover:text-amber-300 transition block text-xs text-emerald-400">
                    USA: {COMPANY.phone.usaDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Herbal Powders */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-forest-800 pb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Herbal Powders
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-300">
              <li><Link to="/herbal-powders/moringa-powder" className="hover:text-amber-300 transition">Moringa Powder</Link></li>
              <li><Link to="/herbal-powders/shatavari-powder" className="hover:text-amber-300 transition">Shatavari Powder</Link></li>
              <li><Link to="/herbal-powders/turmeric-powder" className="hover:text-amber-300 transition">Turmeric Powder</Link></li>
              <li><Link to="/herbal-powders/ashwagandha-powder" className="hover:text-amber-300 transition">Ashwagandha Powder</Link></li>
              <li><Link to="/herbal-powders/psyllium-husk" className="hover:text-amber-300 transition">Psyllium Husk</Link></li>
              <li><Link to="/herbal-powders/ceylon-cinnamon-powder" className="hover:text-amber-300 transition">Ceylon Cinnamon</Link></li>
              <li><Link to="/herbal-powders/ginger-powder" className="hover:text-amber-300 transition">Ginger Powder</Link></li>
              <li><Link to="/herbal-powders/garlic-powder" className="hover:text-amber-300 transition">Garlic Powder</Link></li>
              <li className="pt-1">
                <Link to="/herbal-powders" className="text-amber-400 font-semibold hover:underline text-xs flex items-center gap-1">
                  View All Herbal Powders <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Botanical Extracts */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-forest-800 pb-2">
              Botanical Extracts
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-300">
              <li><Link to="/botanical-extracts/turmeric-curcumin" className="hover:text-emerald-300 transition">Turmeric Extract (95% Curcumin)</Link></li>
              <li><Link to="/botanical-extracts/berberine-berberis-aristata" className="hover:text-emerald-300 transition">Berberine 97% HPLC</Link></li>
              <li><Link to="/botanical-extracts/gymnema" className="hover:text-emerald-300 transition">Gymnema Extract (75% GV)</Link></li>
              <li><Link to="/botanical-extracts/ginkgo-extract" className="hover:text-emerald-300 transition">Ginkgo Biloba Extract</Link></li>
              <li><Link to="/botanical-extracts/bacopa" className="hover:text-emerald-300 transition">Bacopa Monnieri 50%</Link></li>
              <li><Link to="/botanical-extracts/resveratrol" className="hover:text-emerald-300 transition">Resveratrol 98%</Link></li>
              <li><Link to="/botanical-extracts/astaxanthin" className="hover:text-emerald-300 transition">Astaxanthin Carotenoid</Link></li>
              <li className="pt-1">
                <Link to="/botanical-extracts" className="text-emerald-400 font-semibold hover:underline text-xs flex items-center gap-1">
                  View All 42 Extracts <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-forest-800 pb-2">
              Company & B2B
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-amber-300 transition">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-amber-300 transition">About Pragati Exim</Link></li>
              <li><Link to="/certifications" className="hover:text-amber-300 transition">Quality & Certifications</Link></li>
              <li><Link to="/export-markets" className="hover:text-amber-300 transition">Export Logistics & Reach</Link></li>
              <li><Link to="/resources" className="hover:text-amber-300 transition">B2B Sourcing Guides</Link></li>
              <li><Link to="/contact-us" className="hover:text-amber-300 transition">Contact Export Desk</Link></li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenRfq(null, 'quote')}
                  className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-forest-950 font-bold text-xs rounded-lg text-center transition"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="space-y-1 text-center md:text-left max-w-3xl">
            <p>
              © {new Date().getFullYear()} <strong>Pragati Exim & Trade</strong>. All rights reserved. Surat, Gujarat, India.
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              <strong>B2B Regulatory Disclaimer:</strong> Pragati Exim & Trade is a bulk botanical raw material exporter. Statements on this website are provided for business-to-business ingredient evaluation only and have not been evaluated by the FDA or other regulatory authorities. Products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-ivory-100 transition">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-ivory-100 transition">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
