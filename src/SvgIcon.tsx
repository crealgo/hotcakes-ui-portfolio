'use client';

import styled from 'styled-components';

type SvgIconProps = {
	readonly icon: React.ComponentType;
};

const SvgIconRoot = styled.span`
  display: inline-flex;
  height: auto;
  width: 0.875rem;
`;

export const SvgIcon: React.FC<SvgIconProps> = props => (
	<SvgIconRoot>
		<props.icon/>
	</SvgIconRoot>
);
