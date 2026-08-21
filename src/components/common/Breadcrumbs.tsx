import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm py-2 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-brand-charcoal-200">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
            title="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-brand-gold-400/80 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-brand-gold-300 truncate max-w-[200px] sm:max-w-[360px]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-brand-charcoal-200 hover:text-brand-gold-300 transition-colors truncate max-w-[150px] sm:max-w-[220px]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
