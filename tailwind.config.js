/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	future: {
		hoverOnlyWhenSupported: true
	},
	theme: {
		extend: {
			colors: {
				background: {
					light: '#ffffff',
					dark: '#171717'
				},
				primary: '#4942E4',
				secondary: '#ff9800',
				card: '#3d3d54'
			}
		}
	},
	plugins: []
};
