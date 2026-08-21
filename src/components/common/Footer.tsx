import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import { generateWhatsAppUrl } from '../../utils/whatsapp';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-950 text-white border-t border-brand-green-900/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Strip */}
        <div className="bg-brand-green-900/80 rounded-2xl p-6 sm:p-8 border border-brand-green-800 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Pure Spice Powders & Custom Blends</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ready to Discuss Spice Requirements for Your Business?
            </h3>
            <p className="text-brand-charcoal-300 text-xs sm:text-sm max-w-xl">
              From 5 kg standard pure powders to custom formulations & bulk export consignments, connect with our Surat commercial desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              to="/contact"
              className="py-3 px-5 rounded-lg bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Request Quotation</span>
            </Link>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-green-900">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-brand-charcoal-300 text-sm leading-relaxed max-w-sm">
              Manufactures and supplies pure ground spices and customized spice blends for domestic Pan-India supply and international export markets, with focus on batch-to-batch consistency in aroma, colour, and flavour.
            </p>

            <div className="pt-2 text-xs text-brand-charcoal-300 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <span>Operating Base: Surat, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <span>MOQ: 5 kg (Standard) / 10 kg (Custom)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-brand-charcoal-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Spice Catalogue</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Pragati Exim</Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white transition-colors">Quality Standards</Link>
              </li>
              <li>
                <Link to="/customisation" className="hover:text-white transition-colors">Custom Formulations</Link>
              </li>
              <li>
                <Link to="/packaging" className="hover:text-white transition-colors">Packaging Formats</Link>
              </li>
              <li>
                <Link to="/export" className="hover:text-white transition-colors">Export Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Spice Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Spice Categories
            </h4>
            <ul className="space-y-2 text-sm text-brand-charcoal-300">
              <li>
                <Link to="/products?category=core-industrial" className="hover:text-white transition-colors">
                  Core Industrial Spice Powders
                </Link>
              </li>
              <li>
                <Link to="/products?category=premium-functional" className="hover:text-white transition-colors">
                  Premium & Functional Spices
                </Link>
              </li>
              <li>
                <Link to="/products?category=blended-masalas" className="hover:text-white transition-colors">
                  Blended & Application Spices
                </Link>
              </li>
              <li>
                <Link to="/products/turmeric-powder" className="hover:text-white transition-colors">
                  Turmeric Powder
                </Link>
              </li>
              <li>
                <Link to="/products/red-chilli-powder" className="hover:text-white transition-colors">
                  Red Chilli Powder
                </Link>
              </li>
              <li>
                <Link to="/products/garam-masala" className="hover:text-white transition-colors">
                  Garam Masala Blend
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Enquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-brand-charcoal-300">
              <a
                href={`tel:${COMPANY_DATA.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <span>{COMPANY_DATA.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <span>{COMPANY_DATA.contact.email}</span>
              </a>

              <div className="pt-2 text-[11px] text-brand-charcoal-400 leading-normal">
                Working Hours: 9:00 AM – 8:00 PM IST<br />
                Surat, Gujarat, India • Commercial Office & Processing Facility
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-charcoal-400 gap-4">
          <p>© {new Date().getFullYear()} Pragati Exim. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-brand-gold-400 transition-colors">Contact Us</Link>
            <Link to="/export" className="hover:text-brand-gold-400 transition-colors">Export Desk</Link>
            <Link to="/products" className="hover:text-brand-gold-400 transition-colors">Product Catalogue</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
