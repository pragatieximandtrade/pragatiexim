import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { QuoteRequestForm } from '../forms/QuoteRequestForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialRequirementType?: 'Domestic' | 'Export';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
  initialRequirementType = 'Domestic'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-brand-ivory-50 rounded-2xl shadow-2xl border border-brand-ivory-300 overflow-hidden my-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-brand-green-900 text-white px-6 py-5 flex items-center justify-between border-b border-brand-green-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Commercial Enquiry</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Request a B2B Quotation
            </h3>
            <p className="text-xs text-brand-charcoal-300 mt-0.5">
              Pragati Exim • Surat, Gujarat, India • Pan-India & Export Supply
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-brand-green-800 hover:bg-brand-green-700 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <QuoteRequestForm
            initialProduct={initialProduct}
            initialRequirementType={initialRequirementType}
            onSuccess={() => {
              // keep modal open to show success state
            }}
            compact={true}
          />
        </div>
      </div>
    </div>
  );
};
