// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

import starlightClixThemePlugin from './src/theme/clix-theme/index.ts';

export default defineConfig({
	site: 'https://testclix.github.io',
	integrations: [
		markdoc(),
		starlight({
			title: 'TestCLIX Docs',
			logo: {
				src: './src/assets/testclix_logo.svg',
				replacesTitle: true,
			},
			favicon: '/favicon.ico',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TestCLIX/testclix.github.io' }],
			plugins: [starlightClixThemePlugin()],
			sidebar: [
				{
					label: 'TestCLIX Platform',
					items: [
						{ label: 'Overview', link: '/testclix-platform/overview' },
						{ label: 'Testing Capabilities', link: '/testclix-platform/testing-capabilities' },
						{ label: 'Codeless Recorder', link: '/testclix-platform/codeless-recorder' },
						{ label: 'Schedule Monitoring', link: '/testclix-platform/schedule-monitoring' },
						{ label: 'Session Player', link: '/testclix-platform/session-player' },
					]
				},
				{
					label: 'Quick Start',
					badge: { text: 'Guide', variant: 'tip' },
					items: [
						{ label: 'Pick a Setup', link: '/quick-start/pick-setup' },
						{ label: 'Setup Website Scenario', link: '/quick-start/setup-website-scenario' },
						{ label: 'Setup Website Availability', link: '/quick-start/setup-website-availability' },
					]
				},
				{
					label: 'Website Scenario',
					items: [
						{ label: 'Overview', link: '/website-scenario/overview' },
						{ label: 'Audit SSL', link: '/website-scenario/audit-ssl' },
						{ label: 'Extra Headers', link: '/website-scenario/extra-headers' },
						{ label: 'Location', link: '/website-scenario/location' },
						{ label: 'Page Structure Flexibility', link: '/website-scenario/page-structure-flexibility' },
						{ label: 'Performance Audit', link: '/website-scenario/performance-audit' },
						{ label: 'Pixel Comparison', link: '/website-scenario/pixel-comparison' },
						{ 
							label: 'Session Player',
							items: [
								{ label: 'Overview', link: '/session-player/overview' },				
								{ label: 'Session Timeline', link: '/session-player/session-timeline' },
								{ label: 'Side-by-side Compare', link: '/session-player/side-by-side-compare' },
								{ label: 'Combine Screens', link: '/session-player/combine-screens' },
								{ label: 'Parallel Compare', link: '/session-player/parallel-compare' },
							]
						},
						{ 
							label: 'Codeless Recorder',
							items: [
								{ label: 'Event Preview', link: '/codeless-recorder/event-preview' },
								{ label: 'Live Screen', link: '/codeless-recorder/live-screen' },
								{ label: 'Session OATH', link: '/codeless-recorder/session-oath' },
								{ label: 'Session Timeline', link: '/codeless-recorder/session-timeline' },
							]
						},
					]
				},
				{
					label: 'Website Availability',
					items: [
						{ label: 'Overview', link: '/website-availability/overview' },
						{ label: 'Audit HTTP', link: '/website-availability/audit-http' },
						{ label: 'Audit SSL', link: '/website-availability/audit-ssl' },
						{ label: 'Extra Headers', link: '/website-availability/extra-headers' },
						{ label: 'Location', link: '/website-availability/location' },
					]
				},
				{
					label: 'Website Vitals',
					items: [
						{ label: 'Overview', link: '/website-vitals/overview' },
						{ label: 'Extra Headers', link: '/website-vitals/extra-headers' },
						{ label: 'Metrics', link: '/website-vitals/metrics' },
					]
				},
				{
					label: 'Use Cases',
					collapsed: true,
					items: [
						{ label: 'Use Case Library', link: '/use-cases/use-case-library' },
						{ label: 'Ecommerce Login', link: '/use-cases/ecommerce-login' },
						{ label: 'Ecommerce Shop', link: '/use-cases/ecommerce-shop' },
					]
				},
				{
					label: 'Integration',
					collapsed: true,
					items: [
						{ label: 'API', link: '/integration/api' },
						{ label: 'Bot management (Cloudflare)', link: '/integration/bot-management' },
						{ label: 'Emails', link: '/integration/emails' },
						{ label: 'Jira', link: '/integration/jira' },
						{ label: 'Slack', link: '/integration/slack' },
						{ label: 'Network Monitoring (PRTG)', link: '/integration/network-monitoring' },
						{ label: 'Webhooks', link: '/integration/webhooks' },
					]
				},
				{
					label: 'Support',
					collapsed: true,
					items: [
						{ label: 'Bug Reports', link: '/support/bug-reports' },
						{ label: 'FAQ', link: '/support/faq' },
						{ label: 'Troubleshooting', link: '/support/troubleshooting' },
					]
				},
				...(process.env.NODE_ENV !== 'production'
					? [
							{
								label: 'Showcase',
								badge: /** @type {const} */ ({ text: 'Dev only', variant: 'danger' }),
								collapsed: true,
								autogenerate: { directory: 'doc-showcase' },
							},
					  ]
					: []),
			],
		}),
	],
});
