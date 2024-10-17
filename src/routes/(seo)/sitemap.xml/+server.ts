import type { RequestHandler } from '@sveltejs/kit';

import { response } from 'super-sitemap';

export const GET: RequestHandler = async ({ url: { origin } }) => {
	return await response({
		origin
	});
};
