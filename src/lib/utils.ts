import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const discordId = '247344130798256130';

export const birthdayDate = new Date('2003-08-03');
export const birthday = Math.floor(
	(Date.now() - birthdayDate.getTime()) / 1000 / 60 / 60 / 24 / 365.25
);

export const routes = [
	{ name: 'home', path: '/' },
	{ name: 'projects', path: '/projects' },
	{ name: 'resume', path: '/resume.pdf' }
];

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
