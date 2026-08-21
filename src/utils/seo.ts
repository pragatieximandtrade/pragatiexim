import { COMPANY_DATA } from '../data/company';
import { Product } from '../data/products';
import { BlogPost } from '../data/articles';

export const GLOBAL_EXPORT_COUNTRIES = [
  'Dubai',
  'UAE',
  'USA',
  'United States',
  'UK',
  'United Kingdom',
  'Saudi Arabia',
  'Oman',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Malaysia',
  'Singapore',
  'Germany',
  'Canada',
  'Australia',
  'South Africa',
  'Netherlands',
  'Vietnam',
  'Pan-India'
];

export function generateGlobalExportKeywords(productName?: string): string[] {
  const targetProduct = productName || 'Spices';
  const keywords: string[] = [
    `Spices supplier in Dubai`,
    `Spice exporter in Dubai`,
    `Indian spices supplier in Dubai`,
    `${targetProduct} supplier in Dubai`,
    `${targetProduct} Powder in Dubai`,
    `${targetProduct} exporter in Dubai`,
    `${targetProduct} bulk manufacturer in Dubai`,
  ];

  GLOBAL_EXPORT_COUNTRIES.forEach(country => {
    keywords.push(`${targetProduct} supplier in ${country}`);
    keywords.push(`${targetProduct} Powder in ${country}`);
    keywords.push(`${targetProduct} exporter in ${country}`);
    keywords.push(`Spices supplier in ${country}`);
  });

  return Array.from(new Set(keywords));
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_DATA.name,
    url: 'https://pragatiexim.com',
    logo: 'https://pragatiexim.com/favicon.svg',
    description: COMPANY_DATA.tagline,
    telephone: COMPANY_DATA.contact.phoneDisplay,
    email: COMPANY_DATA.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_DATA.location.city,
      addressRegion: COMPANY_DATA.location.state,
      addressCountry: 'IN'
    },
    areaServed: GLOBAL_EXPORT_COUNTRIES.map(c => ({
      '@type': 'AdministrativeArea',
      name: c
    })),
    sameAs: [
      `https://wa.me/${COMPANY_DATA.contact.whatsappNumber}`
    ]
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_DATA.name,
    image: 'https://pragatiexim.com/og-image.jpg',
    telephone: COMPANY_DATA.contact.phoneDisplay,
    email: COMPANY_DATA.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_DATA.location.city,
      addressRegion: COMPANY_DATA.location.state,
      addressCountry: 'IN'
    },
    areaServed: GLOBAL_EXPORT_COUNTRIES,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00'
    }
  };
}

export function getProductSchema(product: Product) {
  const globalKeywords = generateGlobalExportKeywords(product.name);
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} — Bulk Supplier & Exporter`,
    description: `${product.shortDescription} Bulk supplier & exporter for Dubai, UAE, USA, UK, Saudi Arabia and global food markets.`,
    image: product.image,
    category: product.categoryLabel,
    keywords: globalKeywords.join(', '),
    brand: {
      '@type': 'Brand',
      name: COMPANY_DATA.name
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      offerCount: '1',
      description: `B2B Bulk Supply MOQ: ${product.moq}. Packaging: ${product.packagingOptions.join(', ')}`
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://pragatiexim.com${item.url}`
    }))
  };
}

export function getArticleSchema(article: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: {
      '@type': 'Organization',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_DATA.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://pragatiexim.com/favicon.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pragatiexim.com/blog/${article.slug}`
    }
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
