import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, Loader2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY } from '../data/company';
import { HERBAL_POWDERS, BOTANICAL_EXTRACTS, ALL_PRODUCTS } from '../data/products';
import { submitInquiry } from '../utils/submitInquiry';

const INITIAL_CONTACT_STATE = {
  name: '',
  company: '',
  email: '',
  country: '',
  phone: '',
  category: 'Botanical Extracts',
  product: BOTANICAL_EXTRACTS[0]?.name || '',
  quantity: '50 KG (Standard Sample / Trial MOQ)',
  destinationPort: '',
  message: ''
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') || '';

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [botcheck, setBotcheck] = useState('');
  const [formData, setFormData] = useState(INITIAL_CONTACT_STATE);

  useEffect(() => {
    if (productParam) {
      const match = ALL_PRODUCTS.find(p => p.slug === productParam || p.id === productParam);
      if (match) {
        setFormData(prev => ({
          ...prev,
          category: match.category,
          product: match.name
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        product: prev.product || (BOTANICAL_EXTRACTS[0]?.name || '')
      }));
    }
  }, [productParam]);

  const availableProducts = formData.category === 'Herbal Powders'
    ? HERBAL_POWDERS
    : BOTANICAL_EXTRACTS;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      await submitInquiry({
        formData,
        inquiryType: 'Contact Page Commercial Inquiry',
        source: 'Contact Export Desk Page',
        botcheck
      });
      setSubmitted(true);
      setFormData(INITIAL_CONTACT_STATE);
    } catch (err) {
      setErrorMsg(err.message || `Submission failed. Please email ${COMPANY.email.primary} directly.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen py-12">
      <SEO
        title="Contact Export Desk | Request a Commercial Quote"
        description="Contact Pragati Exim & Trade's international B2B export desk in Surat, Gujarat. Submit your requirement for herbal powders and standardized botanical extracts."
        canonicalUrl="/contact-us"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact-us" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl relative overflow-hidden space-y-3 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-emerald-400" /> B2B Export Inquiries
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ivory-100">
            Let's Discuss Your Herbal Ingredient Requirements
          </h1>

          <p className="text-forest-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            Our international commercial team will review your product specifications, target volume, and destination requirements to prepare a formal quote within 24 business hours.
          </p>
        </div>

        {/* Contact Form & Company Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-950">Inquiry Successfully Submitted</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Pragati Exim & Trade. Our export documentation desk in Surat will review your inquiry and get back to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-forest-900 text-white font-bold rounded-xl text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-serif font-bold text-xl text-forest-950">
                    Submit Commercial Inquiry / Request a Quote
                  </h3>
                  <p className="text-xs text-gray-500">
                    Standard MOQ: 50 KG per product. Direct B2B export supply from India.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Miller"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Health Supplements Ltd."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="buyer@company.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Destination Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. USA, UK, Germany, UAE, Japan"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Required Quantity *</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    >
                      <option value="50 KG (Standard Sample / Trial MOQ)">50 KG (Standard MOQ)</option>
                      <option value="100 - 250 KG">100 - 250 KG</option>
                      <option value="500 KG - 1 Metric Ton">500 KG - 1 MT</option>
                      <option value="Multi-Ton FCL Container">Multi-Ton FCL / LCL</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Product Category *</label>
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    >
                      <option value="Herbal Powders">Herbal Powders (USDA Organic)</option>
                      <option value="Botanical Extracts">Botanical Extracts (42 Primary)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Select Ingredient *</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                    >
                      {availableProducts.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Specification Requirements & Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on target assay/grade, required pharmacopeia monograph, packaging specifications, or preferred shipping terms (FOB/CIF)."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:bg-white"
                  ></textarea>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <input
                  type="checkbox"
                  name="botcheck"
                  checked={Boolean(botcheck)}
                  onChange={(e) => setBotcheck(e.target.checked ? '1' : '')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-forest-950 font-extrabold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending Commercial Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-forest-950" /> Send Inquiry / Request a Quote
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Col 2: Company Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-forest-950 text-white rounded-3xl p-8 border border-forest-800 shadow-xl space-y-5">
              <h3 className="font-serif font-bold text-xl text-ivory-100 border-b border-forest-800 pb-3">
                Export Headquarters
              </h3>

              <div className="space-y-4 text-sm text-forest-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Pragati Exim & Trade</strong>
                    <span>{COMPANY.address.full}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-semibold">Commercial Email:</strong>
                    <a href={`mailto:${COMPANY.email.primary}`} className="text-amber-300 hover:underline">
                      {COMPANY.email.primary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Direct Telephone:</strong>
                    <a href={`tel:${COMPANY.phone.india}`} className="text-amber-300 hover:underline block">
                      India Desk: {COMPANY.phone.indiaDisplay}
                    </a>
                    <a href={`tel:${COMPANY.phone.usa}`} className="text-emerald-400 hover:underline block text-xs">
                      USA Desk: {COMPANY.phone.usaDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-semibold">Business Hours:</strong>
                    <span>Mon – Sat: 9:00 AM – 6:30 PM (IST)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-forest-800 text-xs text-forest-300">
                International inquiries are monitored 24/7 across all global timezones.
              </div>
            </div>

            {/* Trust Notice Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-3 text-xs text-gray-700">
              <div className="font-bold text-sm text-forest-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Commercial Guarantee
              </div>
              <p className="leading-relaxed">
                All inquiries are handled directly by senior export sales personnel. We provide verified documentation and quotation details strictly aligned with your target volume.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
