'use client';

import {type MouseEventHandler} from 'react';
// import styles from '../styles/Ripple.module.scss';
import clsx from 'clsx';

export const useRipple: MouseEventHandler<HTMLElement> = event => {
	const button = event.currentTarget;
	const boundingBox = event.currentTarget.getBoundingClientRect();

	const circle = document.createElement('span');
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = `${diameter}px`;
	circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - boundingBox.left - radius}px`;
	circle.style.top = `${event.clientY - boundingBox.top - radius}px`;
	// circle.className = clsx([styles.root]);

	button.appendChild(circle);
};
