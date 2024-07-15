'use client';

import styled, {css} from 'styled-components';
import {type Breakpoint} from './utils/createBreakpoints';

type Props = {
	spacing?: number;
	maxWidth?: Breakpoint;
};

export const Content = styled.div.withConfig({
	shouldForwardProp: prop => !/spacing|maxWidth/.test(prop),
})<Props>(({
	theme,
	spacing = 1,
	maxWidth = 'sm',
}) => css`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: ${theme.spacing(spacing)};

	${theme.breakpoint.up(maxWidth)} {
		max-width: ${theme.breakpoint.values[maxWidth]}px;
	}
`);
