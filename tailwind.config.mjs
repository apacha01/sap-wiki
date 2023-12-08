/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sap': ['sap'],
			'libsans': ['libsans']
		},
		backgroundImage: {
			'atk': 'url(/imgs/100px-Attack_Icon.png)',
			'hp': 'url(/imgs/100px-Health_Icon.png)',
			'arrow': 'url(/svgs/arrow-right.svg)',
			'l1': 'url(/imgs/128px-Level1_Icon.png)',
			'l2': 'url(/imgs/128px-Level2_Icon.png)',
			'l3': 'url(/imgs/128px-Level3_Icon.png)',
			'coin': 'url(/imgs/Coin.png)',
			'clock': 'url(/imgs/Clock.png)',
			'pack': 'url(/imgs/Pack_Background.png)'
		},
		colors: {
			...colors,
			'cedar-wood-finish': '#641f00',
			'sap-yellow': {
				'50': '#fffeea',
				'100': '#fffac5',
				'200': '#fff785',
				'300': '#ffec46',
				'400': '#ffdd1b',
				'500': '#febc00',
				'600': '#e29100',
				'700': '#bb6702',
				'800': '#984f08',
				'900': '#7c410b',
				'950': '#482100',
			},
			'seagull': {
				'50': '#f0faff',
				'100': '#e1f4fd',
				'200': '#bce9fb',
				'300': '#6fd4f8',
				'400': '#3dc6f3',
				'500': '#13b0e4',
				'600': '#078dc2',
				'700': '#07719d',
				'800': '#0a5f82',
				'900': '#0e4f6c',
				'950': '#0a3347',
			},
			'fun-green': {
				'50': '#ecfff3',
				'100': '#d2ffe5',
				'200': '#a8ffcd',
				'300': '#65ffa8',
				'400': '#1bff7a',
				'500': '#00f958',
				'600': '#00d045',
				'700': '#00a239',
				'800': '#007e32',
				'900': '#00692d',
				'950': '#003b16',
			},
		}
	},
	plugins: [],
};
