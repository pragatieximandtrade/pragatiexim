import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

interface QuoteRequestFormProps {
  initialProduct?: string;
  initialRequirementType?: 'Domestic' | 'Export';
  onSuccess?: () => void;
  compact?: boolean;
}

export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({
  initialProduct = '',
  initialRequirementType = 'Domestic',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    country: 'India',
    requirementType: initialRequirementType,
    product: initialProduct,
    quantity: '',
    packagingRequirement: '10 kg Pouch',
    message: '',
    website_hp: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Contact name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.quantity.trim()) newErrors.quantity = 'Estimated volume/quantity is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleWhatsAppRedirect = () => {
    const url = generateWhatsAppUrl({
      productName: formData.product || 'General Spice Powders / Blends',
      quantity: formData.quantity || 'Standard Requirement',
      requirementType: formData.requirementType,
      packaging: formData.packagingRequirement,
      companyName: `${formData.companyName} (${formData.name})`,
      customNotes: `Email: ${formData.businessEmail} | Phone: ${formData.phone} | Country: ${formData.country} ${formData.message ? '| Notes: ' + formData.message : ''}`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website_hp) return;

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
      // Directly open WhatsApp with complete lead details for Pragati Exim
      handleWhatsAppRedirect();
    }, 400);
  };

  if (submitted) {
    return (
      <div className="bg-brand-green-900 text-white p-8 sm:p-10 rounded-2xl text-center space-y-5 border border-brand-green-700 shadow-premium">
        <div className="w-16 h-16 bg-brand-gold-500/20 text-brand-gold-400 rounded-full flex items-center justify-center mx-auto mb-1">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold-300">Opening WhatsApp Chat...</h3>
        <p className="text-brand-charcoal-200 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your enquiry for <span className="text-brand-gold-300 font-semibold">{formData.product || 'Spice Products'}</span> has been formatted and opened directly in WhatsApp for Pragati Exim (+91 7990966295).
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-brand-green-800 hover:bg-brand-green-700 text-white transition-colors border border-brand-green-600"
          >
            Submit Another Request
          </button>
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Re-open WhatsApp Chat</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      {/* Honeypot for spam bot mitigation */}
      <input
        type="text"
        name="website_hp"
        value={formData.website_hp}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Requirement Type */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1.5">
            Requirement Type *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, requirementType: 'Domestic' }))}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                formData.requirementType === 'Domestic'
                  ? 'bg-brand-green-800 text-white border-brand-green-900 shadow-sm'
                  : 'bg-white text-brand-charcoal-700 border-brand-ivory-300 hover:border-brand-green-700'
              }`}
            >
              Domestic Pan-India Supply
            </button>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, requirementType: 'Export' }))}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                formData.requirementType === 'Export'
                  ? 'bg-brand-green-800 text-white border-brand-green-900 shadow-sm'
                  : 'bg-white text-brand-charcoal-700 border-brand-ivory-300 hover:border-brand-green-700'
              }`}
            >
              International Export Order
            </button>
          </div>
        </div>

        {/* Contact Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Shah"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-brand-ivory-300 focus:border-brand-green-700'
            } focus:outline-none transition`}
          />
          {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Company / Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Apex Foods Pvt Ltd"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
              errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-brand-ivory-300 focus:border-brand-green-700'
            } focus:outline-none transition`}
          />
          {errors.companyName && <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="procurement@company.com"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
              errors.businessEmail ? 'border-red-500 focus:ring-red-500' : 'border-brand-ivory-300 focus:border-brand-green-700'
            } focus:outline-none transition`}
          />
          {errors.businessEmail && <p className="text-[11px] text-red-600 mt-1">{errors.businessEmail}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-brand-ivory-300 focus:border-brand-green-700'
            } focus:outline-none transition`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="India"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
              errors.country ? 'border-red-500 focus:ring-red-500' : 'border-brand-ivory-300 focus:border-brand-green-700'
            } focus:outline-none transition`}
          />
          {errors.country && <p className="text-[11px] text-red-600 mt-1">{errors.country}</p>}
        </div>

        {/* Product Select */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Product Required
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none transition"
          >
            <option value="">Select a Spice Product (Optional)</option>
            <option value="Turmeric Powder">Turmeric Powder</option>
            <option value="Red Chilli Powder">Red Chilli Powder</option>
            <option value="Coriander Powder">Coriander Powder</option>
            <option value="Cumin Powder">Cumin Powder</option>
            <option value="Ginger Powder">Ginger Powder</option>
            <option value="Garlic Powder">Garlic Powder</option>
            <option value="Cinnamon Powder">Cinnamon Powder</option>
            <option value="Cardamom Powder">Cardamom Powder</option>
            <option value="Clove Powder">Clove Powder</option>
            <option value="Black Pepper Powder">Black Pepper Powder</option>
            <option value="White Pepper Powder">White Pepper Powder</option>
            <option value="Nutmeg Powder">Nutmeg Powder</option>
            <option value="Garam Masala">Garam Masala</option>
            <option value="Biryani Masala">Biryani Masala</option>
            <option value="Fry Masala">Fry Masala</option>
            <option value="Regional Masalas">Regional Masalas</option>
            <option value="Custom Spice Blends">Custom Spice Blends</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Est. Volume / Quantity <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 50 kg / 500 kg / 2 MT"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
              errors.quantity ? 'border-red-500 focus:ring-red-500' : 'border-brand-ivory-300 focus:border-brand-green-700'
            } focus:outline-none transition`}
          />
          {errors.quantity && <p className="text-[11px] text-red-600 mt-1">{errors.quantity}</p>}
        </div>

        {/* Packaging */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Packaging Preference
          </label>
          <select
            name="packagingRequirement"
            value={formData.packagingRequirement}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none transition"
          >
            <option value="1 kg Pouch">1 kg Food-Grade Laminated Pouch</option>
            <option value="5 kg Pouch">5 kg Food-Grade Barrier Pouch</option>
            <option value="10 kg Poly Pouch">10 kg Laminated Moisture Pouch</option>
            <option value="25 kg Poly-Lined Bag">25 kg Poly-Lined Industrial Bag</option>
            <option value="50 kg Master Pack">50 kg Bulk Master Pack</option>
            <option value="Custom Packaging">Custom Outer Cartons / Labeling</option>
          </select>
        </div>
      </div>

      {/* Message / Notes */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1">
          Specification Notes / Target Application (Optional)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention target mesh size (e.g. 80 mesh), heat profile, sample requirements, or destination port..."
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none transition"
        />
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-premium flex items-center justify-center gap-2 group"
        >
          {isSubmitting ? (
            <span>Opening WhatsApp...</span>
          ) : (
            <>
              <span>Request Quote on WhatsApp</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Direct WhatsApp Chat</span>
        </button>
      </div>

      {/* Direct Contact Notice */}
      <div className="pt-2 text-center text-[11px] text-brand-charcoal-500">
        ✨ Direct WhatsApp Desk: +91 7990966295 • Pan-India Dispatch & Global Export
      </div>
    </form>
  );
};
