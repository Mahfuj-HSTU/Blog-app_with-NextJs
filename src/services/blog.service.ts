import { env } from '@/env'

export const blogService = {
	getBlogs: async function () {
		try {
			const res = await fetch(`${env.API_URL}/posts`, {
				cache: 'no-store'
			})

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
	}
}
