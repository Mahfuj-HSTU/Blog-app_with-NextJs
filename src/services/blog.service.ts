import { env } from '@/env'

export const blogService = {
	getBlogs: async function () {
		try {
			const res = await fetch(`${env.API_URL}/posts`, {
				next: {
					revalidate: 6
				}
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
