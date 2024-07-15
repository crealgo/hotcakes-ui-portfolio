'use client';

import clsx from 'clsx';
import {useState} from 'react';
import styled, {css} from 'styled-components';
import NextImage from 'next/image';
import type {ImageProps as NextImageProps} from 'next/image';
import {LoadingDots} from './LoadingDots';

const ImageElement = styled(NextImage)`
	width: 100%;
	height: 100%;

	visibility: hidden;
	opacity: 0;
	transform: translateY(-10px);
	transition: all 300ms;

	&.loaded {
		visibility: visible;
		opacity: 1;
		transform: translateY(0px);
	}

	/* animation */
	&[data-animated=float] {}
`;

const ImageRoot = styled.div<{
	readonly $aspectRatio?: string;
	readonly $width?: string;
	readonly $height?: string;
}>(props => css`
	position: relative;
	width: ${props.$width ?? '100%'};
	height: ${props.$height ?? '100%'};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	${props.$aspectRatio ? `aspect-ratio: ${props.$aspectRatio};` : ''}
`);

export type ImageProps = {
	readonly className?: string;
	readonly aspectRatio?: string;
	readonly width?: string;
	readonly height?: string;
	readonly loadingTransition?: 'translate' | 'fade' | 'none';
	readonly hideLoader?: boolean;
	readonly objectFit?: 'cover' | 'contain';
} & Pick<NextImageProps, 'src' | 'alt'>;

export const Image: React.FC<ImageProps> = ({
	className,
	aspectRatio,
	...props
}) => {
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);
	const isLoading = !props.hideLoader && !imageLoaded;

	return (
		<ImageRoot
			$width={props.width}
			$height={props.height}
			$aspectRatio={aspectRatio}
			className={clsx('Image-root', className)}
		>
			{isLoading && <LoadingDots className='absolute'/>}
			<ImageElement
				unoptimized
				alt={props.alt}
				src={props.src}
				loading='lazy'
				layout='fill'
				objectFit='cover'
				loader={({src}) => src}
				className={clsx({loaded: imageLoaded})}
				onLoad={() => {
					setImageLoaded(true);
				}}
			/>
		</ImageRoot>
	);
};
