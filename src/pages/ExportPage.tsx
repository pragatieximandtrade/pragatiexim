import React from 'react';
import { Globe, Truck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { QuoteRequestForm } from '../components/forms/QuoteRequestForm';
import { getBreadcrumbSchema } from '../utils/seo';
import { generateWhatsAppUrl } from '../utils/whatsapp';

interface ExportPageProps {
  onOpenQuoteModal: (requirementType?: 'Domestic' | 'Export') => void;
}

export const ExportPage: React.FC<ExportPageProps> = () => {
  const breadcrumbs = [{ name: 'Domestic & Export Supply', path: '/export' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Export', url: '/export' }
  ]);

  const handleWhatsAppExport = () => {
    const url = generateWhatsAppUrl({
      requirementType: 'Export',
      customNotes: 'International export inquiry for Indian spice powders and custom blends.'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Spices Supplier in Dubai, UAE, USA, UK | Indian Spice Exporter | Pragati Exim"
        description="Leading Indian Spices Supplier & Exporter in Dubai, UAE, USA, UK, Saudi Arabia, Oman & Qatar. High-quality pure ground spices and custom blends from Surat, Gujarat."
        canonicalPath="/export"
        productName="Spices"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Pan-India Logistics & International Export Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              From Surat to Food Businesses Across Markets
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Supplying commercial food processors, repackagers, and institutional kitchens nationwide across India and coordinating export consignments with international buyers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Dual Market Pathways */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Domestic Box */}
          <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 shadow-subtle flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center font-bold">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-900 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
                  Dispatch: Pan-India
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-brand-charcoal-900">
                Domestic B2B Supply Network
              </h2>

              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Operating directly out of Surat, Gujarat, we coordinate timely freight dispatches across all Indian states. Our facility caters to food processors, commissary kitchens, and HoReCa chains requiring steady monthly spice supply.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-brand-charcoal-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Standard spice powders: MOQ 5 kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Customized blends & formulations: MOQ 10 kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Food-grade barrier pouches from 1 kg up to 50 kg bulk bags</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0" />
                  <span>Batch-specific Certificate of Analysis (COA) on dispatch</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-ivory-100 border border-brand-ivory-300 text-xs text-brand-charcoal-700">
              <strong>Lead Times:</strong> Dispatches are scheduled based on order quantity and custom granulation requirements.
            </div>
          </div>

          {/* Export Box */}
          <div className="bg-brand-green-950 text-white rounded-3xl border border-brand-green-800 p-8 shadow-subtle flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-green-800 text-brand-gold-400 flex items-center justify-center font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-300 bg-brand-green-900 px-3 py-1 rounded-full border border-brand-green-700">
                  Global Export Orders
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Looking for a Reliable Indian Spice Exporter & Bulk Supplier?
              </h2>

              <p className="text-xs sm:text-sm text-brand-charcoal-300 leading-relaxed">
                Talk to our export team. We assist international food manufacturing businesses, spice repackagers, and bulk spice buyers looking to source pure, unadulterated ground spices from Gujarat, India.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-brand-charcoal-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Multi-layer moisture-barrier & export-palletized packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Custom mesh granulation & recipe ratio adjustments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Batch COA documentation & sensory testing verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Export desk direct contact: contact@pragatiexim.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppExport}
                className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Online Enquiry Section */}
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-premium">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
              Commercial Quotations
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal-900">
              Send an Export or Domestic Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal-600">
              Specify your product, destination, and volume requirements below. Our team in Surat will review and respond promptly.
            </p>
          </div>

          <QuoteRequestForm initialRequirementType="Export" />
        </div>
      </div>
    </div>
  );
};
