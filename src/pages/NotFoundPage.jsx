import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Leaf, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="py-24 max-w-xl mx-auto px-4 text-center space-y-6">
      <SEO
        title="Page Not Found (404)"
        description="The page you are looking for does not exist."
        canonicalUrl="/404"
      />
      <div className="text-6xl font-serif font-black text-forest-900">404</div>
      <h1 className="text-2xl font-serif font-bold text-gray-900">Page Not Found</h1>
      <p className="text-sm text-gray-600">
        The requested URL does not exist in the Pragati Exim & Trade website directory.
      </p>
      <div className="pt-2 flex flex-wrap justify-center gap-3">
        <Link to="/" className="px-5 py-2.5 bg-forest-900 text-white font-bold rounded-xl text-xs flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
        <Link to="/herbal-powders" className="px-5 py-2.5 bg-amber-400 text-forest-950 font-bold rounded-xl text-xs flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5" /> Herbal Powders
        </Link>
        <Link to="/botanical-extracts" className="px-5 py-2.5 bg-forest-800 text-emerald-300 font-bold rounded-xl text-xs flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Botanical Extracts
        </Link>
      </div>
    </div>
  );
}
