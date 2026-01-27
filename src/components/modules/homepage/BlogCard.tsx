import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TBlog } from "@/types"
import { ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ post }: { post: TBlog }) => {
  const { title, content, thumbnail, tags, views } = post
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-10 aspect-video bg-black/35" />
      <Image
        src={thumbnail || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ImIpHRSCUDgHtX12y60XeXK0TAjwBuL4bp6-czoyzDLUFDQZIHMCuvXf18JSkERgNUI&usqp=CAU'}
        alt="Event cover"
        width={200}
        height={100}
        className="relative z-10 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      <CardHeader>

        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {content}
          <div className="mt-4">
            {tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t flex justify-between z-20">
        <div className="flex items-center gap-2 text-xs">
          <Eye size={14} />
          <span>{views}</span>
        </div>
        <Link href={`/blogs/${post.id}`} className="flex gap-1 items-center text-sm font-semibold group-hover:underline">Read More<ArrowRight className="group-hover:ml-2 transition-all" size={14} /></Link>
      </CardFooter>
    </Card>
  )
}

export default BlogCard
