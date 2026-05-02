import { WhyChooseUsCardProps } from "@/types/whychooseuscard";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

export default function WhyChooseUsCard({
  number,
  title,
  description,
  color,
  image,
  onReadMore,
}: WhyChooseUsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex flex-col h-[520px] bg-white rounded-[2.5rem] overflow-hidden border border-pink-100/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(59,130,246,0.08)] transition-all duration-500"
    >
      {/* IMAGE SECTION - NO GAPS AT TOP */}
      <div className="relative h-[55%] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          srcSet={`${image} 1x`}
          className="w-full h-full object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Floating Number Badge - Apple Style */}
        <motion.div
          className="absolute top-6 left-6 z-10"
          whileHover={{ rotate: 6, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-white/80 backdrop-blur-md text-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black shadow-sm border border-white/50 transition-all group-hover:border-pink-300/50">
            {number}
          </div>
        </motion.div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-8 md:p-10 flex flex-col bg-gradient-to-b from-white to-pink-50/20 group-hover:to-pink-100/20 transition-all duration-500">
        <h3 className={`text-2xl font-heading font-extrabold mb-4 text-slate-800 tracking-tight leading-tight group-hover:text-slate-900 transition-colors`}>
          {title}
        </h3>

        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium line-clamp-3 group-hover:text-slate-600 transition-colors">
          {description}
        </p>

        {/* Action Row */}
        <div className="mt-auto flex items-center gap-3">
          <motion.div
            className={`flex-1 flex items-center gap-2 text-sm font-bold ${color} transition-all duration-300`}
            whileHover={{ x: 4 }}
          >
            <span className="tracking-wide">Learn more</span>
            <MdOutlineArrowForward className="text-xl" />
          </motion.div>

          <button onClick={onReadMore} aria-label={`Read more about ${title}`} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">Read more</button>
        </div>
      </div>
    </motion.div>
  );
}