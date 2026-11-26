import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Award, CheckCircle2, Send, ArrowRight, Leaf, Sparkles, Building2, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY } from '../data/company';

export default function AboutPage({ onOpenRfq }) {
  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="About Pragati Exim & Trade | Indian Botanical Exporter"
        description="Pragati Exim & Trade is an India-based B2B botanical export company supplying USDA Organic herbal powders and standardized botanical extracts to international buyers."
        canonicalUrl="/about-us"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about-us" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-400" /> Export Division Profile
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            About Pragati Exim & Trade
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            Supplying premium, quality-driven Herbal Powders and Standardized Botanical Extracts from India to international commercial buyers, nutraceutical manufacturers, and ingredient distributors.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-amber-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              India: {COMPANY.address.full}
            </span>
            <span className="text-forest-500">•</span>
            <span className="text-emerald-300">
              USA: {COMPANY.address.usa}
            </span>
          </div>
        </div>

        {/* Section 1: Who We Are & What We Export */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              An India-Based B2B Export Partner
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Pragati Exim & Trade</strong> is an export-focused botanical ingredient company headquartered in Surat, Gujarat, India. Our core commercial focus is exclusively dedicated to international B2B ingredient supply chains.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We DO NOT operate a domestic retail brand or sell consumer retail packs. Every operation, from source farm selection and hygienic processing to standardized analytical testing and export documentation, is structured specifically for overseas ingredient importers, contract formulators, and brand owners.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              What We Export
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Two Specialized Divisions
            </h2>
            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#F9F8F3] border border-gray-200 flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs text-forest-950">1. USDA Organic Herbal Powders</h3>
                  <p className="text-[11px] text-gray-600">
                    Moringa, Shatavari, Turmeric, Ashwagandha, Psyllium Husk, Ceylon Cinnamon, Ginger, and Garlic powders with organic compliance.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F9F8F3] border border-gray-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs text-forest-950">2. Standardized Botanical Extracts</h3>
                  <p className="text-[11px] text-gray-600">
                    42 primary standardized phytochemical extracts including Curcumin 95% USP, Berberine 97%, Gymnema 75%, Ginkgo, Resveratrol, and Ginseng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Quality Philosophy & Buyer Focus */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Quality-Oriented Supply & Regulatory Compliance
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We recognize that international ingredient buyers require reliable active constituent consistency, comprehensive microbiological and contaminant screening, and prompt documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY.highlights.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#F9F8F3] border border-gray-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-forest-900 text-amber-300 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="font-serif font-bold text-base text-forest-950">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: CTA Card */}
        <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-forest-800">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Partner with Pragati Exim for Your Botanical Sourcing
          </h2>
          <p className="text-forest-200 text-xs sm:text-sm max-w-xl mx-auto">
            Discuss your target specifications, annual volume projections, or sample requirements with our export desk.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onOpenRfq ? onOpenRfq(null, 'quote') : null}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-forest-950 font-extrabold rounded-xl text-sm transition shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-forest-950" /> Request a Commercial Quote
            </button>
            <Link
              to="/contact-us"
              className="px-8 py-3.5 bg-forest-800 hover:bg-forest-700 text-white font-bold rounded-xl text-sm transition border border-forest-600"
            >
              Contact Export Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
