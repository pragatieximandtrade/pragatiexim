import React from 'react';
import { MessageCircle, FileText, Phone } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-ivory-300 px-3 py-2 flex items-center gap-2 shadow-premium">
      <a
        href={`tel:${COMPANY_DATA.contact.phone}`}
        className="flex-1 py-2.5 px-2 rounded-lg bg-brand-ivory-100 hover:bg-brand-ivory-200 text-brand-charcoal-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-brand-ivory-300"
      >
        <Phone className="w-3.5 h-3.5 text-brand-green-800" />
        <span>Call</span>
      </a>

      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={onOpenQuoteModal}
        className="flex-1.2 py-2.5 px-3 rounded-lg bg-brand-green-800 hover:bg-brand-green-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
      >
        <FileText className="w-3.5 h-3.5 text-brand-gold-300" />
        <span>Get Quote</span>
      </button>
    </div>
  );
};
