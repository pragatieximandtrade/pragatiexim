import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_DATA } from '../data/company';

export const TermsPage: React.FC = () => {
  const breadcrumbs = [{ name: 'B2B Terms of Supply', path: '/terms' }];

  return (
    <div className="bg-brand-ivory-50 pb-20">
      <SEOHead
        title="B2B Commercial Terms of Supply | Pragati Exim Surat"
        description="Commercial terms of supply, Minimum Order Quantities (MOQ), Pan-India dispatch, payment terms, and return policies for Pragati Exim."
        canonicalPath="/terms"
      />

      <div className="bg-brand-green-950 text-white pt-10 pb-14 border-b border-brand-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="text-brand-charcoal-300" />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-4">
            B2B Commercial Terms of Supply
          </h1>
          <p className="text-xs sm:text-sm text-brand-charcoal-300 mt-2">
            Applicable to all commercial transactions • Pragati Exim, Surat, Gujarat, India
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl border border-brand-ivory-300 p-8 sm:p-12 shadow-subtle space-y-6 text-brand-charcoal-800 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">1. Commercial Scope & MOQs</h2>
            <p>
              Pragati Exim supplies powdered spices and spice blends for food manufacturers, HoReCa operations, and bulk spice buyers. Standard order minimums are defined as follows:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-brand-charcoal-700">
              <li><strong>Standard Spice Powders:</strong> Minimum Order Quantity (MOQ) of 5 kg.</li>
              <li><strong>Standard Blended Spices:</strong> Minimum Order Quantity (MOQ) of 5 kg.</li>
              <li><strong>Customised Spice Blends:</strong> Minimum Order Quantity (MOQ) of 10 kg.</li>
              <li><strong>Export & Institutional Bulk:</strong> MOQ coordinated as per requirement.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">2. Dispatch & Logistics</h2>
            <p>
              Dispatches originate from our central processing and packaging hub in Surat, Gujarat. We provide Pan-India domestic transport coordination and arrange export consignments via designated ports. Lead times depend on volume, packaging size, and custom formulation requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">3. Invoicing & Payment Terms</h2>
            <p>
              Prices are quoted ex-works or delivered based on formal commercial quotation terms. Standard payment terms are advance or as mutually agreed and documented in the proforma invoice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">4. Return & Quality Claim Policy</h2>
            <p>
              Due to food safety regulations, returns are handled strictly under standard B2B protocols:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-brand-charcoal-700">
              <li>Standard catalog spice powders may be inspected upon delivery. Any transit damage or specification discrepancy must be reported within 48 hours of delivery accompanied by batch photos and lot numbers.</li>
              <li><strong>Custom Orders:</strong> Bespoke formulations, customized mesh sizes, and proprietary blends formulated to client recipe approval are <strong>non-returnable</strong> once manufactured.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-brand-charcoal-900">5. Contact Information</h2>
            <p>
              Commercial desk: {COMPANY_DATA.contact.email} | Phone: {COMPANY_DATA.contact.phoneDisplay} | Working Hours: {COMPANY_DATA.contact.workingHours}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
