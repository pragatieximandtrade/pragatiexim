import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BLOG_ARTICLES } from '../data/articles';
import { getBreadcrumbSchema } from '../utils/seo';

export const BlogPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Knowledge Base', path: '/blog' }];
  const schema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Knowledge Base', url: '/blog' }
  ]);

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="B2B Spice Sourcing & Technical Knowledge Base | Pragati Exim"
        description="Technical guides, granulation analysis, batch consistency standards, and bulk procurement insights for food manufacturers from Pragati Exim, Surat, Gujarat."
        canonicalPath="/blog"
        schema={schema}
      />

      {/* Page Header */}
      <div className="bg-brand-green-950 text-white pt-10 pb-16 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Technical Resources & Procurement Guides
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Spice Sourcing & Manufacturing Insights
            </h1>
            <p className="text-sm sm:text-base text-brand-charcoal-300 mt-4 leading-relaxed">
              Technical perspectives on particle mesh sizing, volatile oil retention, batch-to-batch consistency, and industrial spice supply standards.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-brand-ivory-300 overflow-hidden shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-ivory-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-green-950/90 text-brand-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-gold-500/30">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-brand-charcoal-400">
                    <span>{article.publishDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-serif font-bold text-brand-charcoal-900 group-hover:text-brand-green-900 transition-colors leading-snug">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-charcoal-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-brand-ivory-200 mt-4 flex items-center justify-between">
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-xs font-bold text-brand-green-900 group-hover:text-brand-green-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
