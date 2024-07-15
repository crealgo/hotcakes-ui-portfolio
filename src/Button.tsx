'use client';

import {ButtonBase} from './ButtonBase';
import {Icon} from './Icon';

export const Button: React.FC<ControlProps> = props => (
	<ButtonBase {...props}>
		{props.icon && <Icon icon={props.icon}/>}
		{props.children}
	</ButtonBase>
);
