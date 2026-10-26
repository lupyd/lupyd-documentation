import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { lastModified } from '../utils/lastModified';

// Served at /sitemap.xml — the URL already registered with search engines.
export const GET: APIRoute = async ({ site }) => {
	const docs = await getCollection('docs');
	const urls = docs
		.map((entry) => {
			const path = entry.id === 'index' ? '/' : `/${entry.id}/`;
			const lastmod = entry.filePath ? lastModified(entry.filePath).toISOString() : undefined;
			return { loc: new URL(path, site).href, lastmod };
		})
		.sort((a, b) => a.loc.localeCompare(b.loc));

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		({ loc, lastmod }) =>
			`  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`,
	)
	.join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
