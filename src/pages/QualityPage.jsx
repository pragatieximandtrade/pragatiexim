import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Send, Box } from 'lucide-react';
import CertificationsStrip from '../components/CertificationsStrip';

export default function QualityPage({ onOpenRfq }) {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="bg-forest-950 text-white p-8 sm:p-14 rounded-3xl border border-forest-800 space-y-4 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-forest-800 text-bronze-300 text-xs font-bold rounded-full">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> GLOBAL COMPLIANCE & QUALITY DESK
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-100">
          Quality-Focused Botanical Ingredient Supply
        </h1>
        <p className="text-forest-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          At Pragati Exim, quality control governs every step of our export process—from raw material species identification to analytical testing, international certification compliance, and batch documentation.
        </p>
      </div>

      {/* Official Certifications Banner */}
      <div className="bg-forest-900 text-white p-8 sm:p-10 rounded-3xl border border-forest-800 shadow-lg space-y-6">
        <CertificationsStrip title="GLOBAL COMPLIANCE & VERIFIED CERTIFICATIONS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-200 pt-4 border-t border-forest-800">
          <div className="p-5 bg-forest-950 rounded-2xl border border-amber-500/30 space-y-2">
            <h4 className="font-bold text-amber-300 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" /> Herbal Powders (USDA Organic Certified)
            </h4>
            <p className="text-forest-200 leading-relaxed">
              Our complete Herbal Powders range (Organic Moringa, Shatavari, Turmeric, Ashwagandha, Psyllium Husk, Ceylon Cinnamon, Ginger, Garlic) is <strong>USDA Organic Certified</strong> with full NOP transaction documentation.
            </p>
          </div>

          <div className="p-5 bg-forest-950 rounded-2xl border border-emerald-500/30 space-y-2">
            <h4 className="font-bold text-emerald-300 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Botanical Extracts (Standardized Phytochemicals)
            </h4>
            <p className="text-forest-200 leading-relaxed">
              Our Phytochemical Botanical Extracts are processed under <strong>ISO 22000</strong>, <strong>GMP Quality</strong>, <strong>HACCP</strong>, <strong>Halal India</strong>, <strong>Star-K Kosher</strong>, and <strong>FSSAI</strong> international parameters.
            </p>
          </div>
        </div>
      </div>

      {/* Pillars of Quality */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Botanical Identity Verification",
            desc: "Authenticity testing of plant species (HPLC / HPTLC / Macroscopic verification) to ensure zero species substitution."
          },
          {
            title: "Analytical Assay Quantification",
            desc: "Standardized active phytochemical marker testing (e.g. 97% Berberine HCl, 95% Curcumin, 50% EGCG)."
          },
          {
            title: "Safety & Contaminant Screens",
            desc: "Heavy metal screening (Pb, As, Cd, Hg), microbiological testing, pesticide residue verification, and loss on drying controls."
          }
        ].map((p, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-900 text-bronze-400 flex items-center justify-center font-bold">
              {i + 1}
            </div>
            <h3 className="font-serif font-bold text-xl text-forest-950">{p.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* COA Request Section */}
      <div className="bg-gradient-to-r from-forest-900 to-forest-950 text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-forest-800">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-white">Need a Sample Certificate of Analysis (COA)?</h3>
          <p className="text-forest-200 text-sm">
            Request technical data sheets, HPLC chromatograms, or batch specifications for your QA evaluation.
          </p>
        </div>
        <button
          onClick={() => onOpenRfq(null, 'spec')}
          className="px-8 py-3.5 bg-bronze-400 text-forest-950 font-extrabold rounded-xl shadow shrink-0 text-sm"
        >
          Request Specification & COA
        </button>
      </div>

    </div>
  );
}
