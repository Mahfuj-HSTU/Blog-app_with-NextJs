import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TBlog } from "@/types"
import Image from "next/image"

const BlogCard = ({ post }: { post: TBlog }) => {
  const { title, content, thumbnail, tags, views, _count } = post
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src={thumbnail as string}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>

        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {content}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        {tags?.map((tag: string) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}

      </CardFooter>
    </Card>
  )
}

export default BlogCard
