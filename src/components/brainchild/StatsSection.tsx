import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

const stats: Stat[] = [
  { label: "Happy Students", value: 500, suffix: "+", icon: "🎓" },
  { label: "Qualified Teachers", value: 50, suffix: "+", icon: "👩‍🏫" },
  { label: "Years of Excellence", value: 10, suffix: "+", icon: "🏆" },
  { label: "Clubs & Activities", value: 15, suffix: "+", icon: "🎨" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return count;
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.value, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/60 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
      <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
        {count}{stat.suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-2 font-body font-medium">{stat.label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="section-blue-soft px-4 md:px-12 lg:px-24 py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-8 right-16 text-3xl animate-float opacity-20 pointer-events-none">⭐</div>
      <div className="absolute bottom-12 left-10 text-2xl animate-bounce-gentle opacity-15 pointer-events-none">🎯</div>

      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block mb-3">📊 Our Impact</span>
            <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">
              Brain Child Nursery and Primary School in Numbers
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
