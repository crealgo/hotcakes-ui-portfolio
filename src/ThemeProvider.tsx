'use client';

import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {createTheme} from './utils/createTheme';

const defaultTheme = createTheme();

declare module 'styled-components' {
	type CustomTheme = typeof defaultTheme;

	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	export interface DefaultTheme extends CustomTheme {}
}

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => (
	<StyledThemeProvider theme={defaultTheme}>
		{children}
	</StyledThemeProvider>
);
