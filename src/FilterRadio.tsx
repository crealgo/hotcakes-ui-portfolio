'use client';

import {forwardRef, useState} from 'react';
import {createRipple} from './utils/createRipple';

export type FilterRadioProps = {
	readonly dot?: string;
} & Partial<JSX.IntrinsicElements['input']>;

export const FilterRadio = forwardRef<HTMLInputElement, FilterRadioProps>(
	({id, className, checked, dot, onChange, children, ...props}, ref) => {
		const [focused, setFocused] = useState<boolean>(false);

		return (
			<label
				// className={clsx(
				// 	styles.root,
				// 	checked ? styles['variant-filled'] : styles['variant-contained'],
				// 	{[styles['color-brand']]: checked},
				// 	{[styles.checked]: focused},
				// 	{[styles.focused]: focused},
				// 	styles['size-medium'],
				// 	className,
				// )}
				htmlFor={id}
				onClick={createRipple}
			>
				<input
					{...props}
					ref={ref}
					id={id}
					type='radio'
					checked={checked}
					onChange={onChange}
					onFocus={e => {
						setFocused(true);
					}}
					onBlur={e => {
						setFocused(false);
					}}
				/>
				{children}
			</label>
		);
	},
);

FilterRadio.displayName = 'FilterRadio';
