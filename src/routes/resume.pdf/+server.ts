import type { RequestHandler } from "./$types";

import { CDN_URL } from "$lib/utils";

export const GET: RequestHandler = async ({ fetch }) => {
  const response = await fetch(CDN_URL + "/resume.pdf");

  if (response.ok) {
    return response;
  }

  return new Response(null, { status: 404 });
};
