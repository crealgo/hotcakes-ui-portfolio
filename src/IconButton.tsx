'use client';

import {forwardRef} from 'react';
import styled, {css} from 'styled-components';
import {ButtonBase} from './ButtonBase';
import {Icon} from './Icon';

type Props = {
	readonly contrast?: boolean;
};

const IconButtonRoot = styled(ButtonBase)<{$contrast?: boolean}>(props => css`
	--background-color: rgba(0,0,0,0.125);
	--color: ${props.theme.color.slate[800]};

	${props.$contrast && css`
		--background-color: rgba(225,225,225,0.125);
		--color: ${props.theme.color.white};
	`}

	background: transparent;
	border: none;
	aspect-ratio: 1/1;
	padding: 0;

	opacity: 0.5;
	color: var(--color);

	.material-symbols-rounded {
		font-size: 1.125rem;
	}

	&:hover {
		opacity: 1;
		background-color: var(--background-color);
		color: var(--color);
	}
`);

export const IconButton = forwardRef<HTMLButtonElement, ControlProps & Props>(({icon, contrast, ...props}, ref) => (
	<IconButtonRoot {...props} ref={ref} $contrast={contrast}>
		{icon && <Icon icon={icon}/>}
	</IconButtonRoot>
));
