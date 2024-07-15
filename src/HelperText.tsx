'use client';

import styled, {css} from 'styled-components';
import {Icon} from './Icon';
import {Typography} from './Typography';

type HelperTextProps = React.PropsWithChildren<{
	readonly icon?: string;
	readonly center?: boolean;
}>;

const HelperTextRoot = styled('div')<{$center: boolean}>(props => css`
    display: flex;
    align-items: center;
	justify-content: ${props.$center ? 'center' : 'unset'};
    gap: 0.125rem;
    color: ${props.theme.color.text.secondary};
	line-height: 2rem;
`);

export const HelperText: React.FC<HelperTextProps> = props => (
	<HelperTextRoot className='HelperText-root' $center={Boolean(props.center)}>
		{props.icon && <Icon icon={props.icon}/>}
		<Typography variant='caption'>{props.children}</Typography>
	</HelperTextRoot>
);
