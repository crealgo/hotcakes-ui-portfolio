'use client';

import {type DefaultTheme, css, useTheme} from 'styled-components';

type StyledProps = {
	theme: DefaultTheme;
};

export const generateControlColors = (
	color: ControlColor = 'slate',
	variant: ControlVariant = 'contained',
	isInteractive = false,
) => ({theme}: StyledProps) => ({
	contained: css`
        border: solid 1px ${theme.color[color][300]};
        background-color: ${theme.color[color][100]};
        color: ${theme.color[color][900]};
        box-shadow: ${theme.shadow.sm};

        ${isInteractive && css`
            &:hover, &:focus, &:checked {
                background-color: ${theme.color[color][200]};
            }
        `}
    `,
	filled: css`
        background-color: ${theme.color[color][500]};
        color: ${theme.color[color][100]};
        box-shadow: ${theme.shadow.sm};

        ${isInteractive && css`
            &:hover, &:focus, &:checked {
                background-color: ${theme.color[color][700]};
            }
        `}
    `,
	outlined: css`
        border: solid 1px ${theme.color[color][400]};
        color: ${theme.color[color][800]};

        ${isInteractive && css`
            &:hover, &:focus, &:checked {
                border-color: ${theme.color[color][700]};
                background-color: ${theme.color[color][50]};
            }
        `}
    `,
	text: css`
        color: ${theme.color[color][500]};

        ${isInteractive && css`
            &:hover, &:focus, &:checked {
                color: ${theme.color[color][700]};
            }
        `}
    `,
}[variant]);
