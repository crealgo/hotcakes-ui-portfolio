'use client';

import styled, {css} from 'styled-components';

type MarkProps = {
	color?: BrandColor;
	noBackground?: boolean;
};

export const Mark = styled.mark.withConfig({
	shouldForwardProp: prop => !/noBackground|color/.test(prop),
})<MarkProps>(({theme, noBackground, color = 'brand'}) => css`
	background-color: ${noBackground ? 'unset' : theme.color[color][100]};
	color: ${theme.color[color][800]};
	position: relative;
`);
