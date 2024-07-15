'use client';

import styled, {css} from 'styled-components';

export const MDXContent = styled.div(({theme}) => css`
	--content-x-spacing: 2rem;
	--content-x-width: ${theme.breakpoint.values.md}px;
	--aside-x-width: calc(${theme.breakpoint.values.md}px - var(--content-x-width));

	// max-width: ${theme.breakpoint.values.xl}px;
	margin-block:  ${theme.spacing(3)};
	margin-inline: auto;
	// background-color: yellow;

	> {
		h1, h2, h3, .HelperText-root,
		p, ul, blockquote, figure, image, iframe,
		[data-content] {
			margin-inline: auto;
			max-width: var(--content-x-width);
			display: grid;
			grid-template-columns: 1fr;
		}

		h1, h2, h3 {
			margin-block: ${theme.spacing(4)} ${theme.spacing(1)};

			&:has(+ .HelperText-root) {
				margin-bottom: unset;
			}
		}

		.HelperText-root,
		p, ul, blockquote, figure, image, iframe {
			margin-block: ${theme.spacing(1)};
		}

		.HelperText-root {
			margin-bottom: ${theme.spacing(0.25)};
		}

		[data-special=true] {
			margin-block: ${theme.spacing(1)};
			background: ${theme.color.slate[100]};
			padding: ${theme.spacing(2)};
		}
	}
`);
