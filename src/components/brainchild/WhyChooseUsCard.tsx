import { WhyChooseUsCardProps } from "@/types/whychooseuscard";
import { motion } from "framer-motion";

export default function WhyChooseUsCard({
  number,
  title,
  description,
}: WhyChooseUsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 pt-10 shadow-md group cursor-pointer hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
    >
      <div className="absolute -top-5 right-4 bg-secondary text-secondary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {number}
      </div>
      <h3 className="text-lg font-heading font-bold mb-2 max-w-[200px] text-foreground group-hover:text-secondary transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
