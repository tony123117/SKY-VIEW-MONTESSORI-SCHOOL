import { WhyChooseUsCardProps } from "@/types/whychooseuscard";
import { motion } from "framer-motion";

export default function WhyChooseUsCard({
  number,
  title,
  description,
}: WhyChooseUsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-white border border-white/80 rounded-2xl p-6 pt-8 shadow-sm group cursor-pointer hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300"
    >
      <div className="absolute -top-5 right-0 bg-secondary text-secondary-foreground w-12 h-12 rounded-[27px] flex items-center justify-center font-semibold shadow-md p-10 border border-secondary/30 text-[44px] group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-[22px] mb-2 max-w-[194px] text-brand-dark group-hover:text-secondary transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
