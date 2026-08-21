import React from 'react';
import { Factory, Utensils, Sparkles, ChefHat, Building2, Globe, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_DATA } from '../data/company';
import { getBreadcrumbSchema } from '../utils/seo';

interface IndustriesPageProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenQuoteModal }) => {
  const breadcrumbs = [{ name: 'Industries We Serve', path: '/industries' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' }
  ]);

  const industryIcons = {
    'food-manufacturers': Factory,
    'ready-to-eat': Utensils,
    'seasoning-companies': Sparkles,
    'horeca': ChefHat,
    'bulk-buyers': Building2,
    'export-buyers': Globe
  };

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Who We Supply To | Domestic & Export Spice Supply | Pragati Exim"
        description="Pragati Exim supplies pure powdered spices and custom blends to F&B manufacturers, ready-to-eat brands, seasoning companies, HoReCa kitchens and exporters."
        canonicalPath="/industries"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Tailored B2B Supply Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Every food application has specific physical and culinary demands. Explore how our consistent spice powders and formulations power modern food businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_DATA.targetIndustries.map((ind) => {
            const Icon = industryIcons[ind.id as keyof typeof industryIcons] || Factory;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle hover:shadow-premium transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-brand-charcoal-900">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-ivory-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-charcoal-400 block">
                      Recommended Spices:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.suitableProducts.map((p, i) => (
                        <span key={i} className="text-xs bg-brand-ivory-100 text-brand-charcoal-800 px-2 py-0.5 rounded border border-brand-ivory-300 font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-brand-green-900 bg-brand-green-50 p-2.5 rounded-lg border border-brand-green-200">
                    <strong>Recommended Packaging:</strong> {ind.packagingRecommend}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-ivory-200">
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="w-full py-2.5 rounded-lg bg-brand-green-800 hover:bg-brand-green-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quotation for Your Industry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Box */}
        <div className="bg-brand-green-950 text-white rounded-3xl p-8 sm:p-10 border border-brand-green-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Confidential B2B Formulation
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Have a Proprietary Commercial Recipe?
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal-300 max-w-xl">
              We sign non-disclosure agreements (NDAs) and match exact bench samples for private brands and restaurant chains starting from a 10 kg MOQ.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Custom Spice Blends')}
            className="px-6 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs sm:text-sm transition-all whitespace-nowrap shadow-sm"
          >
            Submit Custom Recipe Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
