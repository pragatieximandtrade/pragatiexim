import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactForm } from '../components/forms/ContactForm';
import { COMPANY_DATA } from '../data/company';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/seo';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Contact & Enquiries', path: '/contact' }];
  const schemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' }
    ])
  ];

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Contact Pragati Exim | Spice Manufacturer & Exporter Surat Gujarat"
        description="Get in touch with Pragati Exim in Surat, Gujarat, India. Phone: +91 7990966295, Email: contact@pragatiexim.com. Pan-India domestic supply & export enquiries."
        canonicalPath="/contact"
        schema={schemas}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Commercial Desk & Enquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Let’s Talk About Your Spice Requirement
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Connect directly with our team in Surat, Gujarat for product specifications, custom formulation trials, bulk quotations, and export orders.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle space-y-6">
              <h2 className="text-xl font-serif font-bold text-brand-charcoal-900 pb-3 border-b border-brand-ivory-200">
                Pragati Exim Headquarters
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-brand-charcoal-700">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-brand-charcoal-400 block">
                      Operating Location
                    </span>
                    <p className="font-bold text-brand-charcoal-900 text-sm">
                      Pragati Exim
                    </p>
                    <p className="text-brand-charcoal-600">
                      Surat, Gujarat, India
                    </p>
                    <span className="text-xs text-brand-green-800 font-medium mt-0.5 block">
                      Pan-India Dispatch & Global Export
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-brand-charcoal-400 block">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_DATA.contact.phone}`}
                      className="font-bold text-brand-charcoal-900 text-sm hover:text-brand-green-800 transition"
                    >
                      {COMPANY_DATA.contact.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-brand-charcoal-500">
                      Working Hours: 9:00 AM – 8:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-brand-charcoal-400 block">
                      Official Email Address
                    </span>
                    <a
                      href={`mailto:${COMPANY_DATA.contact.email}`}
                      className="font-bold text-brand-charcoal-900 hover:text-brand-green-800 transition text-sm"
                    >
                      {COMPANY_DATA.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4 border-t border-brand-ivory-200">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start a WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Quick MOQ & Commercial reminder */}
            <div className="bg-brand-green-950 text-white rounded-2xl p-6 border border-brand-green-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-gold-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Commercial Quick Reference</span>
              </div>
              <p className="text-xs text-brand-charcoal-300">
                Standard powders MOQ: <strong>5 kg</strong> • Custom blends MOQ: <strong>10 kg</strong> • Dispatch: <strong>Pan-India</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-premium space-y-4">
            <div className="pb-3 border-b border-brand-ivory-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-700">
                Online Message
              </span>
              <h3 className="font-serif font-bold text-2xl text-brand-charcoal-900">
                Send a Direct Message
              </h3>
              <p className="text-xs text-brand-charcoal-500 mt-1">
                Fill in your enquiry details below and our commercial desk will reply promptly.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
