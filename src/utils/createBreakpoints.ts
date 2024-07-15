'use client';

export const values = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
} as const;

export type Breakpoint = keyof typeof values;

export const createBreakpoints = () => ({
	up: (key: Breakpoint) => `@media (width >= ${values[key]}px)`,
	down: (key: Breakpoint) => `@media (width <= ${values[key]}px)`,
	between: (keyMin: Breakpoint, keyMax: Breakpoint) => `@media (${values[keyMin]} <= width <= ${values[keyMax]}px)`,
	values,
}) as const;
