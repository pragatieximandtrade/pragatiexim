import React from 'react';
import { INDUSTRIES } from '../data/industries';
import { Pill, Utensils, Coffee, Sparkles, Stethoscope, Truck, ArrowRight } from 'lucide-react';

export default function IndustriesPage({ onOpenRfq }) {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="bg-forest-950 text-white p-8 sm:p-14 rounded-3xl border border-forest-800 space-y-4 shadow-2xl">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-100">
          Target B2B Industries Served
        </h1>
        <p className="text-forest-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          Pragati Exim supplies export-grade botanical raw materials tailored to the exact regulatory and physical specifications of diverse international manufacturing sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRIES.map((ind) => (
          <div key={ind.id} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-forest-950">{ind.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{ind.description}</p>
              
              <div className="bg-forest-50 p-4 rounded-xl border border-forest-100 space-y-1">
                <div className="text-xs font-bold text-forest-900">Featured Ingredients:</div>
                <div className="text-xs text-forest-800">{ind.featuredIngredients.join(" • ")}</div>
              </div>

              <div className="text-xs text-gray-500 italic">
                📋 {ind.complianceNote}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => onOpenRfq(null, 'quote')}
                className="w-full py-3 bg-forest-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2"
              >
                Inquire Solutions for {ind.name} <ArrowRight className="w-4 h-4 text-bronze-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
