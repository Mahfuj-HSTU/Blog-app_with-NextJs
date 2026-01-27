import { env } from '@/env'

// * No Dynamic and No {cache: 'no-store'} : SSG --> Static Site Generation
// * Dynamic and No {cache: 'no-store'} : SSR --> Server Side Rendering / Dynamic page
// * Dynamic and {cache: 'no-store'} : SRR --> Static Side Rendering / Static page
// * next: {revalidate: 60} : ISR --> Incremental Static Regeneration (Mix between static and dynamic)

export const blogService = {
	getBlogs: async function () {
		try {
			const res = await fetch(`${env.API_URL}/posts`, {
				next: {
					revalidate: 60
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
