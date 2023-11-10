/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"bvp": ["Be Vietnam Pro"]
			},
			backgroundImage: {
				"close-menu": "url('../assets/icon-close.svg')",
				"open-menu": "url('../assets/icon-open.svg')"
			}
		},
	},
	plugins: [],
}
