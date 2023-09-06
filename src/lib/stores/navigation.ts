import { browser } from '$app/environment';

import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser
	? window.localStorage.getItem('navigation') ?? defaultValue
	: defaultValue;

const navigation = writable<string>(initialValue);

navigation.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('navigation', value);
	}
});

export default navigation;
