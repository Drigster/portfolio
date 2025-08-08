/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				"bg-dark": "hsl(0 0 0)",
				"bg": "hsl(0 0 10)",
				"bg-light": "hsl(0 0% 15%)",
				"accent": "hsl(180, 100%, 27%)",
				"text": "hsl(0, 0%, 90%)",
				"text-muted": "hsl(0, 0%, 70%)",
				"border": "hsl(0, 0%, 15%)"
			},
			screens: {
				'md2': '950px',
			},
			height: {
				'font-clamp-sm': 'clamp(1.15vh, 0.875rem, 2.35vh)',
				'font-clamp-lg': 'clamp(1.15vh, 1.125rem, 2.5vh)',
				'font-clamp-xl': 'clamp(1.276vh, 1.25rem, 3.356vh)',
				'font-clamp-2xl': 'clamp(1.53vh, 1.5rem, 4vh)',
				'font-clamp-3xl': 'clamp(2.3vh, 2.25rem, 6vh)'
			},
			width: {
				'font-clamp-sm': 'clamp(1.15vh, 0.875rem, 2.35vh)',
				'font-clamp-lg': 'clamp(1.15vh, 1.125rem, 2.5vh)',
				'font-clamp-xl': 'clamp(1.276vh, 1.25rem, 3.356vh)',
				'font-clamp-2xl': 'clamp(1.53vh, 1.5rem, 4vh)',
				'font-clamp-3xl': 'clamp(2.3vh, 2.25rem, 6vh)'
			},
			fontSize: {
				'clamp-sm': 'clamp(1.15vh, 0.875rem, 2.35vh)',
				'clamp-lg': 'clamp(1.15vh, 1.125rem, 2.5vh)',
				'clamp-xl': 'clamp(1.276vh, 1.25rem, 3.356vh)',
				'clamp-2xl': 'clamp(1.53vh, 1.5rem, 4vh)',
				'clamp-3xl': 'clamp(2.3vh, 2.25rem, 6vh)'
			},
			padding: {
				"fixed-1": "0.425vh", // 0.25rem    4px
				"fixed-2": "0.85vh",  // 0.5rem     8px
				"fixed-3": "1.275vh", // 0.75rem   12px
				"fixed-10px": "1vh",  //           10px
				"fixed-4": "1.7vh",   // 1rem      16px
			},
			margin: {
				"fixed-1": "0.425vh",
				"fixed-2": "0.85vh",
				"fixed-3": "1.275vh",
				"fixed-10px": "1vh",
				"fixed-4": "1.7vh",
			},
			gap: {
				"fixed-1": "0.425vh",
				"fixed-2": "0.85vh",
				"fixed-3": "1.275vh",
				"fixed-10px": "1vh",
				"fixed-4": "1.7vh",
			},
			borderRadius: {
				"fixed-lg": "0.85vh"
			}
		},
	},
	plugins: [],
};
