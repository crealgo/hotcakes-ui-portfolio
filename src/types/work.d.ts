namespace Work {
	type Root = {
		props: Props;
		page: string;
		query: Query;
		buildId: string;
		isFallback: boolean;
		gsp: boolean;
		scriptLoader: any[];
	};

	type Props = {
		pageProps: PageProps;
		__N_SSG: boolean;
	};

	type PageProps = {
		mainLinks: MainLink[];
		socialLinks: SocialLink[];
		projects: Project[];
		categories: Category2[];
		tags: Tag2[];
		seo: Seo;
	};

	type MainLink = {
		id: number;
		title: string;
		slug: string;
		color: string;
		icon: string;
		status: string;
		url: string;
		data_action: string;
	};

	type SocialLink = {
		title: string;
		slug: string;
		color: string;
		icon: string;
		url: string;
	};

	type Project = {
		id: number;
		title: string;
		slug: string;
		introduction: string;
		date: string;
		modified: string;
		image: Image;
		tags: Tag[];
		categories: Category[];
	};

	type Image = {
		id?: number;
		name?: string;
		mime_type?: string;
		url?: string;
		caption?: string;
		filesize?: number;
		icon?: string;
		sizes?: Sizes;
		width?: number;
		height?: number;
	};

	type Sizes = {
		thumbnail: string;
		'thumbnail-width': number;
		'thumbnail-height': number;
		medium: string;
		'medium-width': number;
		'medium-height': number;
		medium_large: string;
		'medium_large-width': number;
		'medium_large-height': number;
		large: string;
		'large-width': number;
		'large-height': number;
		'1536x1536': string;
		'1536x1536-width': number;
		'1536x1536-height': number;
		'2048x2048': string;
		'2048x2048-width': number;
		'2048x2048-height': number;
		indexp: string;
		'indexp-width': number;
		'indexp-height': number;
		indexl: string;
		'indexl-width': number;
		'indexl-height': number;
		related: string;
		'related-width': number;
		'related-height': number;
	};

	type Tag = {
		term_id: number;
		name: string;
		slug: string;
		term_group: number;
		term_taxonomy_id: number;
		taxonomy: string;
		description: string;
		parent: number;
		count: number;
		filter: string;
	};

	type Category = {
		term_id: number;
		name: string;
		slug: string;
		term_group: number;
		term_taxonomy_id: number;
		taxonomy: string;
		description: string;
		parent: number;
		count: number;
		filter: string;
		cat_ID: number;
		category_count: number;
		category_description: string;
		cat_name: string;
		category_nicename: string;
		category_parent: number;
	};

	type Category2 = {
		term_id: number;
		name: string;
		slug: string;
		term_group: number;
		term_taxonomy_id: number;
		taxonomy: string;
		description: string;
		parent: number;
		count: number;
		filter: string;
	};

	type Tag2 = {
		term_id: number;
		name: string;
		slug: string;
		term_group: number;
		term_taxonomy_id: number;
		taxonomy: string;
		description: string;
		parent: number;
		count: number;
		filter: string;
	};

	type Seo = {
		id: number;
		date: string;
		date_gmt: string;
		guid: Guid;
		modified: string;
		modified_gmt: string;
		slug: string;
		status: string;
		type: string;
		link: string;
		title: Title;
		content: Content;
		excerpt: Excerpt;
		author: number;
		featured_media: number;
		parent: number;
		menu_order: number;
		comment_status: string;
		ping_status: string;
		template: string;
		meta: any[];
		acf: Acf;
		yoast_head: string;
		yoast_head_json: YoastHeadJson;
		jetpack_shortlink: string;
		_links: Links;
	};

	type Guid = {
		rendered: string;
	};

	type Title = {
		rendered: string;
	};

	type Content = {
		rendered: string;
		protected: boolean;
	};

	type Excerpt = {
		rendered: string;
		protected: boolean;
	};

	type Acf = {
		image: boolean;
	};

	type YoastHeadJson = {
		title: string;
		robots: Robots;
		canonical: string;
		og_locale: string;
		og_type: string;
		og_title: string;
		og_url: string;
		og_site_name: string;
		article_modified_time: string;
		twitter_card: string;
		schema: Schema;
	};

	type Robots = {
		index: string;
		follow: string;
		'max-snippet': string;
		'max-image-preview': string;
		'max-video-preview': string;
	};

	type Schema = {
		'@context': string;
		'@graph': Graph[];
	};

	type Graph = {
		'@type': any;
		'@id': string;
		isPartOf?: IsPartOf;
		author?: Author;
		headline?: string;
		datePublished?: string;
		dateModified?: string;
		mainEntityOfPage?: MainEntityOfPage;
		wordCount?: number;
		publisher?: Publisher;
		inLanguage?: string;
		url?: string;
		name?: string;
		breadcrumb?: Breadcrumb;
		potentialAction?: PotentialAction[];
		itemListElement?: ItemListElement[];
		description?: string;
		image?: Image2;
		logo?: Logo;
	};

	type IsPartOf = {
		'@id': string;
	};

	type Author = {
		name: string;
		'@id': string;
	};

	type MainEntityOfPage = {
		'@id': string;
	};

	type Publisher = {
		'@id': string;
	};

	type Breadcrumb = {
		'@id': string;
	};

	type PotentialAction = {
		'@type': string;
		target: any;
		'query-input'?: string;
	};

	type ItemListElement = {
		'@type': string;
		position: number;
		name: string;
	};

	type Image2 = {
		'@type': string;
		inLanguage: string;
		'@id': string;
		url: string;
		contentUrl: string;
		width: number;
		height: number;
		caption: string;
	};

	type Logo = {
		'@id': string;
	};

	type Links = {
		self: Self[];
		collection: Collection[];
		about: About[];
		author: Author2[];
		replies: Reply[];
		'version-history': VersionHistory[];
		'predecessor-version': PredecessorVersion[];
		'wp:attachment': WpAttachment[];
		curies: Cury[];
	};

	type Self = {
		href: string;
	};

	type Collection = {
		href: string;
	};

	type About = {
		href: string;
	};

	type Author2 = {
		embeddable: boolean;
		href: string;
	};

	type Reply = {
		embeddable: boolean;
		href: string;
	};

	type VersionHistory = {
		count: number;
		href: string;
	};

	type PredecessorVersion = {
		id: number;
		href: string;
	};

	type WpAttachment = {
		href: string;
	};

	type Cury = {
		name: string;
		href: string;
		templated: boolean;
	};

	type Query = {};

}
