import React from 'react';
import { Sliders, Sparkles, FileCheck } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InteractiveSpecBuilder } from '../components/customisation/InteractiveSpecBuilder';
import { getBreadcrumbSchema } from '../utils/seo';

interface CustomisationPageProps {
  onOpenQuoteModal: () => void;
}

export const CustomisationPage: React.FC<CustomisationPageProps> = ({ onOpenQuoteModal }) => {
  const breadcrumbs = [{ name: 'Customisation & Formulations', path: '/customisation' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Customisation', url: '/customisation' }
  ]);

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Custom Spice Blends & Formulation Services | Pragati Exim"
        description="Develop custom spice blends tailored to your exact recipe, mesh size, and pungency. Minimum MOQ 10kg. Pre-production sampling available from Surat, Gujarat."
        canonicalPath="/customisation"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              R&D, Formulation & Mesh Granulation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Spices Tailored to Your Application
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              We collaborate with food technologists, R&D chefs, and seasoning brands to formulate bespoke spice blends and adjust particle granulation to match your production line.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* MOQ & Capabilities Notice */}
        <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Particle Granulation</h4>
              <p className="text-xs text-brand-charcoal-600 mt-0.5">Fine (60-80 mesh), Ultra-Fine (80-100 mesh), Medium (30-50 mesh), or Coarse Rubs.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Aroma & Heat Profiling</h4>
              <p className="text-xs text-brand-charcoal-600 mt-0.5">Scoville heat adjustments and volatile essential oil balancing for brand recipes.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold-50 text-brand-gold-800 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Accessible 10 kg MOQ</h4>
              <p className="text-xs text-brand-charcoal-600 mt-0.5">Customisation is available subject to minimum order quantities of 10 kg with sampling.</p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Specification Builder */}
        <div>
          <InteractiveSpecBuilder />
        </div>

        {/* The 4-Step Formulation Workflow */}
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
              B2B Collaborative Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal-900 mt-1">
              How We Develop Your Custom Formulation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-brand-ivory-50 border border-brand-ivory-300 space-y-2">
              <span className="w-7 h-7 rounded-full bg-brand-green-800 text-white font-bold text-xs flex items-center justify-center">1</span>
              <h4 className="font-bold text-sm text-brand-charcoal-900 font-serif">Requirement Intake</h4>
              <p className="text-xs text-brand-charcoal-600 leading-relaxed">
                Share target flavor profile, application matrix (dry seasoning, sauce, retort), and particle size constraints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-ivory-50 border border-brand-ivory-300 space-y-2">
              <span className="w-7 h-7 rounded-full bg-brand-green-800 text-white font-bold text-xs flex items-center justify-center">2</span>
              <h4 className="font-bold text-sm text-brand-charcoal-900 font-serif">Bench Sampling</h4>
              <p className="text-xs text-brand-charcoal-600 leading-relaxed">
                Our Surat facility prepares evaluation samples for sensory trials in your pilot test kitchen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-ivory-50 border border-brand-ivory-300 space-y-2">
              <span className="w-7 h-7 rounded-full bg-brand-green-800 text-white font-bold text-xs flex items-center justify-center">3</span>
              <h4 className="font-bold text-sm text-brand-charcoal-900 font-serif">Recipe Locking</h4>
              <p className="text-xs text-brand-charcoal-600 leading-relaxed">
                Once approved, spice ratios and milling parameters are strictly locked for future batch repeatability.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-ivory-50 border border-brand-ivory-300 space-y-2">
              <span className="w-7 h-7 rounded-full bg-brand-green-800 text-white font-bold text-xs flex items-center justify-center">4</span>
              <h4 className="font-bold text-sm text-brand-charcoal-900 font-serif">Commercial Dispatch</h4>
              <p className="text-xs text-brand-charcoal-600 leading-relaxed">
                Dispatched with moisture-barrier packaging, batch coding, and Certificate of Analysis (COA).
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              Discuss Your Recipe with Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
