import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_DATA } from '../data/company';
import { getBreadcrumbSchema } from '../utils/seo';

interface QualityPageProps {
  onOpenQuoteModal: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenQuoteModal }) => {
  const breadcrumbs = [{ name: 'Quality Assurance', path: '/quality' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Quality Assurance', url: '/quality' }
  ]);

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Quality & Food Safety Assurance | Pragati Exim Surat"
        description="Learn how Pragati Exim ensures batch consistency, hygienic low-heat grinding, zero adulteration, batch traceability and COA verification from Surat, Gujarat."
        canonicalPath="/quality"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Food Safety & Batch Traceability
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Quality You Can Build Your Production Around
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Industrial food processing leaves no margin for raw material inconsistency. We operate with strict hygiene protocols, controlled grinding, and analytical validation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* The 5 Core Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_DATA.qualityPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-brand-ivory-300 shadow-subtle hover:shadow-premium transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-charcoal-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-ivory-200 text-[11px] font-semibold text-brand-green-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Batch Parameter</span>
              </div>
            </div>
          ))}

          {/* Analytical COA Callout Card */}
          <div className="bg-brand-green-900 text-white p-7 rounded-2xl border border-brand-green-800 shadow-subtle flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-800 border border-brand-green-700 text-brand-gold-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                Certificate of Analysis (COA)
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal-300 leading-relaxed">
                We provide batch analytical parameters including moisture content, total ash, particle granulation (mesh analysis), and sensory confirmation.
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2.5 rounded-lg bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs transition-colors text-center"
            >
              Request Sample & Spec Sheet
            </button>
          </div>
        </div>

        {/* Detailed Quality Workflow */}
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle space-y-8">
          <SectionHeading
            badge="Process Hygiene"
            title="Controlled Grinding & Handling Architecture"
            subtitle="How we safeguard natural aromatic volatiles and ensure physical purity through each processing step."
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-brand-green-100 text-brand-green-800 font-bold text-sm flex items-center justify-center">1</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Raw Material Sorting & Cleaning</h4>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Whole spices are sorted, destoned, and visually inspected to remove extraneous physical matter before entering the grinding room.
              </p>
            </div>

            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-brand-green-100 text-brand-green-800 font-bold text-sm flex items-center justify-center">2</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Controlled Thermal Milling</h4>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Milling speeds and temperature limits are monitored to prevent thermal degradation of delicate essential oils like piperine and linalool.
              </p>
            </div>

            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-brand-green-100 text-brand-green-800 font-bold text-sm flex items-center justify-center">3</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Moisture-Barrier Sealing</h4>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Finished powders are sealed directly in food-grade barrier pouches and master containers with indelible lot identification.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="bg-brand-green-950 text-white rounded-2xl p-8 sm:p-10 border border-brand-green-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">Have Specific QA / COA Requirements?</h3>
            <p className="text-xs sm:text-sm text-brand-charcoal-300 mt-1 max-w-xl">
              Our technical team in Surat will review your facility’s specification sheet and provide matching test records.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs sm:text-sm transition-all whitespace-nowrap shadow-sm"
          >
            Submit Specification Requirements
          </button>
        </div>
      </div>
    </div>
  );
};
