import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
    hp: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please include details of your inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleWhatsAppRedirect = () => {
    const url = generateWhatsAppUrl({
      productName: formData.subject || 'General B2B Spice Enquiry',
      companyName: `${formData.company} (${formData.name})`,
      customNotes: `Email: ${formData.email} | Phone: ${formData.phone} | Details: ${formData.message}`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.hp) return;

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
      // Direct redirect to WhatsApp
      handleWhatsAppRedirect();
    }, 400);
  };

  if (submitted) {
    return (
      <div className="bg-brand-green-900 text-white p-8 rounded-2xl text-center space-y-4 border border-brand-green-700 shadow-premium">
        <div className="w-14 h-14 bg-brand-gold-500/20 text-brand-gold-400 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-brand-gold-300">Opening WhatsApp...</h3>
        <p className="text-brand-charcoal-200 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your message has been formatted and opened directly in WhatsApp for <span className="text-brand-gold-300 font-semibold">{COMPANY_DATA.name}</span> (+91 7990966295).
        </p>
        <button
          onClick={handleWhatsAppRedirect}
          className="mt-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-2 mx-auto"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Re-open WhatsApp Chat</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      <input
        type="text"
        name="hp"
        value={formData.hp}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Company Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company or brand"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
          />
          {errors.company && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Business Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-1">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-1">
          Enquiry Type
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
        >
          <option value="General Enquiry">General B2B Spice Enquiry</option>
          <option value="Domestic Bulk Supply">Domestic Pan-India Bulk Order</option>
          <option value="Global Export Enquiry">Global Export Shipment</option>
          <option value="Custom Formulation">Custom Recipe Blending</option>
          <option value="Sample Request">Sample Request & COA</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-1">
          Message Details <span className="text-red-600">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your pure spice requirement, target volume, packaging preference or destination..."
          className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-brand-ivory-300 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
        />
        {errors.message && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 disabled:opacity-50 text-white font-bold text-sm transition-all duration-200 shadow-premium flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Opening WhatsApp...</span>
        ) : (
          <>
            <span>Send Inquiry on WhatsApp</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
