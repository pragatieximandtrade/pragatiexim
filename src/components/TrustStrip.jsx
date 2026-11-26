import React from 'react';
import { ShieldCheck, Package, Globe, Award, Box, Anchor } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-[#F3F0E6] to-amber-50 border-y border-amber-200/80 py-7 text-forest-950 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center md:text-left">
          {[
            { icon: ShieldCheck, title: "B2B Bulk Supply", sub: "Commercial Exporter Only" },
            { icon: Package, title: "MOQ from 50 KG", sub: "Flexible Bulk Scalability" },
            { icon: Award, title: "USDA Organic Certified", sub: "For Herbal Powders Range" },
            { icon: Globe, title: "International Export", sub: "Global Freight Support" },
            { icon: Anchor, title: "India-Based Export Partner", sub: "Surat, Gujarat Headquarters" },
            { icon: Box, title: "USA Extract Inventory", sub: "Selected Stocked Extracts" }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-2.5 p-2 rounded-xl hover:bg-white/60 transition">
                <div className="w-9 h-9 rounded-xl bg-forest-900 text-bronze-300 flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-forest-950 tracking-wide">{item.title}</div>
                  <div className="text-[10px] text-gray-600 font-medium">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
