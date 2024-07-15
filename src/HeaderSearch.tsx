'use client';

import {useRouter} from 'next/navigation';
import {useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import {Block} from './Block';
import {Container} from './Container';
import {IconButton} from './IconButton';

type Props = {
	readonly onClose: () => void;
	readonly isOpen?: boolean;
};

const SearchBoxRoot = styled(Block)(props => css`
	${Block.inlineStyle}
	background-color: ${props.theme.color.brand.primary};
	inset: 0 0 auto 0;
	position: fixed;
	padding-block: 3.5rem 2rem;
	overflow: hidden;

	transition: transform 300ms;
	transform: translateY(-100%);

	&[data-open=true] {
		transform: translateY(0);
	}
`);

const SearchContainer = styled(Container)`
	position: relative;
	display: flex;
	align-items: center;

	transition-duration: 300ms;
	transform: translateY(calc(100% + 3rem));

	&[data-open=true] {
		transform: translateY(0);
	}
`;

const SearchInput = styled.input(props => css`
	background: unset;
	border: unset;
	position: relative;
	border-color: ${props.theme.color.brand[900]};
	border-bottom: solid 2px ${props.theme.color.white};
	width: 100%;
	height: auto;
	padding-right: 2.25rem;

	font-family: Lora, serif;
	font-style: italic;
	font-size: 1.75rem;
	color: ${props.theme.color.white};

	&::-webkit-search-decoration,
	&::-webkit-search-cancel-button,
	&::-webkit-search-results-button,
	&::-webkit-search-results-decoration {
		display: none;
	}

	&:focus-visible {
		outline: none;
		border-color: ${props.theme.color.white};
		outline-offset: 5px;
		border-radius: 0px;
	}

	&::placeholder {
		opacity: 0.4;
		color: ${props.theme.color.white};
	}
`);

const SearchClearButton = styled(IconButton)(props => css`
	position: absolute;
	z-index: 10;
	right: 0;
`);

export const HeaderSearch: React.FC<Props> = ({isOpen = false, onClose}) => {
	const router = useRouter();

	const refs = {
		div: useRef<HTMLDivElement>(null),
		input: useRef<HTMLInputElement>(null),
		button: useRef<HTMLButtonElement>(null),
	};

	const handleClickAway = (event: MouseEvent) => {
		if (
			event.target !== null
			&& refs.div.current !== event.target
			&& !refs.div.current?.contains(event.target as Node)
		) {
			event.preventDefault();
			onClose?.();
		}
	};

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = event => {
		if (
			event.key === 'Enter'
			&& event.currentTarget
			&& event.currentTarget.value.length
		) {
			router.push(`/search?q=${event.currentTarget.value}`);
		}
	};

	const handleChange = () => {
		if (refs.input.current?.value.length === 0) {
			refs.button.current?.setAttribute('style', 'visibility: hidden');
		} else {
			refs.button.current?.setAttribute('style', 'visibility: visible');
		}
	};

	useEffect(() => {
		if (isOpen) {
			refs.input.current?.focus();
			document.addEventListener('click', handleClickAway);
		}

		return (): void => {
			document.removeEventListener('click', handleClickAway);
		};
	}, [isOpen]);

	return (
		<SearchBoxRoot ref={refs.div} data-open={isOpen}>
			<SearchContainer data-open={isOpen}>
				<SearchInput
					ref={refs.input}
					aria-label='Search'
					id='search'
					name='search'
					placeholder='Search'
					onKeyDown={handleKeyDown}
					onChange={handleChange}
				/>
				<SearchClearButton
					ref={refs.button}
					contrast
					icon='close'
					onClick={event => {
						event.preventDefault();

						if (refs.input.current) {
							refs.input.current.value = '';
							handleChange();
						}
					}}
				/>
			</SearchContainer>
		</SearchBoxRoot>
	);
};
