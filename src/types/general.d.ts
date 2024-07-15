// UTIL
type UnforwardProps<P> = {
	[K in keyof P & string as `$${K}`]: NonNullable<P[K]>;
};

// GENERAL
type BrandColor = 'brand' | 'slate' | 'red' | 'pink' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'indigo' | 'violet';

// MDX
type FrontMatter = {
	id: string;
	title: string;
	summary: string;
	categories: string[];
	tags: string[];
	published: string;
	toc: Array<{title: string; id: string}>;
};

type MDXImportModule = {
	frontmatter: FrontMatter;
	default: React.ComponentType<MDXContent>;
};

type MDXPageContent = {
	frontmatter: FrontMatter;
	ParsedMDXContent: React.ComponentType<MDXContent>;
};

// CONTROLS
type ControlVariant = 'contained' | 'filled' | 'outlined' | 'text';

type ControlColor = BrandColor;

type ControlShape = 'square' | 'circle' | 'default';

type ControlProps<T = HTMLButtonElement> = React.PropsWithChildren<{
	icon?: React.ComponentType | string;
	variant?: ControlVariant;
	color?: ControlColor;
	shape?: ControlShape;
	onClick?: React.MouseEventHandler<T>;
	onKeyDown?: React.KeyboardEventHandler<T>;
}>;
