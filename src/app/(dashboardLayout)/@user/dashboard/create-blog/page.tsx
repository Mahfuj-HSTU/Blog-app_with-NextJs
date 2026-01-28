import { CreateBlogForm } from "@/components/modules/user/createBlog/CreateBlogForm";
import { blogService } from "@/services/blog.service";
import { TBlog } from "@/types";

const CreateBlogPage = async () => {
  const { data } = await blogService.getBlogs({}, { cache: 'no-store' });
  return (
    <div>
      <CreateBlogForm />
      <div>
        {data?.data?.map((blog: TBlog) => (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateBlogPage;