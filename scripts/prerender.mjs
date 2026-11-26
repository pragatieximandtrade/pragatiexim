import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const serverDir = path.join(distDir, 'server');
const templatePath = path.join(distDir, 'index.html');
const serverEntryPath = path.join(serverDir, 'entry-server.js');

const template = fs.readFileSync(templatePath, 'utf-8');
const { render, getPrerenderRoutes } = await import(pathToFileURL(serverEntryPath).href);

const routes = getPrerenderRoutes();

for (const route of routes) {
  const { html, head } = render(route);

  // Strip the default static fallback title/description so helmet's per-route metadata is canonical
  let pageHtml = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  let outputFile;
  if (route === '/') {
    outputFile = path.join(distDir, 'index.html');
  } else if (route === '/404') {
    outputFile = path.join(distDir, '404.html');
  } else {
    const cleanRoute = route.replace(/^\/+|\/+$/g, '');
    const routeDir = path.join(distDir, cleanRoute);
    fs.mkdirSync(routeDir, { recursive: true });
    outputFile = path.join(routeDir, 'index.html');
  }

  fs.writeFileSync(outputFile, pageHtml, 'utf-8');
}

fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} static SEO routes into dist/`);
