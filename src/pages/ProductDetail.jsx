import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Award, Send, ArrowRight, ShieldCheck, CheckCircle2, 
  FileText, Package, Globe, ChevronRight, Sparkles, Leaf 
} from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS, HERBAL_POWDERS, BOTANICAL_EXTRACTS } from '../data/products';
import { COMPANY } from '../data/company';

export default function ProductDetail({ onOpenRfq }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find product by slug or id or alternate slug
  const product = ALL_PRODUCTS.find(p => p.slug === slug || p.id === slug) || 
    ALL_PRODUCTS.find(p => p.slug.includes(slug) || slug.includes(p.slug));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900">Product Not Found</h2>
        <p className="text-gray-600 text-sm">The ingredient you are looking for is not listed or has moved.</p>
        <div className="pt-2 flex justify-center gap-4">
          <Link to="/herbal-powders" className="px-5 py-2.5 bg-forest-900 text-white rounded-xl text-xs font-bold">
            Browse Herbal Powders
          </Link>
          <Link to="/botanical-extracts" className="px-5 py-2.5 bg-amber-400 text-forest-950 rounded-xl text-xs font-bold">
            Browse Botanical Extracts
          </Link>
        </div>
      </div>
    );
  }

  const isPowder = product.categorySlug === 'herbal-powders';
  const categoryListingUrl = isPowder ? '/herbal-powders' : '/botanical-extracts';
  const canonicalUrl = `${categoryListingUrl}/${product.slug}`;

  // Find related products in same category/range
  const relatedProducts = (isPowder ? HERBAL_POWDERS : BOTANICAL_EXTRACTS)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleInquiryClick = (type = 'quote') => {
    if (onOpenRfq) {
      onOpenRfq(product, type);
    } else {
      navigate(`/contact-us?product=${encodeURIComponent(product.slug)}`);
    }
  };

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-10">
      <SEO
        title={`${product.name} (${product.botanicalName || 'Botanical Ingredient'}) Exporter India`}
        description={`Source bulk ${product.name} (${product.botanicalName}) from Pragati Exim & Trade, India. ${product.description}`}
        canonicalUrl={canonicalUrl}
        product={product}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: product.category, url: categoryListingUrl },
          { name: product.name, url: canonicalUrl }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-forest-900 transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={categoryListingUrl} className="hover:text-forest-900 transition">{product.category}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-forest-950 font-bold">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Product Image Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl bg-forest-950 overflow-hidden shadow-inner border border-gray-100">
              <img
                src={product.image || '/images/moringa_powder.jpg'}
                alt={`${product.name} - Pragati Exim`}
                className="w-full h-full object-cover"
              />

              {product.organic && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 text-forest-950 text-xs font-extrabold shadow">
                    <Award className="w-4 h-4" /> USDA ORGANIC CERTIFIED
                  </span>
                </div>
              )}

              {product.range && product.range !== 'Herbal Powders' && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-forest-900/90 text-emerald-300 text-xs font-bold shadow backdrop-blur-sm border border-forest-700">
                    <Sparkles className="w-3.5 h-3.5" /> {product.range}
                  </span>
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-forest-50 border border-forest-200 text-xs text-forest-900 space-y-1">
              <div className="font-bold flex items-center justify-between">
                <span>Minimum Order Quantity (MOQ):</span>
                <span className="text-forest-950 font-extrabold">50 KG</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Commercial Capacity:</span>
                <span>Bulk Metric Ton Export</span>
              </div>
            </div>
          </div>

          {/* Product Information Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-700">
                <span>{product.category}</span>
                {product.filterTag && (
                  <>
                    <span>•</span>
                    <span className="text-amber-700">{product.filterTag}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
                {product.name}
              </h1>
              {product.botanicalName && (
                <p className="text-base text-gray-600 italic font-serif">
                  Botanical Name: <strong className="text-forest-900 font-semibold">{product.botanicalName}</strong>
                </p>
              )}
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Factual Specifications Table */}
            <div className="bg-[#F9F8F3] rounded-2xl p-5 border border-gray-200 space-y-2.5 text-xs sm:text-sm">
              <h3 className="font-serif font-bold text-forest-950 text-sm border-b border-gray-200 pb-2 flex items-center justify-between">
                <span>{product.categorySlug === 'herbal-powders' ? 'Organic Herbal Powder Specifications' : 'Technical Overview & Standardized Parameters'}</span>
                {product.organic && (
                  <span className="text-[10px] bg-amber-400 text-forest-950 font-black px-2 py-0.5 rounded">
                    USDA ORGANIC
                  </span>
                )}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 pt-1">
                {product.categorySlug === 'herbal-powders' ? (
                  <>
                    {product.organicStatus && (
                      <div>
                        <span className="text-gray-500 text-xs block">Organic Certification:</span>
                        <strong className="text-forest-900 font-semibold">{product.organicStatus}</strong>
                      </div>
                    )}

                    {product.plantPart && (
                      <div>
                        <span className="text-gray-500 text-xs block">Plant Part Used:</span>
                        <strong className="text-gray-900 font-semibold">{product.plantPart}</strong>
                      </div>
                    )}

                    {product.form && (
                      <div>
                        <span className="text-gray-500 text-xs block">Form & Mesh Size:</span>
                        <strong className="text-forest-900 font-semibold">{product.form}</strong>
                      </div>
                    )}

                    {product.activeContent && (
                      <div>
                        <span className="text-gray-500 text-xs block">Key Phytonutrients:</span>
                        <strong className="text-gray-900 font-semibold">{product.activeContent}</strong>
                      </div>
                    )}

                    <div>
                      <span className="text-gray-500 text-xs block">Origin:</span>
                      <strong className="text-gray-900 font-semibold">India</strong>
                    </div>

                    <div>
                      <span className="text-gray-500 text-xs block">Additives / Irradiation:</span>
                      <strong className="text-emerald-700 font-semibold">100% Pure, Non-Irradiated</strong>
                    </div>
                  </>
                ) : (
                  <>
                    {product.standardizedGrade && (
                      <div>
                        <span className="text-gray-500 text-xs block">Standardized Grade / Assay:</span>
                        <strong className="text-forest-900 font-semibold">{product.standardizedGrade}</strong>
                      </div>
                    )}

                    {product.analyticalMethod && (
                      <div>
                        <span className="text-gray-500 text-xs block">Assay / Testing Method:</span>
                        <strong className="text-gray-900 font-semibold">{product.analyticalMethod}</strong>
                      </div>
                    )}

                    {product.activeContent && (
                      <div>
                        <span className="text-gray-500 text-xs block">Active Marker Constituent:</span>
                        <strong className="text-gray-900 font-semibold">{product.activeContent}</strong>
                      </div>
                    )}

                    {product.grade && (
                      <div>
                        <span className="text-gray-500 text-xs block">Monograph Grade:</span>
                        <strong className="text-gray-900 font-semibold">{product.grade}</strong>
                      </div>
                    )}

                    {product.solvent && (
                      <div>
                        <span className="text-gray-500 text-xs block">Extraction Solvent:</span>
                        <strong className="text-gray-900 font-semibold">{product.solvent}</strong>
                      </div>
                    )}

                    {product.plantPart && (
                      <div>
                        <span className="text-gray-500 text-xs block">Plant Part Used:</span>
                        <strong className="text-gray-900 font-semibold">{product.plantPart}</strong>
                      </div>
                    )}

                    <div>
                      <span className="text-gray-500 text-xs block">Country of Origin:</span>
                      <strong className="text-gray-900 font-semibold">India</strong>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleInquiryClick('quote')}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-forest-950 font-extrabold rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4 fill-forest-950" /> Request a Quote
              </button>

              <button
                onClick={() => handleInquiryClick('sample')}
                className="w-full sm:w-auto px-6 py-3.5 bg-forest-900 hover:bg-forest-950 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 text-sm"
              >
                <FileText className="w-4 h-4 text-amber-400" /> Request Product Specifications / Sample
              </button>
            </div>

            <div className="text-xs text-gray-500 pt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full batch Certificate of Analysis (COA) issued with each commercial order.</span>
            </div>
          </div>

        </div>

        {/* Detailed Sections: Applications, Quality & Packaging */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Applications */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-3">
            <h3 className="font-serif font-bold text-lg text-forest-950 border-b border-gray-100 pb-2">
              Typical B2B Applications
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              {(product.applications || [
                "Nutraceutical formulations",
                "Dietary supplement capsules and tablets",
                "Functional food and beverage ingredients",
                "Wellness product manufacturing"
              ]).map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-gray-500 italic pt-2">
              Note: Ingredients are supplied strictly for commercial manufacturing and formulation. No disease-treatment claims are implied.
            </p>
          </div>

          {/* Card 2: Packaging & Storage */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-3">
            <h3 className="font-serif font-bold text-lg text-forest-950 border-b border-gray-100 pb-2">
              Packaging & Logistics
            </h3>
            <div className="space-y-2 text-xs text-gray-700">
              <p>
                <strong>Packaging:</strong> {product.packaging || "Packaging options available according to buyer requirements (Standard 25 KG double food-grade poly-lined multi-wall bags or HDPE / fibre drums)."}
              </p>
              <p>
                <strong>Export Dispatch:</strong> Coordinated through suitable Indian ports and international air cargo hubs.
              </p>
              <p>
                <strong>Labeling:</strong> Standard export labeling or customized buyer-specific identification.
              </p>
            </div>
          </div>

          {/* Card 3: Quality & Documentation */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-3">
            <h3 className="font-serif font-bold text-lg text-forest-950 border-b border-gray-100 pb-2">
              Quality & Documentation
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" /> Certificate of Analysis (COA)
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" /> Technical Data Sheet (TDS)
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" /> Material Safety Data Sheet (MSDS)
              </li>
              {product.organic && (
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" /> USDA Organic Transaction Certificate
                </li>
              )}
              {isPowder && (
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Pure Mechanical Milling (100% Solvent-Free)
                </li>
              )}
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" /> Phytosanitary & Origin Papers
              </li>
            </ul>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="text-2xl font-serif font-bold text-forest-950">
                Related {product.category}
              </h3>
              <Link
                to={categoryListingUrl}
                className="text-xs font-bold text-forest-800 hover:text-forest-950 flex items-center gap-1"
              >
                View Full Category <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} onOpenRfq={onOpenRfq} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
