import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-all duration-300 ${
          dark 
            ? 'bg-brand-green-900/90 border-brand-green-700 text-brand-gold-300' 
            : 'bg-brand-green-50 border-brand-green-200 text-brand-green-800'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-4.5xl font-serif font-bold tracking-tight leading-tight mb-4 ${
        dark ? 'text-white' : 'text-brand-charcoal-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-brand-charcoal-300' : 'text-brand-charcoal-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
