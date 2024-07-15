'use client';

import clsx from 'clsx';
import {Container} from './Container';
import {IconButton} from './IconButton';
import {forwardRef} from 'react';

type LightBoxProps = {} & Partial<JSX.IntrinsicElements['div']>;

export const LightBox = forwardRef<HTMLDivElement, LightBoxProps>((props, ref) => (
	<div
		ref={ref}
		className={clsx([
			'fixed top-0 left-0 w-full h-full',
			'bg-white z-50',
			'flex items-center justify-center',
		])}
	>
		<div
			className={clsx([
				'absolute top-0 left-0 w-full h-12 z-50',
				'bg-white bg-opacity-60',
			])}
		>
			<Container className='flex items-center h-full'>
				<div className='subtitle1 inline-flex mr-auto'>Gallery (2/127)</div>
				<div className='subtitle1 inline-flex'>
					<IconButton
						variant='outlined'
						icon='menu'
					/>
				</div>
			</Container>
		</div>
		<div className='absolute w-full h-full'>
			<div
				className='w-full h-full bg-contain bg-no-repeat bg-center will-change-transform'
				style={{backgroundImage: 'url(/assets/doodles/code.svg)'}}
			/>
			<div
				className='w-full h-full bg-contain bg-no-repeat bg-center will-change-transform'
				style={{backgroundImage: 'url(/assets/doodles/code.svg)'}}
			/>
			<div
				className='w-full h-full bg-contain bg-no-repeat bg-center will-change-transform'
				style={{backgroundImage: 'url(/assets/doodles/code.svg)'}}
			/>
		</div>
	</div>
));

LightBox.displayName = 'LightBox';
