import { env } from '@/env'

// * No Dynamic and No {cache: 'no-store'} : SSG --> Static Site Generation
// * Dynamic and No {cache: 'no-store'} : SSR --> Server Side Rendering / Dynamic page
// * Dynamic and {cache: 'no-store'} : SRR --> Static Side Rendering / Static page
// * next: {revalidate: 60} : ISR --> Incremental Static Regeneration (Mix between static and dynamic)

interface ServiceOptions {
	cache?: RequestCache
	revalidate?: number
}

interface GetBlogParams {
	isFeatured?: boolean
	search?: string
	category?: string
	page?: number
	limit?: number
}

export const blogService = {
	getBlogs: async function (params?: GetBlogParams, options?: ServiceOptions) {
		try {
			const url = new URL(`${env.API_URL}/posts`)
			// if (params?.isFeatured)
			// 	url.searchParams.set('isFeatured', params.isFeatured.toString())
			// if (params?.search) url.searchParams.set('search', params.search)
			// if (params?.category) url.searchParams.set('category', params.category)
			// if (params?.page) url.searchParams.set('page', params.page.toString())
			// if (params?.limit) url.searchParams.set('limit', params.limit.toString())
			if (params) {
				Object.entries(params).forEach(([key, value]) => {
					if (value) url.searchParams.set(key, value.toString())
				})
			}
			const config: RequestInit = {}
			if (options?.cache) config.cache = options.cache
			if (options?.revalidate) config.next = { revalidate: options.revalidate }
			const res = await fetch(url.toString(), config)
			const blogs = await res.json()

			return {
				data: blogs,
				error: null
			}
		} catch (error) {
			return {
				data: null,
				error: error
			}
		}
	},

	getBlogById: async function (id: string) {
		try {
			const res = await fetch(`${env.API_URL}/posts/${id}`)
			const blog = await res.json()

			return {
				data: blog,
				error: null
			}
		} catch (error) {
			return {
				data: null,
				message: 'Something went wrong',
				error: error
			}
		}
	}
}
