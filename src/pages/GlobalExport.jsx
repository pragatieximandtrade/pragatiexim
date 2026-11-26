import React from 'react';
import { Globe, Plane, Ship, ShieldCheck, FileText, CheckCircle2, Send, ArrowRight, Package } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY } from '../data/company';

export default function GlobalExport({ onOpenRfq }) {
  const regions = [
    { name: "North America", markets: "United States, Canada", desc: "Supporting US & Canadian nutraceutical brands with standard 25 KG drums and complete batch documentation." },
    { name: "European Union & UK", markets: "United Kingdom, Germany, France, Netherlands", desc: "Compliance with European food supplement parameters and pesticide screening guidelines." },
    { name: "Middle East & GCC", markets: "UAE, Saudi Arabia, Oman, Qatar", desc: "Supplying Halal-certified botanical extracts and organic herbal powders to regional formulation centers." },
    { name: "Asia-Pacific", markets: "Australia, Japan, South Korea, Singapore", desc: "Coordinating air and ocean cargo with strict moisture and quarantine compliance." },
    { name: "Latin America", markets: "Brazil, Mexico, Colombia", desc: "Bulk commercial shipments with Spanish/Portuguese bilingual documentation support." },
    { name: "Africa", markets: "South Africa, Egypt, Kenya", desc: "Commercial ingredient supply for regional food and herbal product manufacturers." }
  ];

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="Global Export Markets & International Logistics"
        description="Pragati Exim & Trade coordinates international shipping of herbal powders and botanical extracts from India to buyers across North America, Europe, Asia, and the Middle East."
        canonicalUrl="/export-markets"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Export Markets", url: "/export-markets" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-emerald-400" /> International Supply Network
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            Serving Global Markets from India
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            Supporting international buyers, importers, and supplement manufacturers with India-origin herbal powders and standardized botanical ingredients.
          </p>

          <div className="pt-2 text-xs text-amber-300 font-medium max-w-2xl">
            {COMPANY.exportLogistics.statement}
          </div>
        </div>

        {/* Global Regions Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
              International Buyer Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Export Destination Markets
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Reliable B2B botanical ingredient supply configured for regional import compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-forest-950">{r.name}</h3>
                  <Globe className="w-4 h-4 text-forest-700" />
                </div>
                <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  {r.markets}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logistics & Shipping Capabilities */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Freight & Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Export Logistics & Freight Management
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              We coordinate transparent Incoterms (FOB, CIF, CFR, DAP) to streamline commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-gray-200 space-y-2">
              <Ship className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif font-bold text-base text-forest-950">Ocean Freight (FCL / LCL)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cost-effective sea shipping for multi-ton herbal powder consignments and palletized botanical extract drums.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-gray-200 space-y-2">
              <Plane className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif font-bold text-base text-forest-950">Air Cargo Express</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rapid international air freight for high-value standardized extracts, time-sensitive formulation runs, and commercial sample evaluations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F9F8F3] border border-gray-200 space-y-2">
              <Package className="w-8 h-8 text-forest-800" />
              <h3 className="font-serif font-bold text-base text-forest-950">Export Packaging Standard</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {COMPANY.exportLogistics.packagingStandard}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-forest-800">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Discuss Your Destination Port & Freight Requirements
          </h2>
          <p className="text-forest-200 text-xs sm:text-sm max-w-xl mx-auto">
            Our international commercial team will prepare a formal CIF or FOB quote tailored to your port of destination.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenRfq ? onOpenRfq(null, 'quote') : null}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-forest-950 font-extrabold rounded-xl text-sm transition shadow-lg inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4 fill-forest-950" /> Request Export Quote
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
