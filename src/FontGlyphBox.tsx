'use client';
import styled, {css} from 'styled-components';

type FontGlyphBoxProps = {
	readonly defaultValue?: string;
	readonly children: string;
	readonly name: string;
} & Pick<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'aria-selected'>;

const StyledLabel = styled.label(({theme}) => css`
	position: relative;
    aspect-ratio: 1 / 1;
    width: calc(100% / 9 + 1px);
    margin-left: -1px;
    margin-bottom: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${theme.color.slate[300]};
	background-color: ${theme.color.white};
	cursor: pointer;

	&:hover {
		background-color: ${theme.color.slate[100]};
	}

	input {
		appearance: none;
		opacity: 0;
		position: absolute;
	}

	&:has(input:focus-visible) {
		border-radius: 0.25rem;
		outline: solid 2px #0f172a;
		z-index: 1;
	}

	&:has(input:checked) {
		cursor: default;
		background-color: ${theme.color.brand[100]}; /* Assuming brand-100 corresponds to #ebf4ff */
	}

	${theme.breakpoint.up('md')} {
        width: calc(100% / 12 + 1px);
	}

	${theme.breakpoint.up('lg')} {
		width: calc(100% / 20 + 1px);
	}
`);

export const FontGlyphBox: React.FC<FontGlyphBoxProps> = props => {
	const id = `${props.name}-${props.children}`;

	return (
		<StyledLabel htmlFor={id}>
			<input
				type='radio'
				defaultChecked={props.defaultValue === props.children}
				name={props.name} id={id} value={props.children}
				onChange={props.onChange}
			/>
			{props.children}
		</StyledLabel>
	);
};
