import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO_LANDING_PAGES } from '../data/seoLandingPages';
import { PRODUCTS } from '../data/products';
import { QuoteRequestForm } from '../components/forms/QuoteRequestForm';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/seo';

interface SEOLandingPageProps {
  onOpenQuoteModal: (productName?: string) => void;
  pageSlug?: string;
}

export const SEOLandingPage: React.FC<SEOLandingPageProps> = ({ onOpenQuoteModal, pageSlug }) => {
  const location = useLocation();
  const currentSlug = pageSlug || location.pathname.replace(/^\//, '');
  const data = SEO_LANDING_PAGES[currentSlug];

  if (!data) {
    return <Navigate to="/products" replace />;
  }

  const breadcrumbs = [
    { name: 'Sourcing & Supply', path: '/products' },
    { name: data.heroH1, path: `/${data.slug}` }
  ];

  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: data.heroH1, url: `/${data.slug}` }
    ]),
    getFAQSchema(data.faqSection)
  ];

  const recommendedProducts = PRODUCTS.filter((p) =>
    data.recommendedProductSlugs.includes(p.slug)
  );

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        canonicalPath={`/${data.slug}`}
        schema={schemas}
      />

      {/* Hero Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-4xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Pragati Exim • Surat, Gujarat, India
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              {data.heroH1}
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 leading-relaxed">
              {data.heroSubheadline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Intro Section */}
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
              Industrial Supply Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal-900 leading-tight">
              {data.introTitle}
            </h2>
            {data.introDescription.map((para, i) => (
              <p key={i} className="text-xs sm:text-sm text-brand-charcoal-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-4 bg-brand-ivory-100 rounded-2xl p-6 border border-brand-ivory-300 space-y-3 text-xs">
            <h3 className="font-serif font-bold text-base text-brand-charcoal-900">Commercial Summary</h3>
            <div className="space-y-1.5 text-brand-charcoal-700">
              <p>• <strong>Location:</strong> Surat, Gujarat, India</p>
              <p>• <strong>Standard Powder MOQ:</strong> 5 kg</p>
              <p>• <strong>Custom Blends MOQ:</strong> 10 kg</p>
              <p>• <strong>Dispatch:</strong> Pan-India & Export</p>
              <p>• <strong>Packaging:</strong> 1kg to 50kg barrier pouches</p>
            </div>
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full mt-2 py-2.5 rounded-lg bg-brand-green-800 hover:bg-brand-green-700 text-white font-semibold text-xs transition"
            >
              Request Custom Quotation
            </button>
          </div>
        </div>

        {/* 4 Key Strengths */}
        <div>
          <SectionHeading
            badge="Why Pragati Exim"
            title="Our Sourcing & Manufacturing Advantages"
            subtitle="Built to eliminate batch-to-batch variation in commercial food processing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.keyStrengths.map((strength, sIdx) => (
              <div
                key={sIdx}
                className="bg-white p-6 rounded-2xl border border-brand-ivory-300 shadow-subtle space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-brand-charcoal-900">
                  {strength.title}
                </h3>
                <p className="text-xs text-brand-charcoal-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Matrix */}
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle space-y-6">
          <SectionHeading
            badge="Target Sectors"
            title="Commercial Applications"
            subtitle="Engineered for high thermal stability, uniform flowability, and clean natural aroma."
            centered={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.applicationsCovered.map((app, aIdx) => (
              <div key={aIdx} className="p-4 rounded-xl bg-brand-ivory-50 border border-brand-ivory-200 text-xs sm:text-sm text-brand-charcoal-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-green-700 shrink-0"></span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Products Grid */}
        {recommendedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
                  Featured Sourcing
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal-900">
                  Relevant Pure Spices
                </h3>
              </div>
              <Link
                to="/products"
                className="text-xs font-bold text-brand-green-900 hover:text-brand-green-700 flex items-center gap-1"
              >
                <span>View Full Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-brand-ivory-300 p-6 shadow-subtle hover:shadow-premium transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-700">
                      {prod.categoryLabel}
                    </span>
                    <h4 className="font-serif font-bold text-xl text-brand-charcoal-900">
                      <Link to={`/products/${prod.slug}`}>{prod.name}</Link>
                    </h4>
                    <p className="text-xs text-brand-charcoal-600 line-clamp-2">
                      {prod.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-ivory-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-green-900">MOQ: {prod.moq.split(' ')[0]} {prod.moq.split(' ')[1]}</span>
                    <Link
                      to={`/products/${prod.slug}`}
                      className="text-xs font-bold text-brand-green-900 flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structured FAQ Section */}
        {data.faqSection && data.faqSection.length > 0 && (
          <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
                Frequently Asked Questions
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal-900 mt-1">
                Commercial & Sourcing FAQs
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              {data.faqSection.map((faq, fIdx) => (
                <div key={fIdx} className="p-5 rounded-2xl bg-brand-ivory-50 border border-brand-ivory-200 space-y-2">
                  <div className="flex items-start gap-2.5 font-serif font-bold text-brand-charcoal-900 text-sm sm:text-base">
                    <HelpCircle className="w-4 h-4 text-brand-green-800 shrink-0 mt-0.5" />
                    <h4>{faq.question}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal-600 pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Embedded Quotation Section */}
        <div className="bg-brand-green-950 text-white rounded-3xl p-8 sm:p-12 border border-brand-green-800">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Direct B2B Pricing
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {data.ctaHeadline}
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal-300">
              {data.ctaSubheadline}
            </p>
          </div>

          <div className="bg-brand-ivory-50 text-brand-charcoal-900 p-6 sm:p-8 rounded-2xl">
            <QuoteRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};
