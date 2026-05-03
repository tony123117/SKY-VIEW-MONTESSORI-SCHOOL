import { Testimonial } from "@/types/testimonialcard";
import { motion } from "framer-motion";

interface TestimonialCardProps extends Testimonial {
  isActive?: boolean;
}

export function TestimonialCard({
  testimonial,
  profileImage,
  name,
  description,
  isActive = false,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl p-5 flex flex-col gap-4 transition-all duration-500 group overflow-hidden
        ${isActive
          ? "bg-white shadow-2xl shadow-secondary/20 border border-secondary/20"
          : "bg-white/80 shadow-md border border-white/60 hover:shadow-xl hover:shadow-secondary/10"
        }`}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 h-1 rounded-t-2xl transition-all duration-500 ${isActive ? "w-full bg-gradient-to-r from-secondary to-primary" : "w-0 group-hover:w-full bg-secondary/60"}`} />

      {/* Header: quote bubble + stars */}
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
          <span className="text-secondary text-lg font-serif leading-none">"</span>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xs">★</span>
          ))}
        </div>
      </div>

      {/* Testimonial text — wraps naturally inside fixed-width parent */}
      <p className="text-foreground/75 text-sm leading-relaxed italic">
        {testimonial}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-border/40 mt-auto">
        <div className="relative shrink-0">
          <img
            src={profileImage}
            alt={name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-secondary/30 ring-offset-2"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-foreground text-sm">{name}</h3>
          <p className="text-muted-foreground text-xs mt-0.5">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}