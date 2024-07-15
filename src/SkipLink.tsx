'use client';

import styled from 'styled-components';
import {Link} from './Link';

export const SkipLink = styled(Link)`
	display: inline-block;
	position: absolute;
	margin: 0.25rem;
	padding: 0.25rem;
	opacity: 0;

	&:focus-visible {
		position: relative;
	}
`;
