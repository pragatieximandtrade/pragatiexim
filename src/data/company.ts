export interface CompanyInfo {
  name: string;
  tagline: string;
  subheadline: string;
  location: {
    city: string;
    state: string;
    country: string;
    formatted: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    email: string;
    catalogueEmail: string;
    workingHours: string;
  };
  positioning: {
    heroHeading: string;
    heroSubheading: string;
    trustLine: string;
    coreValues: string[];
  };
  qualityPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  moqTerms: {
    category: string;
    moq: string;
    leadTime: string;
    notes: string;
  }[];
  commercialTerms: {
    label: string;
    value: string;
  }[];
  targetIndustries: {
    id: string;
    title: string;
    description: string;
    suitableProducts: string[];
    packagingRecommend: string;
  }[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: "Pragati Exim",
  tagline: "Pure Spices & Custom Spice Blends for Domestic & Export Markets",
  subheadline: "Consistent. Customizable. Built for Domestic Pan-India Supply & International Export.",
  location: {
    city: "Surat",
    state: "Gujarat",
    country: "India",
    formatted: "Surat, Gujarat, India",
  },
  contact: {
    phone: "+917990966295",
    phoneDisplay: "+91 7990966295",
    whatsappNumber: "917990966295",
    email: "contact@pragatiexim.com",
    catalogueEmail: "contact@pragatiexim.com",
    workingHours: "9:00 AM to 8:00 PM IST",
  },
  positioning: {
    heroHeading: "Pure Spice Powders & Custom Spice Blends",
    heroSubheading: "High-quality ground spices and bespoke spice formulations for domestic Pan-India supply and international export markets.",
    trustLine: "Consistency in aroma, colour, and flavour across every batch.",
    coreValues: [
      "Zero Adulteration & Controlled Grinding",
      "Domestic Pan-India Dispatch",
      "Dedicated Global Export Coordination",
      "FSSAI-Licensed Hygienic Processing",
      "Batch Traceability & COA Available",
    ],
  },
  qualityPoints: [
    {
      title: "Hygienic Handling & Controlled Grinding",
      description: "Processed under regulated temperature parameters to safeguard natural volatile essential oils and prevent scorch off-notes.",
      icon: "ShieldCheck",
    },
    {
      title: "Zero Artificial Additives or Adulteration",
      description: "Milled from clean whole spices without synthetic dyes, starches, lead chromate, or artificial flavor enhancers.",
      icon: "Leaf",
    },
    {
      title: "Batch-Wise Production & Traceability",
      description: "Full lot tracking from seed cleaning to sealed packaging, ensuring complete accountability for quality control audits.",
      icon: "QrCode",
    },
    {
      title: "Analytical Testing & COA Verification",
      description: "Batch-specific Certificate of Analysis (COA) detailing moisture percentage, mesh distribution, and sensory validation available on request.",
      icon: "Award",
    },
    {
      title: "Food-Grade Barrier Packaging",
      description: "Sealed in moisture-resistant laminated pouches and bulk master packs (1 kg to 50 kg) to maintain aroma during storage and transit.",
      icon: "Package",
    },
  ],
  moqTerms: [
    {
      category: "Standard Spice Powders",
      moq: "5 kg",
      leadTime: "Dispatched promptly based on volume",
      notes: "Pan-India domestic supply & export coordination",
    },
    {
      category: "Standard Blended Spices",
      moq: "5 kg",
      leadTime: "Dispatched promptly based on volume",
      notes: "Pan-India domestic supply & export coordination",
    },
    {
      category: "Customised Spice Blends",
      moq: "10 kg",
      leadTime: "Based on formulation & trial sampling",
      notes: "Custom recipe ratio, pungency & granulation matching",
    },
    {
      category: "Export & Institutional Orders",
      moq: "As per requirement",
      leadTime: "Coordinated per ocean/air freight container loading",
      notes: "Multi-layer barrier bags and palletized packaging",
    },
  ],
  commercialTerms: [
    { label: "Dispatch Scope", value: "Pan-India Domestic Supply & Global Export Handling" },
    { label: "Operating Base", value: "Surat, Gujarat, India" },
    { label: "Working Hours", value: "9:00 AM to 8:00 PM IST" },
    { label: "Standard Powders MOQ", value: "5 kg" },
    { label: "Custom Blends MOQ", value: "10 kg" },
    { label: "Payment Terms", value: "Advance / As mutually agreed per proforma invoice" },
    { label: "Packaging Sizes", value: "1 kg, 5 kg, 10 kg, 25 kg, 50 kg Food-Grade Barrier Bags" },
    { label: "Custom Order Policy", value: "Non-returnable once manufactured to approved specification" },
  ],
  targetIndustries: [
    {
      id: "food-manufacturers",
      title: "Food & Beverage Manufacturers",
      description: "Pure spice powders and custom blends engineered for dry mixes, seasonings, sauces, and packaged foods requiring exact granulation and aroma stability.",
      suitableProducts: ["Turmeric Powder", "Red Chilli Powder", "Coriander Powder", "Garlic Powder"],
      packagingRecommend: "25 kg / 50 kg Poly-Lined Bulk Bags",
    },
    {
      id: "ready-to-eat",
      title: "Ready-to-Eat & Prepared Meals",
      description: "High-consistency spice blends and pure ground spices for retort pouches, frozen meals, and packaged dishes where repeatable flavor is paramount.",
      suitableProducts: ["Garam Masala", "Biryani Masala", "Cumin Powder", "Ginger Powder"],
      packagingRecommend: "10 kg Laminated Moisture Pouches",
    },
    {
      id: "seasoning-companies",
      title: "Spice & Seasoning Brands",
      description: "Pure spice powders with defined mesh counts and essential oil retention, serving as reliable raw materials for retail blenders.",
      suitableProducts: ["Black Pepper Powder", "Cardamom Powder", "Clove Powder", "Cinnamon Powder"],
      packagingRecommend: "5 kg / 10 kg Barrier Pouches",
    },
    {
      id: "horeca",
      title: "HoReCa Kitchens & Catering",
      description: "Standardized spice blends and pure powders for commercial hotel chains, central commissary kitchens, and restaurant networks.",
      suitableProducts: ["Garam Masala", "Fry Masala", "Biryani Masala", "Turmeric Powder"],
      packagingRecommend: "5 kg / 10 kg Kitchen-Friendly Packs",
    },
    {
      id: "bulk-buyers",
      title: "Bulk Spice Buyers",
      description: "Dependable long-term spice supply contracts with predictable batch-to-batch quality and stable Pan-India dispatch from Surat.",
      suitableProducts: ["Coriander Powder", "Cumin Powder", "Turmeric Powder", "Red Chilli Powder"],
      packagingRecommend: "25 kg / 50 kg Industrial Bags",
    },
    {
      id: "export-buyers",
      title: "Export-Oriented Businesses",
      description: "Pure Indian ground spices and custom blends processed under controlled conditions for overseas distribution, repacking units, and buyers.",
      suitableProducts: ["Turmeric Powder", "Ginger Powder", "Black Pepper Powder", "Custom Spice Blends"],
      packagingRecommend: "25 kg Poly-Lined Palletized Bags",
    },
  ],
};
