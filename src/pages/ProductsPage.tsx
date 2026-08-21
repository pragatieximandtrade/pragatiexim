import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductGrid } from '../components/products/ProductGrid';
import { Product } from '../data/products';
import { getBreadcrumbSchema } from '../utils/seo';

interface ProductsPageProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const breadcrumbs = [{ name: 'Products Catalogue', path: '/products' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' }
  ]);

  const handleQuickQuote = (product: Product) => {
    onOpenQuoteModal(product.name);
  };

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Industrial Spice Powders & Custom Blends Catalogue | Pragati Exim"
        description="Explore Pragati Exim's full catalogue of pure powdered spices: Turmeric, Chilli, Coriander, Cumin, Black Pepper, Garam Masala & Custom Blends from Surat, Gujarat."
        canonicalPath="/products"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Commercial Spice Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Spice Powders & Custom Blends
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Processed for consistent aroma, colour, and flavour. Available in food-grade barrier pouches from 1 kg up to 50 kg bulk master packaging.
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ProductGrid
          initialCategory={initialCategory}
          onQuickQuote={handleQuickQuote}
        />
      </div>
    </div>
  );
};
