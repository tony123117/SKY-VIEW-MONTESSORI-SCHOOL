import { BlogPost } from "@/types/blogs";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogModal({ post, onClose }: { post: BlogPost | null, onClose: () => void }) {
  return (
    <AnimatePresence>
      {post && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100]" />
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] shadow-2xl w-full max-w-4xl overflow-hidden pointer-events-auto max-h-[85vh] flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={post.coverImage} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <button onClick={onClose} className="text-slate-400 hover:text-primary mb-6 font-bold uppercase text-xs tracking-widest">← Back</button>
                <h3 className="text-3xl font-heading font-black text-slate-900 mb-6 leading-tight italic">{post.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-8 whitespace-pre-line">{post.excerpt}</p>
                <a href={post.link} className="block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-colors">Read Full Article</a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}