import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const discordId = '247344130798256130';

// make a thing that give a number based on a date, like my birthday
export const birthdayDate = new Date('2003-08-03');
export const birthday = Math.floor(
	(Date.now() - birthdayDate.getTime()) / 1000 / 60 / 60 / 24 / 365.25
);

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
