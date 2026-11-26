import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MARKETS } from '../data/markets';
import { Globe, ShieldCheck, Truck, Package, Send, ArrowRight } from 'lucide-react';

export default function MarketPage({ onOpenRfq }) {
  const { country } = useParams();
  const market = MARKETS.find(m => m.slug === country || m.code.toLowerCase() === country.toLowerCase());

  if (!market) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4 space-y-4">
        <h2 className="text-2xl font-serif font-bold text-forest-950">Market Page Not Found</h2>
        <Link to="/global-export" className="inline-block px-6 py-2.5 bg-forest-800 text-white rounded-xl text-xs font-bold">
          View Global Export Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-forest-950 text-white p-8 sm:p-14 rounded-3xl border border-forest-800 space-y-4 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-forest-800 text-bronze-300 text-xs font-bold rounded-full">
          <Globe className="w-4 h-4 text-emerald-400" /> B2B EXPORT TO {market.country.toUpperCase()}
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-100">
          {market.headline}
        </h1>
        <p className="text-forest-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          {market.intro}
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs text-forest-200">
          <span className="flex items-center gap-1.5 font-bold text-amber-300">
            <Package className="w-4 h-4" /> {market.moq}
          </span>
          <span className="flex items-center gap-1.5 font-bold text-emerald-400">
            <Truck className="w-4 h-4" /> Shipping Terms: {market.shippingTerms}
          </span>
        </div>
      </div>

      {/* Grid details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 shadow-sm">
          <h3 className="text-xl font-serif font-bold text-forest-950">High Demand Ingredients in {market.country}</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {market.keyProducts.map((prod, idx) => (
              <li key={idx} className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-bronze-500"></span>
                <span>{prod}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-forest-900 text-white p-8 rounded-3xl border border-forest-800 space-y-4">
          <h3 className="text-xl font-serif font-bold text-ivory-100">Regulatory & Import Support</h3>
          <p className="text-xs text-forest-200 leading-relaxed">
            {market.regulatoryInfo}
          </p>
          <div className="pt-2 text-xs text-bronze-300 font-semibold">
            Standard documentation provided: COA, TDS, MSDS, Certificate of Origin, Phytosanitary.
          </div>
        </div>

      </div>

      {/* RFQ CTA */}
      <div className="bg-gradient-to-r from-forest-950 to-forest-900 text-white p-8 rounded-3xl text-center space-y-4 border border-forest-800">
        <h3 className="text-2xl font-serif font-bold text-white">Inquire Export Shipping to {market.country}</h3>
        <button
          onClick={() => onOpenRfq(null, 'quote')}
          className="px-8 py-3.5 bg-bronze-400 text-forest-950 font-extrabold rounded-xl shadow text-sm"
        >
          Request {market.country} Export Quotation
        </button>
      </div>

    </div>
  );
}
