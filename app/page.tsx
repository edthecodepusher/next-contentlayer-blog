import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div className="prose dark:prose-invert space-y-6 max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      {allPosts.map((post) => (
        <BlogCard
          key={post._id}
          title={post.title}
          description={post.description || ""}
          date={post.date}
          category={post.category || "Uncategorized"} // Use a default if category is missing
          imageUrl={post.thumbnail || "/placeholder.svg?height=200&width=300"} // Use thumbnail or fallback
          href={`/blog/${post.slug}`} // dynamically linking to the individual post page
        />
      ))}
    </div>
  );
}
