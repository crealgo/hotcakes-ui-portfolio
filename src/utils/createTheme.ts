'use client';

import {createBreakpoints} from './createBreakpoints';
import {createColors} from './createColors';
import {createShadows} from './createShadows';

const breakpoint = createBreakpoints();
const color = createColors();
const shadow = createShadows();
const spacing = (key: number) => `${key}rem`;

export const createTheme = () => ({
	breakpoint,
	color,
	shadow,
	spacing,
} as const);
