// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.lupyd.com',
	trailingSlash: 'always',
	// Keep client-side JavaScript to search only: no link prefetching.
	prefetch: false,
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			defaultColor: false,
		},
	},
	integrations: [
		starlight({
			title: 'Lupyd Docs',
			description:
				'Documentation for Lupyd — the privacy-first social and messaging platform — and its developer APIs.',
			logo: { src: './src/assets/logo.svg', alt: 'Lupyd' },
			favicon: '/favicon.svg',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/lupyd' },
			],
			editLink: {
				baseUrl: 'https://github.com/lupyd/lupyd-documentation/edit/main/',
			},
			lastUpdated: true,
			// Use Astro's built-in Shiki highlighting instead of Expressive Code,
			// which ships client-side JavaScript.
			expressiveCode: false,
			customCss: ['./src/styles/custom.css'],
			components: {
				PageFrame: './src/components/PageFrame.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				// No-JS replacements for Starlight components (see README).
				Sidebar: './src/components/Sidebar.astro',
				TableOfContents: './src/components/TableOfContents.astro',
				MobileTableOfContents: './src/components/MobileTableOfContents.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
			},
			head: [
				{
					tag: 'meta',
					attrs: { name: 'msvalidate.01', content: 'F6C001C6132A22D214ECCE7E3759F4B5' },
				},
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', link: '/' },
						'introduction',
						'introduction/what-is-lupyd',
					],
				},
				{
					label: 'Getting Started',
					items: [
						'getting-started/installation',
						'getting-started/quick-start',
					],
				},
				{ label: 'User Guides', items: [{ autogenerate: { directory: 'guides' } }] },
				{
					label: 'Developers',
					items: [
						'developers',
						'developers/architecture',
						{
							label: 'Firefly (Messaging)',
							items: [{ autogenerate: { directory: 'developers/firefly' } }],
						},
						{
							label: 'Lupyd Server (Social)',
							items: [{ autogenerate: { directory: 'developers/server' } }],
						},
					],
				},
				{ label: 'Support', items: [{ autogenerate: { directory: 'support' } }] },
				{
					label: 'More',
					items: [
						{ label: 'Downloads', link: 'https://download.lupyd.com', attrs: { target: '_blank' } },
						{ label: 'Blog', link: 'https://blogs.lupyd.com', attrs: { target: '_blank' } },
						{ label: 'About', link: 'https://www.lupyd.com', attrs: { target: '_blank' } },
						{ label: 'Pricing', link: 'https://billing.lupyd.com', attrs: { target: '_blank' } },
						{ label: 'Careers', link: 'https://careers.lupyd.com', attrs: { target: '_blank' } },
					],
				},
			],
		}),
		sitemap(),
	],
	// Preserve URLs from the previous React site.
	redirects: {
		'/installation': '/getting-started/installation/',
		'/start-fast': '/getting-started/quick-start/',
		'/guide': '/developers/',
		'/features': '/guides/features/',
		'/cases': '/guides/use-cases/',
		'/settings': '/guides/settings/',
		'/guides': '/guides/platforms/',
		'/groups': '/guides/group-chats/',
		'/firefly': '/developers/firefly/',
		'/server-api': '/developers/server/',
		'/docs-support': '/support/faq/',
		// URLs from the unmerged React redesign (PR #19).
		'/intro': '/introduction/',
		'/intro/introduction': '/introduction/',
		'/intro/what-is-lupyd': '/introduction/what-is-lupyd/',
		'/what-is-lupyd': '/introduction/what-is-lupyd/',
	},
});
