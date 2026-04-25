import { BlogPost } from "@/types/blogs";
import BlogCard from "./BlogCard";
import { AnimatedSection } from "./AnimatedSection";

interface BlogGridProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

export default function BlogGrid({ posts, onPostClick }: BlogGridProps) {
  if (!posts || posts.length === 0) return null;

  return (
    // Fixed 3-column grid with consistent spacing
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {posts.map((post, i) => (
        <AnimatedSection key={post.id} delay={0.1 * i}>
          <BlogCard post={post} onPostClick={onPostClick} />
        </AnimatedSection>
      ))}
    </div>
  );
}