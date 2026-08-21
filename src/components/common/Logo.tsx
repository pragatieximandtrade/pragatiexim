import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md' }) => {
  const isDarkBg = variant === 'dark';

  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  return (
    <Link to="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
      {/* Ultra-Creative Luxury Spice Mark */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Outer Shield Ring */}
          <rect
            x="6"
            y="6"
            width="108"
            height="108"
            rx="28"
            fill={isDarkBg ? "#071812" : "#0d2b20"}
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="3"
          />

          {/* Inner Delicate Geometry - 8-Point Star Geometry */}
          <rect
            x="14"
            y="14"
            width="92"
            height="92"
            rx="22"
            stroke="url(#goldLineGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.7"
          />

          {/* Orbit Spice Arc (Global Export Symbol) */}
          <path
            d="M 25 75 A 40 40 0 0 1 95 45"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Creative Monogram 'P' fused with Spice Leaf & Flame */}
          {/* Stem of P */}
          <path
            d="M 42 30 L 42 90 C 42 90, 48 90, 50 86 L 50 30 Z"
            fill="url(#luxuryGoldGrad)"
          />
          
          {/* Top Loop of P forming a Spice Leaf Curve */}
          <path
            d="M 46 30 C 68 28, 86 40, 86 54 C 86 68, 68 78, 46 76 L 46 64 C 62 65, 73 58, 73 54 C 73 48, 62 40, 46 41 Z"
            fill="url(#luxuryGoldGrad)"
          />

          {/* Radiant Sunburst / Star Anise Motif in P Center */}
          <path
            d="M 60 48 L 62 52 L 66 54 L 62 56 L 60 60 L 58 56 L 54 54 L 58 52 Z"
            fill="#FBBF24"
          />

          {/* Spice Leaves Accents */}
          <path
            d="M 30 40 C 24 35, 20 45, 30 52 C 35 48, 32 40, 30 40 Z"
            fill="#D97706"
            opacity="0.9"
          />
          
          {/* Gold Sparkle Diamonds */}
          <polygon points="90,26 93,31 98,31 94,35 96,40 90,37 84,40 86,35 82,31 87,31" fill="#FBBF24" opacity="0.8" />
          <circle cx="28" cy="85" r="3" fill="#FBBF24" />

          {/* Gradients */}
          <defs>
            <linearGradient id="luxuryGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="30%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            <linearGradient id="goldLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif font-bold ${titleSizes[size]} tracking-tight leading-none transition-colors ${
              isDarkBg ? 'text-white group-hover:text-brand-gold-300' : 'text-brand-green-950 group-hover:text-brand-green-800'
            }`}
          >
            PRAGATI
          </span>
          <span className="text-brand-gold-500 font-serif font-bold text-xs">✦</span>
          <span
            className={`font-serif font-bold ${titleSizes[size]} tracking-tight leading-none transition-colors ${
              isDarkBg ? 'text-brand-gold-300' : 'text-brand-gold-700'
            }`}
          >
            EXIM
          </span>
        </div>
        
        <span
          className={`text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-extrabold mt-1.5 transition-colors ${
            isDarkBg ? 'text-brand-gold-400' : 'text-brand-spice-700'
          }`}
        >
          PURE SPICES & CUSTOM BLENDS
        </span>
      </div>
    </Link>
  );
};
