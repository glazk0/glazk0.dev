import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const DISCORD_ID = '247344130798256130';

export const CDN_URL = 'https://s3.glazk0.dev/glazk0.dev';

export const BIRTHDAY_DATE = new Date('2003-08-03');
export const BIRTHDAY = Math.floor(
	(Date.now() - BIRTHDAY_DATE.getTime()) / 1000 / 60 / 60 / 24 / 365.25
);

export const ROUTES = [
	{ name: 'home', path: '/' },
	{ name: 'projects', path: '/projects' },
	{ name: 'resume', path: '/resume.pdf' }
];

