import { BlogPost } from "@/types/blogs";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

export default function BlogGrid({ posts, onPostClick }: BlogGridProps) {
  return (
    <section>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onPostClick={onPostClick} />
      ))}
    </section>
  );
}