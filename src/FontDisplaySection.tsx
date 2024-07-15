import styled, {css} from 'styled-components';

type Props = {
	readonly area: 'snippet' | 'glyph' | 'characters';
	readonly children: React.ReactNode;
	readonly title: React.ReactNode;
	readonly helperText?: React.ReactNode;
};

const Root = styled.div<{$area: Props['area']}>(props => css`
	grid-area: ${props.$area};
`);

export const FontDisplaySection: React.FC<Props> = props => (
	<Root $area={props.area}>
		<span className='h5'>{props.title}</span>
		<hr className='border border-dashed'/>
		<div data-font>
			{props.children}
		</div>
		{props.helperText}
	</Root>
);
