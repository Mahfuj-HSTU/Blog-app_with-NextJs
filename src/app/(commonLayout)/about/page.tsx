"use client"
import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    (async () => {
      const blogs = await getBlogs()
      setData(blogs)
    })()
  }, [])

  console.log({ data })

  return (
    <div>
      <h1>
        This is about page
      </h1>
    </div>
  );
};

export default AboutPage;