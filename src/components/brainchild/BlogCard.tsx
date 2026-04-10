import { BlogPost } from "@/types/blogs";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl overflow-hidden group cursor-pointer border border-white/80 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300"
    >
      <div className="relative w-full h-[250px] md:h-[355px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 flex flex-col gap-3 md:gap-[20px] font-body max-w-[574px]">
        <p className="text-sm text-muted-foreground mb-1">
          {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <h3 className="text-xl md:text-[33px] font-semibold mb-1 text-brand-dark group-hover:text-secondary transition-colors duration-300 leading-tight">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="text-secondary hover:opacity-80 transition inline-flex items-center gap-1 group-hover:gap-2 duration-300">
          <span>Read Article</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </a>
      </div>
    </motion.div>
  );
}
