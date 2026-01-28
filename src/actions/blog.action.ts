'use server'
import { blogService } from '@/services/blog.service'

export const getBlogs = async () => {
	const { data } = await blogService.getBlogs()
	return data
}

export const getBlogById = async (id: string) => {
	const { data } = await blogService.getBlogById(id)
	return data
}

export async function createBlogAction(payload: any) {
	return await blogService.createBlog(payload)
}
