import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import { QuoteRequestForm } from '../forms/QuoteRequestForm';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

export const HomeCTA: React.FC = () => {
  return (
    <section id="quote-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-50 border border-brand-green-200 text-brand-green-800">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>Direct Commercial Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal-900 leading-tight">
              Let’s Talk About Your Spice Requirement
            </h2>

            <p className="text-sm sm:text-base text-brand-charcoal-600 leading-relaxed">
              Connect directly with our manufacturing and export desk in Surat, Gujarat. Whether you need standard spice powder specs, bespoke blend trials, or container-load export rates, our team provides swift commercial support.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${COMPANY_DATA.contact.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-brand-ivory-50 border border-brand-ivory-300 hover:border-brand-green-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green-100 text-brand-green-800 flex items-center justify-center shrink-0 group-hover:bg-brand-green-800 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-charcoal-400 block">
                    Direct Phone Support
                  </span>
                  <span className="text-sm font-bold text-brand-charcoal-900 group-hover:text-brand-green-900">
                    {COMPANY_DATA.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-emerald-800 block">
                    WhatsApp Commercial Desk
                  </span>
                  <span className="text-sm font-bold text-emerald-950">
                    Chat with our team instantly
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.contact.email}`}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-brand-ivory-50 border border-brand-ivory-300 hover:border-brand-green-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green-100 text-brand-green-800 flex items-center justify-center shrink-0 group-hover:bg-brand-green-800 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-charcoal-400 block">
                    Official Enquiries
                  </span>
                  <span className="text-sm font-bold text-brand-charcoal-900 group-hover:text-brand-green-900">
                    {COMPANY_DATA.contact.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-brand-ivory-50 border border-brand-ivory-300">
                <div className="w-10 h-10 rounded-lg bg-brand-ivory-200 text-brand-charcoal-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-charcoal-400 block">
                    Operational Hub
                  </span>
                  <span className="text-sm font-bold text-brand-charcoal-900">
                    Surat, Gujarat, India (Pan-India & Global Export)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Quotation Form */}
          <div className="lg:col-span-7 bg-brand-ivory-50 rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-premium">
            <div className="mb-5 pb-3 border-b border-brand-ivory-300">
              <h3 className="font-serif font-bold text-xl text-brand-charcoal-900">
                Submit an Online Quotation Request
              </h3>
              <p className="text-xs text-brand-charcoal-500 mt-0.5">
                We respond within 24 business hours with custom pricing and specification details.
              </p>
            </div>

            <QuoteRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};
