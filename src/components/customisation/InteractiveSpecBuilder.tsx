import React, { useState } from 'react';
import { Sliders, Check, Send, MessageCircle, FileText } from 'lucide-react';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

interface SpecState {
  spiceType: string;
  meshSize: string;
  intensity: string;
  packaging: string;
  batchVolume: string;
  notes: string;
}

export const InteractiveSpecBuilder: React.FC = () => {
  const [spec, setSpec] = useState<SpecState>({
    spiceType: 'Custom Spice Blend',
    meshSize: 'Fine Powder (60-80 mesh)',
    intensity: 'Standard Aromatic Balance',
    packaging: '10 kg Laminated Pouch',
    batchVolume: 'Commercial Batch (100 kg - 500 kg)',
    notes: ''
  });

  const spiceOptions = [
    'Custom Spice Blend',
    'Turmeric Powder',
    'Red Chilli Powder (Custom SHU)',
    'Cumin Powder',
    'Coriander Powder',
    'Black Pepper Powder',
    'Garlic Powder',
    'Garam Masala',
    'Biryani Masala',
    'Fry Masala'
  ];

  const meshOptions = [
    { label: 'Fine Powder (60-80 mesh)', desc: 'Ideal for smooth gravies, sauces, RTE meals & snack seasonings' },
    { label: 'Ultra-Fine (80-100 mesh)', desc: 'For instant soup pre-mixes, beverage teas & dairy flavorings' },
    { label: 'Medium-Coarse (30-50 mesh)', desc: 'For pickle blends, coarse dry chutneys & meat patties' },
    { label: 'Coarse Cracked (16-30 mesh)', desc: 'Butcher-style rubs, bread crust toppings & visual appeal' }
  ];

  const intensityOptions = [
    { label: 'Mild & High Natural Colour', desc: 'Emphasis on visual hue and delicate gentle aroma' },
    { label: 'Standard Aromatic Balance', desc: 'Balanced volatile oil retention and traditional taste notes' },
    { label: 'High Heat / Potent Pungency', desc: 'Maximum spice heat (SHU) or concentrated volatile top notes' }
  ];

  const packagingOptions = [
    '1 kg Food-Grade Pouch',
    '5 kg Barrier Bag',
    '10 kg Laminated Pouch',
    '25 kg Poly-Lined Bag',
    '50 kg Industrial Bulk Bag'
  ];

  const volumeOptions = [
    'Pilot Batch / Sample Run (MOQ 10 kg for custom)',
    'Trial Production (50 kg - 100 kg)',
    'Commercial Batch (100 kg - 500 kg)',
    'Bulk Industrial Volume (500 kg - Multi-MT)'
  ];

  const handleWhatsAppSend = () => {
    const specDetails = `Mesh: ${spec.meshSize} | Profile: ${spec.intensity} | Packaging: ${spec.packaging} | Volume: ${spec.batchVolume}`;
    const url = generateWhatsAppUrl({
      productName: spec.spiceType,
      quantity: spec.batchVolume,
      packaging: spec.packaging,
      customNotes: `${specDetails}${spec.notes ? ` | Notes: ${spec.notes}` : ''}`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-ivory-300 shadow-premium overflow-hidden">
      {/* Interactive Header */}
      <div className="bg-brand-green-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-800 border border-brand-green-700 text-brand-gold-300 mb-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Specification Configurator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold-300">
            Configure Your Custom Spice Specification
          </h3>
          <p className="text-brand-charcoal-200 text-sm mt-1 max-w-2xl">
            Select granulation mesh, aroma pungency, and packaging formats. Pre-production samples and formulation trials are available subject to 10 kg MOQ.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Configuration Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Base Spice / Blend */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
              1. Select Spice Base or Blend
            </label>
            <select
              value={spec.spiceType}
              onChange={(e) => setSpec({ ...spec, spiceType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm bg-brand-ivory-50 border border-brand-ivory-300 font-medium text-brand-charcoal-900 focus:border-brand-green-700 focus:outline-none focus:ring-1 focus:ring-brand-green-700 transition"
            >
              {spiceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Step 2: Mesh Granulation */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
              2. Desired Particle Granulation (Mesh Size)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {meshOptions.map((mesh) => (
                <button
                  key={mesh.label}
                  type="button"
                  onClick={() => setSpec({ ...spec, meshSize: mesh.label })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    spec.meshSize === mesh.label
                      ? 'border-brand-green-700 bg-brand-green-50/70 text-brand-green-950 ring-1 ring-brand-green-700'
                      : 'border-brand-ivory-300 bg-white hover:bg-brand-ivory-50 text-brand-charcoal-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>{mesh.label}</span>
                    {spec.meshSize === mesh.label && <Check className="w-3.5 h-3.5 text-brand-green-700" />}
                  </div>
                  <p className="text-[11px] text-brand-charcoal-500 mt-1 leading-snug">{mesh.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Intensity / Pungency Profile */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
              3. Target Aroma & Pungency Intensity
            </label>
            <div className="space-y-2">
              {intensityOptions.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setSpec({ ...spec, intensity: item.label })}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    spec.intensity === item.label
                      ? 'border-brand-green-700 bg-brand-green-50/70 text-brand-green-950 ring-1 ring-brand-green-700'
                      : 'border-brand-ivory-300 bg-white hover:bg-brand-ivory-50 text-brand-charcoal-800'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] text-brand-charcoal-500 mt-0.5">{item.desc}</div>
                  </div>
                  {spec.intensity === item.label && <Check className="w-4 h-4 text-brand-green-700 shrink-0 mt-0.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Packaging & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1.5">
                4. Packaging Format
              </label>
              <select
                value={spec.packaging}
                onChange={(e) => setSpec({ ...spec, packaging: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm bg-brand-ivory-50 border border-brand-ivory-300 font-medium text-brand-charcoal-900 focus:border-brand-green-700 focus:outline-none transition"
              >
                {packagingOptions.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-1.5">
                5. Batch Volume Target
              </label>
              <select
                value={spec.batchVolume}
                onChange={(e) => setSpec({ ...spec, batchVolume: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm bg-brand-ivory-50 border border-brand-ivory-300 font-medium text-brand-charcoal-900 focus:border-brand-green-700 focus:outline-none transition"
              >
                {volumeOptions.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Live Specification Summary Panel */}
        <div className="lg:col-span-5 bg-brand-ivory-100 rounded-xl p-6 border border-brand-ivory-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-4 border-b border-brand-ivory-300">
              <FileText className="w-5 h-5 text-brand-green-800" />
              <h4 className="font-serif font-bold text-lg text-brand-charcoal-900">Configured Specification Sheet</h4>
            </div>

            <div className="py-4 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-brand-ivory-200">
                <span className="text-brand-charcoal-500">Spice Base / Blend:</span>
                <span className="font-semibold text-brand-green-900 text-right">{spec.spiceType}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-ivory-200">
                <span className="text-brand-charcoal-500">Granulation:</span>
                <span className="font-semibold text-brand-charcoal-900 text-right">{spec.meshSize}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-ivory-200">
                <span className="text-brand-charcoal-500">Target Profile:</span>
                <span className="font-semibold text-brand-charcoal-900 text-right">{spec.intensity}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-ivory-200">
                <span className="text-brand-charcoal-500">Packaging:</span>
                <span className="font-semibold text-brand-charcoal-900 text-right">{spec.packaging}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-ivory-200">
                <span className="text-brand-charcoal-500">Volume Tier:</span>
                <span className="font-semibold text-brand-charcoal-900 text-right">{spec.batchVolume}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-ivory-200">
                <span className="text-brand-charcoal-500">Processing Hub:</span>
                <span className="font-semibold text-brand-charcoal-900 text-right">Surat, Gujarat (Pan-India Dispatch)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-brand-charcoal-500">Custom Blend MOQ:</span>
                <span className="font-bold text-brand-gold-800 text-right">10 kg (Sampling Available)</span>
              </div>
            </div>

            {/* Custom Notes Field */}
            <div className="mt-2">
              <label className="block text-[11px] font-semibold uppercase text-brand-charcoal-600 mb-1">
                Specific Application Notes (Optional)
              </label>
              <input
                type="text"
                value={spec.notes}
                onChange={(e) => setSpec({ ...spec, notes: e.target.value })}
                placeholder="e.g. For extruded snack dusting line, require high surface adhesion"
                className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-brand-ivory-300 focus:outline-none focus:border-brand-green-700"
              />
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Specification via WhatsApp</span>
            </button>

            <a
              href={`mailto:contact@pragatiexim.com?subject=${encodeURIComponent(`Custom Specification Request: ${spec.spiceType}`)}&body=${encodeURIComponent(
                `Hello Pragati Exim Team,\n\nI would like a quotation for the following custom specification:\n\n• Product: ${spec.spiceType}\n• Granulation: ${spec.meshSize}\n• Profile: ${spec.intensity}\n• Packaging: ${spec.packaging}\n• Volume: ${spec.batchVolume}\n• Notes: ${spec.notes}\n\nPlease share commercial pricing and sample process.\n\nThank you!`
              )}`}
              className="w-full py-2.5 px-4 rounded-lg bg-brand-green-800 hover:bg-brand-green-700 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 text-center"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Email Specification to Sales Desk</span>
            </a>

            <p className="text-[11px] text-center text-brand-charcoal-500">
              COA available per batch • FSSAI-compliant processing facility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
