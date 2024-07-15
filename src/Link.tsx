'use client';

import NextLink, {type LinkProps as NextLinkProps} from 'next/link';
import styled, {css} from 'styled-components';
import {Icon} from './Icon';

type LinkProps = React.PropsWithChildren<{
	readonly active?: boolean;
	readonly noUnderline?: boolean;
	readonly icon?: string | React.ComponentType;
}> & NextLinkProps;

const StyledLink = styled(NextLink)<{
	$active?: boolean;
	$noUnderline?: boolean;
}>(props => css`
	display: inline-flex;
	align-items: center;
	gap: ${props.theme.spacing(0.25)};
	color: ${props.theme.color.brand[800]};
	cursor: pointer;

	text-decoration: ${props.$noUnderline ? 'none' : 'underline'};

	&:hover,
	&:focus,
	&:focus-visible {
		color: ${props.theme.color.brand[700]};
		opacity: 1;
	}

	&:active {
		color: ${props.theme.color.brand[900]};
	}
`);

export const Link: React.FC<LinkProps> = ({noUnderline, active, ...props}) => (
	<StyledLink
		{...props}
		prefetch
		$active={active}
		$noUnderline={noUnderline}
	>
		{props.icon && <Icon icon={props.icon}/>}
		<span className='Link-text'>{props.children}</span>
	</StyledLink>
);
