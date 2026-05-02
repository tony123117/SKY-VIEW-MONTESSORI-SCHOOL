import { BlogPost } from "@/types/blogs";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: BlogPost;
  onPostClick: (post: BlogPost) => void;
}

export default function BlogCard({ post, onPostClick }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onPostClick(post)}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] p-4 hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-pink-200/50"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Date Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex flex-col items-center border border-white/50 group-hover:border-pink-300/50 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-black text-slate-900 leading-none">
            {new Date(post.publishedAt).getDate()}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short' })}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-2 group-hover:text-primary/80 transition-colors">
          {post.author}
        </span>

        <h3 className="text-xl font-heading font-black text-slate-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-sm text-slate-500 font-body line-clamp-2 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
          {post.excerpt}
        </p>

        {/* Footer Link */}
        <motion.div
          className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between group-hover:border-pink-100/50 transition-colors"
          whileHover={{ x: 4 }}
        >
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">
            Read Entry
          </span>
          <motion.span
            className="text-lg"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}