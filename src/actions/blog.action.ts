'use server'
import { blogService } from '@/services/blog.service'
import { revalidateTag } from 'next/cache'

export const getBlogs = async () => {
	const { data } = await blogService.getBlogs()
	return data
}

export const getBlogById = async (id: string) => {
	const { data } = await blogService.getBlogById(id)
	return data
}

export async function createBlogAction(payload: any) {
	const result = await blogService.createBlog(payload)

	revalidateTag('blogs', 'max')

	return result
}
