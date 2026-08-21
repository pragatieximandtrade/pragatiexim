import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, Info } from 'lucide-react';

export const CommercialTermsTable: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-50 border-b border-brand-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="B2B Commercial Framework"
          title="Minimum Order Quantities & Commercial Terms"
          subtitle="Transparent, accessible minimums and clear commercial terms tailored for growing and enterprise food businesses."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MOQ Matrix Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-ivory-300 shadow-subtle overflow-hidden">
            <div className="p-5 sm:p-6 bg-brand-green-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Order Minimums (MOQ)
                </h3>
                <p className="text-xs text-brand-charcoal-300">
                  Standardized thresholds for domestic and export orders
                </p>
              </div>
              <span className="text-xs font-semibold bg-brand-green-800 text-brand-gold-300 px-3 py-1 rounded-full border border-brand-green-700">
                Surat Hub
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-ivory-100 border-b border-brand-ivory-300 text-brand-charcoal-800 uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 sm:px-6 font-bold">Category</th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold">MOQ</th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold hidden sm:table-cell">Standard Packaging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-ivory-200">
                  {COMPANY_DATA.moqTerms.map((term, i) => (
                    <tr key={i} className="hover:bg-brand-ivory-50/80 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-brand-charcoal-900 font-serif">
                        {term.category}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-brand-green-900 whitespace-nowrap">
                        <span className="bg-brand-green-50 text-brand-green-900 px-2.5 py-1 rounded-md border border-brand-green-200">
                          {term.moq}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-brand-charcoal-600 text-xs hidden sm:table-cell">
                        {term.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-brand-ivory-50 border-t border-brand-ivory-200 text-xs text-brand-charcoal-600 flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-gold-600 shrink-0" />
              <span>Bulk volumes and scheduled contract deliveries qualify for volume-tiered commercial rates.</span>
            </div>
          </div>

          {/* Commercial Terms Summary */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-brand-ivory-300 shadow-subtle p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-brand-ivory-200">
                <ShieldCheck className="w-5 h-5 text-brand-green-800" />
                <h3 className="font-serif font-bold text-lg text-brand-charcoal-900">
                  Standard Commercial Policy
                </h3>
              </div>

              <dl className="divide-y divide-brand-ivory-200 text-xs sm:text-sm pt-2">
                {COMPANY_DATA.commercialTerms.map((term, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between gap-4">
                    <dt className="text-brand-charcoal-500 shrink-0">{term.label}</dt>
                    <dd className="font-semibold text-brand-charcoal-900 text-right">{term.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-4 rounded-xl bg-brand-ivory-100 border border-brand-ivory-300 text-xs space-y-1 text-brand-charcoal-600">
              <p className="font-bold text-brand-charcoal-800">Quality Guarantee:</p>
              <p>Every consignment is batch-inspected and sealed in moisture-proof barrier pouches with batch documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
