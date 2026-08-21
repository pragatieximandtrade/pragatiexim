import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Package } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  onQuickQuote?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickQuote }) => {
  return (
    <div className="bg-white rounded-2xl border border-brand-ivory-300 hover:border-brand-green-700/40 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Product Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-ivory-100">
          <img
            src={product.image}
            alt={`${product.name} supplier & exporter`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {product.badge && (
            <div className="absolute top-3 left-3 bg-brand-green-950/90 backdrop-blur-md text-brand-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-gold-500/30 flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5 text-brand-gold-400" />
              <span>{product.badge}</span>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold-300">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="text-xl font-serif font-bold text-brand-charcoal-900 group-hover:text-brand-green-900 transition-colors">
            <Link to={`/products/${product.slug}`} className="focus:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-brand-charcoal-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Granulation & Packaging info pills */}
          <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
            <span className="bg-brand-ivory-100 text-brand-charcoal-700 px-2 py-0.5 rounded-md border border-brand-ivory-300 font-medium">
              MOQ: {product.moq.split(' ')[0]} {product.moq.split(' ')[1] || 'kg'}
            </span>
            <span className="bg-brand-green-50 text-brand-green-900 px-2 py-0.5 rounded-md border border-brand-green-200 font-medium flex items-center gap-1">
              <Package className="w-3 h-3 text-brand-green-700" />
              1kg – 50kg Packs
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-brand-ivory-200 flex items-center justify-between gap-2">
        <Link
          to={`/products/${product.slug}`}
          className="text-xs font-semibold text-brand-green-900 hover:text-brand-green-700 flex items-center gap-1 transition-colors"
        >
          <span>View Specs</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <button
          type="button"
          onClick={() => onQuickQuote && onQuickQuote(product)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-green-800 hover:bg-brand-green-700 text-white transition-colors shadow-sm"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
};
