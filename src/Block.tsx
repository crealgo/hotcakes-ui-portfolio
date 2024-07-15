'use client';

import styled from 'styled-components';

type BlockProps = {
	divider?: boolean;
	color?: ControlColor;
};

export const Block = styled.div<BlockProps>(({theme, color}) => `
	padding-inline: ${theme.spacing(1)};
	background-color: ${color ? theme.color[color][50] : 'transparent'};

	${theme.breakpoint.up('md')} {
		padding-inline: ${theme.spacing(1.5)};
	}
`);
