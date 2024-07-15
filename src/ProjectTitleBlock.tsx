'use client';

import {Container} from './Container';
import {Stack} from './Stack';
import {Tag} from './Tag';
import {TitleBox} from './TitleBox';
import {Typography} from './Typography';

type Props = React.ComponentPropsWithoutRef<'div'> & {
	readonly projectInfo: Project.ProjectInfo;
};

export const ProjectTitleBlock: React.FC<Props> = props => {
	const publishDate = new Date(props.projectInfo.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	return (
		<Container className='mb-20'>
			<TitleBox
				title={props.projectInfo.title}
				subtitle={props.projectInfo.summary}
				description={props.projectInfo.introduction}
			>
				<h6 className='ml-1 overline inline-flex border-t border-x border-brand-400 text-brand-600 rounded-t-[0.25rem] bg-brand-50 py-1 px-2'>
					Project Information
				</h6>
				<div className='border border-dashed rounded-md p-5 border-slate-300 bg-slate-50'>
					<div className='mb-1'>
						<Typography variant='body1'>Published: {publishDate}</Typography>
					</div>
					{props.projectInfo.categories && props.projectInfo.tags && (
						<div className='mb-1 md:flex md:flex-wrap md:items-center'>
							<Stack vertical>
								<Typography variant='body1'>Tags:</Typography>
								<Stack role='list'>
									{props.projectInfo.categories
										.filter(c => c.name === 'Folio' || c.name === 'Project')
										.map(c => (
											<Tag
												key={c.cat_name}
												role='listitem'
												color='green'
												icon='label'
											>
												{c.name}
											</Tag>
										))}
									{props.projectInfo.tags.map(t => (
										<Tag
											key={t.slug}
											role='listitem'
											color='orange'
											icon='label'
										>
											{t.name}
										</Tag>
									))}
								</Stack>
							</Stack>
						</div>
					)}
				</div>
			</TitleBox>
		</Container>
	);
};
