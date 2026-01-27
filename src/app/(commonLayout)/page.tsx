import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { TBlog } from "@/types";

export default async function Home() {

  const session = await userService.getSession()
  const blogs = await blogService.getBlogs({
    isFeatured: false,
    search: 'ai'
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-6">
      {
        blogs?.data?.data?.map((post: TBlog) => (
          <BlogCard key={post.id} post={post} />
        ))
      }
    </div>
  );
}
