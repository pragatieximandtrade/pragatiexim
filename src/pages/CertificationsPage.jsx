import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { CERTIFICATIONS } from '../data/certifications';

export default function CertificationsPage({ onOpenRfq }) {
  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="Quality Certifications & Food Safety Standards"
        description="Pragati Exim maintains verified quality compliance including GMP, ISO 22000, HACCP, Halal India, FSSAI, Star-K Kosher, and USDA Organic for herbal export ingredients."
        canonicalUrl="/certifications"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Certifications", url: "/certifications" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Quality & Regulatory Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            Our Certifications & Standards
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            To provide global nutraceutical formulators, pharmaceutical buyers, and dietary supplement manufacturers with complete assurance, our botanical ingredient processing and supply chains adhere to recognized international quality frameworks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 flex flex-col justify-between group hover:border-forest-600"
            >
              <div className="space-y-4">
                {/* Logo Container */}
                <div className="w-28 h-28 mx-auto p-3 rounded-2xl bg-forest-50/50 border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert.badge}
                    alt={`${cert.name} - Pragati Exim`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="text-center space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-700 block">
                    {cert.category}
                  </span>
                  <h2 className="font-serif font-bold text-xl text-forest-950">
                    {cert.name}
                  </h2>
                  <div className="text-xs text-gray-500 font-medium">
                    {cert.fullName}
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed text-center">
                  {cert.description}
                </p>

                <div className="bg-[#F9F8F3] p-3.5 rounded-xl border border-gray-200 text-xs space-y-1">
                  <div className="font-bold text-gray-800 text-[11px]">Audit & Quality Scope:</div>
                  <div className="text-gray-600 text-[11px] leading-relaxed">{cert.scope}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 text-center">
                <button
                  onClick={() => onOpenRfq ? onOpenRfq(null, 'quote') : null}
                  className="text-xs font-bold text-forest-800 hover:text-forest-950 inline-flex items-center gap-1.5 transition"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-500" /> Request Audit Documentation →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Principles */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Batch Verification Protocols
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Rigorous Analytical Testing & Documentation
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every export consignment is backed by verified analytical reports issued to match buyer destination market regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              { title: "HPLC & UV Assay", desc: "Chromatographic quantification of active phytochemical marker compounds." },
              { title: "Heavy Metal Screen", desc: "ICP-MS testing ensuring lead, arsenic, cadmium, and mercury comply with limits." },
              { title: "Microbiological Control", desc: "Total plate count, yeast & mold, Salmonella, E. coli, and coliform testing." },
              { title: "Pesticide Residue Screen", desc: "Multi-residue screening in compliance with international food safety thresholds." }
            ].map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F9F8F3] border border-gray-200 space-y-1.5">
                <div className="font-bold text-xs text-forest-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {p.title}
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-forest-800">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Need Batch Documentation for Your QA Team?
          </h2>
          <p className="text-forest-200 text-xs sm:text-sm max-w-xl mx-auto">
            Contact our export technical desk to receive sample Certificates of Analysis, Technical Data Sheets, and specification sheets.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenRfq ? onOpenRfq(null, 'quote') : null}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-forest-950 font-extrabold rounded-xl text-sm transition shadow-lg inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4 fill-forest-950" /> Connect with Technical Export Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
