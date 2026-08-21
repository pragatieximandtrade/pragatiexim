import React, { useEffect } from 'react';
import { generateGlobalExportKeywords } from '../../utils/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  productName?: string;
  keywords?: string[];
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = 'https://pragatiexim.com/og-image.jpg',
  productName,
  keywords,
  schema
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Dynamic Global Export B2B Meta Keywords (Dubai, UAE, USA, UK, Saudi Arabia, etc.)
    const globalExportKeywords = keywords || generateGlobalExportKeywords(productName);
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', globalExportKeywords.join(', '));

    // Set canonical link
    const canonicalUrl = `https://pragatiexim.com${canonicalPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Set Open Graph tags
    const setMetaTag = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:image', ogImage);

    // Set JSON-LD Schema
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', 'json-ld-schema');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    if (schema) {
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, description, canonicalPath, ogImage, productName, keywords, schema]);

  return null;
};
