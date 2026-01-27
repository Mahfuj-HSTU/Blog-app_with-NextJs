import { blogService } from "@/services/blog.service";
import { TBlog } from "@/types";
import Image from "next/image";

export const generateStaticParams = async () => {
  const { data: posts } = await blogService.getBlogs();

  const list = posts?.data?.data ?? [];

  return list.slice(0, 3).map((post: TBlog) => ({
    id: post.id,
  }));
};


const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const { data } = await blogService.getBlogById(id);

  const post = data?.result

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">

        {/* Thumbnail */}
        <div className="relative w-full flex justify-center">
          <Image
            src={post?.thumbnail || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ImIpHRSCUDgHtX12y60XeXK0TAjwBuL4bp6-czoyzDLUFDQZIHMCuvXf18JSkERgNUI&usqp=CAU'}
            alt={post.title}
            width={200}
            height={50}
            className="object-cover"
            priority
          />
        </div>

        {/* Content Wrapper */}
        <div className="p-8">

          {/* Featured Badge */}
          {post?.isFeatured && (
            <span className="inline-block mb-3 text-xs font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
              ⭐ Featured Post
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <span>
              📅 {new Date(post.createdAt).toLocaleDateString()}
            </span>

            <span>
              👁 {post.views} views
            </span>

            <span
              className={`font-medium ${post.status === "PUBLISHED"
                ? "text-green-600"
                : post.status === "DRAFT"
                  ? "text-orange-500"
                  : "text-gray-400"
                }`}
            >
              {post.status}
            </span>
          </div>

          {/* Tags */}
          {post?.tags && post?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post?.tags?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <hr className="my-6" />

          {/* Post Content */}
          <article className="prose max-w-none text-gray-800">
            {post.content}
          </article>

          {/* Footer Section */}
          <div className="mt-10 pt-6 border-t flex items-center justify-between">

            {/* Author */}
            <div className="text-sm text-gray-600">
              Author ID:{" "}
              <span className="font-medium text-gray-800">
                {post.authorId}
              </span>
            </div>

            {/* Updated Date */}
            <div className="text-xs text-gray-400">
              Last updated:{" "}
              {new Date(post.updatedAt).toLocaleDateString()}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;



// ? this can be used only client component
// const { id } = useParams()