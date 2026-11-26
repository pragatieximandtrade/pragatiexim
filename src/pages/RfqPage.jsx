import React from 'react';
import RfqModal from '../components/RfqModal';

export default function RfqPage({ onOpenRfq }) {
  // Render RfqModal directly in non-modal full page wrapper
  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-8 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-bronze-500">Commercial B2B Inquiry Desk</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">Request a Bulk Export Quote</h1>
        <p className="text-gray-600 text-sm">
          Minimum Order Quantity (MOQ): <strong>50 KG per product</strong>. Larger metric ton volumes welcome.
        </p>
      </div>
      <div className="bg-[#F9F8F3] border border-forest-900/20 rounded-3xl p-6 sm:p-10 shadow-xl">
        <RfqModal isOpen={true} onClose={() => {}} />
      </div>
    </div>
  );
}
