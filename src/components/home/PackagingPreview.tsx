import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Shield, QrCode, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const PackagingPreview: React.FC = () => {
  const packagingSizes = [
    { size: '1 kg', label: 'Laminated Pouch', use: 'Sample trials, cloud kitchens & specialty culinary batches' },
    { size: '5 kg', label: 'Barrier Pouch', use: 'HoReCa central kitchens & medium commercial food service' },
    { size: '10 kg', label: 'Multi-layer Pouch', use: 'Commercial batch manufacturing & custom blended seasonings' },
    { size: '25 kg', label: 'Poly-Lined Bulk Bag', use: 'Industrial food processing, snack dusting & dry pre-mixes' },
    { size: '50 kg', label: 'Industrial Master Bag', use: 'High-volume automated dosing & continuous production lines' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="B2B Packaging & Logistics"
          title="Packaging Designed for B2B Supply"
          subtitle="Engineered with high barrier protection to prevent volatile aroma loss, moisture absorption, and clumping during transit."
        />

        {/* 5 Packaging Size Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {packagingSizes.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-brand-ivory-50 border border-brand-ivory-300 hover:border-brand-green-700/40 hover:bg-brand-green-50/40 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-ivory-300 text-brand-green-800 flex items-center justify-center font-bold text-sm shadow-subtle group-hover:scale-105 transition-transform">
                  <Package className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <span className="text-2xl font-serif font-bold text-brand-green-950 block">
                    {item.size}
                  </span>
                  <span className="text-xs font-semibold text-brand-gold-700 block">
                    {item.label}
                  </span>
                </div>
                <p className="text-[11px] text-brand-charcoal-600 leading-snug">
                  {item.use}
                </p>
              </div>

              <div className="pt-2 border-t border-brand-ivory-200 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal-400">
                Food-Grade Barrier
              </div>
            </div>
          ))}
        </div>

        {/* Packaging Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-ivory-100 p-6 sm:p-8 rounded-2xl border border-brand-ivory-300">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-brand-ivory-300 text-brand-green-800 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-charcoal-900 font-serif">
                Moisture-Resistant Sealing
              </h4>
              <p className="text-xs text-brand-charcoal-600 mt-1 leading-relaxed">
                Multi-layer laminated barrier structures block humidity and ambient air, protecting natural essential oil potency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-brand-ivory-300 text-brand-green-800 flex items-center justify-center shrink-0">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-charcoal-900 font-serif">
                Batch-Coded Traceability
              </h4>
              <p className="text-xs text-brand-charcoal-600 mt-1 leading-relaxed">
                Every unit and master bag features indelible batch codes, manufacturing dates, and lot numbers for quality auditing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-brand-ivory-300 text-brand-green-800 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-charcoal-900 font-serif">
                Volume Customization
              </h4>
              <p className="text-xs text-brand-charcoal-600 mt-1 leading-relaxed">
                Packaging can be customised based on order volume, factory dosing hoppers, and export container requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/packaging"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-green-900 hover:text-brand-green-700 transition-colors"
          >
            <span>Read Full Packaging & Dispatch Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
