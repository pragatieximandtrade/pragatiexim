import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data/certifications';

export default function CertificationsStrip({ title = "Our Certifications & Quality Compliance", showHeader = true, showCta = true }) {
  return (
    <section className="w-full py-14 bg-[#F9F8F3] border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800 bg-forest-100 px-3.5 py-1 rounded-full border border-forest-200">
              Verified Compliance Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950 tracking-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-sm">
              Our botanical ingredients are processed and managed under recognized international food safety, quality, and organic standards.
            </p>
          </div>
        )}

        {/* 7 Certification Logos Row */}
        <div className="w-full overflow-x-auto custom-scrollbar py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:shadow-md hover:border-forest-600 transition-all duration-300 w-full group text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center p-2">
                  <img
                    src={cert.badge}
                    alt={`${cert.name} - Pragati Exim`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="font-bold text-xs text-forest-950 mt-2 line-clamp-1">
                  {cert.name}
                </div>
                <div className="text-[10px] text-gray-500 line-clamp-1">
                  {cert.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Certifications page */}
        {showCta && (
          <div className="text-center pt-2">
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-900 hover:bg-forest-950 text-amber-300 font-bold text-xs tracking-wide shadow transition"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> View Detailed Certifications & Standards <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
