import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Globe, BookOpen, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import { HERBAL_POWDERS, BOTANICAL_EXTRACTS } from '../data/products';
import { BLOGS } from '../data/blogs';

const CORE_PAGES = [
  {
    name: 'Home',
    url: '/',
    desc: 'Overview of Pragati Exim & Trade B2B botanical export portfolio and supply model.'
  },
  {
    name: 'Herbal Powders (USDA Organic)',
    url: '/herbal-powders',
    desc: 'Browse 8 USDA Organic Certified whole-milled herbal powders exported from India.'
  },
  {
    name: 'Botanical Extracts (42 Primary Extracts)',
    url: '/botanical-extracts',
    desc: 'Explore standardized phytochemical extracts verified by HPLC, UV, and gravimetric assays.'
  },
  {
    name: 'About Pragati Exim & Trade',
    url: '/about-us',
    desc: 'Learn about our Surat, Gujarat headquarters, quality-first sourcing, and B2B commitment.'
  },
  {
    name: 'Certifications & Quality Compliance',
    url: '/certifications',
    desc: 'Review GMP, ISO 22000, HACCP, USDA Organic, Halal, Star-K Kosher, and FSSAI credentials.'
  },
  {
    name: 'Global Export Markets & Logistics',
    url: '/export-markets',
    desc: 'International shipping corridors, export documentation (COA, TDS, MSDS), and packaging.'
  },
  {
    name: 'B2B Sourcing Guides & Resources',
    url: '/resources',
    desc: 'Technical articles on Moringa sourcing, Berberine HCl assays, and COA inspection.'
  },
  {
    name: 'Contact Export Desk / Request Quote',
    url: '/contact-us',
    desc: 'Submit bulk commercial inquiries (MOQ 50 KG) and sample requests to our export team.'
  }
];

export default function SitemapPage() {
  const registeredExtracts = BOTANICAL_EXTRACTS.filter(p => p.range === 'Registered / Clinically Studied');
  const indigenousExtracts = BOTANICAL_EXTRACTS.filter(p => p.range === 'Indigenous Range');
  const globalExtracts = BOTANICAL_EXTRACTS.filter(p => p.range === 'Global Range');

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="Website Directory & HTML Sitemap"
        description="Complete directory of Pragati Exim & Trade pages, including USDA Organic herbal powders, 42 standardized botanical extracts, quality certifications, export logistics, and B2B sourcing guides."
        canonicalUrl="/sitemap"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Site Directory', url: '/sitemap' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-emerald-400" /> Complete Site Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ivory-100">
            Pragati Exim & Trade — Website Pages & Product Directory
          </h1>
          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            Direct access to every corporate section, USDA Organic herbal powder specification page, standardized botanical extract sheet, and B2B procurement guide.
          </p>
        </div>

        {/* Core Pages Grid */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-forest-950 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-forest-800" /> Primary Website Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CORE_PAGES.map((page) => (
              <Link
                key={page.url}
                to={page.url}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-forest-700 hover:shadow-md transition flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="font-serif font-bold text-lg text-forest-950 group-hover:text-forest-700 transition">
                    {page.name}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{page.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        {/* Herbal Powders List */}
        <section className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-serif font-bold text-forest-950 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-600" /> USDA Organic Herbal Powders ({HERBAL_POWDERS.length})
            </h2>
            <Link to="/herbal-powders" className="text-xs font-bold text-forest-800 hover:underline flex items-center gap-1">
              Open Category Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {HERBAL_POWDERS.map((p) => (
              <Link
                key={p.id}
                to={`/herbal-powders/${p.slug}`}
                className="p-3.5 rounded-xl bg-[#F9F8F3] hover:bg-amber-50 border border-gray-200 hover:border-amber-400 transition group"
              >
                <div className="font-bold text-sm text-forest-950 group-hover:text-forest-800">{p.name}</div>
                <div className="text-xs text-gray-500 italic">{p.botanicalName}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Botanical Extracts List */}
        <section className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-serif font-bold text-forest-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" /> Standardized Botanical Extracts ({BOTANICAL_EXTRACTS.length})
            </h2>
            <Link to="/botanical-extracts" className="text-xs font-bold text-forest-800 hover:underline flex items-center gap-1">
              Open Category Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {[
            { label: 'Registered / Clinically Studied Extracts', items: registeredExtracts },
            { label: 'Indigenous Extract Range', items: indigenousExtracts },
            { label: 'Global Extract Range', items: globalExtracts }
          ].map((group) => (
            <div key={group.label} className="space-y-3">
              <h3 className="font-serif font-bold text-base text-forest-900">
                {group.label} ({group.items.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {group.items.map((p) => (
                  <Link
                    key={p.id}
                    to={`/botanical-extracts/${p.slug}`}
                    className="p-3.5 rounded-xl bg-[#F9F8F3] hover:bg-emerald-50 border border-gray-200 hover:border-emerald-400 transition group"
                  >
                    <div className="font-bold text-sm text-forest-950 group-hover:text-forest-800">{p.name}</div>
                    <div className="text-xs text-gray-500 italic truncate">{p.botanicalName}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Resource Guides & Legal */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-forest-950 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-forest-800" /> B2B Sourcing Guides ({BLOGS.length})
            </h2>
            <div className="space-y-3">
              {BLOGS.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/resources/${blog.slug}`}
                  className="block p-4 rounded-xl bg-[#F9F8F3] hover:bg-forest-50 border border-gray-200 hover:border-forest-600 transition"
                >
                  <div className="font-bold text-sm text-forest-950">{blog.title}</div>
                  <div className="text-xs text-gray-600 mt-1 line-clamp-2">{blog.excerpt}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-forest-950">Compliance & Legal</h2>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="block p-4 rounded-xl bg-[#F9F8F3] hover:bg-forest-50 border border-gray-200 transition font-bold text-sm text-forest-950">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block p-4 rounded-xl bg-[#F9F8F3] hover:bg-forest-50 border border-gray-200 transition font-bold text-sm text-forest-950">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
