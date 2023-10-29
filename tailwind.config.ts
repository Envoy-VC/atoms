import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				grayscale: '#e2e8f0',
				primary: '#9d72ff',
				secondary: '#DDD6FE',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config;
