import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-brand-ivory-50 flex items-center justify-center px-4 py-20">
      <SEOHead
        title="404 — Page Not Found | Pragati Exim"
        description="The requested page could not be found. Explore Pragati Exim's spice catalogue or request a quotation."
      />

      <div className="max-w-md w-full bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-10 text-center shadow-premium space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-brand-green-50 text-brand-green-900 flex items-center justify-center font-serif font-bold text-2xl mx-auto border border-brand-green-200">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal-900">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
          The spice product or resource you are looking for may have moved or been updated.
        </p>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="py-3 px-5 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="py-3 px-5 rounded-xl bg-brand-ivory-100 hover:bg-brand-ivory-200 text-brand-charcoal-900 text-xs sm:text-sm font-semibold transition-all border border-brand-ivory-300 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Browse 17 Products Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
