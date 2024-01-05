import { text, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const response = `User-agent: *\nAllow: /\nSitemap: ${url.origin}/sitemap.xml`;

	return text(response, {
		status: 200,
		headers: {
			'content-type': 'text/plain; charset=UTF-8'
		}
	});
};
