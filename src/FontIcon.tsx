'use client';

import styled from 'styled-components';

const FontIconRoot = styled.span`
	font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
	display: inline-flex;
	font-size: 0.875rem; // 137.5% of parent font-size
`;

type FontIconProps = {
	readonly icon: string;
};

export const FontIcon: React.FC<FontIconProps> = props => (
	<FontIconRoot className='material-symbols-rounded'>
		{props.icon}
	</FontIconRoot>
);
