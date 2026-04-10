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
      className="relative bg-card border border-border rounded-2xl p-6 pt-8 shadow-sm group cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="absolute -top-5 right-0 bg-primary text-primary-foreground w-12 h-12 rounded-[27px] flex items-center justify-center font-semibold shadow-md p-10 border border-border text-[44px] group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-[22px] mb-2 max-w-[194px] group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
