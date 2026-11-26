import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Box, Package, ShieldCheck, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function ProductCatalog({ onOpenRfq }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [usaOnly, setUsaOnly] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    const srch = searchParams.get('search');
    if (cat) setSelectedCategory(cat);
    if (srch !== null) setSearchQuery(srch);
  }, [searchParams]);

  // Filter logic
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : product.categorySlug === selectedCategory;

    const matchesUsa = usaOnly ? product.usaInventory === true : true;

    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesUsa && matchesSearch;
  });

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-forest-950 text-white p-8 sm:p-12 rounded-3xl border border-forest-800 space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-800 text-bronze-300 text-xs font-bold rounded-full">
          <Package className="w-3.5 h-3.5" /> B2B Botanical Ingredient Catalog
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-100">
          Botanical & Herbal Extracts and Herbal Powders
        </h1>
        <p className="text-forest-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          Source export-grade Indian botanical & herbal extracts and USDA Organic Certified herbal powders for bulk B2B requirements. Minimum order quantity: <strong className="text-amber-300">50 KG per product</strong>. Larger metric ton volumes available upon buyer requirement.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-forest-200">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-4 h-4" /> Certificate of Analysis (COA) Available
          </span>
          <span className="flex items-center gap-1 text-amber-300">
            <Box className="w-4 h-4" /> Selected Extracts in USA Inventory
          </span>
          <span className="flex items-center gap-1 text-ivory-200">
            🔒 No Retail Pricing — Commercial RFQ System
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search Moringa, Berberine, Curcumin, Ashwagandha..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-2.5 pl-4 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3" />
          </div>

          {/* Category Tabs (Aligned with User Request) */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'botanical-extracts', label: 'Botanical & Herbal Extracts' },
              { id: 'herbal-powders', label: 'Herbal Powders' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat.id
                    ? 'bg-forest-900 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* USA Stock Checkbox Toggle */}
          <label className="flex items-center gap-2 cursor-pointer bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 shrink-0">
            <input
              type="checkbox"
              checked={usaOnly}
              onChange={(e) => setUsaOnly(e.target.checked)}
              className="w-4 h-4 text-emerald-600 rounded border-emerald-300 focus:ring-emerald-500"
            />
            <Box className="w-3.5 h-3.5 text-emerald-600" />
            <span>USA Inventory Stock Only</span>
          </label>

        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <div>
            Showing <strong className="text-forest-950">{filteredProducts.length}</strong> ingredients matching criteria
          </div>
          {(selectedCategory !== 'all' || searchQuery !== '' || usaOnly) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setUsaOnly(false);
                setSearchParams({});
              }}
              className="text-forest-700 hover:text-forest-950 font-bold flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onOpenRfq={onOpenRfq} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-serif font-bold text-forest-950">No Ingredients Match Your Filter</h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            We supply hundreds of additional unlisted botanical extracts and plant powders. Contact our export desk directly for custom sourcing requirements.
          </p>
          <button
            onClick={() => onOpenRfq(null, 'custom')}
            className="px-6 py-2.5 bg-forest-900 text-white font-bold text-xs rounded-xl shadow hover:bg-forest-950 transition"
          >
            Submit Custom Sourcing RFQ
          </button>
        </div>
      )}

    </div>
  );
}
