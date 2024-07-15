'use client';

import styled, {css} from 'styled-components';
import {Block} from './Block';
import {ButtonLink} from './ButtonLink';
import {Container} from './Container';
import {Content} from './Content';
import {Divider} from './Divider';
import {Image} from './Image';
import {Mark} from './Mark';
import {Stack} from './Stack';
import {Typography} from './Typography';

const FooterRoot = styled.footer`
	${Block} {
		padding-block: 2rem;

		&:last-of-type {
			padding-block: 1rem;
		}
	}
`;

const GridContainer = styled(Container)(({theme}) => css`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	align-items: center;

	${theme.breakpoint.up('md')} {
		grid-template-columns: 2fr 3fr;
	}
`);

type Props = {
	readonly socialLinks: Work.SocialLink[];
};

export const Footer: React.FC<Props> = props => (
	<FooterRoot>
		<Block>
			<GridContainer>
				<Image aspectRatio='4/3' objectFit='contain' alt='Paining UX' src='/assets/doodles/design.svg'/>
				<Stack vertical gap={1.5}>
					<Typography variant='display2'>
						Let me know what you’re building.{' '}
						<Mark>
							{'I\'d love to help.'}
						</Mark>
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
			</GridContainer>
		</Block>
		<Divider spacing={[3, 0]}/>
		<Block>
			<Container>
				<Content spacing={0.5}>
					<Typography variant='display3'>About Me</Typography>
					<Typography variant='body2'>
						This site is a collective of all my Case Studies and Projects. All work has been
						designed, photographed, coded and written by and is property of, Manas Chimpidi
						(Me), unless stated otherwise. If you would like to use, download, or commission me
						for a project, contact me at the mentioned outlets below.
					</Typography>
				</Content>
			</Container>
		</Block>
		<Block color='brand'>
			<Container>
				<Typography variant='caption'>{new Date().getFullYear()} &copy; Copyright MANASC.COM</Typography>
			</Container>
		</Block>
	</FooterRoot>
);
