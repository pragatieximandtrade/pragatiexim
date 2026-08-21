import React from 'react';
import { Package, Shield, QrCode, Truck, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { getBreadcrumbSchema } from '../utils/seo';

interface PackagingPageProps {
  onOpenQuoteModal: () => void;
}

export const PackagingPage: React.FC<PackagingPageProps> = ({ onOpenQuoteModal }) => {
  const breadcrumbs = [{ name: 'Packaging & Supply', path: '/packaging' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Packaging', url: '/packaging' }
  ]);

  const packagingTiers = [
    {
      size: '1 kg',
      name: 'Food-Grade Laminated Pouch',
      bestFor: 'R&D kitchens, specialty culinary recipes, initial sample verification, and small batch seasonings.',
      features: ['High-barrier foil layer', 'Hermetically heat-sealed', 'Indelible lot identification']
    },
    {
      size: '5 kg',
      name: 'Food-Grade Barrier Bag',
      bestFor: 'HoReCa central commissaries, restaurant chain batches, and mid-volume culinary production.',
      features: ['Moisture and oxygen barrier', 'Tear-resistant multi-wall', 'Optimized for kitchen handling']
    },
    {
      size: '10 kg',
      name: 'Laminated Moisture Pouch',
      bestFor: 'Commercial snack seasoning blenders, packaged foods, and bespoke custom spice formulations.',
      features: ['Heavy gauge multi-layer laminate', 'Anti-caking moisture seal', 'Batch-coded for audit tracking']
    },
    {
      size: '25 kg',
      name: 'Poly-Lined Bulk Bag',
      bestFor: 'Industrial food processing, continuous auger hoppers, and dry soup/noodle pre-mix plants.',
      features: ['Heavy-duty outer woven/kraft layer', 'Virgin food-grade inner poly liner', 'Pallet-stackable format']
    },
    {
      size: '50 kg',
      name: 'Industrial Master Pack',
      bestFor: 'High-volume automated dosing facilities, large-scale snack dusting, and contract manufacturing.',
      features: ['Industrial-grade moisture protection', 'Maximum freight efficiency', 'Container-optimized packing']
    }
  ];

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="B2B Spice Packaging & Bulk Supply Formats | Pragati Exim"
        description="Explore 1kg, 5kg, 10kg, 25kg, and 50kg food-grade moisture-barrier spice packaging designed for food manufacturers and export from Surat, Gujarat."
        canonicalPath="/packaging"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Preserving Freshness & Volatile Aroma
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Packaging Designed for B2B Supply
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Spices are hygroscopic and sensitive to ambient air. Our packaging formats use food-grade laminated barrier materials to ensure natural volatile essential oils and colors remain sealed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Tier Cards */}
        <div className="space-y-6">
          <SectionHeading
            badge="Packaging Matrix"
            title="Available B2B Packaging Tiers"
            subtitle="From 1 kg kitchen-friendly packs to 50 kg bulk master containers, tailored to your operational dosing requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packagingTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-7 shadow-subtle hover:shadow-premium transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif font-bold text-brand-green-950">
                      {tier.size}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center">
                      <Package className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-brand-charcoal-900">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-brand-charcoal-600 leading-relaxed">
                    {tier.bestFor}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-brand-ivory-200">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-brand-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-700 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-brand-ivory-200">
                  <span className="text-[11px] font-semibold text-brand-gold-800">
                    Food-Grade • Moisture Resistant
                  </span>
                </div>
              </div>
            ))}

            {/* Custom Packaging Card */}
            <div className="bg-brand-green-900 text-white rounded-2xl border border-brand-green-800 p-6 sm:p-7 shadow-subtle flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-400">
                  Tailored Solutions
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Custom Bulk Specifications
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal-300 leading-relaxed">
                  Packaging can be customised based on order volume and application requirements, including custom palletization, private industrial labeling, and ocean freight container loading.
                </p>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 rounded-lg bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs transition-colors"
              >
                Discuss Custom Packaging
              </button>
            </div>
          </div>
        </div>

        {/* 3 Protection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-3xl border border-brand-ivory-300 shadow-subtle">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Moisture-Resistant Sealing</h4>
            <p className="text-xs text-brand-charcoal-600 leading-relaxed">
              Prevents atmospheric moisture ingress, eliminating the risk of lump formation, caking in hoppers, or fungal growth during warehousing.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center">
              <QrCode className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Batch-Coded Traceability</h4>
            <p className="text-xs text-brand-charcoal-600 leading-relaxed">
              Every unit and master carton carries prominent batch numbers, manufacturing dates, and lot identifiers, facilitating seamless integration into HACCP systems.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-brand-charcoal-900">Pan-India Freight Ready</h4>
            <p className="text-xs text-brand-charcoal-600 leading-relaxed">
              Reinforced corrugation and multi-layer tear-resistant bags designed to withstand long-distance road transport across India and sea container freight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
