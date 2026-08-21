import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-brand-green-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-950 via-brand-green-900 to-brand-green-950 opacity-95" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-green-600/10 blur-3xl pointer-events-none" />

      {/* Decorative Texture Grid */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-900 border border-brand-green-700/80 text-brand-gold-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-400" />
              <span>Surat, Gujarat, India • Pan-India & Global Export</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]">
              Premium Pure Spices & Custom Blends for Modern Food Businesses
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-charcoal-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              High-quality powdered spices and customized spice blends for food manufacturers, HoReCa kitchens, spice buyers and export businesses.
            </p>

            {/* Trust Line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-brand-gold-300/90 font-medium py-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400" />
                Domestic Supply
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400" />
                Export Orders
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400" />
                Custom Blends
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-premium hover:shadow-premium-lg flex items-center justify-center gap-2.5 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-brand-green-900/90 hover:bg-brand-green-800 text-white font-semibold text-sm sm:text-base transition-all duration-200 border border-brand-green-700/80 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Products</span>
              </Link>
            </div>

            {/* Factual Guarantee Micro-text */}
            <p className="text-xs text-brand-charcoal-400 pt-2 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold-500 shrink-0" />
              <span>Standard MOQ from 5 kg • COA available on request • FSSAI-compliant processing</span>
            </p>
          </div>

          {/* Hero Right Visuals: Macro Spice Elements & Pure Spice Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-green-700/60 bg-brand-green-900/60 backdrop-blur-md">
                <img
                  src="/images/products/red-chilli-powder.png"
                  alt="Premium pure ground pure ground spices and custom spice blends"
                  className="w-full h-80 sm:h-96 object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-transparent to-transparent opacity-90" />

                {/* Floating Specs Widget */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-green-900/90 backdrop-blur-md p-4 rounded-2xl border border-brand-green-700/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-gold-300">Pure Spice Focus</span>
                    <span className="text-brand-charcoal-300 text-[11px]">Surat, Gujarat</span>
                  </div>
                  <p className="text-xs text-white font-serif">
                    "Consistency in aroma, colour, and flavour across every batch."
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-brand-green-800 text-[11px] text-brand-charcoal-300">
                    <div>
                      <span className="block text-brand-gold-400 font-bold">5 kg</span>
                      <span>Powder MOQ</span>
                    </div>
                    <div>
                      <span className="block text-brand-gold-400 font-bold">10 kg</span>
                      <span>Custom MOQ</span>
                    </div>
                    <div>
                      <span className="block text-brand-gold-400 font-bold">Pan-India</span>
                      <span>Dispatch</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-brand-gold-500 text-brand-green-950 px-4 py-2 rounded-2xl font-bold text-xs shadow-premium flex items-center gap-2 border border-brand-gold-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Pure Spices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 text-center hidden md:flex flex-col items-center justify-center">
          <a
            href="#trust-strip"
            className="inline-flex flex-col items-center text-xs text-brand-charcoal-400 hover:text-brand-gold-300 transition-colors gap-1 group"
          >
            <span>Explore B2B Spice Supply</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
