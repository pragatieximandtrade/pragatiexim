import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, User, ArrowLeft, Send, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOGS } from '../data/blogs';

export default function BlogPost({ onOpenRfq }) {
  const { slug } = useParams();
  const blog = BLOGS.find(b => b.slug === slug || b.id === slug);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900">Guide Not Found</h2>
        <p className="text-gray-600 text-sm">The article or resource you are looking for is not available.</p>
        <Link to="/resources" className="inline-block px-5 py-2.5 bg-forest-900 text-white rounded-xl text-xs font-bold">
          View All Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-10">
      <SEO
        title={blog.title}
        description={blog.excerpt}
        canonicalUrl={`/resources/${blog.slug}`}
        ogImage={blog.image}
        ogType="article"
        article={blog}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: blog.title, url: `/resources/${blog.slug}` }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-forest-900 transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/resources" className="hover:text-forest-900 transition">Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-forest-950 font-bold line-clamp-1">{blog.title}</span>
        </nav>

        {/* Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          
          <div className="space-y-4">
            <span className="px-3 py-1 bg-forest-100 text-forest-800 text-xs font-bold rounded-full uppercase tracking-wider">
              {blog.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-forest-950 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-y border-gray-100 py-3">
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-3.5 h-3.5 text-forest-700" /> {blog.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-forest-700" /> {blog.readTime}
              </span>
            </div>
          </div>

          <div className="aspect-[16/9] rounded-2xl bg-forest-950 overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* HTML Content */}
          <div 
            className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Bottom Article CTA */}
          <div className="p-6 bg-forest-950 text-white rounded-2xl border border-forest-800 space-y-3">
            <h3 className="font-serif font-bold text-lg text-white">
              Discuss Your Commercial Botanical Sourcing Requirements
            </h3>
            <p className="text-xs text-forest-200 leading-relaxed">
              Connect directly with our export desk for batch Certificates of Analysis, technical specification sheets, and competitive commercial quotes.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onOpenRfq ? onOpenRfq(null, 'quote') : null}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-forest-950 font-bold text-xs rounded-xl inline-flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5 fill-forest-950" /> Request a Bulk Quote
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <Link
              to="/resources"
              className="inline-flex items-center gap-1 text-xs font-bold text-forest-800 hover:text-forest-950 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Resources
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
