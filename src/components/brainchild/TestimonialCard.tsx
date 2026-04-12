import { Testimonial } from "@/types/testimonialcard";
import { motion } from "framer-motion";

export function TestimonialCard({
  testimonial,
  profileImage,
  name,
  description,
}: Testimonial) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[500px] h-auto min-h-[220px] rounded-2xl p-8 flex flex-col gap-4 shadow-md bg-white/95 backdrop-blur-sm border border-white/60 hover:shadow-xl hover:shadow-secondary/15 transition-all duration-300 group"
    >
      <div className="text-secondary text-2xl opacity-40 font-serif">"</div>
      <p className="text-foreground/80 text-sm leading-relaxed -mt-4">{testimonial}</p>
      <div className="flex items-center mt-auto pt-2 border-t border-border/50">
        <img
          src={profileImage}
          alt={name}
          className="w-12 h-12 rounded-full mr-3 object-cover ring-2 ring-primary/20"
        />
        <div>
          <h3 className="font-heading font-bold text-foreground text-sm">{name}</h3>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
