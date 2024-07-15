'use client';

export type SubtitleBoxProps = Pick<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
	readonly title: string;
	readonly description?: React.ReactNode;
	readonly helperText?: React.ReactNode;
};

export const SubtitleBox: React.FC<SubtitleBoxProps> = props => (
	<div className={props.className}>
		<div className='h4'>{props.title}</div>
		{props.description && (
			<div className='mt-2 mb-4 max-w-xl'>{props.description}</div>
		)}
		{props.helperText}
	</div>
);
