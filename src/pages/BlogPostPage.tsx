import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BLOG_ARTICLES } from '../data/articles';
import { getArticleSchema, getBreadcrumbSchema } from '../utils/seo';

interface BlogPostPageProps {
  onOpenQuoteModal: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbs = [
    { name: 'Knowledge Base', path: '/blog' },
    { name: article.title, path: `/blog/${article.slug}` }
  ];

  const schemas = [
    getArticleSchema(article),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Knowledge Base', url: '/blog' },
      { name: article.title, url: `/blog/${article.slug}` }
    ])
  ];

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title={article.seo.metaTitle}
        description={article.seo.metaDescription}
        canonicalPath={`/blog/${article.slug}`}
        ogImage={article.image}
        schema={schemas}
      />

      {/* Article Header */}
      <div className="bg-brand-green-950 text-white pt-8 pb-16 border-b border-brand-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <div className="flex items-center gap-3 text-xs text-brand-gold-400 font-semibold uppercase tracking-wider">
            <span>{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-brand-charcoal-300">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-brand-charcoal-300 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-2 text-xs text-brand-charcoal-400">
            Published by <span className="text-white font-medium">{article.author}</span> • Surat, Gujarat
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-6 sm:p-10 md:p-12 shadow-subtle space-y-8">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-brand-ivory-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-brand-green-50 border border-brand-green-200 space-y-3">
            <div className="flex items-center gap-2 text-brand-green-900 font-serif font-bold text-base">
              <Sparkles className="w-4 h-4 text-brand-gold-600" />
              <span>Key Technical Takeaways</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-green-950">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-700 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-brand-charcoal-800 text-sm sm:text-base leading-relaxed">
            {article.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-3 pt-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal-900 text-left">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-brand-charcoal-700">
                    {p}
                  </p>
                ))}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pl-2 pt-2 text-xs sm:text-sm text-brand-charcoal-700">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-600 mt-2 shrink-0"></span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Internal Product Recommendations */}
          {article.relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-brand-ivory-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700 block">
                Relevant Spices in This Guide:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.relatedProducts.map((rp, idx) => (
                  <Link
                    key={idx}
                    to={`/products/${rp.slug}`}
                    className="px-3.5 py-1.5 rounded-lg bg-brand-ivory-100 hover:bg-brand-green-50 text-brand-charcoal-800 hover:text-brand-green-900 border border-brand-ivory-300 text-xs font-semibold transition"
                  >
                    {rp.name} Specifications →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Conversion Box */}
          <div className="bg-brand-green-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-white">Source Specifications for Your Formulation</h3>
              <p className="text-xs text-brand-charcoal-300 mt-1 max-w-md">
                Connect with Pragati Exim’s commercial team in Surat, Gujarat to request batch COAs and custom quotations.
              </p>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-xs sm:text-sm transition-all whitespace-nowrap shadow-sm"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-green-900 hover:text-brand-green-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Technical Guides</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
