import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, ArrowRight, ShieldCheck, Globe, Package, Award, 
  CheckCircle2, Layers, Check, ChevronRight, Sparkles, Leaf, FileText, Anchor, Truck
} from 'lucide-react';
import SEO from '../components/SEO';
import TrustStrip from '../components/TrustStrip';
import ProductCard from '../components/ProductCard';
import CertificationsStrip from '../components/CertificationsStrip';
import { HERBAL_POWDERS, BOTANICAL_EXTRACTS } from '../data/products';
import { COMPANY } from '../data/company';

export default function Home({ onOpenRfq }) {
  const featuredPowders = HERBAL_POWDERS.slice(0, 4);
  const featuredExtracts = [
    BOTANICAL_EXTRACTS.find(e => e.slug === 'turmeric-curcumin') || BOTANICAL_EXTRACTS[0],
    BOTANICAL_EXTRACTS.find(e => e.slug === 'berberine-berberis-aristata') || BOTANICAL_EXTRACTS[4],
    BOTANICAL_EXTRACTS.find(e => e.slug === 'gymnema') || BOTANICAL_EXTRACTS[2],
    BOTANICAL_EXTRACTS.find(e => e.slug === 'ginkgo-extract') || BOTANICAL_EXTRACTS[3]
  ].filter(Boolean);

  const exportSteps = [
    { num: "01", title: "Buyer Inquiry", desc: "Submit your ingredient specifications, target assay, quantity, and destination." },
    { num: "02", title: "Product Discussion", desc: "Technical review of pharmacopeial grades, mesh sizes, and country compliance." },
    { num: "03", title: "Specification Confirmation", desc: "Alignment on detailed Certificate of Analysis (COA) parameters." },
    { num: "04", title: "Sample & Documentation", desc: "Evaluation samples dispatched along with Technical Data Sheets (TDS) and MSDS." },
    { num: "05", title: "Order Confirmation", desc: "Commercial invoice, Proforma terms, and production/dispatch scheduling." },
    { num: "06", title: "Quality & Packing", desc: "Batch testing, food-grade double poly-lined packing, and palletization." },
    { num: "07", title: "Export Documentation", desc: "Phytosanitary certificate, Certificate of Origin, Organic TC, and customs paperwork." },
    { num: "08", title: "Shipment Coordination", desc: "Freight booking via suitable Indian maritime ports or international air cargo." },
    { num: "09", title: "International Delivery", desc: "Customs clearance support and safe destination delivery to buyer warehouse." }
  ];

  return (
    <div className="w-full overflow-hidden">
      <SEO
        title="Herbal Powders & Standardized Botanical Extracts Exporter India"
        description="Pragati Exim & Trade is an India-based B2B exporter supplying USDA Organic herbal powders and standardized botanical extracts to global ingredient buyers and manufacturers."
        canonicalUrl="/"
      />
      
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="relative bg-forest-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-forest-800/40 via-forest-950 to-forest-950 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700/80 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Globe className="w-4 h-4 text-emerald-400" /> India-Based Botanical Ingredient Exporter
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-ivory-100 leading-[1.15]">
                Herbal Powders & Botanical Extracts — <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">For Global Markets</span>
              </h1>

              <p className="text-forest-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Exporting quality-driven herbal powders and standardized botanical extracts from India to international B2B buyers, nutraceutical companies, dietary supplement manufacturers, and ingredient distributors worldwide.
              </p>

              {/* Trust Badges */}
              <div className="py-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-ivory-200">
                <span className="flex items-center gap-1.5 bg-forest-900/90 px-3 py-1.5 rounded-lg border border-forest-800 text-amber-300 font-bold">
                  <Award className="w-4 h-4 text-emerald-400" /> USDA Organic Herbal Powders
                </span>
                <span className="flex items-center gap-1.5 bg-forest-900/90 px-3 py-1.5 rounded-lg border border-forest-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Export Focused (B2B Supply Only)
                </span>
                <span className="flex items-center gap-1.5 bg-forest-900/90 px-3 py-1.5 rounded-lg border border-forest-800 text-emerald-300 font-semibold">
                  <Package className="w-4 h-4 text-emerald-400" /> Standard MOQ from 50 KG
                </span>
              </div>

              {/* Hero CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenRfq(null, 'quote')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-forest-950 font-extrabold rounded-xl shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-base"
                >
                  <Send className="w-5 h-5 fill-forest-950" /> Request a Quote
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('product-categories');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-7 py-4 bg-forest-900/90 hover:bg-forest-800 text-white font-bold rounded-xl border border-forest-700 transition flex items-center justify-center gap-2 text-base"
                >
                  Explore Categories <ArrowRight className="w-5 h-5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Right Hero Card Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-forest-900/90 border border-forest-700/80 p-6 shadow-2xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between border-b border-forest-800 pb-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">EXPORT PORTFOLIO SPOTLIGHT</span>
                    <h2 className="text-lg font-serif font-bold text-white">Pure Indian Botanical Ingredients</h2>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-[11px] font-bold rounded-lg border border-emerald-500/40">
                    B2B EXPORT
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Organic Moringa", spec: "USDA Organic Certified", img: "/images/moringa_powder.jpg", url: "/herbal-powders/moringa-powder" },
                    { title: "Turmeric Extract", spec: "95% Curcuminoids (USP)", img: "/images/curcumin_extract.jpg", url: "/botanical-extracts/turmeric-curcumin" },
                    { title: "Berberine 97%", spec: "Berberis aristata (HPLC)", img: "/images/berberine_extract.jpg", url: "/botanical-extracts/berberine-berberis-aristata" },
                    { title: "Organic Ashwagandha", spec: "Withania somnifera Root", img: "/images/ashwagandha_powder.jpg", url: "/herbal-powders/ashwagandha-powder" }
                  ].map((item, idx) => (
                    <Link key={idx} to={item.url} className="group block bg-forest-950/80 rounded-xl p-2.5 border border-forest-800 hover:border-amber-400 transition">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-black">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      </div>
                      <div className="font-bold text-xs text-white truncate">{item.title}</div>
                      <div className="text-[10px] text-forest-300 truncate">{item.spec}</div>
                    </Link>
                  ))}
                </div>

                <div className="bg-forest-950 p-3.5 rounded-xl border border-forest-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-ivory-100 font-semibold">
                    <span>Export Headquarters:</span>
                    <span className="text-amber-300">{COMPANY.address.city}, Gujarat, India</span>
                  </div>
                  <div className="flex items-center justify-between text-forest-300 text-[11px]">
                    <span>Commercial Model:</span>
                    <span>Direct International B2B Supply</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* =========================================================================
          SECTION 2 — EXPORT-FOCUSED INTRODUCTION
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-forest-800 bg-forest-100 px-3.5 py-1 rounded-full border border-forest-200">
                About Pragati Exim & Trade
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950 leading-tight">
                India-Based Botanical Ingredient Exporter for Global B2B Sourcing
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <strong>Pragati Exim & Trade</strong> operates exclusively as an international B2B export partner for global ingredient buyers, nutraceutical brands, pharmaceutical formulators, and food manufacturers. We do not sell retail consumer products or domestic retail packs.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                By bridging verified Indian agricultural cultivation and advanced phytochemical processing with strict destination-market compliance, we provide dependable batch-to-batch consistency, complete technical documentation (COA, MSDS, TDS), and streamlined international freight coordination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F9F8F3] border border-gray-200 space-y-1">
                  <div className="font-bold text-forest-950 text-sm flex items-center gap-1.5">
                    <Leaf className="w-4 h-4 text-emerald-600" /> Herbal Powders Division
                  </div>
                  <p className="text-xs text-gray-600">
                    USDA Organic Certified whole plant, root, bark, and seed powders milled under gentle low-temperature controls.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F9F8F3] border border-gray-200 space-y-1">
                  <div className="font-bold text-forest-950 text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> Botanical Extracts Division
                  </div>
                  <p className="text-xs text-gray-600">
                    42 primary standardized phytochemical extracts with quantified marker assays verified via HPLC, UV, and GV.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 hover:bg-forest-950 text-white font-bold rounded-xl transition text-sm shadow"
                >
                  Know More About Pragati Exim <ArrowRight className="w-4 h-4 text-amber-300" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F9F8F3] p-8 rounded-3xl border border-gray-200 space-y-6">
              <h3 className="font-serif font-bold text-xl text-forest-950 border-b border-gray-200 pb-3">
                Key B2B Supply Principles
              </h3>
              <ul className="space-y-3.5 text-xs text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Export Focused:</strong> Pure commercial B2B supply model tailored to overseas importers, distributors, and contract manufacturers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Documentation:</strong> Full export batch documentation including Certificate of Analysis, Heavy Metal Screen, Microbiological Analysis, and MSDS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Flexible Export Quantities:</strong> Standard MOQ of 50 KG per product up to multi-metric ton containerized sea shipments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sustainable Partnerships:</strong> Long-term supply agreements ensuring consistent quality and transparent commercial communication.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — TWO MAJOR PRODUCT CATEGORIES
          ========================================================================= */}
      <section id="product-categories" className="py-20 bg-[#F9F8F3] border-t border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
              Two Primary Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
              Herbal Powders & Standardized Botanical Extracts
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Engineered specifically for international food, nutraceutical, pharmaceutical, wellness, and formulation applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Category Card 1: Herbal Powders */}
            <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm hover:shadow-md transition space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 bg-amber-400 text-forest-950 text-xs font-extrabold rounded-lg flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> USDA ORGANIC CERTIFIED
                  </span>
                  <span className="text-xs font-bold text-forest-800 bg-forest-100 px-2.5 py-1 rounded-md">
                    8 Core Products
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-950">Herbal Powders</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Premium herbal and plant-based powders suitable for international food, nutraceutical, wellness, and ingredient applications. Cultivated and milled under controlled low-heat parameters.
                </p>

                <div className="pt-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Herbal Powders Range:</div>
                  <div className="flex flex-wrap gap-2">
                    {HERBAL_POWDERS.map(p => (
                      <Link
                        key={p.id}
                        to={`/herbal-powders/${p.slug}`}
                        className="px-3 py-1 bg-[#F9F8F3] hover:bg-amber-100 border border-amber-200 text-amber-950 text-xs font-bold rounded-lg transition"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/herbal-powders"
                  className="w-full py-3 bg-forest-900 hover:bg-forest-950 text-amber-300 font-bold rounded-xl text-center shadow transition flex items-center justify-center gap-2 text-sm"
                >
                  Explore Herbal Powders <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category Card 2: Botanical Extracts */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-200/80 shadow-sm hover:shadow-md transition space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 bg-forest-900 text-emerald-300 text-xs font-bold rounded-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> STANDARDIZED PHYTOCHEMICALS
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                    42 Primary Extracts
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-950">Botanical Extracts</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Botanical extracts and standardized herbal ingredients sourced for international nutraceutical, pharmaceutical, food, wellness, and formulation applications with verified HPLC / UV assays.
                </p>

                <div className="pt-2">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Featured Extract Ranges:</div>
                  <div className="flex flex-wrap gap-2">
                    {['Registered / Clinically Studied', 'Indigenous Range', 'Global Range', 'Berberine 97%', 'Curcumin 95% USP', 'Gymnemic Acid 75%', 'Resveratrol 98%'].map(item => (
                      <span key={item} className="px-3 py-1 bg-[#F9F8F3] border border-gray-200 text-gray-800 text-xs font-semibold rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/botanical-extracts"
                  className="w-full py-3 bg-forest-900 hover:bg-forest-950 text-white font-bold rounded-xl text-center shadow transition flex items-center justify-center gap-2 text-sm"
                >
                  Explore Botanical Extracts <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 & 5 — FEATURED HERBAL POWDERS & BOTANICAL EXTRACTS
          ========================================================================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Powders Showcase */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> USDA Organic Range
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950 mt-1">
                  Featured Herbal Powders
                </h3>
              </div>
              <Link
                to="/herbal-powders"
                className="inline-flex items-center gap-1.5 text-forest-800 hover:text-forest-950 font-bold text-xs bg-forest-50 hover:bg-forest-100 px-4 py-2 rounded-xl transition border border-forest-200 shrink-0"
              >
                View All 8 Herbal Powders <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPowders.map((p) => (
                <ProductCard key={p.id} product={p} onOpenRfq={onOpenRfq} />
              ))}
            </div>
          </div>

          {/* Extracts Showcase */}
          <div className="space-y-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Phytochemical Extracts
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950 mt-1">
                  Featured Botanical Extracts
                </h3>
              </div>
              <Link
                to="/botanical-extracts"
                className="inline-flex items-center gap-1.5 text-forest-800 hover:text-forest-950 font-bold text-xs bg-forest-50 hover:bg-forest-100 px-4 py-2 rounded-xl transition border border-forest-200 shrink-0"
              >
                View All 42 Botanical Extracts <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredExtracts.map((p) => (
                <ProductCard key={p.id} product={p} onOpenRfq={onOpenRfq} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — WHY CHOOSE PRAGATI EXIM
          ========================================================================= */}
      <section className="py-20 bg-[#F9F8F3] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800 bg-forest-100 px-3.5 py-1 rounded-full border border-forest-200">
              Our Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
              Why Choose Pragati Exim?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Reliable, quality-driven botanical ingredient supply tailored to international B2B requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY.highlights.map((h, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold text-sm border border-forest-200">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-forest-950">{h.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — QUALITY & COMPLIANCE
          ========================================================================= */}
      <section className="py-20 bg-forest-950 text-white border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-forest-900 px-3.5 py-1 rounded-full border border-forest-800">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ivory-100">
                Quality & Regulatory Compliance
              </h2>
              <p className="text-forest-200 text-sm leading-relaxed">
                Pragati Exim maintains a disciplined quality-focused supply framework to ensure that every export batch satisfies buyer specifications and destination country food/ingredient regulations.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Quality-Focused Sourcing", desc: "Rigorous botanical identification and verification of raw material origin." },
                  { title: "Product Specifications & Assay", desc: "Verified HPLC, UV, and titration marker assay values with batch Certificates of Analysis." },
                  { title: "Export Documentation Support", desc: "MSDS, Technical Data Sheets, Certificate of Origin, and Phytosanitary documentation." },
                  { title: "Buyer-Specific Parameters", desc: "Customized mesh sizes, microbial parameters, and packaging according to buyer requirements." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-forest-900/60 p-3.5 rounded-xl border border-forest-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs text-white">{item.title}</div>
                      <div className="text-[11px] text-forest-300">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-forest-900 p-8 rounded-3xl border border-forest-800 space-y-6">
              <h3 className="font-serif font-bold text-xl text-white border-b border-forest-800 pb-3">
                Standard B2B Documentation
              </h3>
              <p className="text-xs text-forest-200 leading-relaxed">
                Every commercial export shipment includes comprehensive technical documentation:
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> Certificate of Analysis (COA)
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> Technical Data Sheet (TDS)
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> Material Safety Data Sheet (MSDS)
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> USDA Organic Transaction Certificate (Organic range)
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> Phytosanitary & Origin Documentation
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/certifications"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-forest-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition"
                >
                  View Certification Framework <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — EXPORT PROCESS (9 STEPS)
          ========================================================================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800 bg-forest-100 px-3.5 py-1 rounded-full border border-forest-200">
              End-to-End Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
              Our Export Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A structured step-by-step export workflow reinforcing our international B2B business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exportSteps.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-[#F9F8F3] border border-gray-200 hover:border-forest-600 transition space-y-2 relative">
                <span className="text-2xl font-black text-amber-500/80 font-serif block">
                  {step.num}
                </span>
                <h3 className="font-serif font-bold text-base text-forest-950">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — GLOBAL EXPORT SECTION
          ========================================================================= */}
      <section className="py-20 bg-[#F9F8F3] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
              Global B2B Sourcing
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
              Serving Global Markets from India
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Supporting international buyers with India-origin herbal powders and botanical ingredients.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <Globe className="w-12 h-12 text-forest-800 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-forest-950">
                Reliable Freight & International Documentation
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {COMPANY.exportLogistics.statement} We coordinate complete shipping documentation, customs clearance papers, and international carrier tracking.
              </p>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/export-markets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 hover:bg-forest-950 text-white font-bold rounded-xl text-sm transition"
              >
                Learn More About Export Reach & Logistics <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — CTA / REQUEST A QUOTE BANNER
          ========================================================================= */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-forest-800">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="px-3.5 py-1 bg-amber-400 text-forest-950 text-xs font-extrabold uppercase tracking-wider rounded-md">
                Direct Export Desk
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Request a Commercial Quote for Your Ingredient Requirement
              </h2>
              <p className="text-forest-200 text-xs sm:text-sm leading-relaxed">
                Connect directly with our export team in Surat, Gujarat. Standard MOQ is 50 KG. Technical specifications available upon request.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenRfq(null, 'quote')}
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-forest-950 font-extrabold rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 fill-forest-950" /> Request a Quote
              </button>
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-7 py-3.5 bg-forest-800 hover:bg-forest-700 text-white font-bold rounded-xl border border-forest-600 transition text-sm"
              >
                Contact Export Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — OUR CERTIFICATIONS (MATCHING REFERENCE ASSETS)
          ========================================================================= */}
      <CertificationsStrip title="Our Certifications & Quality Standards" showHeader={true} showCta={true} />

    </div>
  );
}
