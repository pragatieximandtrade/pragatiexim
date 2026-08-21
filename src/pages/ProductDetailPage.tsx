import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, Package, Sliders, Truck, ArrowRight, CheckCircle2, MessageCircle, Send, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PRODUCTS } from '../data/products';
import { QuoteRequestForm } from '../components/forms/QuoteRequestForm';
import { getProductSchema, getBreadcrumbSchema } from '../utils/seo';
import { generateWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailPageProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const breadcrumbs = [
    { name: 'Products', path: '/products' },
    { name: product.name, path: `/products/${product.slug}` }
  ];

  const schemas = [
    getProductSchema(product),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: product.name, url: `/products/${product.slug}` }
    ])
  ];

  const handleWhatsAppInquiry = () => {
    const url = generateWhatsAppUrl({
      productName: product.name,
      packaging: product.packagingOptions[0],
      customNotes: `Inquiry for ${product.name} specification and quotation.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title={`${product.name} Supplier & Exporter in Dubai, UAE, USA, UK | Pragati Exim`}
        description={`Source pure ${product.name} in bulk. Leading ${product.name} supplier & exporter in Dubai, UAE, USA, UK, Saudi Arabia & global food markets.`}
        canonicalPath={`/products/${product.slug}`}
        ogImage={product.image}
        productName={product.name}
        schema={schemas}
      />

      {/* Page Header Banner */}
      <div className="bg-brand-green-950 text-white pt-8 pb-14 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
                {product.categoryLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                {product.name} Supplier & Exporter
              </h1>
              <p className="text-sm sm:text-base text-brand-charcoal-300 leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenQuoteModal(product.name)}
                className="px-5 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Quote</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                title="WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Left Content: Specifications & Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Card with Visual */}
            <div className="bg-white rounded-2xl border border-brand-ivory-300 overflow-hidden shadow-subtle">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 relative aspect-square md:aspect-auto">
                  <img
                    src={product.image}
                    alt={`${product.name} bulk supply`}
                    className="w-full h-full object-cover object-center"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-green-950/90 text-brand-gold-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-gold-500/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-brand-charcoal-900">
                      Product Overview
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-charcoal-700 leading-relaxed mt-2">
                      {product.longOverview}
                    </p>
                  </div>

                  {/* Profile Metrics */}
                  <div className="pt-4 border-t border-brand-ivory-200 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-brand-charcoal-400 block text-[11px] uppercase font-bold">Aroma Profile</span>
                      <span className="font-semibold text-brand-charcoal-900">{product.aromaProfile}</span>
                    </div>
                    <div>
                      <span className="text-brand-charcoal-400 block text-[11px] uppercase font-bold">Pungency Level</span>
                      <span className="font-semibold text-brand-charcoal-900">{product.pungencyLevel}</span>
                    </div>
                    <div>
                      <span className="text-brand-charcoal-400 block text-[11px] uppercase font-bold">Minimum Order (MOQ)</span>
                      <span className="font-bold text-brand-green-900">{product.moq}</span>
                    </div>
                    <div>
                      <span className="text-brand-charcoal-400 block text-[11px] uppercase font-bold">Dispatch Hub</span>
                      <span className="font-semibold text-brand-charcoal-900">Surat, Gujarat (Pan-India)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Section */}
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold-600" />
                <h3 className="text-xl font-serif font-bold text-brand-charcoal-900">
                  Target Commercial Applications
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-charcoal-600">
                Formulated to integrate seamlessly into industrial and food service recipes without separation or aroma loss:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {product.applications.map((app, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-ivory-50 border border-brand-ivory-200 text-xs sm:text-sm text-brand-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Particle Granulation & Customisation */}
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle space-y-5">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-brand-green-800" />
                <h3 className="text-xl font-serif font-bold text-brand-charcoal-900">
                  Granulation & Customisation Options
                </h3>
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-brand-charcoal-700 leading-relaxed">
                  {product.customisationNotes}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-500 block mb-2">
                    Available Granulation Formats:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.particleSizes.map((size, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-brand-ivory-100 border border-brand-ivory-300 text-xs font-semibold text-brand-charcoal-800">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-brand-green-50 rounded-xl border border-brand-green-200 text-xs text-brand-green-900">
                  Customization is available subject to minimum order quantities of 10 kg. Pre-production trial samples can be dispatched upon requirement confirmation.
                </div>
              </div>
            </div>

            {/* Available Packaging Options */}
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle space-y-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-brand-green-800" />
                <h3 className="text-xl font-serif font-bold text-brand-charcoal-900">
                  Available Packaging Formats
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {product.packagingOptions.map((pkg, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-brand-ivory-50 border border-brand-ivory-200 text-xs font-medium text-brand-charcoal-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green-700"></span>
                    <span>{pkg}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-brand-charcoal-500 pt-1">
                All packaging is food-grade, moisture-resistant, and batch-coded for full lot traceability.
              </p>
            </div>

            {/* Quality Assurance Box */}
            <div className="bg-brand-green-950 text-white rounded-2xl p-6 sm:p-8 border border-brand-green-800 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-gold-400" />
                <h3 className="text-xl font-serif font-bold text-white">
                  Quality Assurance & Verification
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-brand-charcoal-200">
                {product.qualityAssurance.map((qa, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" />
                    <span>{qa}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-brand-charcoal-300 pt-2 border-t border-brand-green-900">
                Batch-specific Certificate of Analysis (COA) detailing moisture, total ash, and sensory parameters is available upon request with orders.
              </p>
            </div>

            {/* Bulk Supply & Logistics Notice */}
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 sm:p-8 shadow-subtle flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-ivory-100 text-brand-green-900 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <h4 className="font-serif font-bold text-base text-brand-charcoal-900">
                  Bulk Supply & Dispatch Scope
                </h4>
                <p className="text-brand-charcoal-600 leading-relaxed">
                  We supply commercial consignments across India (Pan-India dispatch) and process international export orders directly from Surat, Gujarat. Standard powders dispatch promptly based on volume.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar: Quick Quote Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-brand-ivory-300 p-6 shadow-premium sticky top-24">
              <div className="pb-4 mb-4 border-b border-brand-ivory-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-700">
                  Direct Inquiries
                </span>
                <h3 className="font-serif font-bold text-xl text-brand-charcoal-900">
                  Request a Quote for {product.name}
                </h3>
                <p className="text-xs text-brand-charcoal-500 mt-1">
                  Surat manufacturing desk • Response within 24 hours
                </p>
              </div>

              <QuoteRequestForm
                initialProduct={product.name}
                compact={true}
              />
            </div>
          </div>
        </div>

        {/* Related Products Carousel/Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-brand-ivory-300 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
                  Complementary Spices
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal-900">
                  Related {product.categoryLabel}
                </h3>
              </div>
              <Link
                to="/products"
                className="text-xs font-bold text-brand-green-900 hover:text-brand-green-700 flex items-center gap-1"
              >
                <span>All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl border border-brand-ivory-300 p-5 shadow-subtle hover:shadow-premium transition-all group flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-brand-charcoal-900 group-hover:text-brand-green-900 transition-colors">
                      <Link to={`/products/${rel.slug}`}>{rel.name}</Link>
                    </h4>
                    <p className="text-xs text-brand-charcoal-600 line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-brand-ivory-200 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-brand-green-900">MOQ: {rel.moq.split(' ')[0]} {rel.moq.split(' ')[1]}</span>
                    <Link to={`/products/${rel.slug}`} className="text-xs font-bold text-brand-green-900 flex items-center gap-1">
                      <span>View Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
