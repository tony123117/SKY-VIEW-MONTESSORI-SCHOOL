import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import BrainButton from "@/components/brainchild/BrainButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center section-pink-soft relative overflow-hidden font-body">
      {/* Decorations */}
      <div className="absolute top-20 left-10 text-5xl animate-float opacity-30 pointer-events-none">📚</div>
      <div className="absolute top-40 right-20 text-6xl animate-float-slow opacity-20 pointer-events-none">🎒</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-bounce-gentle opacity-25 pointer-events-none">✏️</div>
      <div className="absolute bottom-20 right-16 text-5xl animate-wiggle opacity-20 pointer-events-none">🌟</div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-6 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-8xl md:text-[140px] font-heading font-bold text-primary/20 leading-none"
        >
          404
        </motion.div>

        <h1 className="text-2xl md:text-4xl font-heading font-bold text-foreground -mt-4 md:-mt-8">
          Oops! This page ran away 🏃‍♂️
        </h1>

        <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
          Looks like this page skipped class! Let's get you back to the school grounds.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/">
            <BrainButton variant="primary">
              🏠 Back to Home
            </BrainButton>
          </Link>
          <Link to="/#contact">
            <BrainButton variant="secondary">
              📞 Contact Us
            </BrainButton>
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-4 text-3xl">
          <motion.span animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }}>🎨</motion.span>
          <motion.span animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}>📐</motion.span>
          <motion.span animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}>🎓</motion.span>
          <motion.span animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}>✨</motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
