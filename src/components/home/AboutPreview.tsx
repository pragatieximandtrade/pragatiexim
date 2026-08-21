import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Premium Spice Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-brand-ivory-300 bg-brand-green-950">
              <img
                src="/images/products/custom-spice-blends.png"
                alt="Pure ground spice powders manufactured by Pragati Exim"
                className="w-full h-96 sm:h-[480px] object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold-400">
                  Manufacturing & Supply
                </span>
                <p className="font-serif font-bold text-xl leading-snug">
                  Built for the Demands of Industrial Food Production
                </p>
                <p className="text-xs text-brand-charcoal-200">
                  Surat, Gujarat, India
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Story & Feature Points */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="About Pragati Exim"
              title="Pure Spices Built for Consistency"
              centered={false}
            />

            <p className="text-sm sm:text-base text-brand-charcoal-700 leading-relaxed">
              Pragati Exim manufactures and supplies high-quality powdered spices and spice blends for food manufacturers, HoReCa kitchens and spice buyers. Based in Surat, Gujarat, we operate with a singular focus: delivering uncompromising consistency in aroma, colour, and flavour.
            </p>

            <p className="text-sm sm:text-base text-brand-charcoal-700 leading-relaxed">
              Modern food manufacturing requires reliable building blocks. Through controlled processing practices, stable sourcing, and flexible specifications, our spice powders integrate smoothly into commercial formulations, eliminating flavor drift and production interruptions.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-brand-ivory-300 shadow-subtle space-y-1">
                <div className="flex items-center gap-2 text-brand-green-900 font-bold text-sm font-serif">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Controlled Processing</span>
                </div>
                <p className="text-xs text-brand-charcoal-600">
                  Hygienic, low-heat grinding techniques that safeguard natural volatile oils and prevent scorch off-notes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-brand-ivory-300 shadow-subtle space-y-1">
                <div className="flex items-center gap-2 text-brand-green-900 font-bold text-sm font-serif">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Batch Consistency</span>
                </div>
                <p className="text-xs text-brand-charcoal-600">
                  Strict batch-to-batch repeatability in aroma intensity, color values, and moisture control.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-brand-ivory-300 shadow-subtle space-y-1">
                <div className="flex items-center gap-2 text-brand-green-900 font-bold text-sm font-serif">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Flexible Specifications</span>
                </div>
                <p className="text-xs text-brand-charcoal-600">
                  Granulation mesh sizes and recipe ratios tailored to client production machinery and culinary goals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-brand-ivory-300 shadow-subtle space-y-1">
                <div className="flex items-center gap-2 text-brand-green-900 font-bold text-sm font-serif">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Reliable B2B Supply</span>
                </div>
                <p className="text-xs text-brand-charcoal-600">
                  Pan-India domestic supply logistics and coordinated export handling with multi-layer barrier packaging.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-green-900 hover:text-brand-green-700 transition-colors group"
              >
                <span>Learn More About Our Processing Standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
