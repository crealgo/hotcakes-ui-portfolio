'use client';

import {useState, useEffect} from 'react';

type WindowSize = {
	width?: number;
	height?: number;
	isXs?: boolean;
	isGreaterSm?: boolean;
	isSm?: boolean;
	isGreaterMd?: boolean;
	isMd?: boolean;
	isGreaterLg?: boolean;
	isLg?: boolean;
	isGreaterXl?: boolean;
	isXl?: boolean;
	is2xl?: boolean;
};

export const useWindowSize = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined,
		isXs: false,
		isGreaterSm: false,
		isSm: false,
		isGreaterMd: false,
		isMd: false,
		isGreaterLg: false,
		isLg: false,
		isGreaterXl: false,
		isXl: false,
		is2xl: false,
	});

	// tailwind screen sizes
	const screen = {
		'2xl': 1536, xl: 1280, lg: 1024, md: 768, sm: 640,
	};

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				isXs: window.innerWidth <= screen.sm,
				isGreaterSm: window.innerWidth > screen.sm,
				isSm: window.innerWidth > screen.sm && window.innerWidth <= screen.md,
				isGreaterMd: window.innerWidth > screen.md,
				isMd: window.innerWidth > screen.md && window.innerWidth <= screen.lg,
				isGreaterLg: window.innerWidth > screen.lg,
				isLg: window.innerWidth > screen.lg && window.innerWidth <= screen.xl,
				isGreaterXl: window.innerWidth > screen.xl,
				isXl: window.innerWidth > screen.xl && window.innerWidth <= screen['2xl'],
				is2xl: window.innerWidth > screen['2xl'],
			});
		}

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
};
