import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY } from '../data/company';

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  let title = "Privacy Policy";
  let canonical = "/privacy-policy";
  let content = (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
      <p><strong>{COMPANY.name}</strong> ("Company", "We", "Our") respects the privacy of our international B2B website visitors and commercial inquiry submitters.</p>
      <h3 className="font-serif font-bold text-lg text-forest-950">Information Collection</h3>
      <p>We collect business contact information (name, corporate email, phone number, company name, destination country) submitted voluntarily via our Request for Quote (RFQ) and contact forms solely for fulfilling B2B inquiries and commercial communications.</p>
      <h3 className="font-serif font-bold text-lg text-forest-950">Data Usage & Protection</h3>
      <p>Your business information is strictly used for commercial quote preparation, specification sharing, and export consultation. We do not sell, rent, or trade B2B buyer information to third parties.</p>
    </div>
  );

  if (path === '/terms' || path === '/terms-and-conditions') {
    title = "Terms & Conditions";
    canonical = "/terms-and-conditions";
    content = (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>Welcome to <strong>{COMPANY.name}</strong>. By accessing this website, you agree to these B2B Terms & Conditions.</p>
        <h3 className="font-serif font-bold text-lg text-forest-950">B2B Exporter Disclaimer</h3>
        <p>{COMPANY.name} operates exclusively as a B2B bulk raw material ingredient exporter. This website does not offer retail e-commerce shopping, online checkout, or consumer product sales. Minimum Order Quantity (MOQ) is 50 KG per product.</p>
        <h3 className="font-serif font-bold text-lg text-forest-950">Product Specifications</h3>
        <p>Product specifications, Certificates of Analysis (COAs), and analytical data are provided for commercial evaluation. Commercial export terms are finalized in formal sales contracts.</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#F9F8F3] min-h-screen">
      <SEO
        title={title}
        description={`${title} for ${COMPANY.name}, Surat, Gujarat, India.`}
        canonicalUrl={canonical}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="bg-forest-950 text-white p-8 sm:p-10 rounded-3xl space-y-2 border border-forest-800 shadow-xl">
          <h1 className="text-3xl font-serif font-bold text-ivory-100">{title}</h1>
          <p className="text-xs text-amber-300 font-medium">{COMPANY.name} • {COMPANY.address.full}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
          {content}
        </div>
      </div>
    </div>
  );
}
