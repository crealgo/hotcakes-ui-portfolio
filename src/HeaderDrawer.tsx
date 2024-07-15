'use client';

import {forwardRef} from 'react';
import {ButtonLink} from './ButtonLink';
import {Container} from './Container';
import {Link} from './Link';
import {LinkLarge} from './LinkLarge';
import {Stack} from './Stack';
import {Typography} from './Typography';
import styled, {css} from 'styled-components';
import {Block} from './Block';
import {usePathname} from 'next/navigation';
import {Divider} from './Divider';

type Props = {
	readonly isOpen?: boolean;
	readonly mainLinks: Work.MainLink[];
	readonly socialLinks: Work.SocialLink[];
};

const Drawer = styled(Block)(({theme}) => css`
	background-color: ${theme.color.slate[100]};
	position: fixed;
	inset: 0;

	transition: transform 400ms;
	transform: translateY(-100%);
	padding-block: 2.5rem 3rem;
	overflow: hidden;

	&[data-open=true] {
		transform: translateY(0);
	}
`);

const DrawerContainer = styled(Container)`
	padding-bottom: 4rem;
	overflow: auto;
	transition: transform 400ms;
	transform: translateY(100%);

	&[data-open=true] {
		transform: translateY(0);
	}
`;

const DrawerLinkStack = styled.nav(({theme}) => css`
	display: flex;
	flex-direction: column;
	gap: 0.125rem;

	${theme.breakpoint.up('md')} {
		gap: 0.5rem;
	}
`);

export const HeaderDrawer = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const pathname = usePathname();

	const isPage = (slug: string) => {
		if (slug === 'home' && pathname === '/') {
			return true;
		}

		return pathname.includes(slug);
	};

	return (
		<Drawer ref={ref} data-open={props.isOpen}>
			<DrawerContainer data-open={props.isOpen} className='py-5'>
				<Typography variant='h3'>Menu</Typography>
				<DrawerLinkStack>
					{props.mainLinks?.map(mainLink => (
						<LinkLarge
							key={mainLink.slug}
							data-active={isPage(mainLink.slug)}
							href={mainLink.url}
						>
							{mainLink.title}
						</LinkLarge>
					))}
				</DrawerLinkStack>
				<Divider/>
				<Typography variant='h3'>Social</Typography>
				<Stack gap={1}>
					<Typography variant='display2'>
						Let me know what you’re building.{' '}
						<Link noUnderline href='mailto:manaschimpidi@gmail.com'>
							{'I\'d love to help.'}
						</Link>
					</Typography>
					<Stack>
						{props.socialLinks.map(link => (
							<ButtonLink
								key={`button-${link.title}`}
								href={link.url}
								icon={link.icon}
								color={link.color as BrandColor}
								aria-label={link.title}
							>
								{link.title}
							</ButtonLink>
						))}
					</Stack>
				</Stack>
				<Divider/>
				<Typography variant='h3'>About Me</Typography>
				<Typography variant='body2'>
					This site is a collective of all my Case Studies and Projects. All work has been
					designed, photographed, coded and written by and is property of, Manas Chimpidi
					(Me), unless stated otherwise. If you would like to use, download, or commission me
					for a project, contact me at the mentioned outlets below.
				</Typography>
			</DrawerContainer>
		</Drawer>
	);
});
