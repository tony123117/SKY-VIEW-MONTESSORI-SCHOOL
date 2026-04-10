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
      className="w-full h-[248px] rounded-[20px] p-10 flex flex-col gap-5 shadow-sm bg-white border border-white/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      <p className="text-brand-dark">{testimonial}</p>
      <div className="flex items-center mt-auto">
        <img
          src={profileImage}
          alt={name}
          className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-semibold text-brand-dark">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
