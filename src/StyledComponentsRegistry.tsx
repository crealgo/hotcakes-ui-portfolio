/* eslint-disable react/hook-use-state, react/jsx-no-useless-fragment */
'use client';

import React from 'react';
import {useServerInsertedHTML} from 'next/navigation';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

export default function StyledComponentsRegistry(props: React.PropsWithChildren) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	});

	if (typeof window !== 'undefined') {
		return <>{props.children}</>;
	}

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			{props.children}
		</StyleSheetManager>
	);
}
