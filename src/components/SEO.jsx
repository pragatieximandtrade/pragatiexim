import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../data/company';

const SITE_NAV_LINKS = [
  {
    name: 'Herbal Powders',
    description: 'USDA Organic Certified whole-milled herbal powders including Moringa, Ashwagandha, Turmeric, Shatavari, and Psyllium Husk.',
    url: '/herbal-powders'
  },
  {
    name: 'Botanical Extracts',
    description: '42 standardized phytochemical extracts including Curcumin 95%, Berberine 97% HPLC, Gymnema 75%, Ginkgo, and Resveratrol.',
    url: '/botanical-extracts'
  },
  {
    name: 'About Pragati Exim',
    description: 'India-based B2B botanical ingredient exporter in Surat, Gujarat serving international nutraceutical and supplement buyers.',
    url: '/about-us'
  },
  {
    name: 'Quality & Certifications',
    description: 'GMP, ISO 22000, HACCP, USDA Organic, Halal India, Star-K Kosher, and FSSAI verified quality compliance.',
    url: '/certifications'
  },
  {
    name: 'Global Export Markets',
    description: 'International B2B shipping and documentation support from India to North America, Europe, Asia, and the Middle East.',
    url: '/export-markets'
  },
  {
    name: 'B2B Sourcing Guides',
    description: 'Technical procurement guides on Moringa powder sourcing, Berberine assays, and Certificate of Analysis evaluation.',
    url: '/resources'
  },
  {
    name: 'Contact Export Desk',
    description: 'Request bulk export quotations (MOQ 50 KG), batch COAs, technical data sheets, and evaluation samples.',
    url: '/contact-us'
  }
];

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/moringa_powder.jpg',
  ogType = 'website',
  noIndex = false,
  product = null,
  breadcrumbs = null,
  itemList = null,
  article = null
}) {
  const siteUrl = COMPANY.website.replace(/\/+$/, '');
  const pageTitle = title
    ? `${title} | Pragati Exim & Trade`
    : 'Pragati Exim & Trade | Herbal Powders & Botanical Extracts Exporter India';

  const pageDescription = description ||
    'Pragati Exim is an India-based B2B exporter of USDA Organic Certified herbal powders and standardized botanical extracts for international nutraceutical and dietary supplement manufacturers.';

  const normalizedPath = canonicalUrl
    ? (canonicalUrl === '/' ? '/' : `/${canonicalUrl.replace(/^\/+/, '')}`)
    : '/';
  const fullCanonical = normalizedPath === '/' ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`;
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: `${siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo_gmp.png`
    },
    description: 'Exporter of premium herbal powders and standardized botanical extracts from India to international B2B buyers.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone.india,
      contactType: 'sales',
      email: COMPANY.email.primary,
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi', 'Gujarati']
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    description: pageDescription,
    inLanguage: 'en',
    publisher: {
      '@id': `${siteUrl}/#organization`
    }
  };

  const siteNavSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/#site-navigation`,
    name: 'Primary Website Navigation',
    itemListElement: SITE_NAV_LINKS.map((item, idx) => ({
      '@type': 'SiteNavigationElement',
      position: idx + 1,
      name: item.name,
      description: item.description,
      url: `${siteUrl}${item.url}`
    }))
  };

  const productSchema = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.id,
    image: `${siteUrl}${product.image || '/images/moringa_powder.jpg'}`,
    description: product.description,
    url: fullCanonical,
    brand: {
      '@type': 'Brand',
      name: COMPANY.name
    },
    manufacturer: {
      '@id': `${siteUrl}/#organization`
    },
    category: product.category,
    additionalProperty: [
      product.botanicalName ? { '@type': 'PropertyValue', name: 'Botanical Name', value: product.botanicalName } : null,
      product.plantPart ? { '@type': 'PropertyValue', name: 'Plant Part', value: product.plantPart } : null,
      product.standardizedGrade ? { '@type': 'PropertyValue', name: 'Standardized Grade', value: product.standardizedGrade } : null,
      product.analyticalMethod ? { '@type': 'PropertyValue', name: 'Analytical Method', value: product.analyticalMethod } : null,
      { '@type': 'PropertyValue', name: 'Minimum Order Quantity', value: '50 KG' }
    ].filter(Boolean),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: fullCanonical,
      description: 'B2B wholesale pricing and specifications available upon commercial inquiry (MOQ 50 KG).'
    }
  } : null;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http')
        ? crumb.url
        : (crumb.url === '/' ? `${siteUrl}/` : `${siteUrl}${crumb.url}`)
    }))
  } : null;

  const collectionSchema = itemList && itemList.items && itemList.items.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: itemList.name || pageTitle,
    description: pageDescription,
    url: fullCanonical,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: itemList.items.length,
      itemListElement: itemList.items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        url: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
      }))
    }
  } : null;

  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image}`,
    datePublished: article.publishDate,
    author: {
      '@type': 'Organization',
      name: article.author || COMPANY.name
    },
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    mainEntityOfPage: fullCanonical
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={COMPANY.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {normalizedPath === '/' && (
        <script type="application/ld+json">
          {JSON.stringify(siteNavSchema)}
        </script>
      )}

      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {collectionSchema && (
        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
        </script>
      )}

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
}
