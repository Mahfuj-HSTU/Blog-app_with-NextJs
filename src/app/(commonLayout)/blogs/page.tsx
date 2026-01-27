import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { TBlog } from "@/types";

const blogsPage = async () => {
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
};

export default blogsPage;