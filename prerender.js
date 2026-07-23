import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to render
const routes = [
  '/',
  '/installation',
  '/guide',
  '/features',
  '/start-fast',
  '/cases',
  '/settings',
  '/guides',
  '/groups',
  '/firefly',
  '/server-api',
  '/docs-support',
];

async function run() {
  console.log('Starting static site pre-rendering...');

  // 1. Load the compiled SSR bundle
  const bundlePath = path.resolve(__dirname, 'dist-server/entry-server.js');
  if (!fs.existsSync(bundlePath)) {
    console.error('Error: dist-server/entry-server.js not found. Please run SSR build first.');
    process.exit(1);
  }

  // Import the bundle
  const { render, seoData } = await import(bundlePath);

  // 2. Read the template index.html (client build result)
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Please run "vite build" first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 3. Generate static HTML files for each route
  for (const url of routes) {
    console.log(`Prerendering route: ${url}`);
    const appHtml = render(url);

    // Get SEO data for this route
    const pageSeo = seoData[url] || {
      title: 'Lupyd - Privacy First Network',
      description: 'Lupyd promises security, data privacy, and a new social media experience to users and businesses alike.',
      schemas: [],
    };

    // Construct metadata HTML to inject
    let metaHtml = `\n    <title>${pageSeo.title}</title>`;
    metaHtml += `\n    <meta name="description" content="${pageSeo.description.replace(/"/g, '&quot;')}" />`;
    
    if (pageSeo.schemas && pageSeo.schemas.length > 0) {
      pageSeo.schemas.forEach(schema => {
        metaHtml += `\n    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
      });
    }

    // Inject lightweight vanilla JS script for layout toggling
    metaHtml += `
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Mobile Sidebar Toggle
      const menuBtn = document.querySelector('.mobile-header button');
      const sidebar = document.querySelector('.sidebar-container');
      const overlay = document.querySelector('.mobile-overlay');
      
      if (menuBtn && sidebar && overlay) {
        menuBtn.addEventListener('click', () => {
          sidebar.classList.add('mobile-open');
          overlay.classList.add('active');
        });
        overlay.addEventListener('click', () => {
          sidebar.classList.remove('mobile-open');
          overlay.classList.remove('active');
        });
        // Close on mobile nav click
        const links = sidebar.querySelectorAll('.sidebar-link');
        links.forEach(link => {
          link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
              sidebar.classList.remove('mobile-open');
              overlay.classList.remove('active');
            }
          });
        });
      }

      // Desktop Sidebar Collapse/Expand Toggle
      const toggleBtn = document.querySelector('.sidebar-toggle-btn');
      const wrapper = document.querySelector('.layout-wrapper');
      
      if (toggleBtn && sidebar && wrapper) {
        toggleBtn.addEventListener('click', () => {
          const isClosed = sidebar.classList.toggle('sidebar-closed');
          if (isClosed) {
            wrapper.classList.add('sidebar-closed');
            toggleBtn.title = "Expand Sidebar";
          } else {
            wrapper.classList.remove('sidebar-closed');
            toggleBtn.title = "Collapse Sidebar";
          }
        });
      }
    });
  </script>
    `;

    // Replace target sections in template HTML
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(/<title>[^<]*<\/title>/i, metaHtml)
      .replace(/<meta name="description"[^>]*\/>/i, '');

    // Strip out React client-side script bundles so that no JS loads in production (except the injected toggles)
    html = html.replace(/<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>/gi, '');
    html = html.replace(/<script type="module" src="\/src\/main\.tsx"><\/script>/gi, '');
    html = html.replace(/<link rel="modulepreload"[^>]*>/gi, '');

    // Ensure mobile sidebar is closed by default in the static HTML markup
    html = html
      .replace(/class="sidebar-container\s+mobile-open"/gi, 'class="sidebar-container"')
      .replace(/class="mobile-overlay\s+active"/gi, 'class="mobile-overlay"');

    // Determine output directory
    const outDir = path.join(__dirname, 'dist', url);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');

    console.log(`Saved: ${path.join(outDir, 'index.html')}`);
  }

  // Clean up dist-server temporary directory after build
  fs.rmSync(path.resolve(__dirname, 'dist-server'), { recursive: true, force: true });

  console.log('Static site pre-rendering completed successfully!');
}

run();
