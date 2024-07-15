'use client';

import styled, {css} from 'styled-components';
import {Icon} from './Icon';
import {Typography} from './Typography';
import {createRipple} from './utils/createRipple';
import {generateControlColors} from './utils/generateControlColors';

type Props = ControlProps<HTMLDivElement> & React.ComponentPropsWithoutRef<'div'> & {
	readonly isClickable?: boolean;
};

const TagRoot = styled.div<UnforwardProps<Pick<Props, 'color' | 'variant' | 'isClickable'>>>(props => css`
    ${generateControlColors(props.$color, props.$variant, props.$isClickable)}

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    height: 1.5rem;
    padding: 0.25rem 0.375rem;
    border-radius: 0.25rem;
`);

export const Tag: React.FC<Props> = props => (
	<TagRoot
		{...props}
		$variant={props.variant ?? 'contained'}
		$color={props.color ?? 'slate'}
		$isClickable={Boolean(props.isClickable)}
		onClick={event => {
			props.onClick?.(event);

			if (props.isClickable) {
				createRipple(event);
			}
		}}
	>
		{props.icon && <Icon icon={props.icon}/>}
		<Typography variant='caption'>{props.children}</Typography>
	</TagRoot>
);
