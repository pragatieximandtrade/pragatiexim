import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Repeat, Sliders, Truck, MapPin } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { getBreadcrumbSchema } from '../utils/seo';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  const breadcrumbs = [{ name: 'About Us', path: '/about' }];
  const schema = getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }]);

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="About Us | Pragati Exim — Industrial Spice Manufacturer & Exporter"
        description="Learn how Pragati Exim manufactures powdered spices and custom blends with strict batch consistency in aroma, colour and flavour from Surat, Gujarat."
        canonicalPath="/about"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Company Overview & Manufacturing Philosophy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Pure Spices Built for Consistency
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Pragati Exim manufactures and supplies high-quality powdered spices and spice blends for food manufacturers, HoReCa kitchens, and spice buyers from Surat, Gujarat, India.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Split Section: Core Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
              Our Manufacturing Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal-900 leading-tight">
              Consistency in Aroma, Colour, and Flavour
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal-700 leading-relaxed">
              In commercial food manufacturing and industrial catering, raw spice variations can derail automated packaging lines, alter dish taste, and diminish brand reliability. At Pragati Exim, our entire processing workflow is engineered to deliver stable, repeatable parameters.
            </p>
            <p className="text-sm sm:text-base text-brand-charcoal-700 leading-relaxed">
              From our operational headquarters in Surat, Gujarat, we combine controlled processing practices with stable raw material sourcing. Whether producing high-volume standard single spice powders or formulating customized masala blends, we meet the exact sensory and physical specifications modern food processors demand.
            </p>

            <div className="p-4 rounded-xl bg-white border border-brand-ivory-300 shadow-subtle flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-green-800 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-brand-charcoal-700">
                <strong>Strategic Surat Hub:</strong> Located in Gujarat, India’s prime spice corridor, ensuring direct origin access, swift Pan-India freight dispatch, and seamless export coordination.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-brand-ivory-300 bg-brand-green-950">
              <img
                src="/images/products/garam-masala.png"
                alt="Controlled milling of pure spices at Pragati Exim facility"
                className="w-full h-96 sm:h-[450px] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold-400">
                  FSSAI-Compliant Processing
                </span>
                <p className="font-serif font-bold text-lg">
                  Pure Spice Milling with Zero Artificial Additives
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div>
          <SectionHeading
            badge="Operational Pillars"
            title="The Principles That Guide Our B2B Supply"
            subtitle="Factual, reliable manufacturing practices designed to support commercial food operations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-ivory-300 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal-900">
                Controlled Processing
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Hygienic, low-heat grinding techniques that safeguard delicate aromatic volatile essential oils from thermal evaporation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-ivory-300 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center">
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal-900">
                Batch Consistency
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Lot-to-lot repeatability in mesh granulation, color tone, and flavor potency to prevent flavor drift across recipe cycles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-ivory-300 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal-900">
                Flexible Specifications
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Granulation mesh sizing (fine, medium, coarse) and custom recipe blending starting from an accessible 10 kg MOQ.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-ivory-300 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal-900">
                Reliable B2B Supply
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                Pan-India freight dispatch and dedicated handling of international export enquiries with multi-layer barrier packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Commitment Section */}
        <div className="bg-brand-green-950 text-white rounded-3xl p-8 sm:p-12 border border-brand-green-800">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Food Safety & Analytical Reporting
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Processed in FSSAI-Licensed Facility with Batch Traceability
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal-300 leading-relaxed">
              Every production batch is milled without artificial coloring, adulterants, or starch fillers. We maintain complete batch traceability from raw seed cleaning through sealed food-grade packaging. Certificates of Analysis (COA) detailing moisture, mesh distribution, and sensory validation are available upon request with orders.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs sm:text-sm transition-all text-center"
              >
                Request Specifications & Quote
              </button>
              <Link
                to="/products"
                className="px-6 py-3 rounded-xl bg-brand-green-900 hover:bg-brand-green-800 text-white font-semibold text-xs sm:text-sm transition-all border border-brand-green-700 text-center"
              >
                Explore Product Range
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
