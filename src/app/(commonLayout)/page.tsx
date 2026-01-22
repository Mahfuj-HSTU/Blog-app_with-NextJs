import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";

export default async function Home() {

  const session = await userService.getSession()
  const blogs = await blogService.getBlogs()
  console.log({ session, blogs })

  return (
    <Button>
      Click me
    </Button>
  );
}
