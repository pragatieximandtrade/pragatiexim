import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_DATA } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Privacy Policy', path: '/privacy-policy' }];

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="Privacy Policy | Pragati Exim Surat"
        description="Privacy policy and data protection terms for Pragati Exim website visitors and B2B commercial enquiries."
        canonicalPath="/privacy-policy"
      />

      <div className="bg-brand-green-950 text-white pt-10 pb-14 border-b border-brand-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-brand-charcoal-300 mt-2">
            Last Updated: August 2026 • Pragati Exim, Surat, Gujarat, India
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle space-y-6 text-brand-charcoal-800 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">1. Information We Collect</h2>
            <p>
              Pragati Exim collects business contact details (including company name, contact person name, email address, phone/WhatsApp number, and product specifications) submitted voluntarily through our B2B quotation forms, contact forms, or direct correspondence.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">2. How We Use Business Information</h2>
            <p>
              The information provided is utilized strictly to evaluate spice specifications, generate formal commercial quotations, dispatch pre-production samples, coordinate freight logistics, and communicate regarding order execution. We do not sell or rent commercial lead data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">3. Confidentiality of Custom Formulations</h2>
            <p>
              For clients requesting bespoke spice blends, custom recipe ratios, or private label seasonings, Pragati Exim treats all recipe information as strictly confidential commercial property.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">4. Contacting Our Data Desk</h2>
            <p>
              If you have inquiries regarding how your commercial contact details are stored or wish to update your records, please contact:
            </p>
            <p className="text-brand-green-900 font-semibold">
              Email: {COMPANY_DATA.contact.email} • Phone: {COMPANY_DATA.contact.phoneDisplay} • Surat, Gujarat, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
