import { motion } from "framer-motion";
import { ReactNode, HTMLAttributes } from "react";
import { fadeIn } from "@/components/ui/motionVariants";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0, style, ...rest }: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
