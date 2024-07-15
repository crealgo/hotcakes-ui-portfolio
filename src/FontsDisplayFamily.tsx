'use client';

import clsx from 'clsx';
import {useState} from 'react';
import styled from 'styled-components';
import {FontDisplaySection} from './FontDisplaySection';
import {FontGlyphBox} from './FontGlyphBox';
import {FontGlyphBoxWrapper} from './FontGlyphBoxWrapper';
import {HelperText} from './HelperText';
import {Mark} from './Mark';
import {getRandomIndex} from './utils/getRandomIndex';

type FontsDisplayProps = {
	readonly fontUrl: string;
};

const parseFontURL = (fontURLString: string) => {
	const fontFamilies = new URL(fontURLString).searchParams.getAll('family');

	if (fontFamilies.length !== 1) {
		throw new Error('Malformed font url.');
	}

	const font = fontFamilies.at(0)!;

	const [name, styles, weights] = font.split(/[:@]/);

	if (!(name && styles && weights)) {
		throw new Error('Malformed font url.');
	}

	return {
		name,
		styles,
		weights,
	};
};

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()-_+=[]{}\\|;:\'"<>,./?~';
const CHAR_ARRAY = CHARS.split('');
const randomChar = CHAR_ARRAY.at(getRandomIndex(CHARS.length))!;

const FontDisplayRoot = styled.div<{$font: string}>`
	display: grid;
	gap: 2rem;
	grid-template-areas: 'snippet snippet' 'glyph characters';
	grid-template-columns: auto 1fr;

	[data-font] {
		font-family: ${props => props.$font ?? 'inherit'};
	}
`;

export const FontsDisplayFamily: React.FC<FontsDisplayProps> = props => {
	const [character, setCharacter] = useState<string>(randomChar);

	const characterGlyph = /[a-zA-z]/.test(character) ? `${character.toUpperCase()}${character.toLowerCase()}` : character;

	const fontInfo = parseFontURL(props.fontUrl);

	return fontInfo && (
		<div>
			<style>
				{`@import url('${props.fontUrl}');`}
			</style>
			<FontDisplayRoot $font={fontInfo.name}>
				<FontDisplaySection
					area='snippet'
					title={(
						<>
							Font Family: <Mark>{fontInfo.name}</Mark>
						</>
					)}
					helperText={(
						<HelperText icon='text_fields'>
							This content is editable. Click to type!
						</HelperText>
					)}
				>
					<div className='py-5 leading-tighter text-4xl md:text-6xl'>
						<span contentEditable>The quick brown fox jumped over the lazy dog.</span>
					</div>
				</FontDisplaySection>
				<FontDisplaySection
					area='glyph'
					title='Glyph'
					helperText={(
						<HelperText icon='web_traffic'>
							Pick a character to get a closer look.
						</HelperText>
					)}
				>
					<div
						className={clsx(
							'text-8xl flex items-center justify-center',
							'h-36 w-full overflow-hidden',
						)}
					>
						<span data-font>{characterGlyph}</span>
					</div>
				</FontDisplaySection>
				<FontDisplaySection area='characters' title='Characters'>
					<FontGlyphBoxWrapper>
						{CHAR_ARRAY.map((char, cIndex) => (
							<FontGlyphBox
								key={char}
								name={fontInfo.name}
								aria-selected={character === char}
								defaultValue={character}
								onChange={event => {
									setCharacter(event.currentTarget.value);
								}}
							>
								{char}
							</FontGlyphBox>
						))}
					</FontGlyphBoxWrapper>
				</FontDisplaySection>
			</FontDisplayRoot>
		</div>
	);
};
