import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Send, ShieldCheck, Check, ArrowRight, Truck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function UsaInventory({ onOpenRfq }) {
  const usaProducts = PRODUCTS.filter(p => p.usaInventory === true);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white p-8 sm:p-14 rounded-3xl border border-forest-800 space-y-4 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/40">
          <Box className="w-4 h-4" /> DEDICATED USA WAREHOUSE STOCK
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-100">
          Selected Botanical Extracts Available from USA Inventory
        </h1>
        <p className="text-forest-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          Selected high-demand extract products are stocked within USA inventory hubs for international B2B requirements. Contact our team to confirm current batch stock, technical specifications, and expedited domestic delivery options.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs text-forest-200">
          <span className="flex items-center gap-1.5 font-semibold text-amber-300">
            <ShieldCheck className="w-4 h-4" /> US FDA FSVP Import Compliant Documentation
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <Truck className="w-4 h-4" /> Rapid US Domestic Pallet Shipping (LTL / FTL)
          </span>
        </div>
      </div>

      {/* Products Stocked Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-serif font-bold text-forest-950">Currently Stocked Extracts in USA</h2>
          <span className="text-xs text-forest-800 bg-emerald-100 font-bold px-3 py-1 rounded-full">
            {usaProducts.length} Stock Items
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usaProducts.map((product) => (
            <ProductCard key={product.id} product={product} onOpenRfq={onOpenRfq} />
          ))}
        </div>
      </div>

      {/* Stock Policy Notice */}
      <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 shadow-sm">
        <h3 className="text-xl font-serif font-bold text-forest-950">USA Stock & Allocation Notice</h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Pragati Exim maintains active batch allocations in US logistics warehouses for key standardized extracts including 97% Berberine HCl, 95% Curcumin, and Ashwagandha extract. Stock levels fluctuate based on contract releases. We do not publish artificial stock figures. Contact our export desk to reserve batch quantity.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenRfq(null, 'quote')}
            className="px-6 py-3 bg-forest-900 text-white font-bold rounded-xl text-xs flex items-center gap-2"
          >
            Check USA Inventory Availability <ArrowRight className="w-4 h-4 text-bronze-400" />
          </button>
        </div>
      </div>

    </div>
  );
}
