import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../../data/products';
import { SectionHeading } from '../common/SectionHeading';

interface CategoryGridProps {
  onOpenQuoteModal: () => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-brand-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Catalogue"
          title="Industrial Spices & Custom Formulations"
          subtitle="Engineered for food manufacturers, HoReCa central kitchens, seasoning brands, and export businesses."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => {
            const items = PRODUCTS.filter(p => p.category === category.id);
            const categoryImages = {
              'core-industrial': '/images/products/turmeric-powder.png',
              'premium-functional': '/images/products/cinnamon-powder.png',
              'blended-masalas': '/images/products/garam-masala.png'
            };

            return (
              <div
                key={category.id}
                className="bg-brand-ivory-50 rounded-2xl border border-brand-ivory-300 overflow-hidden flex flex-col justify-between hover:shadow-premium transition-all duration-300 group"
              >
                <div>
                  {/* Category Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-brand-green-950">
                    <img
                      src={categoryImages[category.id as keyof typeof categoryImages]}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/90 via-brand-green-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-300">
                        {items.length} Products Available
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Category Description */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Product List Pills */}
                    <div className="space-y-2 pt-2 border-t border-brand-ivory-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal-400 block">
                        Featured Spices:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((prod) => (
                          <Link
                            key={prod.id}
                            to={`/products/${prod.slug}`}
                            className="text-xs bg-white text-brand-charcoal-800 px-2.5 py-1 rounded-md border border-brand-ivory-300 hover:border-brand-green-700 hover:text-brand-green-900 transition-colors font-medium"
                          >
                            {prod.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 flex items-center justify-between border-t border-brand-ivory-200/60 pt-4">
                  <Link
                    to={`/products?category=${category.id}`}
                    className="text-xs font-bold text-brand-green-900 hover:text-brand-green-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Category Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={onOpenQuoteModal}
                    className="text-xs font-semibold text-brand-gold-700 hover:text-brand-gold-800 flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3 text-brand-gold-500" />
                    <span>Get Pricing</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
