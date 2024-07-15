'use client';

import tailwindColors from 'tailwindcss/colors';

export const createColors = () => ({
	brand: {
		primary: tailwindColors.violet[600],
		...tailwindColors.violet,
	},
	text: {
		primary: tailwindColors.slate[900],
		secondary: tailwindColors.slate[500],
		...tailwindColors.slate,
	},
	...tailwindColors,
} as const);
