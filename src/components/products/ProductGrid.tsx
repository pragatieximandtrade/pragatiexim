import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Product, PRODUCT_CATEGORIES, PRODUCTS } from '../../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  initialCategory?: string;
  onQuickQuote?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  initialCategory = 'all',
  onQuickQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-brand-ivory-100 p-3 rounded-2xl border border-brand-ivory-300">
        {/* Category Filter Tabs with Hidden Scrollbar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1 min-w-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-brand-green-800 text-white shadow-sm'
                : 'text-brand-charcoal-700 hover:bg-white hover:text-brand-green-900'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          {PRODUCT_CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter(p => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-brand-green-800 text-white shadow-sm'
                    : 'text-brand-charcoal-700 hover:bg-white hover:text-brand-green-900'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px] shrink-0">
          <Search className="w-4 h-4 text-brand-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search spice or application..."
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-brand-ivory-300 focus:outline-none focus:border-brand-green-700 transition"
          />
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickQuote={onQuickQuote}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-brand-ivory-300 space-y-3">
          <p className="text-lg font-serif font-bold text-brand-charcoal-800">No spices matched your filter</p>
          <p className="text-xs sm:text-sm text-brand-charcoal-500 max-w-md mx-auto">
            Try adjusting your search term or exploring our full range of 17 core powdered spices and custom formulations.
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-2 px-4 py-2 rounded-lg text-xs font-semibold bg-brand-green-800 text-white hover:bg-brand-green-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
