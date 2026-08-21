import React from 'react';
import { ShieldCheck, Repeat, Sliders, Truck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Controlled Processing',
      description: 'Hygienic grinding parameters ensuring volatile essential oil retention and natural aroma.'
    },
    {
      icon: Repeat,
      title: 'Batch Consistency',
      description: 'Precise batch-to-batch repeatability in colour, mesh granulation, and flavour potency.'
    },
    {
      icon: Sliders,
      title: 'Flexible Specifications',
      description: 'Custom mesh size, pungency adjustment, and bespoke formulations from 10 kg MOQ.'
    },
    {
      icon: Truck,
      title: 'Reliable B2B Supply',
      description: 'Fast Pan-India dispatch from Surat, Gujarat with multi-tier barrier packaging.'
    }
  ];

  return (
    <section id="trust-strip" className="bg-brand-ivory-100 border-y border-brand-ivory-300 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-brand-ivory-300/80 shadow-subtle hover:bg-white transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-charcoal-900 font-serif">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal-600 leading-relaxed mt-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
