import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import BrainButton from "@/components/brainchild/BrainButton";
import creativeImg from "@/assets/creative.jpeg";
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";
import danceImg from "@/assets/dance.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const notFoundImages = [creativeImg, teachersImg, enterImg, outsideImg, danceImg];

const pageSuggestions = [
  { title: "Admissions", description: "Begin the enrollment journey with our guided support.", href: "/admissions" },
  { title: "About Us", description: "Learn about our mission, leadership, and premium learning approach.", href: "/about" },
  { title: "Blog", description: "Read the latest stories, tips, and updates from the school community.", href: "/blog" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ffe1ec] relative overflow-hidden font-body">
      {/* Decorations */}
      <div className="absolute top-20 left-10 text-5xl animate-float opacity-30 pointer-events-none">📚</div>
      <div className="absolute top-40 right-20 text-6xl animate-float-slow opacity-20 pointer-events-none">🎒</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-bounce-gentle opacity-25 pointer-events-none">✏️</div>
      <div className="absolute bottom-20 right-16 text-5xl animate-wiggle opacity-20 pointer-events-none">🌟</div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#4f78ed]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#303778]/10 rounded-full blur-3xl pointer-events-none" />

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
          className="text-8xl md:text-[140px] font-heading font-bold text-[#4f78ed]/20 leading-none"
        >
          404
        </motion.div>

        <h1 className="text-2xl md:text-4xl font-heading font-bold text-[#303778] -mt-4 md:-mt-8">
          Oops! This page ran away 🏃‍♂️
        </h1>

        <p className="mt-4 text-[#303778]/80 max-w-md mx-auto text-sm md:text-base leading-relaxed">
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

        {/* Carousel Section */}
        <div className="mt-12 mx-auto max-w-4xl">
          <h2 className="text-lg font-heading font-bold text-[#303778] mb-4 text-center">Take a look at our school life</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {notFoundImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img
                      src={image}
                      alt={`School life ${index + 1}`}
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#303778]/30 bg-white/90 text-[#303778] shadow-lg" />
            <CarouselNext className="border-[#303778]/30 bg-white/90 text-[#303778] shadow-lg" />
          </Carousel>
        </div>

        <div className="mt-12 mx-auto max-w-3xl rounded-[2rem] border border-[#303778]/15 bg-[#303778]/10 p-6 shadow-2xl">
          <h2 className="text-lg font-heading font-bold text-[#303778] mb-4 text-center">Explore these premium pages instead</h2>
          <Carousel className="relative">
            <CarouselContent className="flex">
              {pageSuggestions.map((page) => (
                <CarouselItem key={page.title}>
                  <Link to={page.href} className="block rounded-[1.75rem] border border-[#303778]/20 bg-[#303778]/10 p-6 hover:bg-[#303778]/15 transition-all">
                    <h3 className="text-xl font-heading font-bold text-[#303778]">{page.title}</h3>
                    <p className="mt-3 text-sm text-[#303778]/70 leading-relaxed">{page.description}</p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#303778]/60 bg-[#303778]/10 text-[#303778] shadow-lg" />
            <CarouselNext className="border-[#303778]/60 bg-[#303778]/10 text-[#303778] shadow-lg" />
          </Carousel>
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
