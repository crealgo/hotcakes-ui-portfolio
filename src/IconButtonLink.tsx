'use client';

import {ButtonBase} from './ButtonBase';
import {Icon} from './Icon';

export const IconButtonLink: React.FC<ControlProps<HTMLAnchorElement>> = props => (
	<ButtonBase {...props} shape='square' as='a' title={props.children?.toString()}>
		{props.icon && <Icon icon={props.icon}/>}
	</ButtonBase>
);
