import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Leaf, FileCheck, Award, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const QualityBanner: React.FC = () => {
  const qualityItems = [
    {
      icon: ShieldCheck,
      title: 'Processed in FSSAI-Licensed Facility',
      description: 'Milled and handled under regulated food safety and hygienic facility protocols.'
    },
    {
      icon: Cpu,
      title: 'Hygienic Handling & Controlled Grinding',
      description: 'Thermal-managed grinding preserves delicate volatile essential oils and aroma compounds.'
    },
    {
      icon: Leaf,
      title: 'No Artificial Colouring or Adulteration',
      description: '100% natural, unadulterated ground spices with zero synthetic additives, fillers, or dyes.'
    },
    {
      icon: FileCheck,
      title: 'Batch-Wise Production & Traceability',
      description: 'Complete lot tracking from raw material cleaning through sealed barrier packaging.'
    },
    {
      icon: Award,
      title: 'Certificate of Analysis (COA) on Request',
      description: 'Batch-specific analytical testing reports provided with orders for quality verification.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-green-950 text-white relative overflow-hidden">
      {/* Subtle Pattern & Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Quality Assurance"
          title="Quality You Can Build Your Production Around"
          subtitle="Strict adherence to purity, controlled grinding, and analytical verification so your food operations run without batch variations."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
          {qualityItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-brand-green-900/60 border border-brand-green-800/90 backdrop-blur-sm hover:border-brand-gold-500/40 hover:bg-brand-green-900/90 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green-800 border border-brand-green-700 text-brand-gold-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Specification & COA Callout */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-gold-500/20 to-brand-green-900/80 border border-brand-gold-500/40 backdrop-blur-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-400">
                Technical Verification
              </span>
              <h3 className="text-lg font-serif font-bold text-white">
                Need a COA with Your Consignment?
              </h3>
              <p className="text-xs text-brand-charcoal-300 leading-relaxed">
                We provide batch analytical parameters including moisture, mesh granulation, and sensory attributes for food manufacturing compliance.
              </p>
            </div>

            <Link
              to="/quality"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-300 hover:text-white transition-colors"
            >
              <span>Explore Our Quality Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
