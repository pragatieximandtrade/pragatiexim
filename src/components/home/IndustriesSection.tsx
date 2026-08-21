import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Utensils, Sparkles, ChefHat, Building2, Globe, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: Factory,
      title: 'Food & Beverage Manufacturers',
      desc: 'Bulk powders engineered for dry mixes, extruded snacks, seasonings, sauces, and packaged foods requiring exact granulation and aroma stability.'
    },
    {
      icon: Utensils,
      title: 'Ready-to-Eat Food Brands',
      desc: 'High-consistency masalas and single spices for thermal processing, retort pouches, and frozen meals where repeatable flavor is paramount.'
    },
    {
      icon: Sparkles,
      title: 'Spice & Seasoning Companies',
      desc: 'Single-origin base powders with defined mesh counts and essential oil retention, serving as reliable raw materials for retail blenders.'
    },
    {
      icon: ChefHat,
      title: 'HoReCa Kitchens & Catering',
      desc: 'Standardized spice blends and bulk powders for commercial hotel chains, central commissary kitchens, and restaurant networks.'
    },
    {
      icon: Building2,
      title: 'Bulk Spice Buyers',
      desc: 'Dependable long-term spice supply contracts with predictable batch-to-batch quality and stable Pan-India dispatch from Surat.'
    },
    {
      icon: Globe,
      title: 'Export-Oriented Businesses',
      desc: 'Pure Indian pure spices and custom blends processed under controlled conditions for overseas distribution, repacking units, and food processors.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-50 border-b border-brand-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Market Segments"
          title="Who We Supply To"
          subtitle="Supplying food businesses with specification-led pure spices and custom blends built for consistent manufacturing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-brand-ivory-300 hover:border-brand-green-700/40 hover:shadow-premium transition-all duration-300 space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-50 border border-brand-green-200 text-brand-green-800 flex items-center justify-center group-hover:bg-brand-green-800 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-charcoal-900 group-hover:text-brand-green-900 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-ivory-200">
                  <span className="text-[11px] font-bold text-brand-green-800 group-hover:text-brand-green-700 inline-flex items-center gap-1">
                    <span>Specification-Led Supply</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-green-900 hover:text-brand-green-700 transition-colors"
          >
            <span>Explore Industry Application Matrices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
