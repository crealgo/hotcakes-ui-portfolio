'use client';

import clsx from 'clsx';
import {forwardRef} from 'react';

type DotProps = {} & Partial<JSX.IntrinsicElements['span']>;

export const Dot = forwardRef<HTMLDivElement, DotProps>(({children, className, ...props}, ref) => (
	<span
		{...props}
		ref={ref}
		className={clsx('inline-flex w-2 h-2 rounded-full border', className)}
	/>
));

Dot.displayName = 'Dot';
