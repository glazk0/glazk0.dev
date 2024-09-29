import { text, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const response = ['User-agent: *', 'Allow: /', `Sitemap: https://glazk0.dev/sitemap.xml`].join(
		'\n'
	);

	return text(response, {
		status: 200,
		headers: {
			'content-type': 'text/plain; charset=UTF-8'
		}
	});
};
