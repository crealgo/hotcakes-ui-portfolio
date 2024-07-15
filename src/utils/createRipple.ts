'use client';

export const createRipple: React.MouseEventHandler<HTMLElement> = event => {
	const button = event.currentTarget;
	const boundingBox = event.currentTarget.getBoundingClientRect();

	const circle = document.createElement('span');
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = `${diameter}px`;
	circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - boundingBox.left - radius}px`;
	circle.style.top = `${event.clientY - boundingBox.top - radius}px`;
	circle.className = 'ripple';

	button.appendChild(circle);

	setTimeout(() => {
		button.removeChild(circle);
	}, 1000);
};
