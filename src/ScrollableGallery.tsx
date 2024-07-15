'use client';

import styled from 'styled-components';

export const ScrollableGallery = styled.div`
	display: flex;
	overflow-x: auto;
	gap: 1rem;

	img {
		display: inline-flex;
		height: 30rem;
		width: auto;
	}
`;
