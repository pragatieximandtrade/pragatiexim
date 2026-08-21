import React from 'react';
import { Link } from 'react-router-dom';
import { Sliders, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface CustomisationPreviewProps {
  onOpenQuoteModal: () => void;
}

export const CustomisationPreview: React.FC<CustomisationPreviewProps> = ({ onOpenQuoteModal }) => {
  const capabilities = [
    {
      title: 'Particle Size (Mesh Selection)',
      desc: 'Milled to exact granulation: Fine (60–80 mesh), Ultra-Fine (80–100 mesh), or Coarse Cracked (16–30 mesh) based on your formulation needs.'
    },
    {
      title: 'Aroma & Pungency Control',
      desc: 'Standardized Scoville Heat Units (SHU) and volatile essential oil retention matched to your product profile.'
    },
    {
      title: 'Blend Ratio Modification',
      desc: 'Bespoke masala formulations adjusted to proprietary recipe ratios for distinct regional or branded flavor signatures.'
    },
    {
      title: 'Batch Sampling & Trials',
      desc: 'Pre-production trial samples provided for R&D chef and QA validation prior to commercial batch execution.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-50 border-b border-brand-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Formulation & Customisation"
              title="Spices Tailored to Your Application"
              subtitle="Whether developing a signature snack seasoning or an industrial curry base, we adjust particle size, aroma, and blend ratios to your exact parameters."
              centered={false}
            />

            <div className="space-y-3.5">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-brand-ivory-300 shadow-subtle">
                  <CheckCircle2 className="w-5 h-5 text-brand-green-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal-900 font-serif">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-brand-charcoal-600 mt-0.5 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-brand-green-50 border border-brand-green-200 text-xs text-brand-green-950 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-brand-gold-600 shrink-0" />
              <span>
                <strong>MOQ Notice:</strong> Customisation is available subject to minimum order quantities of <strong>10 kg</strong>.
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/customisation"
                className="px-5 py-3 rounded-xl bg-white hover:bg-brand-ivory-100 text-brand-charcoal-800 font-semibold text-xs sm:text-sm transition-all border border-brand-ivory-300 flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-brand-green-800" />
                <span>Open Interactive Spec Builder</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Specification Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-premium space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-ivory-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-700">
                    B2B Customization Flow
                  </span>
                  <h3 className="text-xl font-serif font-bold text-brand-charcoal-900">
                    From Bench Sample to Scale
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-green-900 text-brand-gold-400 flex items-center justify-center font-bold text-sm">
                  10kg+
                </div>
              </div>

              {/* Step Flow */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-green-800 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <div>
                    <p className="font-bold text-brand-charcoal-900">Specification Definition</p>
                    <p className="text-xs text-brand-charcoal-500">Provide target aroma, heat level (SHU), mesh granulation, and recipe constraints.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-green-800 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <div>
                    <p className="font-bold text-brand-charcoal-900">Trial Blending & Bench Sampling</p>
                    <p className="text-xs text-brand-charcoal-500">Our Surat facility prepares pre-production evaluation samples for your R&D review.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-green-800 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <div>
                    <p className="font-bold text-brand-charcoal-900">Recipe Lock & Production Scale-up</p>
                    <p className="text-xs text-brand-charcoal-500">Once approved, recipes are locked in moisture-sealed packaging with batch-specific COA.</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Link CTA */}
              <div className="p-4 rounded-xl bg-brand-ivory-100 border border-brand-ivory-300 flex items-center justify-between">
                <div className="text-xs">
                  <p className="font-semibold text-brand-charcoal-900">Have a recipe in mind?</p>
                  <p className="text-brand-charcoal-500">Send specs directly to our R&D desk.</p>
                </div>
                <Link
                  to="/customisation"
                  className="px-3 py-1.5 rounded-lg bg-brand-green-800 text-white text-xs font-semibold hover:bg-brand-green-700 transition"
                >
                  Configure Spec
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
