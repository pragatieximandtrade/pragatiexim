import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ChevronRight, Clock, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOGS } from '../data/blogs';

export default function BlogHub() {
  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="B2B Sourcing Guides & Technical Resources"
        description="Comprehensive technical and procurement guides for international B2B buyers sourcing herbal powders and standardized botanical extracts from India."
        canonicalUrl="/resources"
        itemList={{
          name: "B2B Sourcing Guides & Technical Resources",
          items: BLOGS.map(b => ({ name: b.title, url: `/resources/${b.slug}` }))
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-3 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-emerald-400" /> Procurement Knowledge Base
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            B2B Botanical Sourcing Guides & Technical Resources
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            In-depth procurement guides, analytical assay overviews, and international import compliance insights for formulators and ingredient buyers.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-forest-600"
            >
              <div>
                <div className="aspect-[16/9] bg-forest-950 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="text-forest-800 font-bold uppercase tracking-wider bg-forest-50 px-2 py-0.5 rounded">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" /> {blog.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-lg text-gray-900 group-hover:text-forest-800 transition line-clamp-2">
                    <Link to={`/resources/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/resources/${blog.slug}`}
                  className="w-full py-2.5 bg-forest-50 hover:bg-forest-100 text-forest-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition"
                >
                  Read Procurement Guide <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
