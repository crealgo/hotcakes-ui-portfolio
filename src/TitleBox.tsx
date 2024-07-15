'use client';

import {Content} from './Content';
import {Typography} from './Typography';

type TitleBoxProps = React.PropsWithChildren<{
	readonly title?: React.ReactNode;
	readonly subtitle?: React.ReactNode;
	readonly description?: React.ReactNode;
}>;

export const TitleBox: React.FC<TitleBoxProps> = props => (
	<Content>
		{props.title && <Typography variant='display1'>{props.title}</Typography>}
		{props.subtitle && <Typography variant='display2'>{props.subtitle}</Typography>}
		{props.description && <Typography variant='display3'>{props.description}</Typography>}
		{props.children && <div className='mt-10 lg:mt-12'>{props.children}</div>}
	</Content>
);
