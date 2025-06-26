/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				"bg-dark": "var(--background-dark)",
				"bg": "var(--background)",
				"bg-light": "var(--background-light)",
				"accent": "var(--accent)",
				"text": "var(--text)",
				"text-muted": "var(--text-muted)",
				"border": "var(--border)"
			},
			screens: {
				'md2': '950px',
			}
		},
	},
	plugins: [],
};
