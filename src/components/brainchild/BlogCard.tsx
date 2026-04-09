import { BlogPost } from "@/types/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-card">
      <div className="relative w-full h-[355px]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div className="p-5 flex flex-col gap-[20px] font-body max-w-[574px]">
        <p className="text-sm text-muted-foreground mb-2">
          {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <h3 className="text-[33px] font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="text-primary hover:opacity-80 transition">
          Read Article
        </a>
      </div>
    </div>
  );
}
