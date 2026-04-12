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
      className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden group cursor-pointer border border-white/60 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
    >
      <div className="relative w-full h-[250px] md:h-[320px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 font-body">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            {post.author}
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-lg md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <button className="text-primary font-semibold text-sm hover:opacity-80 transition inline-flex items-center gap-1 group-hover:gap-2 duration-300 mt-1 w-fit">
          <span>Read Article</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </button>
      </div>
    </motion.div>
  );
}