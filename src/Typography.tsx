'use client';

import styled, {css} from 'styled-components';
import {type KnownTarget} from 'styled-components/dist/types';

const withHeaderCSS = (strings: TemplateStringsArray) => css`
	font-family: Lora, serif;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.25;
	${strings}
`;

const withBodyCSS = (strings: TemplateStringsArray) => css`
	font-family: 'Lora', serif;
	line-height: 1.625;
	${strings}
`;

const styleMap = {
	body1: withBodyCSS`
		font-size: 1rem;
	`,
	body2: withBodyCSS`
		font-size: 0.875rem;
	`,
	caption: withBodyCSS`
		font-size: 0.75rem;
	`,
	h1: withHeaderCSS`
		font-size: 3rem;
	`,
	h2: withHeaderCSS`
		font-size: 2rem;
	`,
	h3: withHeaderCSS`
		font-size: 1rem;
		letter-spacing: unset;
		font-style: italic;
	`,
	display1: withHeaderCSS`
		font-size: 3rem;
	`,
	display2: withHeaderCSS`
		font-size: 2rem;
	`,
	display3: withHeaderCSS`
		font-size: 1.25rem;
		letter-spacing: unset;
		font-style: italic;
	`,
} as const;

type TypeVariant = keyof typeof styleMap;

const tagMap: Record<TypeVariant, KnownTarget> = {
	body1: 'p',
	body2: 'p',
	caption: 'small',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	display1: 'div',
	display2: 'div',
	display3: 'div',
} as const;

type Props = {
	readonly hasBackground?: boolean;
	readonly as?: KnownTarget;
	readonly variant?: TypeVariant;
};

export type TypographyProps = Props & React.HTMLAttributes<HTMLElement>;

const TypographyRoot = styled.p<{$variant: TypeVariant}>(props => styleMap[props.$variant]);

export const Typography: React.FC<TypographyProps> = props => {
	const resolvedElement = props.as ?? tagMap[props.variant ?? 'body1'];

	return (
		<TypographyRoot
			{...props}
			as={resolvedElement}
			$variant={props.variant}
		/>
	);
};
