'use client';

import styled, {css} from 'styled-components';

export const Container = styled.div(props => css`
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	width: 100%;
	max-width: ${props.theme.breakpoint.values.xl}px;
`);
