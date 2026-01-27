"use client"
import { getBlogs } from "@/actions/blog.action";
import BlogCard from "@/components/modules/homepage/BlogCard";
import { TBlog } from "@/types";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [data, setData] = useState<{ data: TBlog[] } | null>(null)

  useEffect(() => {
    (async () => {
      const blogs = await getBlogs()
      setData(blogs)
    })()
  }, [])

  console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        data?.data?.map((post: TBlog) => (
          <BlogCard key={post.id} post={post} />
        ))
      }
    </div>
  );
};

export default AboutPage;