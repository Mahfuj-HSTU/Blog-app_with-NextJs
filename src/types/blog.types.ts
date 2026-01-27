export interface TBlog {
	id: string
	title: string
	content: string
	thumbnail?: string
	tags?: string[]
	views?: number
	_count: {
		comments: number
	}
	isFeatured?: boolean
}

export interface TBlogResponse {
	data: {
		result: TBlog[]
	}
}
