'use client';

import {FontIcon} from './FontIcon';
import {SvgIcon} from './SvgIcon';

type IconProps = {
	readonly icon: string | React.ComponentType;
};

export const Icon: React.FC<IconProps> = props => (typeof props.icon === 'string'
	? <FontIcon icon={props.icon}/>
	: <SvgIcon icon={props.icon}/>
);

