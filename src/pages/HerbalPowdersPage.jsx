import React, { useState, useMemo } from 'react';
import { Award, Filter, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { HERBAL_POWDERS } from '../data/products';

export default function HerbalPowdersPage({ onOpenRfq }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Leaf', 'Root', 'Spice', 'Seed/Fiber'];

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return HERBAL_POWDERS;
    return HERBAL_POWDERS.filter(p => p.filterTag === activeFilter);
  }, [activeFilter]);

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="USDA Organic Herbal Powders Exporter India"
        description="Explore Pragati Exim's USDA Organic Certified herbal powders including Moringa, Shatavari, Turmeric, Ashwagandha, and Psyllium Husk milled for international B2B buyers."
        canonicalUrl="/herbal-powders"
        itemList={{
          name: "USDA Organic Herbal Powders Portfolio",
          items: HERBAL_POWDERS.map(p => ({ name: p.name, url: `/herbal-powders/${p.slug}` }))
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Herbal Powders", url: "/herbal-powders" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-forest-950 text-xs font-extrabold shadow">
            <Award className="w-4 h-4" /> USDA ORGANIC CERTIFIED RANGE
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            Pure Herbal & Plant-Based Powders
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            Cultivated in certified organic Indian farms and processed under low-temperature milling parameters to maintain vital phytocompounds, natural aroma, and color. Strictly supplied for international B2B formulation and manufacturing.
          </p>

          <div className="pt-2 flex flex-wrap gap-3 text-xs text-forest-200">
            <span className="flex items-center gap-1 bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800 text-amber-300 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> USDA Organic / NOP Scope
            </span>
            <span className="flex items-center gap-1 bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Standard MOQ: 50 KG
            </span>
            <span className="flex items-center gap-1 bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Specifications Available Upon Request
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
            <Filter className="w-4 h-4 text-forest-800" />
            <span>Filter by Plant Part / Form:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeFilter === filter
                    ? 'bg-amber-400 text-forest-950 shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onOpenRfq={onOpenRfq} />
          ))}
        </div>

        {/* Technical Notice Banner */}
        <div className="bg-forest-50 border border-forest-200 p-6 rounded-2xl text-xs text-forest-900 space-y-2">
          <div className="font-bold text-sm flex items-center gap-1.5 text-forest-950">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Technical Data & Specification Policy
          </div>
          <p className="text-gray-700 leading-relaxed">
            Detailed analytical specifications (including mesh particle size, moisture limits, total ash, microbial screen, pesticide screening, and heavy metal assays) are documented on official Certificates of Analysis (COA) and Technical Data Sheets (TDS) and are available upon commercial inquiry.
          </p>
        </div>

      </div>
    </div>
  );
}
