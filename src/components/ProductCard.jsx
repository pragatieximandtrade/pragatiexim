import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Send, ArrowRight, ShieldCheck, Sparkles, Leaf } from 'lucide-react';

export default function ProductCard({ product, onOpenRfq }) {
  const detailUrl = product.categorySlug === 'herbal-powders'
    ? `/herbal-powders/${product.slug}`
    : `/botanical-extracts/${product.slug}`;

  const isPowder = product.categorySlug === 'herbal-powders';

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-forest-600">
      
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-forest-950 overflow-hidden">
          <img
            src={product.image || '/images/moringa_powder.jpg'}
            alt={`${product.name} - Pragati Exim`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
            {product.organic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-400 text-forest-950 text-[10px] font-extrabold shadow">
                <Award className="w-3 h-3" /> USDA ORGANIC
              </span>
            )}
            {!isPowder && product.range && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-forest-900/90 text-emerald-300 text-[9px] font-bold shadow backdrop-blur-sm border border-forest-700">
                <Sparkles className="w-2.5 h-2.5" /> {product.range}
              </span>
            )}
          </div>

          <div className="absolute bottom-2 right-2">
            <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-medium backdrop-blur-xs">
              MOQ: 50 KG
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span className="text-forest-700 font-bold uppercase tracking-wider flex items-center gap-1">
              {isPowder ? <Leaf className="w-3 h-3 text-emerald-600" /> : <Sparkles className="w-3 h-3 text-amber-600" />}
              {product.category}
            </span>
            {product.filterTag && (
              <span className="bg-forest-50 text-forest-800 px-2 py-0.5 rounded font-medium text-[10px] border border-forest-200">
                {product.filterTag}
              </span>
            )}
          </div>

          <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-forest-800 transition">
            <Link to={detailUrl}>
              {product.name}
            </Link>
          </h3>

          {product.botanicalName && (
            <p className="text-xs text-gray-500 italic font-serif">
              {product.botanicalName}
            </p>
          )}

          {/* Clean Parameter Specifications based on category */}
          <div className="pt-2 text-xs text-gray-600 space-y-1.5 border-t border-gray-100">
            {isPowder ? (
              <>
                {product.plantPart && (
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-gray-500 shrink-0 font-medium">Plant Part:</span>
                    <strong className="text-gray-900 font-semibold">{product.plantPart}</strong>
                  </div>
                )}
                {product.form && (
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-gray-500 shrink-0 font-medium">Form / Mesh:</span>
                    <strong className="text-forest-900 font-semibold">{product.form}</strong>
                  </div>
                )}
              </>
            ) : (
              <>
                {product.standardizedGrade && (
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-gray-500 shrink-0 font-medium">Active Assay:</span>
                    <strong className="text-forest-900 font-semibold truncate max-w-[170px]">{product.standardizedGrade}</strong>
                  </div>
                )}
                {product.analyticalMethod && (
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-gray-500 shrink-0 font-medium">Method:</span>
                    <strong className="text-gray-900 font-semibold">{product.analyticalMethod}</strong>
                  </div>
                )}
              </>
            )}
          </div>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed pt-1">
            {product.description}
          </p>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-gray-100 mt-2">
        <Link
          to={detailUrl}
          className="py-2.5 px-3 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-900 font-bold text-xs text-center transition flex items-center justify-center gap-1"
        >
          View Details <ArrowRight className="w-3 h-3" />
        </Link>
        <button
          onClick={() => onOpenRfq ? onOpenRfq(product, 'quote') : null}
          className="py-2.5 px-3 rounded-xl bg-forest-900 hover:bg-forest-950 text-amber-300 font-bold text-xs text-center transition flex items-center justify-center gap-1 shadow-xs"
        >
          <Send className="w-3 h-3" /> Quote
        </button>
      </div>

    </div>
  );
}
