'use client';

import clsx from 'clsx';
import {forwardRef} from 'react';

type LoadingDotsProps = {} & Partial<JSX.IntrinsicElements['div']>;

export const LoadingDots = forwardRef<HTMLDivElement, LoadingDotsProps>(
	({className, ...props}, ref) => (
		<div {...props} ref={ref} className={clsx('flex items-center', className)}>
			<span className='h-3 animate-bounce inline-flex items-center'>
				<span className='h-1.5 w-1.5 rounded-full border border-brand-500 bg-brand-300 mr-0.5'/>
			</span>
			<span
				className='h-3 animate-bounce inline-flex items-center'
				style={{
					animationDelay: '200ms',
				}}
			>
				<span className='h-1.5 w-1.5 rounded-full border border-brand-500 bg-brand-300 mr-0.5'/>
			</span>
			<span
				className='h-3 animate-bounce inline-flex items-center'
				style={{
					animationDelay: '300ms',
				}}
			>
				<span className='h-1.5 w-1.5 rounded-full border border-brand-500 bg-brand-300'/>
			</span>
		</div>
	),
);

LoadingDots.displayName = 'LoadingDots';
