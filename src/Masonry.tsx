'use client';

import styled from 'styled-components';

export const Masonry = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 0.5rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: 20rem;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-rows: 15rem;
	}

	@media (min-width: 1280px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-auto-rows: 17rem;
	}

	@media (min-width: 1536px) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
`;
