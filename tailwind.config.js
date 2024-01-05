/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: {
					light: '#ffffff',
					dark: '#171717'
				},
				primary: '#4942E4',
				secondary: '#fcba03',
				card: '#3d3d54'
			}
		}
	},
	plugins: []
};
