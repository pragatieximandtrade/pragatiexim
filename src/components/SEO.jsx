import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../data/company';

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/moringa_powder.jpg',
  ogType = 'website',
  product = null,
  breadcrumbs = null
}) {
  const siteUrl = COMPANY.website;
  const pageTitle = title 
    ? `${title} | Pragati Exim & Trade` 
    : 'Pragati Exim & Trade | Herbal Powders & Botanical Extracts Exporter India';
  
  const pageDescription = description || 
    'Pragati Exim is an India-based B2B exporter of USDA Organic Certified herbal powders and standardized botanical extracts for international nutraceutical and dietary supplement manufacturers.';

  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "alternateName": COMPANY.shortName,
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo_gmp.png`,
    "description": "Exporter of premium herbal powders and standardized botanical extracts from India to international B2B buyers.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": COMPANY.address.city,
      "addressRegion": COMPANY.address.state,
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.phone.india,
      "contactType": "export sales",
      "email": COMPANY.email.primary,
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    }
  };

  // Product Schema (if on a product page)
  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `${siteUrl}${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Pragati Exim & Trade"
    },
    "category": product.category,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "B2B wholesale pricing and specifications available upon commercial inquiry."
    }
  } : null;

  // Breadcrumbs Schema (if breadcrumb hierarchy is provided)
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${siteUrl}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Pragati Exim & Trade" />

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
    </Helmet>
  );
}
