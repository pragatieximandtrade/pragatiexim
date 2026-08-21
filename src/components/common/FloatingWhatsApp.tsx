import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex items-end flex-col gap-2">
      {showTooltip && (
        <div className="relative bg-white text-brand-charcoal-900 text-xs py-2 px-3.5 rounded-xl shadow-premium border border-brand-ivory-300 max-w-[220px] animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-charcoal-200 hover:bg-brand-charcoal-300 rounded-full flex items-center justify-center text-brand-charcoal-700"
            aria-label="Close message"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <p className="font-semibold text-brand-green-900">Need Bulk Spices?</p>
          <p className="text-brand-charcoal-600 text-[11px] mt-0.5">Chat directly with our Surat commercial desk.</p>
        </div>
      )}

      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pragati Exim on WhatsApp (+91 7990966295)"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-premium-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
