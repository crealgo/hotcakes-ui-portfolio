'use client';

import styled, {css} from 'styled-components';
import {Block} from './Block';
import {Container} from './Container';
import {Content} from './Content';
import {Divider} from './Divider';
import {Image} from './Image';
import {Link} from './Link';
import {LinkLarge} from './LinkLarge';
import {Mark} from './Mark';
import {Stack} from './Stack';
import {Typography} from './Typography';

const HeroBlockContainer = styled(Container)(({theme}) => css`
	display: grid;
	padding-block: ${theme.spacing(4)};
	grid-template-columns: 1fr;
	gap: ${theme.spacing(2.5)};
	align-items: center;

	${theme.breakpoint.up('lg')} {
		grid-template-columns: 1fr 1fr;
	}
`);

const ImageWrapper = styled.div(({theme}) => css`
	position: relative;
	display: none;
	align-items: center;
	width: 100%;
	aspect-ratio: 1 / 1;
	overflow: hidden;

	${theme.breakpoint.up('md')} {
		display: flex;
	}
`);

type Props = {
	mainLinks: Work.MainLink[];
};

export const HeroBlock: React.FC<Props> = props => (
	<Block>
		<HeroBlockContainer>
			<div>
				<Content>
					<Typography variant='display1'>
						Hello there! 👋
					</Typography>
					<Typography variant='body1'>
						Nice to meet you. I'm <Mark>Manas</Mark>, a designer and developer based in
						Davenport, IA. I have been designing and making things for 10 years now – for{' '}
						<em>myself</em>, for <em>clients</em>, and, most importantly,{' '}
						<em>for fun</em>. Check out my work, browse the site,
						or <Link href='mailto:manaschimpidi@gmail.com'>contact me</Link> if you
						would like to work together.
					</Typography>
				</Content>
				{/* <hr className='my-6'/> */}
				{/* <div className='flex items-center mb-1'>
				<h6 className='h6'>Quick Links</h6>
				<div className='ml-1.5 w-2 h-2 bg-brand-600 relative rounded-full'>
					<div className='absolute left-0 top-0 w-2 h-2 bg-brand-600 animate-ping rounded-full'/>
				</div>
			</div> */}
				<Divider/>
				<nav>
					<Typography variant='h3'>Quick Links</Typography>
					<Stack gap={1}>
						{props.mainLinks.slice(1).map(link => (
							<LinkLarge key={link.slug} href={link.url}>
								{link.title}
							</LinkLarge>
						))}
					</Stack>
				</nav>
			</div>
			<ImageWrapper>
				<Image aspectRatio='1/1' alt='Manas Chimpidi' src='/assets/manas.jpg'/>
			</ImageWrapper>
		</HeroBlockContainer>
	</Block>
);
