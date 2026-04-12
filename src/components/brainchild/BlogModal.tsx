import { BlogPost } from "@/types/blogs";
import { motion, AnimatePresence } from "framer-motion";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  return (
    <AnimatePresence>
      {post && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-full max-w-lg z-50 overflow-hidden"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm transition-colors"
              >
                x
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-white bg-pink-500 px-3 py-1 rounded-full">
                  {post.author}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-6 whitespace-pre-line">
                {post.excerpt}
              </p>

              <div className="flex gap-3">
                <a
                  href={post.link}
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold py-3 rounded-xl text-center transition-colors duration-200"
                >
                  Read Full Post
                </a>
                <button
                  onClick={onClose}
                  className="px-5 border border-gray-200 text-gray-500 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
