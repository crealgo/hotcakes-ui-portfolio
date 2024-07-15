'use client';

import styled, {css} from 'styled-components';
import {generateControlColors} from './utils/generateControlColors';

export const ButtonBase = styled.button.withConfig({
	shouldForwardProp: prop => !/variant|color|icon|shape/g.test(prop),
})<ControlProps>(props => css`
    ${generateControlColors(props.color, props.variant, true)}

	font-family: Noto Sans, sans-serif;
	font-weight: 500;
	font-size: 0.675rem;
	letter-spacing: unset;
	text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    height: 1.5rem;
    width: ${props.shape?.match(/circle|square/g) ? '2.25rem' : 'auto'};
    padding-inline: 0.375rem;

    border-radius: ${props.shape === 'circle' ? '50%' : '0.25rem'};
`);
