import { BlogPost } from "@/types/blogs";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: BlogPost;
  onPostClick: (post: BlogPost) => void;
}

export default function BlogCard({ post, onPostClick }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onPostClick(post)}
      className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden group cursor-pointer border border-white/60 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold text-white bg-accent px-2.5 py-1 rounded-full shadow-sm">
            📌 Update
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 font-body flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            {post.author}
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <button className="text-accent font-semibold text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group-hover:gap-2 duration-300 mt-2 w-fit">
          <span>Read Article</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </button>
      </div>
    </motion.div>
  );
}
