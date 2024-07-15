'use client';

import {usePathname} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {Block} from './Block';
import {ButtonLink} from './ButtonLink';
import {Container} from './Container';
import {HeaderDrawer} from './HeaderDrawer';
import {HeaderSearch} from './HeaderSearch';
import {IconButton} from './IconButton';
import {Image} from './Image';
import {KeyboardSnippet} from './KeyboardSnippet';
import {Link} from './Link';

const HeaderBar = styled(Block)`
	background: white;
	position: sticky;
	top: 0;
	height: 2.5rem;
	z-index: 20;

	[data-top] {
		position: relative;
		z-index: 30;
	}

	[data-bottom] {
		z-index: 0;
	}
`;

const HeaderContainer = styled(Container)`
	display: flex;
	gap: 0.75rem;
`;

const HeaderItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	height: 100%;
`;

const HeaderNav = styled(HeaderItem)(({theme}) => css`
	${theme.breakpoint.down('md')} {
		display: none;
	}
`);

const HeaderEndContent = styled.div`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    display: flex;
	gap: 0.5rem;
`;

type Props = {
	readonly mainLinks: Work.MainLink[];
	readonly socialLinks: Work.SocialLink[];
};

export const Header: React.FC<Props> = props => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const headerRef = useRef<HTMLDivElement>(null);

	const isPage = (slug: string) => {
		if (slug === 'home' && pathname === '/') {
			return true;
		}

		return pathname.includes(slug);
	};

	const toggleMenu = (isCurrentlyOpen = isMenuOpen) => {
		if (isCurrentlyOpen) {
			document.body.setAttribute('style', 'overflow: auto');
			setIsMenuOpen(false);
		} else {
			document.body.setAttribute('style', 'overflow: hidden');
			setIsSearchOpen(false);
			setIsMenuOpen(true);
		}
	};

	const toggleSearch = (isCurrentlyOpen = isSearchOpen) => {
		if (isCurrentlyOpen) {
			document.body.setAttribute('style', 'overflow: auto');
			setIsSearchOpen(false);
		} else {
			document.body.setAttribute('style', 'overflow: hidden');
			setIsMenuOpen(false);
			setIsSearchOpen(true);
		}
	};

	const keyMap: Record<string, Function> = {
		'/': toggleSearch,
		// m: toggleMenu,
	};

	const handleDocumentKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && (isSearchOpen || isMenuOpen)) {
			event.preventDefault();
			toggleSearch(true);
			toggleMenu(true);
		}

		if (event.ctrlKey && event.key in keyMap) {
			event.preventDefault();
			keyMap[event.key.toLocaleLowerCase()]?.();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleDocumentKeyDown);

		return () => {
			document.removeEventListener('keydown', handleDocumentKeyDown);
		};
	}, [isSearchOpen, isMenuOpen]);

	return (
		<HeaderBar ref={headerRef} as='header' color='slate'>
			<HeaderContainer>
				<HeaderItem data-logo data-top>
					<Link href='/'>
						<Image
							hideLoader
							height='1.25rem'
							aspectRatio='4/1'
							objectFit='contain'
							loadingTransition='fade'
							alt='Manas Logo'
							src={isSearchOpen ? '/assets/logotype-contrast.svg' : '/assets/logotype.svg'}
						/>
					</Link>
				</HeaderItem>
				<HeaderNav data-bottom as='nav'>
					{props.mainLinks.map((mainLink, i) => (
						<ButtonLink
							key={mainLink.slug}
							variant={isPage(mainLink.slug) ? 'outlined' : 'text'}
							href={mainLink.url}
						>
							{mainLink.title}
						</ButtonLink>
					))}
				</HeaderNav>
				<HeaderEndContent data-top>
					<HeaderItem>
						<KeyboardSnippet accent keys={['Ctrl', '/']}/>
						<IconButton
							variant='text'
							icon={isSearchOpen ? 'close' : 'search'}
							contrast={isSearchOpen}
							onClick={() => {
								toggleSearch(isSearchOpen);
							}}
						/>
					</HeaderItem>
					<HeaderItem>
						<IconButton
							variant='text'
							icon={isMenuOpen ? 'close' : 'menu'}
							contrast={isSearchOpen}
							onClick={() => {
								toggleMenu(isMenuOpen);
							}}
						/>
					</HeaderItem>
				</HeaderEndContent>
			</HeaderContainer>
			<HeaderSearch
				isOpen={isSearchOpen}
				onClose={() => {
					setIsSearchOpen(false);
				}}
			/>
			<HeaderDrawer isOpen={isMenuOpen} mainLinks={props.mainLinks} socialLinks={props.socialLinks}/>
		</HeaderBar>
	);
};
