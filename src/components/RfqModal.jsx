import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Package } from 'lucide-react';
import { ALL_PRODUCTS, HERBAL_POWDERS, BOTANICAL_EXTRACTS } from '../data/products';
import { COMPANY } from '../data/company';

export default function RfqModal({ isOpen, onClose, initialProduct = null, initialType = 'quote' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    category: 'Botanical Extracts',
    product: '',
    quantity: '50 KG',
    destinationPort: '',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        category: initialProduct.category || 'Botanical Extracts',
        product: initialProduct.name || ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        product: prev.product || (HERBAL_POWDERS[0]?.name || '')
      }));
    }
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const availableProducts = formData.category === 'Herbal Powders' 
    ? HERBAL_POWDERS 
    : BOTANICAL_EXTRACTS;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-forest-950 text-white rounded-3xl border border-forest-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-forest-900 border-b border-forest-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
              International B2B Procurement Desk
            </span>
            <h3 className="font-serif font-bold text-xl text-white">
              {initialType === 'sample' ? 'Request Product Sample' : 'Request Commercial Export Quote'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-forest-950 hover:bg-forest-800 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white">Inquiry Received</h4>
              <p className="text-forest-200 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Pragati Exim & Trade. Our export documentation and commercial desk will review your inquiry and respond within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-forest-950 font-bold rounded-xl text-sm transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-forest-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Nutrition Inc."
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-forest-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-forest-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Destination Country *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United States, Germany, Japan"
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-forest-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Product Division *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      const newProducts = newCat === 'Herbal Powders' ? HERBAL_POWDERS : BOTANICAL_EXTRACTS;
                      setFormData({ 
                        ...formData, 
                        category: newCat, 
                        product: newProducts[0]?.name || '' 
                      });
                    }}
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="Herbal Powders">Herbal Powders (USDA Organic)</option>
                    <option value="Botanical Extracts">Botanical Extracts (42 Primary)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Select Ingredient *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {availableProducts.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-200 mb-1">Quantity Required *</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="50 KG (Standard Sample / Trial MOQ)">50 KG (MOQ)</option>
                    <option value="100 - 250 KG">100 - 250 KG</option>
                    <option value="500 KG - 1 Metric Ton">500 KG - 1 MT</option>
                    <option value="Multi-Ton Container Load">Multi-Ton FCL / LCL</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-forest-200 mb-1">Specifications & Message</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify target assay/grade, required documentation (COA, MSDS), or preferred port terms (FOB/CIF)."
                  className="w-full bg-forest-900 border border-forest-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-forest-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-forest-950 font-extrabold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 fill-forest-950" /> SUBMIT COMMERCIAL INQUIRY
                </button>
              </div>

              <div className="text-[11px] text-forest-400 text-center flex items-center justify-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Standard MOQ is 50 KG. Direct B2B export supply from India.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
