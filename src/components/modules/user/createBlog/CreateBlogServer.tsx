'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "@tanstack/react-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function CreateBlogForm() {

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
      tags: "",
      isFeatured: false,
      status: "PUBLISHED",
    },

    onSubmit: async ({ value }) => {

      // Convert tags string -> array
      const payload = {
        ...value,
        tags: value.tags
          .split(",")
          .map(t => t.trim())
          .filter(Boolean),
      }

      console.log("Submitting blog:", payload)

      // await blogService.createBlog(payload)
    },
  })

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog Post</CardTitle>
        <CardDescription>
          Publish a new article to your platform
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-6"
        >

          {/* Title */}
          <form.Field name="title">
            {(field) => (
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  placeholder="Enter blog title"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Thumbnail */}
          <form.Field name="thumbnail">
            {(field) => (
              <div className="space-y-2">
                <Label>Thumbnail URL</Label>
                <Input
                  placeholder="https://image-url.com/cover.jpg"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Content */}
          <form.Field name="content">
            {(field) => (
              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea
                  rows={6}
                  placeholder="Write your article..."
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Tags */}
          <form.Field name="tags">
            {(field) => (
              <div className="space-y-2">
                <Label>Tags (comma separated)</Label>
                <Input
                  placeholder="react, nextjs, prisma"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Status + Featured */}
          <div className="grid grid-cols-2 gap-6">

            {/* Status */}
            <form.Field name="status">
              {(field) => (
                <div className="space-y-2">
                  <Label>Status</Label>

                  <Select
                    value={field.state.value}
                    onValueChange={field.handleChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="PUBLISHED">Published</SelectItem>
                      <SelectItem value="DRAFT">Draft</SelectItem>
                      <SelectItem value="ARCHIVED">Archived</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
              )}
            </form.Field>

            {/* Featured */}
            <form.Field name="isFeatured">
              {(field) => (
                <div className="flex items-center justify-between border rounded-md px-4 py-3">
                  <Label>Featured Post</Label>
                  <Switch
                    checked={field.state.value}
                    onCheckedChange={field.handleChange}
                  />
                </div>
              )}
            </form.Field>

          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={form.state.isSubmitting}
            >
              {form.state.isSubmitting ? "Publishing..." : "Create Post"}
            </Button>
          </div>

        </form>
      </CardContent>
    </Card>
  )
}
