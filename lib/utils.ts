import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const discordId = '247344130798256130';
export const birthDate = new Date('2003-08-03');
export const age = Math.floor((Date.now() - birthDate.getTime()) / 3.154e10);

/**
 * This is a utility function that merges Tailwind classes.
 *
 * @param inputs - Classes to add.
 *
 * @returns The merged classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * This is a utility function that gets the URL of the site. (Thanks to @DevLeon)
 *
 * @param pathname - The pathname to add to the URL.
 *
 * @returns The URL of the site.
 */
export const getURL = (pathname?: string) => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process.env.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

  if (pathname) {
    // Add pathname without starting `/`
    url += pathname.slice(1);
  }
  return url;
};
