import { BlogPost } from "@/types/blogs";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: BlogPost;
  onPostClick: (post: BlogPost) => void;
}

export default function BlogCard({ post, onPostClick }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => onPostClick(post)}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] p-4 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex flex-col items-center">
          <span className="text-sm font-black text-slate-900 leading-none">
            {new Date(post.publishedAt).getDate()}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short' })}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-2">
          {post.author}
        </span>
        <h3 className="text-xl font-heading font-black text-slate-900 leading-tight mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-slate-500 font-body line-clamp-2 mb-6">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Read Entry</span>
          <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
}