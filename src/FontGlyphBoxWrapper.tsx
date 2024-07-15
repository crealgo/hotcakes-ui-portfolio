'use client';

import styled from 'styled-components';

type Props = {
	readonly children: React.ReactNode;
};

const Root = styled.fieldset`
	display: flex;
	flex-wrap: wrap;
	border: none;
	padding: 0;
	margin: 0;
`;

export const FontGlyphBoxWrapper: React.FC<Props> = props => (
	<Root>{props.children}</Root>
);
