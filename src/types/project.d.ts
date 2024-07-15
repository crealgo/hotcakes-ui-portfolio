namespace Project {
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
		projectInfo: ProjectInfo;
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

	type ProjectInfo = {
		id: number;
		date: string;
		title: string;
		slug: string;
		summary: string;
		introduction: string;
		tags: Tag[];
		categories: Category[];
		content: Content;
		fonts: Fonts;
		palette: Palette;
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

	type Content = {
		final: Final[];
		work: Work[];
	};

	type Final = {
		id: number;
		name: string;
		mime_type: string;
		url: string;
		caption: string;
		filesize: number;
		icon: string;
		sizes: Sizes;
		width: number;
		height: number;
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

	type Work = {
		title: string;
		description: string;
		images: Image[];
	};

	type Image = {
		id: number;
		name: string;
		mime_type: string;
		url: string;
		caption: string;
		filesize: number;
		icon: string;
		sizes: Sizes2;
		width: number;
		height: number;
	};

	type Sizes2 = {
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

	type Fonts = {
		families: Family[];
		description: string;
	};

	type Family = {
		font: Font;
	};

	type Font = {
		font: string;
		variants: string[];
		subsets: string[];
	};

	type Palette = {
		colors: Color[];
		description: string;
	};

	type Color = {
		name: string;
		hex: string;
		cmyk: string;
		contrast: string;
		rgb: string;
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
		content: Content2;
		excerpt: Excerpt;
		author: number;
		featured_media: number;
		comment_status: string;
		ping_status: string;
		sticky: boolean;
		template: string;
		format: string;
		meta: any[];
		categories: number[];
		tags: number[];
		acf: Acf;
		yoast_head: string;
		yoast_head_json: YoastHeadJson;
		jetpack_featured_media_url: string;
		jetpack_shortlink: string;
		_links: Links;
	};

	type Guid = {
		rendered: string;
	};

	type Title = {
		rendered: string;
	};

	type Content2 = {
		rendered: string;
		protected: boolean;
	};

	type Excerpt = {
		rendered: string;
		protected: boolean;
	};

	type Acf = {
		work: Work2[];
		final_images: FinalImage[];
		font_description: string;
		fonts: Font2[];
		palette_description: string;
		palette: Palette2[];
	};

	type Work2 = {
		title: string;
		work_description: string;
		work_images: WorkImage[];
	};

	type WorkImage = {
		ID: number;
		id: number;
		title: string;
		filename: string;
		filesize: number;
		url: string;
		link: string;
		alt: string;
		author: string;
		description: string;
		caption: string;
		name: string;
		status: string;
		uploaded_to: number;
		date: string;
		modified: string;
		menu_order: number;
		mime_type: string;
		type: string;
		subtype: string;
		icon: string;
		width: number;
		height: number;
		sizes: Sizes3;
	};

	type Sizes3 = {
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

	type FinalImage = {
		ID: number;
		id: number;
		title: string;
		filename: string;
		filesize: number;
		url: string;
		link: string;
		alt: string;
		author: string;
		description: string;
		caption: string;
		name: string;
		status: string;
		uploaded_to: number;
		date: string;
		modified: string;
		menu_order: number;
		mime_type: string;
		type: string;
		subtype: string;
		icon: string;
		width: number;
		height: number;
		sizes: Sizes4;
	};

	type Sizes4 = {
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

	type Font2 = {
		font: Font3;
	};

	type Font3 = {
		font: string;
		variants: string[];
		subsets: string[];
	};

	type Palette2 = {
		color1: string;
		color2: string;
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
		article_published_time: string;
		article_modified_time: string;
		og_image: OgImage[];
		author: string;
		twitter_card: string;
		twitter_misc: TwitterMisc;
		schema: Schema;
	};

	type Robots = {
		index: string;
		follow: string;
		'max-snippet': string;
		'max-image-preview': string;
		'max-video-preview': string;
	};

	type OgImage = {
		width: number;
		height: number;
		url: string;
		type: string;
	};

	type TwitterMisc = {
		'Written by': string;
		'Est. reading time': string;
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
		commentCount?: number;
		publisher?: Publisher;
		keywords?: string[];
		articleSection?: string[];
		inLanguage?: string;
		potentialAction?: PotentialAction[];
		url?: string;
		name?: string;
		breadcrumb?: Breadcrumb;
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

	type PotentialAction = {
		'@type': string;
		target: any;
		'query-input'?: string;
		name?: string;
	};

	type Breadcrumb = {
		'@id': string;
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
		'wp:featuredmedia': Featuredmedum[];
		'wp:attachment': WpAttachment[];
		'wp:term': WpTerm[];
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

	type Featuredmedum = {
		embeddable: boolean;
		href: string;
	};

	type WpAttachment = {
		href: string;
	};

	type WpTerm = {
		taxonomy: string;
		embeddable: boolean;
		href: string;
	};

	type Cury = {
		name: string;
		href: string;
		templated: boolean;
	};

	type Query = {
		slug: string;
	};
}
