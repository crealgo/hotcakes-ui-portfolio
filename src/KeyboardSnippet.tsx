import {Fragment} from 'react';
import styled, {css} from 'styled-components';

type Props = {
	readonly keys: string[];
	readonly accent?: boolean;
};

const KeyboardSnippetRoot = styled.span<{$accent: boolean}>(props => css`
	--color: ${props.theme.color.slate[600]};

	--kbd-background-color: ${props.theme.color.slate[50]};
	--kbd-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
	--kbd-border-color: ${props.theme.color.slate[300]};
	--kbd-color: ${props.theme.color.slate[600]};

	${props.$accent && css`
		--color: ${props.theme.color.slate[400]};

		--kbd-background-color: unset;
		--kbd-box-shadow: unset;
		--kbd-border-color: ${props.theme.color.slate[400]};
		--kbd-color: ${props.theme.color.slate[400]};
	`}

	color: var(--color);
	font-size: inherit;

	> kbd {
		background-color: var(--kbd-background-color);
		border-radius: 3px;
		border: 1px solid var(--kbd-border-color);
		box-shadow: var(--kbd-box-shadow);
		display: inline-block;
		padding: 0.125rem 0.25rem;

		color: var(--kbd-color);
		font-family: "Noto Sans Mono", monospace;
		white-space: nowrap;
		font-size: 0.675rem;
		letter-spacing: -0.05rem;
	}

	${props.theme.breakpoint.down('md')} {
		display: none;
	}
`);

export const KeyboardSnippet: React.FC<Props> = props => (
	<KeyboardSnippetRoot $accent={Boolean(props.accent)}>
		{props.keys.map((key, keyIndex) => (
			<Fragment key={key}>
				<kbd>{key}</kbd>
				{keyIndex < props.keys.length - 1 && ' + '}
			</Fragment>
		))}
	</KeyboardSnippetRoot>
);
