'use client';

import {forwardRef} from 'react';
import {type FilterRadioGroupProps} from './FilterRadioGroup';

type FilterBoxProps = Pick<HTMLElement, 'className'> & React.PropsWithChildren<{
	readonly multiple?: boolean;
	readonly filters?: Project.Tag[];
	readonly label?: string;
	readonly helperText?: string;
	readonly onChange?: FilterRadioGroupProps['onChange'];
}>;

export const FilterBoxInput = forwardRef<HTMLDivElement, FilterBoxProps>((props, ref) => (
	<div ref={ref} className={props.className}>
		<div className='flex items-center mb-2'>
			{props.label && <div className='mb-2 md:mb-0 md:mr-2'>{props.label}</div>}
			{props.children}
		</div>
		{props.helperText && (
			<small className='block caption text-slate-400 mt-2'>{props.helperText}</small>
		)}
	</div>
));

FilterBoxInput.displayName = 'FilterBoxInput';
