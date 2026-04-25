import { WhyChooseUsCardProps } from "@/types/whychooseuscard";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

export default function WhyChooseUsCard({
  number,
  title,
  description,
  color,
  image,
}: WhyChooseUsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex flex-col h-[520px] bg-white rounded-[2.5rem] overflow-hidden border border-pink-100/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,182,193,0.15)] transition-all duration-500"
    >
      {/* IMAGE SECTION - NO GAPS AT TOP */}
      <div className="relative h-[55%] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        {/* Floating Number Badge - Apple Style */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-white/80 backdrop-blur-md text-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black shadow-sm border border-white/50 transition-transform group-hover:rotate-3">
            {number}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-8 md:p-10 flex flex-col bg-gradient-to-b from-white to-pink-50/20">
        <h3 className={`text-2xl font-heading font-extrabold mb-4 text-slate-800 tracking-tight leading-tight`}>
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium line-clamp-3">
          {description}
        </p>

        {/* Action Link with your requested Arrow */}
        <div className={`mt-auto flex items-center gap-2 text-sm font-bold ${color} transition-all duration-300 group-hover:gap-4`}>
          <span className="tracking-wide">Learn more</span>
          <MdOutlineArrowForward className="text-xl" />
        </div>
      </div>
    </motion.div>
  );
}