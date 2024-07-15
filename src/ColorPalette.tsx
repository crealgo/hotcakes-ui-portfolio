'use client';

import {ColorChip} from './ColorChip';

export type ColorPaletteProps = {
	readonly colors: Array<{
		name: string;
		hex: string;
	}>;
};

// const defaultDescription = `
// 	I base the color palette for a project on how the client (or I) answers a few questions:

// 	1. What do you want the passerby to see? What do you want to communicate about this project at every user touch-point?
// 	2. How are you trying to say it? Angry, Friendly, Stirringly, etc.
// 	3. What do you already have that we can build off of?

// 	Based on the answers to these questions, I create a palette that aligns with the client's goals;
// `;

export const ColorPalette: React.FC<ColorPaletteProps> = props => (
	<div className='col-span-full lg:col-span-3'>
		<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
			{props.colors.map(color => (
				<ColorChip key={color.name} color={color}/>
			))}
		</div>
	</div>
);
