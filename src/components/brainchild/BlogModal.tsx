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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              /* CHANGED: 
                 - Added pointer-events-auto so clicks work inside.
                 - Removed the weird left/top offsets.
                 - Changed max-h to allow scrolling if content is too long on mobile.
              */
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
            >
              {/* Image Area */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden shrink-0">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors backdrop-blur-md"
                >
                  &times;
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="p-5 md:p-8 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-white bg-pink-500 px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.author}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line text-sm md:text-base">
                  {post.excerpt}
                </p>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href="/blog"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold py-4 rounded-xl text-center transition-all shadow-lg shadow-primary/20 active:scale-95"
                  >
                    Read Full Post
                  </a>
                  <button
                    onClick={onClose}
                    className="px-6 py-4 border border-gray-200 text-gray-500 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}