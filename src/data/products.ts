export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'core-industrial' | 'premium-functional' | 'blended-masalas';
  categoryLabel: string;
  shortDescription: string;
  longOverview: string;
  applications: string[];
  features: string[];
  particleSizes: string[];
  packagingOptions: string[];
  moq: string;
  aromaProfile: string;
  pungencyLevel: string;
  colorTone: string;
  badge?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  customisationNotes: string;
  qualityAssurance: string[];
  image: string;
}

export const PRODUCT_CATEGORIES = [
  {
    id: 'core-industrial',
    name: 'Core Industrial Spice Powders',
    tagline: 'High-volume pure spices used across commercial applications',
    description: 'Essential staple spice powders manufactured under controlled grinding parameters to ensure uniform colour, dispersion, and batch-to-batch consistency.'
  },
  {
    id: 'premium-functional',
    name: 'Premium & Functional Spices',
    tagline: 'Used for aroma, flavour enhancement & specialty applications',
    description: 'High-potency aromatic spice powders ground with gentle thermal management to retain volatile essential oils and distinct olfactory notes.'
  },
  {
    id: 'blended-masalas',
    name: 'Blended & Application-Specific Spices',
    tagline: 'Custom formulations available as per requirement',
    description: 'Precision multi-spice blends formulated for industrial meal prep, commercial food service, snack seasoning, and culinary standardization.'
  }
] as const;

export const PRODUCTS: Product[] = [
  // CORE INDUSTRIAL SPICE POWDERS
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    subtitle: 'High-curcumin golden yellow spice powder for food manufacturing and export',
    category: 'core-industrial',
    categoryLabel: 'Core Industrial Spice Powders',
    shortDescription: 'Uniform golden-yellow turmeric powder with consistent earthy aroma and vibrant natural colouring power.',
    longOverview: 'Pragati Exim supplies industrial-grade Turmeric Powder manufactured from carefully selected whole turmeric fingers. Processed under hygienic grinding conditions to preserve natural colour intensity and warm aromatic notes. Ideal for food manufacturers requiring stable dispersion and uniform hue across production batches.',
    applications: [
      'Ready-to-eat curry bases and gravies',
      'Extruded snack seasoning and savory coating',
      'Dehydrated soup powders and instant noodles',
      'Pickles, chutneys, and condiment production',
      'Bakery, dairy, and functional food blending'
    ],
    features: [
      'Consistent natural golden hue with zero artificial dyes',
      'Controlled low-heat milling to preserve volatile notes',
      'Uniform mesh granulation for homogeneous dispersion',
      'Processed in FSSAI-licensed facility with batch traceability'
    ],
    particleSizes: ['Fine Powder (60-80 mesh)', 'Ultra-Fine (80-100 mesh)', 'Medium Coarse'],
    packagingOptions: ['1 kg Laminated Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Bulk Bag', '50 kg Master Pack'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Warm, earthy, subtly woody with characteristic aromatic freshness',
    pungencyLevel: 'Mild, warm bitterness',
    colorTone: 'Vibrant Warm Golden Yellow',
    badge: 'High Volume Core',
    seo: {
      metaTitle: 'Turmeric Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Source industrial turmeric powder for food manufacturing and bulk export from Pragati Exim, Surat, Gujarat. Request specifications and quote.',
      keywords: ['turmeric powder supplier', 'turmeric powder exporter', 'bulk turmeric powder', 'turmeric powder manufacturer Gujarat']
    },
    customisationNotes: 'Granulation mesh size and bulk density can be customized for automated dosing lines based on minimum order quantities.',
    qualityAssurance: [
      'Processed in FSSAI-licensed facility',
      'No artificial colouring, lead chromate, or starch adulteration',
      'Moisture and mesh consistency verified per batch',
      'COA available on order dispatch'
    ],
    image: '/images/products/turmeric-powder.png'
  },
  {
    id: 'red-chilli-powder',
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder (multiple grades)',
    subtitle: 'Standardized SHU heat levels and ASTA colour grades for commercial food processors',
    category: 'core-industrial',
    categoryLabel: 'Core Industrial Spice Powders',
    shortDescription: 'Industrial red chilli powder available across multiple heat (SHU) and colour (ASTA) grades for targeted recipes.',
    longOverview: 'Pragati Exim Red Chilli Powder is processed from dried whole red chillies with precision grade segregation. Whether your food processing application demands vibrant natural red colour with mild warmth, or high Scoville heat with clean fiery pungency, our controlled milling delivers reliable batch-to-batch consistency.',
    applications: [
      'Snack seasonings, chips, extruded snacks, and namkeen',
      'Hot sauces, red curry bases, and chili pastes',
      'Ready-to-eat meals and frozen food preparation',
      'Pickles, spicy marinades, and meat processing',
      'HoReCa bulk culinary gravies'
    ],
    features: [
      'Multiple grades: High Heat / Mild Heat High Color / Balanced',
      '100% natural chillies — absolutely zero Sudan red or artificial dyes',
      'Controlled temperature grinding preserving capsaicin profile',
      'Batch-tested for uniform colour value and granulation'
    ],
    particleSizes: ['Fine (60-80 mesh)', 'Standard Flakes / Crushed', 'Extra Fine (80 mesh)'],
    packagingOptions: ['1 kg Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Poly-lined Bag', '50 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Pungent, sharp, spicy and clean roasted chilli notes',
    pungencyLevel: 'Customizable (Mild, Medium, High SHU)',
    colorTone: 'Vibrant Deep Crimson Red to Warm Brick Red',
    badge: 'Multiple Grades Available',
    seo: {
      metaTitle: 'Red Chilli Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Industrial red chilli powder supplier in India. Multiple heat and ASTA grades for food manufacturers. Pure, unadulterated red chilli powder.',
      keywords: ['red chilli powder supplier', 'red chilli powder exporter', 'bulk chilli powder India', 'red chilli powder manufacturer Gujarat']
    },
    customisationNotes: 'Specific heat vs. colour ratio matching available for high-volume contract orders.',
    qualityAssurance: [
      'Zero synthetic colourants or mineral oil additions',
      'Aflatoxin and moisture monitored parameters',
      'Processed in hygienic FSSAI-compliant environment',
      'COA documentation supplied per dispatch'
    ],
    image: '/images/products/red-chilli-powder.png'
  },
  {
    id: 'coriander-powder',
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    subtitle: 'Fragrant, citrusy-sweet ground coriander for commercial kitchens and masala bases',
    category: 'core-industrial',
    categoryLabel: 'Core Industrial Spice Powders',
    shortDescription: 'Fragrant and mild ground coriander powder providing body, subtle sweetness, and aromatic depth to curry bases.',
    longOverview: 'Manufactured from selected dry coriander seeds, Pragati Exim Coriander Powder is ground under controlled temperature conditions to safeguard its delicate linalool essential oils. It provides the essential body, thickening, and herbal sweetness required in curry pastes, spice rubs, and packaged meal preparations.',
    applications: [
      'Essential base spice for garam masalas and blended spice mixes',
      'Commercial curry gravies, sauces, and ready-to-eat meals',
      'Snack seasoning formulations and namkeen flavourings',
      'HoReCa catering batches and central production kitchens',
      'Pickle masalas and wet marinade bases'
    ],
    features: [
      'Preserved delicate volatile oils through controlled milling',
      'Natural green-tan hue without artificial enhancers',
      'Free-flowing powder with excellent liquid dispersion',
      'Batch-tested for uniform aroma and taste profile'
    ],
    particleSizes: ['Standard Fine (50-70 mesh)', 'Fine (80 mesh)', 'Coarse Ground'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Bag', '50 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Mild, sweet, herbal with delicate citrusy notes',
    pungencyLevel: 'Mild, aromatic sweetness',
    colorTone: 'Natural Olive-Tan to Warm Greenish Brown',
    seo: {
      metaTitle: 'Coriander Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Source high-consistency coriander powder for food processing and HoReCa from Pragati Exim, Surat, Gujarat. Batch-wise COA available.',
      keywords: ['coriander powder supplier', 'coriander powder exporter', 'bulk dhaniya powder', 'coriander powder Gujarat']
    },
    customisationNotes: 'Available in standard curry mesh as well as coarse crack for specialized rubs and pickling.',
    qualityAssurance: [
      'Destoned and foreign matter sorted before grinding',
      'Controlled temperature milling to prevent oil evaporation',
      '100% pure coriander seed with zero husk dilution',
      'Batch traceability from raw seed to final pack'
    ],
    image: '/images/products/coriander-powder.png'
  },
  {
    id: 'cumin-powder',
    slug: 'cumin-powder',
    name: 'Cumin Powder',
    subtitle: 'Rich, earthy, warm ground jeera powder for food manufacturing and seasoning',
    category: 'core-industrial',
    categoryLabel: 'Core Industrial Spice Powders',
    shortDescription: 'Warm, deeply aromatic cumin powder milled from premium Gujarat/Rajasthan cumin seeds.',
    longOverview: 'Pragati Exim Cumin Powder delivers an intensely aromatic, savory, and nutty punch essential for Indian, Middle Eastern, and Latin American food applications. Our controlled grinding safeguards cuminaldehyde levels, ensuring your manufactured food products retain consistent aroma through shelf life.',
    applications: [
      'Snack seasoning, savory chips, and extruded products',
      'Processed cheese, savory dairy, and buttermilk seasonings',
      'RTE canned meals, instant dals, and frozen entrées',
      'Spice blends, taco seasonings, and barbecue rubs',
      'Central kitchen commissary food production'
    ],
    features: [
      'High volatile oil retention giving robust aroma impact',
      'Uniform ground consistency preventing sedimentation',
      'No added starches, husk filler, or artificial flavoring',
      'Packaged in high-barrier moisture-resistant materials'
    ],
    particleSizes: ['Fine (60-80 mesh)', 'Standard Commercial (50-60 mesh)', 'Coarse Grind'],
    packagingOptions: ['1 kg Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Bag', '50 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Deeply aromatic, warm, earthy, slightly peppery and nutty',
    pungencyLevel: 'Warm, earthy, savory pungency',
    colorTone: 'Rich Warm Brownish Khaki',
    seo: {
      metaTitle: 'Cumin Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Industrial cumin powder manufacturer and exporter based in Surat, Gujarat. Consistent aroma, controlled grinding, pure jeera powder.',
      keywords: ['cumin powder supplier', 'cumin powder exporter', 'jeera powder bulk', 'cumin powder manufacturer Surat']
    },
    customisationNotes: 'Roasted cumin powder profile or raw ground profile available depending on industrial recipe.',
    qualityAssurance: [
      'Rigorous seed cleaning and destoning process',
      'No synthetic flavourings or colour additions',
      'Hygienic processing in FSSAI-compliant environment',
      'Moisture-controlled batch sealing'
    ],
    image: '/images/products/cumin-powder.png'
  },
  {
    id: 'ginger-powder',
    slug: 'ginger-powder',
    name: 'Ginger Powder',
    subtitle: 'Sharp, aromatic dried ginger powder for industrial seasonings and beverages',
    category: 'core-industrial',
    categoryLabel: 'Core Industrial Spice Powders',
    shortDescription: 'Pungent, finely milled dry ginger powder offering clean zesty warmth and high thermal stability.',
    longOverview: 'Pragati Exim Ginger Powder is processed from clean dried ginger roots to deliver a sharp, warming flavor profile and pungent aroma. Its fine granulation allows seamless integration into dry seasoning blends, bakery mixes, confectionery, ready-to-eat formulations, and industrial tea pre-mixes.',
    applications: [
      'Snack seasonings and savory spice rubs',
      'Bakery products, ginger biscuits, and confectioneries',
      'Instant beverage mixes, spiced teas, and health drinks',
      'Sauces, marinades, and dressing formulations',
      'Pharma and nutraceutical dry mixes'
    ],
    features: [
      'Sharp gingerol warmth without harsh burnt undertones',
      'Low moisture retention to prevent clumping in storage',
      'High solubility and uniform particle distribution',
      'Zero synthetic additives or bleaching agents'
    ],
    particleSizes: ['Fine (60-80 mesh)', 'Superfine (80-100 mesh)', 'Custom Mesh'],
    packagingOptions: ['1 kg Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Poly-lined Bag', '50 kg Bulk'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Spicy, zesty, pungent, and warm woody fragrance',
    pungencyLevel: 'Medium to High Warming Heat',
    colorTone: 'Pale Creamy Buff to Light Tan',
    seo: {
      metaTitle: 'Ginger Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Buy bulk ginger powder for commercial food manufacturing and export from Pragati Exim, Surat, Gujarat. Clean aroma and stable granulation.',
      keywords: ['ginger powder supplier', 'ginger powder exporter', 'dry ginger powder bulk', 'ginger powder manufacturer Surat']
    },
    customisationNotes: 'Particle size and pungency intensity can be modified for specialized seasoning matrices.',
    qualityAssurance: [
      'Cleaned and sorted prior to controlled milling',
      'Free from chemical bleaching agents',
      'Consistent moisture control under regulated parameters',
      'Certificate of Analysis (COA) provided with batch dispatch'
    ],
    image: '/images/products/ginger-powder.png'
  },
  {
    id: 'garlic-powder',
    slug: 'garlic-powder',
    name: 'Garlic Powder',
    subtitle: 'Intense, savory dehydrated garlic powder with instant dispersion',
    category: 'core-industrial',
    categoryLabel: 'Core Industrial Spice Powders',
    shortDescription: 'Free-flowing dehydrated garlic powder providing pungent, savory allium punch without moisture addition.',
    longOverview: 'Manufactured from dehydrated garlic cloves, Pragati Exim Garlic Powder offers consistent pungent aroma and intense savory depth. Ideal for dry seasoning mixes, extruded snacks, noodles, processed meats, and instant sauces where fresh garlic moisture cannot be introduced.',
    applications: [
      'Dry snack seasoning and savory potato chip coatings',
      'Instant noodle seasoning sachets and soup bases',
      'Marinades, meat seasoning rubs, and burger patties',
      'Processed dips, garlic dressings, and mayonnaise',
      'Bakery items like garlic breads, toasties, and breadsticks'
    ],
    features: [
      'High allicin pungency and robust savory aroma',
      'Low moisture anti-caking controlled packaging',
      'Instant dispersion in dry and liquid formulations',
      '100% pure dehydrated garlic with zero adulteration'
    ],
    particleSizes: ['Fine (80-100 mesh)', 'Granulated Garlic (40-60 mesh)', 'Coarse'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Moisture-Barrier Bag', '50 kg Drum/Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Intense, pungent, characteristic savory allium aroma',
    pungencyLevel: 'Sharp, robust savory pungency',
    colorTone: 'Creamy Off-White to Pale Cream',
    seo: {
      metaTitle: 'Garlic Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Premium garlic powder supplier and exporter in India. High potency, free-flowing dehydrated garlic for industrial food processors.',
      keywords: ['garlic powder supplier', 'garlic powder exporter', 'dehydrated garlic powder bulk', 'garlic powder Gujarat']
    },
    customisationNotes: 'Mesh sizes from fine powder to granulated available for specific dusting or blend applications.',
    qualityAssurance: [
      'Processed from high-grade dehydrated cloves',
      'Controlled humidity packing preventing lump formation',
      'Tested for purity and absence of foreign starches',
      'COA provided with batch verification'
    ],
    image: '/images/products/garlic-powder.png'
  },

  // PREMIUM & FUNCTIONAL SPICES
  {
    id: 'cinnamon-powder',
    slug: 'cinnamon-powder',
    name: 'Cinnamon Powder',
    subtitle: 'Sweet, woody, aromatic ground cinnamon for bakery, beverages and food manufacturing',
    category: 'premium-functional',
    categoryLabel: 'Premium & Functional Spices',
    shortDescription: 'Warm, sweet-woody cinnamon powder ground for high aroma retention in bakery and savory recipes.',
    longOverview: 'Pragati Exim Cinnamon Powder is milled from clean dried cinnamon bark under controlled processing parameters. It delivers a refined sweet-woody fragrance and warming taste without bitterness, providing consistent aromatic performance in bakeries, breakfast cereals, hot drinks, and savoury curry formulations.',
    applications: [
      'Commercial bakery: rolls, cookies, cakes, and pies',
      'Breakfast cereals, granolas, and protein bars',
      'Instant beverage mixes, coffee syrups, and spice teas',
      'Curry pastes, biryani masalas, and tagine seasonings',
      'HoReCa dessert preparation and confectionery'
    ],
    features: [
      'Rich aromatic cinnamaldehyde profile',
      'Uniform mesh particle size for smooth mixing without grit',
      'Low moisture barrier packaging to preserve freshness',
      'No artificial scent additives or wood filler'
    ],
    particleSizes: ['Fine (60-80 mesh)', 'Superfine (80-100 mesh)'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Multi-wall Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Deeply sweet, woody, comforting, warm spice aroma',
    pungencyLevel: 'Gentle, warming sweet pungency',
    colorTone: 'Warm Reddish Cinnamon Brown',
    seo: {
      metaTitle: 'Cinnamon Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Source pure cinnamon powder for bakery and food processing from Pragati Exim, Surat, Gujarat. Consistent aroma and fine granulation.',
      keywords: ['cinnamon powder supplier', 'cinnamon powder exporter', 'dalchini powder bulk', 'cinnamon powder manufacturer India']
    },
    customisationNotes: 'Granulation customized for dusting versus dough incorporation.',
    qualityAssurance: [
      'Strict quality screening of bark',
      'Clean grinding with zero synthetic fillers',
      'Batch traceability from raw intake to final packing',
      'COA provided upon dispatch'
    ],
    image: '/images/products/cinnamon-powder.png'
  },
  {
    id: 'cardamom-powder',
    slug: 'cardamom-powder',
    name: 'Cardamom Powder',
    subtitle: 'Intensely fragrant green elaichi powder for premium confectioneries and beverages',
    category: 'premium-functional',
    categoryLabel: 'Premium & Functional Spices',
    shortDescription: 'Ultra-fragrant green cardamom powder ground from whole pods to retain high cineole essential oils.',
    longOverview: 'Pragati Exim Green Cardamom Powder is ground from select whole cardamom pods. Through thermal-monitored grinding, the volatile aromatic essential oils are sealed into the fine powder, delivering a sweet, floral, and cooling fragrance indispensable in luxury confectioneries, premix beverages, and gourmet masalas.',
    applications: [
      'Traditional sweets, mithai production, and ice creams',
      'Bakery items, cakes, cookies, and dessert premixes',
      'Chai masala and instant tea beverage premixes',
      'Gourmet biryani masalas and royal Mughlai blends',
      'Functional health powders and wellness formulas'
    ],
    features: [
      'Rich in volatile aromatic cineole and terpinyl acetate',
      'Finely ground for smooth texture in dairy and batters',
      'Zero synthetic flavour enhancers or artificial scents',
      'Hermetically packed to prevent aroma loss'
    ],
    particleSizes: ['Fine Powder (60-80 mesh)', 'Superfine (80-100 mesh)'],
    packagingOptions: ['1 kg Foil Pouch', '5 kg Vacuum Barrier Pouch', '10 kg Pouch', '25 kg Drum/Pouch'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Intensely sweet, floral, herbal, citrus-eucalyptus aroma',
    pungencyLevel: 'Mild, sweet, cooling warmth',
    colorTone: 'Pale Greenish-Grey to Warm Light Brown',
    badge: 'Premium Aromatic',
    seo: {
      metaTitle: 'Cardamom Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Pure green cardamom powder supplier for confectionery, beverages and food manufacturing. Contact Pragati Exim, Surat, Gujarat.',
      keywords: ['cardamom powder supplier', 'cardamom powder exporter', 'elaichi powder bulk', 'cardamom powder Gujarat']
    },
    customisationNotes: 'Pure seed grind or whole pod grind options available depending on desired aroma strength and budget specifications.',
    qualityAssurance: [
      'Moisture barrier packaging to preserve delicate aroma',
      'No added husk fillers or spent seeds',
      'FSSAI-licensed controlled processing',
      'COA documentation per batch'
    ],
    image: '/images/products/cardamom-powder.png'
  },
  {
    id: 'clove-powder',
    slug: 'clove-powder',
    name: 'Clove Powder',
    subtitle: 'High eugenol ground clove powder for intense aromatic notes and seasoning',
    category: 'premium-functional',
    categoryLabel: 'Premium & Functional Spices',
    shortDescription: 'Intensely pungent and warm clove powder ground from whole cloves rich in natural eugenol essential oil.',
    longOverview: 'Manufactured from selected whole cloves with high volatile oil content, Pragati Exim Clove Powder delivers deep, warming, and sweet-numbing aromatic power. Controlled milling safeguards the delicate eugenol compounds so that even small dosage percentages produce powerful aromatic impact in industrial seasoning and food production.',
    applications: [
      'Garam masala and specialty curry powders',
      'Processed meats, sausage seasonings, and hams',
      'Pickles, spiced vinegars, and fruit preserves',
      'Bakery goods, spiced gingerbread, and mulled mixes',
      'Oral care, herbal teas, and specialty food blends'
    ],
    features: [
      'High natural eugenol concentration for robust flavor impact',
      'Finely ground for homogeneous dispersion in formulations',
      'No spent cloves or exhausted oil residue',
      'Packed in high-barrier multi-layer foil pouches'
    ],
    particleSizes: ['Fine Powder (60-80 mesh)', 'Superfine (80 mesh)'],
    packagingOptions: ['1 kg Foil Barrier Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Drum/Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Intensely pungent, warm, sweet-spicy with characteristic numbing clove aroma',
    pungencyLevel: 'High Warm Aromatic Pungency',
    colorTone: 'Rich Dark Mahogany Brown',
    seo: {
      metaTitle: 'Clove Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Premium clove powder supplier in India for food manufacturing and exports. Pragati Exim, Surat, Gujarat. High eugenol content.',
      keywords: ['clove powder supplier', 'clove powder exporter', 'laung powder bulk', 'clove powder manufacturer Surat']
    },
    customisationNotes: 'Available in dedicated single-origin or standard industrial blends.',
    qualityAssurance: [
      'Whole clove sorting and stem removal',
      'Controlled low-heat grinding to prevent oil loss',
      'FSSAI-licensed facility processing',
      'Batch COA supplied with dispatch'
    ],
    image: '/images/products/clove-powder.png'
  },
  {
    id: 'black-pepper-powder',
    slug: 'black-pepper-powder',
    name: 'Black Pepper Powder',
    subtitle: 'Sharp piperine heat and bold aromatic volatile oils for precision seasoning',
    category: 'premium-functional',
    categoryLabel: 'Premium & Functional Spices',
    shortDescription: 'Bold, sharp black pepper powder ground from whole black peppercorns with high piperine retention.',
    longOverview: 'Pragati Exim Black Pepper Powder is ground from cleaned, high-density whole black peppercorns. Milled using cryogenic/controlled cold grinding principles to avoid heat degradation of its volatile essential oils and biting piperine warmth. Essential for seasoning rubs, soup bases, ready meals, and table condiments.',
    applications: [
      'Snack seasoning, savory coatings, and potato chips',
      'Sauces, gravies, salad dressings, and mayonnaise',
      'Processed meat seasoning and butcher formulations',
      'Bakery items, crackers, and savoury biscuits',
      'Institutional table sachets and HoReCa kitchen batches'
    ],
    features: [
      'High piperine content for authentic biting warmth',
      'Cold-ground to retain fresh woody-peppery essential oil notes',
      'Zero dust, spent pepper, or mineral fillers',
      'Available in fine powder or coarse cracked black pepper'
    ],
    particleSizes: ['Fine (60-80 mesh)', 'Coarse Cracked (16-30 mesh)', 'Medium Coarse'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Bag', '50 kg Drum/Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Sharp, penetrating, woody, citrus-pine and pungent aroma',
    pungencyLevel: 'High Biting Piperine Heat',
    colorTone: 'Deep Charcoal Grey to Dark Brown-Black',
    seo: {
      metaTitle: 'Black Pepper Powder Supplier & Exporter | Pragati Exim',
      metaDescription: 'Buy industrial black pepper powder with high piperine content from Pragati Exim, Surat, Gujarat. Clean grinding, export-grade packaging.',
      keywords: ['black pepper powder supplier', 'black pepper powder exporter', 'bulk kali mirch powder', 'black pepper powder Gujarat']
    },
    customisationNotes: 'Coarse cracked / butcher grind available for visual appeal on gourmet rubs and bread crusts.',
    qualityAssurance: [
      'Heavy matter destoned and pinhead separated',
      'No spent pepper blending or starch addition',
      'Controlled packaging against essential oil loss',
      'COA available for lot release'
    ],
    image: '/images/products/black-pepper-powder.png'
  },
  {
    id: 'nutmeg-powder',
    slug: 'nutmeg-powder',
    name: 'Nutmeg Powder',
    subtitle: 'Rich, sweet, nutty ground jaiphal for gourmet processing and bakery applications',
    category: 'premium-functional',
    categoryLabel: 'Premium & Functional Spices',
    shortDescription: 'Sweet, fragrant, and nutty nutmeg powder freshly ground from whole nutmeg kernels under controlled temperature.',
    longOverview: 'Pragati Exim Nutmeg Powder is processed from sound, mature nutmeg kernels. Gentle milling preserves myristicin and volatile oil fractions, producing a fine, aromatic spice powder that elevates commercial baked items, dairy desserts, savory sauces, and artisanal sausage seasonings.',
    applications: [
      'Bakery: cakes, custards, pies, and eggnogs',
      'Savory cheese sauces, pasta fillings, and lasagna',
      'Processed meat seasonings and charcuterie',
      'Premium spice blends and garam masala variants',
      'Beverage premixes and specialty hot drinks'
    ],
    features: [
      'Naturally rich in volatile aromatic essential oils',
      'Clean ground texture without hard grain residue',
      'No added shells, dust, or synthetic flavourings',
      'Aroma-sealed packaging for prolonged shelf life'
    ],
    particleSizes: ['Fine Powder (60-80 mesh)', 'Fine (80 mesh)'],
    packagingOptions: ['1 kg Foil Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Warm, sweet, nutty, deeply aromatic fragrance',
    pungencyLevel: 'Mild sweet warmth',
    colorTone: 'Warm Nut-Brown to Pale Khaki',
    seo: {
      metaTitle: 'Nutmeg Powder Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Industrial nutmeg powder supplier for bakery, dairy and savory food applications. Pragati Exim, Surat, Gujarat. Batch-wise COA.',
      keywords: ['nutmeg powder supplier', 'nutmeg powder exporter', 'jaiphal powder bulk', 'nutmeg powder manufacturer India']
    },
    customisationNotes: 'Mesh granulation modified for dusting or dough integration.',
    qualityAssurance: [
      'Aflatoxin screening on raw kernels',
      'Hygienic milling in controlled clean room',
      'No artificial adulterants or exhausted powder',
      'Batch traceability and analytical COA'
    ],
    image: '/images/products/nutmeg-powder.png'
  },
  {
    id: 'white-pepper-powder',
    slug: 'white-pepper-powder',
    name: 'White Pepper Powder',
    subtitle: 'Subtle earthy heat and clean pale colour for white gravies and creamy sauces',
    category: 'premium-functional',
    categoryLabel: 'Premium & Functional Spices',
    shortDescription: 'Delicate, refined white pepper powder ground from decorticated ripe peppercorns for pale culinary formulations.',
    longOverview: 'Processed from decorticated mature peppercorns, Pragati Exim White Pepper Powder provides a sharp, fermented warmth without discoloring light-colored sauces, cream soups, cheese blends, and delicate processed meats. Precision milled to a fine mesh for invisible, uniform integration.',
    applications: [
      'White sauces, béchamel, and creamy soup bases',
      'Instant noodle broth seasonings and light marinades',
      'Processed cheese and mayonnaise formulations',
      'Seafood processing and light meat seasoning',
      'Fine dining commercial hotel preparation'
    ],
    features: [
      'Clean pale color preventing visual specks in white sauces',
      'Distinctive fermented sharp heat profile',
      'Homogeneous fine milling for immediate dissolution',
      '100% pure decorticated pepper with zero fillers'
    ],
    particleSizes: ['Fine Powder (80 mesh)', 'Extra Fine (100 mesh)'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Moisture-Proof Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Fermented, musky, earthy and sharp pungency',
    pungencyLevel: 'Sharp, direct heat',
    colorTone: 'Light Cream to Pale Greyish-White',
    seo: {
      metaTitle: 'White Pepper Powder Supplier & Exporter | Pragati Exim',
      metaDescription: 'Industrial white pepper powder supplier in India for sauces, soups and food manufacturing. Pragati Exim, Surat, Gujarat.',
      keywords: ['white pepper powder supplier', 'white pepper powder exporter', 'bulk safed mirch powder', 'white pepper powder India']
    },
    customisationNotes: 'Mesh count tailored for rapid liquid suspension.',
    qualityAssurance: [
      'Complete husk removal verified',
      'No chemical bleaching agents used',
      'Batch traceability maintained',
      'COA provided on dispatch'
    ],
    image: '/images/products/white-pepper-powder.png'
  },

  // BLENDED & APPLICATION-SPECIFIC SPICES
  {
    id: 'garam-masala',
    slug: 'garam-masala',
    name: 'Garam Masala',
    subtitle: 'Classic aromatic whole-spice blend formulated for commercial food manufacturers and HoReCa',
    category: 'blended-masalas',
    categoryLabel: 'Blended & Application-Specific Spices',
    shortDescription: 'Balanced, deeply aromatic warm spice blend perfected for consistent taste in ready meals and restaurant kitchens.',
    longOverview: 'Pragati Exim Garam Masala is a balanced blend of warming spices including coriander, cumin, black pepper, cardamom, clove, cinnamon, and nutmeg. Blended under controlled recipe ratios and milled to exact mesh specs, it ensures that your commercial gravies, frozen meals, and restaurant dishes deliver identical aromatic depth across every single batch.',
    applications: [
      'Ready-to-eat Indian curries, paneer gravies, and dals',
      'Commercial hotel, restaurant and catering (HoReCa) kitchens',
      'Frozen meal kits and retort pouch manufacturing',
      'Extruded savory snacks and masala coatings',
      'Canteen and institutional food preparation'
    ],
    features: [
      'Precision spice ratios for guaranteed taste repeatability',
      'Warm balanced aroma without overwhelming harshness',
      '100% whole spices ground together without starches or fillers',
      'Consistent dissolution in oil and water-based gravies'
    ],
    particleSizes: ['Standard Fine (60-80 mesh)', 'Fine (80 mesh)'],
    packagingOptions: ['1 kg Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Bag', '50 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Rich, layered, warm, sweet-spicy with citrus and clove undertones',
    pungencyLevel: 'Medium Warmth',
    colorTone: 'Rich Warm Golden Brown',
    badge: 'Popular B2B Blend',
    seo: {
      metaTitle: 'Garam Masala Manufacturer & Supplier | Pragati Exim Surat',
      metaDescription: 'Consistent garam masala supplier for food manufacturers and HoReCa kitchens. Pragati Exim, Surat, Gujarat. Batch-wise consistency guaranteed.',
      keywords: ['garam masala manufacturer', 'garam masala supplier', 'bulk garam masala', 'garam masala exporter Gujarat']
    },
    customisationNotes: 'Ratio can be tweaked for North Indian, Mughlai, or custom culinary profiles.',
    qualityAssurance: [
      'Standardized batch mixing to prevent spice segregation',
      'Processed in FSSAI-licensed facility',
      'Zero artificial colours, flavours or MSG',
      'COA documentation provided with dispatch'
    ],
    image: '/images/products/garam-masala.png'
  },
  {
    id: 'regional-masalas',
    slug: 'regional-masalas',
    name: 'Regional Masalas',
    subtitle: 'Authentic regional Indian culinary spice formulations tailored for food businesses',
    category: 'blended-masalas',
    categoryLabel: 'Blended & Application-Specific Spices',
    shortDescription: 'Tailored authentic regional spice formulations honoring specific state and culinary tradition requirements.',
    longOverview: 'Pragati Exim manufactures authentic regional spice blends designed for specialty culinary applications across India. From Gujarati Sambhar/Undhiyu masala to Kolhapuri, Chettinad, Malvani, and Punjabi spice profiles, our formulations capture true culinary authenticity while maintaining the industrial batch repeatability modern food operations require.',
    applications: [
      'Regional frozen meal brands and ready gravies',
      'Ethnic restaurant chains and theme dining kitchens',
      'Specialty snack seasonings and regional namkeen',
      'Central kitchen preparation for commercial catering',
      'Institutional contract packing orders'
    ],
    features: [
      'Authentic recipe profiles respecting regional spice ratios',
      'Batch consistency eliminating chef-to-chef flavor drift',
      'Pure whole spices ground with controlled thermal steps',
      'Free from artificial colours and synthetic flavor enhancers'
    ],
    particleSizes: ['Fine (60 mesh)', 'Semi-Coarse Regional Style', 'Coarse'],
    packagingOptions: ['1 kg Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Rich, authentic regional spice notes based on profile',
    pungencyLevel: 'Customizable per regional recipe',
    colorTone: 'Varies by regional formulation (Golden, Rust Red, Dark Brown)',
    seo: {
      metaTitle: 'Regional Masalas Manufacturer & Supplier | Pragati Exim',
      metaDescription: 'Authentic regional spice blends for food manufacturers, HoReCa, and brands. Sourced and blended by Pragati Exim, Surat, Gujarat.',
      keywords: ['regional masalas supplier', 'custom regional spice blends', 'authentic masala manufacturer', 'spice supplier Gujarat']
    },
    customisationNotes: 'State-specific and community-specific flavor profiles matched to client bench samples.',
    qualityAssurance: [
      'Precision recipe scaling per batch',
      'FSSAI-licensed facility processing',
      'Clean milling and moisture-proof packing',
      'COA documentation provided with dispatch'
    ],
    image: '/images/products/regional-masalas.png'
  },
  {
    id: 'fry-masala',
    slug: 'fry-masala',
    name: 'Fry Masala',
    subtitle: 'Zesty, tangy, savory spice blend for snack dustings, fried foods and street-style snacks',
    category: 'blended-masalas',
    categoryLabel: 'Blended & Application-Specific Spices',
    shortDescription: 'Tangy, zesty, and savory seasoning blend for dusting over fried snacks, fries, fritters, and extruded savories.',
    longOverview: 'Pragati Exim Fry Masala is formulated for immediate sensory impact. Combining dry mango, black salt, cumin, coriander, and chilli in balanced proportion, it provides a mouthwatering chatpata (tangy-spicy) burst that adheres evenly to hot fried chips, wafers, fries, and street food specialties.',
    applications: [
      'French fries, potato chips, and extruded snack dusting',
      'Fried snack brands, namkeen, and savory farsan',
      'HoReCa bar snacks, appetizer seasoning, and quick service restaurants',
      'Commercial fry kitchens and food truck networks',
      'Chaat and appetizer dry seasoning'
    ],
    features: [
      'Excellent surface adhesion to fried and extruded surfaces',
      'Balanced tanginess and spice without chemical aftertaste',
      'Free-flowing anti-caking particle profile',
      '100% natural spice formulation'
    ],
    particleSizes: ['Fine Dusting Mesh (60-80 mesh)', 'Standard Blend'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Moisture-Barrier Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Tangy, zesty, savory with distinct black salt and roasted cumin notes',
    pungencyLevel: 'Medium Tangy Heat',
    colorTone: 'Warm Pinkish-Khaki Brown',
    seo: {
      metaTitle: 'Fry Masala Supplier & Manufacturer | Pragati Exim Surat',
      metaDescription: 'Bulk fry masala and snack dusting spice blends for snack manufacturers and restaurants. Pragati Exim, Surat, Gujarat.',
      keywords: ['fry masala supplier', 'fry masala manufacturer', 'snack seasoning bulk', 'fry masala Gujarat']
    },
    customisationNotes: 'Tanginess, salt levels, or chilli heat can be adjusted for your brand snack specification.',
    qualityAssurance: [
      'Clean blending in moisture-controlled room',
      'No synthetic colours or artificial MSG',
      'Consistent taste profiling per production batch',
      'COA available on request'
    ],
    image: '/images/products/fry-masala.png'
  },
  {
    id: 'biryani-masala',
    slug: 'biryani-masala',
    name: 'Biryani Masala',
    subtitle: 'Royal aromatic blend engineered for rice dishes, marination and catering kitchens',
    category: 'blended-masalas',
    categoryLabel: 'Blended & Application-Specific Spices',
    shortDescription: 'Regal, fragrant blend of whole spices and aromatic powders for commercial biryani kitchens and packaged meal kits.',
    longOverview: 'Formulated specifically for the demanding requirements of commercial biryani preparation, Pragati Exim Biryani Masala harmonizes sweet aromatics (mace, cardamom, star anise, cinnamon) with pungent black pepper, cumin, and coriander. It infuses basmati rice and marinated proteins with an unmistakable, lingering royal aroma.',
    applications: [
      'Commercial biryani chains, cloud kitchens, and restaurants',
      'Ready-to-eat biryani meal trays and retort rice packs',
      'Institutional catering for large banquet events',
      'Biryani gravy paste and marinade manufacturing',
      'Packaged recipe seasoning kits'
    ],
    features: [
      'Rich floral-spicy aroma that releases during steam cooking',
      'Engineered for deep protein marination and rice permeation',
      'Free from chemical flavor enhancers and artificial colors',
      'Batch-tested for uniform spice distribution'
    ],
    particleSizes: ['Semi-Coarse with Whole Spice Flecks', 'Fine Powder (60 mesh)'],
    packagingOptions: ['1 kg Pouch', '5 kg Barrier Bag', '10 kg Pouch', '25 kg Bag'],
    moq: '5 kg (Domestic) / Bulk as per export requirement',
    aromaProfile: 'Royal, floral, sweet-woody, rich aromatic spice notes',
    pungencyLevel: 'Medium Balanced Heat',
    colorTone: 'Rich Amber Brown',
    seo: {
      metaTitle: 'Biryani Masala Supplier & Exporter | Pragati Exim Surat',
      metaDescription: 'Commercial biryani masala manufacturer for restaurants, cloud kitchens and food brands. Pragati Exim, Surat, Gujarat.',
      keywords: ['biryani masala supplier', 'biryani masala manufacturer', 'bulk biryani masala', 'biryani masala Gujarat']
    },
    customisationNotes: 'Hyderabadi, Awadhi, or Kolkata style adjustments available for institutional orders.',
    qualityAssurance: [
      'Individual spice sorting before controlled batch blending',
      'Processed in hygienic FSSAI-compliant environment',
      'Multi-layer packaging to seal in top notes',
      'COA provided with batch confirmation'
    ],
    image: '/images/products/biryani-masala.png'
  },
  {
    id: 'custom-spice-blends',
    slug: 'custom-spice-blends',
    name: 'Custom Spice Blends',
    subtitle: 'Bespoke spice formulations engineered to your exact recipe, mesh size, and aroma requirements',
    category: 'blended-masalas',
    categoryLabel: 'Blended & Application-Specific Spices',
    shortDescription: 'Tailor-made spice formulations developed to meet specific particle size, pungency, aroma, and cost targets.',
    longOverview: 'Pragati Exim collaborates directly with food technologists, R&D chefs, seasoning brands, and procurement managers to formulate bespoke spice blends. We adjust spice blend ratios, particle granulation (mesh size), heat level (SHU), and aroma intensity to match your exact processing requirements, followed by pilot batch sampling and commercial batch supply.',
    applications: [
      'Proprietary snack seasonings and dustings',
      'Signature chain restaurant marinades and gravies',
      'RTE and frozen food proprietary masala bases',
      'Institutional contract manufacturing formulations',
      'Export-specific spice blends conforming to buyer recipes'
    ],
    features: [
      'Confidential recipe formulation and non-disclosure support',
      'Precise particle size matching (Fine / Medium / Coarse)',
      'Pre-production bench samples provided for client sign-off',
      'Batch-to-batch taste, color, and aroma repeatability'
    ],
    particleSizes: ['Bespoke Mesh Granulation (30 to 100 mesh)', 'Micro-fine', 'Coarse Rub'],
    packagingOptions: ['1 kg Pouch', '5 kg Pouch', '10 kg Pouch', '25 kg Poly-lined Bag', '50 kg Master Pack', 'Custom Packaging'],
    moq: '10 kg for Customized Blends',
    aromaProfile: 'Tailored exactly to client specification',
    pungencyLevel: 'Formulated to target SHU specification',
    colorTone: 'Engineered as per recipe requirement',
    badge: 'Custom Formulations',
    seo: {
      metaTitle: 'Custom Spice Blend Manufacturer & Exporter | Pragati Exim',
      metaDescription: 'Bespoke custom spice blends formulated for food manufacturers, snack brands and HoReCa. Minimum MOQ 10kg. Pragati Exim, Surat, Gujarat.',
      keywords: ['custom spice blend manufacturer', 'bespoke spice formulations', 'custom masala blending', 'industrial seasoning supplier Gujarat']
    },
    customisationNotes: 'Customization is available subject to minimum order quantities of 10 kg. Sampling blends provided as per requirement.',
    qualityAssurance: [
      'Pre-production sampling and recipe lock',
      'Controlled processing in FSSAI-licensed facility',
      'Zero artificial fillers or undeclared additives',
      'Batch COA supplied with every consignment'
    ],
    image: '/images/products/custom-spice-blends.png'
  }
];
