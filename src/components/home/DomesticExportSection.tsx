import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Truck, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface DomesticExportSectionProps {
  onOpenQuoteModal: (type?: 'Domestic' | 'Export') => void;
}

export const DomesticExportSection: React.FC<DomesticExportSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Domestic & Global Reach"
          title="From Surat to Food Businesses Across Markets"
          subtitle="Operating from Surat, Gujarat—the trade and logistics capital of western India—we coordinate domestic shipments nationwide and handle export enquiries for international food buyers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Domestic B2B Box */}
          <div className="bg-brand-ivory-50 rounded-2xl p-6 sm:p-8 border border-brand-ivory-300 hover:border-brand-green-700/40 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-green-100 text-brand-green-800 flex items-center justify-center font-bold">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-800 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
                  Dispatch: Pan-India
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-brand-charcoal-900">
                Domestic B2B Spice Supply
              </h3>

              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Direct dispatch across India from our central processing hub in Surat. Fast freight connectivity ensures predictable lead times for manufacturing facilities, cloud kitchens, and restaurant commissaries.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-brand-charcoal-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Standard pure spice powders & blends from 5 kg MOQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Custom spice formulations from 10 kg MOQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Food-grade barrier packaging (1kg to 50kg)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Batch-specific Certificate of Analysis (COA)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-ivory-200 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Domestic')}
                className="w-full sm:flex-1 py-3 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Domestic Quotation</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Export B2B Box */}
          <div className="bg-brand-green-950 text-white rounded-2xl p-6 sm:p-8 border border-brand-green-800 hover:border-brand-gold-500/40 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-green-800 text-brand-gold-400 flex items-center justify-center font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-300 bg-brand-green-900 px-3 py-1 rounded-full border border-brand-green-700">
                  Global Export Enquiries
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Looking for a Reliable Indian Spice Exporter & Bulk Supplier?
              </h3>

              <p className="text-xs sm:text-sm text-brand-charcoal-300 leading-relaxed">
                Talk to our export team. We supply international food businesses, spice blenders, and institutional buyers seeking pure ground spices and custom blends with full batch traceability.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-brand-charcoal-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Export-grade multi-layer barrier & palletized packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Mesh granulation & recipe customization for overseas markets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Analytical test reports & batch verification on dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Direct coordination with our Surat export desk</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-green-800/80 flex flex-col sm:flex-row gap-3 relative">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Export')}
                className="w-full sm:flex-1 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Send Export Enquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <Link
                to="/export"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-brand-green-900 hover:bg-brand-green-800 text-white font-semibold text-xs sm:text-sm transition-all border border-brand-green-700 flex items-center justify-center gap-1.5 text-center"
              >
                <span>Export Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
