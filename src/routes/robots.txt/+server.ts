import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url: { origin } }) => {
	const entries = [
		'User-agent: *',
		'Allow: /',
		`Sitemap: ${origin}/sitemap.xml`,
	];

	const response = entries.join('\n');

	return new Response(response, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
		},
	});
};
