import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { AppShell } from './App';
import { HERBAL_POWDERS, BOTANICAL_EXTRACTS } from './data/products';
import { BLOGS } from './data/blogs';

export function getPrerenderRoutes() {
  const staticRoutes = [
    '/',
    '/about-us',
    '/herbal-powders',
    '/botanical-extracts',
    '/certifications',
    '/export-markets',
    '/resources',
    '/contact-us',
    '/sitemap',
    '/privacy-policy',
    '/terms-and-conditions',
    '/404'
  ];

  const powderRoutes = HERBAL_POWDERS.map((p) => `/herbal-powders/${p.slug}`);
  const extractRoutes = BOTANICAL_EXTRACTS.map((p) => `/botanical-extracts/${p.slug}`);
  const blogRoutes = BLOGS.map((b) => `/resources/${b.slug}`);

  return [...staticRoutes, ...powderRoutes, ...extractRoutes, ...blogRoutes];
}

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;
  const head = [
    helmet?.title?.toString() || '',
    helmet?.meta?.toString() || '',
    helmet?.link?.toString() || '',
    helmet?.script?.toString() || ''
  ]
    .filter(Boolean)
    .join('\n    ');

  return { html, head };
}
