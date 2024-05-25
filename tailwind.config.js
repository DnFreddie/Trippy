/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				vfont: ['Spinnaker', 'sans-serif']
			},
			fontWeight: {
				'newfont-regular': 400,
				'newfont-medium': 500
			}
		}
	},
	plugins: []
};
