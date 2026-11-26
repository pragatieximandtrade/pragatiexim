import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { BOTANICAL_EXTRACTS } from '../data/products';

export default function BotanicalExtractsPage({ onOpenRfq }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const rangeParam = searchParams.get('range') || 'All';
  
  const [activeFilter, setActiveFilter] = useState(rangeParam);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (rangeParam) {
      setActiveFilter(rangeParam);
    }
  }, [rangeParam]);

  const filterOptions = [
    'All',
    'Registered / Clinically Studied',
    'Indigenous Range',
    'Global Range',
    'Standardized Extracts',
    'Active Botanical Ingredients'
  ];

  const filteredProducts = useMemo(() => {
    return BOTANICAL_EXTRACTS.filter((product) => {
      // 1. Range or Tag Filter
      let matchesFilter = true;
      if (activeFilter !== 'All') {
        if (activeFilter === 'Standardized Extracts' || activeFilter === 'Active Botanical Ingredients') {
          matchesFilter = product.filterTag === activeFilter;
        } else {
          matchesFilter = product.range === activeFilter;
        }
      }

      // 2. Search Query (Name, Botanical name, Active constituent, Range)
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        matchesSearch = 
          product.name.toLowerCase().includes(q) ||
          (product.botanicalName && product.botanicalName.toLowerCase().includes(q)) ||
          (product.activeContent && product.activeContent.toLowerCase().includes(q)) ||
          (product.range && product.range.toLowerCase().includes(q)) ||
          (product.standardizedGrade && product.standardizedGrade.toLowerCase().includes(q));
      }

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleFilterChange = (f) => {
    setActiveFilter(f);
    if (f === 'All') {
      searchParams.delete('range');
    } else {
      searchParams.set('range', f);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="Standardized Botanical & Herbal Extracts Exporter India (42 Primary Extracts)"
        description="Explore Pragati Exim's portfolio of 42 standardized botanical extracts including Curcumin 95%, Berberine 97%, Gymnema 75%, Ginkgo, Resveratrol, and Ashwagandha for international B2B buyers."
        canonicalUrl="/botanical-extracts"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Botanical Extracts", url: "/botanical-extracts" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
            <Sparkles className="w-4 h-4" /> 42 PRIMARY STANDARDIZED PHYTOCHEMICAL EXTRACTS
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            Botanical Extracts & Plant-Based Active Ingredients
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            Standardized active phytochemical compounds extracted and quantified via HPLC, UV, and gravimetric assays. Supplying registered & clinically studied extracts, indigenous Indian extracts, and global botanical ingredients for nutraceutical, pharmaceutical, and dietary supplement formulations.
          </p>

          <div className="pt-2 flex flex-wrap gap-3 text-xs text-forest-200">
            <span className="flex items-center gap-1 bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800 text-emerald-300 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 42 Standardized Primary Extracts
            </span>
            <span className="flex items-center gap-1 bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Standard MOQ: 50 KG
            </span>
            <span className="flex items-center gap-1 bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Verified Analytical Assays (HPLC / UV)
            </span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-4">
          
          {/* Top Search Field */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search extracts by name, botanical source (e.g. Curcuma longa), active constituent (e.g. Berberine), or grade..."
              className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Chips Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
              <Filter className="w-4 h-4 text-forest-800" />
              <span>Taxonomy / Range:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    activeFilter === f
                      ? 'bg-forest-900 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-gray-500 font-medium pt-1 flex items-center justify-between">
            <span>Showing <strong>{filteredProducts.length}</strong> of <strong>{BOTANICAL_EXTRACTS.length}</strong> botanical extracts</span>
            {(activeFilter !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                  searchParams.delete('range');
                  setSearchParams(searchParams);
                }}
                className="text-amber-700 hover:underline font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onOpenRfq={onOpenRfq} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
            <p className="text-gray-500 text-sm">No botanical extracts match your search criteria.</p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-forest-900 text-white rounded-xl text-xs font-bold"
            >
              Clear Search & Show All 42 Extracts
            </button>
          </div>
        )}

        {/* Technical Notice Banner */}
        <div className="bg-forest-50 border border-forest-200 p-6 rounded-2xl text-xs text-forest-900 space-y-2">
          <div className="font-bold text-sm flex items-center gap-1.5 text-forest-950">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Analytical Specifications & Batch Testing
          </div>
          <p className="text-gray-700 leading-relaxed">
            Analytical assays, extraction solvents, residual solvent testing, heavy metal limits, and microbiological certificates of analysis are provided strictly per buyer inquiry and destination country pharmacopeial specifications. Custom standardized ratios and organic extract status can be discussed on request.
          </p>
        </div>

      </div>
    </div>
  );
}
