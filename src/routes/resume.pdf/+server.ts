import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ fetch }) => {
  const response = await fetch('https://s3.glazk0.dev/glazk0.dev/resume.pdf');

  if (response.ok) {
    return response;
  }

  return new Response(null, { status: 404 });
};
