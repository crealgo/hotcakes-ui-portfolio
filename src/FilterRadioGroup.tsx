'use client';

import clsx from 'clsx';
import {forwardRef} from 'react';
import {HelperText} from './HelperText';

export type FilterRadioGroupProps = Pick<HTMLElement, 'className'> & React.PropsWithChildren<{
	readonly labelClassName?: JSX.IntrinsicElements['div']['className'];
	readonly rootClassName?: JSX.IntrinsicElements['div']['className'];
	readonly multiple?: boolean;
	readonly filters?: Project.Tag[];
	readonly label?: string;
	readonly helperText?: string;
	readonly onChange?: (e: React.ChangeEvent, value: JSX.IntrinsicElements['input']['value']) => void;
}>;

export const FilterRadioGroup = forwardRef<HTMLDivElement, FilterRadioGroupProps>((props, ref) => (
	<div ref={ref} className={clsx('flex flex-wrap', props.rootClassName)}>
		{props.label && <div className={clsx('subtitle2 mb-2', props.labelClassName)}>{props.label}</div>}
		<div className={clsx('flex items-center', props.className)}>{props.children}</div>
		{props.helperText && (
			<HelperText icon='help'>{props.helperText}</HelperText>
		)}
	</div>
),
);

FilterRadioGroup.displayName = 'FilterRadioGroup';
