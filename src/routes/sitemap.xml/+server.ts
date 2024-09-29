import type { RequestHandler } from '@sveltejs/kit';

import { response } from 'super-sitemap';

export const GET: RequestHandler = async () => {
	return await response({
		origin: 'https://glazk0.dev'
	});
};

// import { text, type RequestHandler } from '@sveltejs/kit';

// import { routes } from '$lib/utils';

// export const GET: RequestHandler = async () => {
//   const headers = {
//     'Cache-Control': 'max-age=0, s-maxage=3600',
//     'Content-Type': 'application/xml'
//   };

//   const pages = routes
//     .map((route) => route.path)
//     .map((path) => path.replace(/^\//, ''))
//     .filter(Boolean);

//   const response = sitemap("https://glazk0.dev", pages);

//   return text(response, {
//     headers
//   });
// };

// const sitemap = (website: string, pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
// <urlset
//   xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
//   xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
//   xmlns:xhtml="https://www.w3.org/1999/xhtml"
//   xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
//   xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
//   xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
// >
//   <url>
//     <loc>${website}</loc>
//     <changefreq>monthly</changefreq>
//     <priority>0.7</priority>
//   </url>
//   ${pages
//     .map(
//       (page) => `
//   <url>
//     <loc>${website}/${page}</loc>
//     <changefreq>monthly</changefreq>
//     <priority>0.5</priority>
//   </url>
//   `
//     )
//     .join('')}
// </urlset>`;
