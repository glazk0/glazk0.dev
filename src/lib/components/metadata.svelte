<script lang="ts">
	import { page } from '$app/stores';

	import { type Metadata } from '$lib/types';
	import { CDN_URL } from '$lib/utils';

	let metadata: Metadata;

	$: metadata = $page.data.metadata
		? {
				...$page.data.metadata,
				title: $page.data.metadata.title + ' | glazk0.dev'
			}
		: {
				title: 'glazk0.dev',
				description: 'Student, Software Developer and Gamer',
				image: CDN_URL + '/assets/banner.webp'
			};
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="title" content={metadata.title} />
	<meta name="description" content={metadata.description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#e2e2e2" />
	<meta itemprop="image" content={metadata.image} />
	<meta itemprop="name" content={metadata.title} />
	<meta itemprop="description" content={metadata.description} />
	<meta property="og:site_name" content={$page.url.hostname} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:url" content={$page.url.origin + $page.url.pathname} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={metadata.image} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@glazk0" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
	<meta name="twitter:image" content={metadata.image} />
	<meta name="twitter:creator" content="@glazk0" />
	<meta name="twitter:domain" content={$page.url.hostname} />
	<meta name="twitter:url" content={$page.url.origin + $page.url.pathname} />

	<link rel="canonical" href={$page.url.origin + $page.url.pathname} />

	<link rel="icon" href="{CDN_URL}/favicon.ico" />
	<link rel="shortcut icon" href="{CDN_URL}/favicon.ico" type="image/x-icon" />
	<!-- TODO -->
	<!-- <link rel="apple-touch-icon" sizes="180x180" href="{CDN_URL}/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{CDN_URL}/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{CDN_URL}/favicon-16x16.png" /> -->
</svelte:head>
