'use client';

import styled, {css} from 'styled-components';
import {Container} from './Container';
import {Content} from './Content';
import {Image, type ImageProps} from './Image';
import {Typography} from './Typography';

type ImageContainerProps = {
	readonly hideImageOnMobile?: boolean;
	// readonly backgroundType?: 'filled' | 'striped';
};

type Props = React.PropsWithChildren<{
	readonly title?: React.ReactNode;
	readonly subtitle?: React.ReactNode;
	readonly description?: React.ReactNode;
	readonly ImageProps?: ImageProps;
	readonly ImageContainerProps?: ImageContainerProps;
}>;

const Root = styled.div(({theme}) => css`
	position: relative;
	padding-block: ${theme.spacing(3)};

	${Container} {
		display: grid;
		grid-template-columns: 1fr;
	}

	${theme.breakpoint.up('lg')} {
		padding-block: ${theme.spacing(6)} ${theme.spacing(6)};

		${Container} {
			grid-template-columns: 1fr 1fr;
		}
	}
`);

const ImageContainer = styled.div<UnforwardProps<Pick<ImageContainerProps, 'hideImageOnMobile'>>>(({theme, ...props}) => css`
	--bg-filled: ${theme.color.brand[200]};
	--bg-striped: repeating-radial-gradient(circle, ${theme.color.brand[200]}, ${theme.color.brand[200]} 5px, transparent 5px, transparent 20px);

	@keyframes floating {
		0% { transform: translate(0,  0px); }
		50%  { transform: translate(0, 2%); }
		100%   { transform: translate(0, -0px); }
	}

	z-index: -1;
	position: relative;
	display: ${props.$hideImageOnMobile ? 'none' : 'flex'};

	.Image-root {
		animation: floating 4s ease-in-out infinite;
		position: relative;
		height: auto;
	}

	${theme.breakpoint.up('md')} {
		min-height: ${theme.spacing(20)};
		justify-content: flex-end;

		.Image-root {
			/* position: absolute; */
			margin-top: -${theme.spacing(10)};
			bottom: 0;
		}
	}

	${theme.breakpoint.up('lg')} {
		min-height: ${theme.spacing(40)};
		position: absolute;
		inset: 0 0 auto 45%;
		justify-content: center;
		display: flex;

		.Image-root {
			margin-top: unset;
			height: 90%;
			bottom: 0;
		}
	}
`);

export const PageHeader: React.FC<Props> = props => (
	<Root>
		<Container>
			<Content>
				{props.title && <Typography variant='display1'>{props.title}</Typography>}
				{props.subtitle && <Typography variant='display2'>{props.subtitle}</Typography>}
				{props.description && <Typography variant='body1'>{props.description}</Typography>}
				{props.children && <div className='mt-10 lg:mt-12'>{props.children}</div>}
			</Content>
		</Container>
		{props.ImageProps && (
			<ImageContainer $hideImageOnMobile={Boolean(props.ImageContainerProps?.hideImageOnMobile)}>
				<Image aspectRatio='4/3' {...props.ImageProps}/>
			</ImageContainer>
		)}
	</Root>
);
