import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  color: string;
  bg: string;
}

const stats: Stat[] = [
  { label: "Happy Students", value: 500, suffix: "+", icon: "🎓", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Qualified Teachers", value: 50, suffix: "+", icon: "👩‍🏫", color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Years of Excellence", value: 10, suffix: "+", icon: "🏆", color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Clubs & Activities", value: 15, suffix: "+", icon: "🎨", color: "text-green-600", bg: "bg-green-50" },
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
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="relative bg-white rounded-3xl p-6 md:p-8 text-center border border-white/80 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 group overflow-hidden"
    >
      {/* Subtle top color accent */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full ${stat.bg.replace("bg-", "bg-").replace("50", "300")} opacity-80`} />

      {/* Icon bubble */}
      <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
        <span className="text-3xl">{stat.icon}</span>
      </div>

      {/* Count */}
      <div className={`text-4xl md:text-5xl font-heading font-extrabold ${stat.color} leading-none`}>
        {count}<span className="text-3xl">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-sm text-muted-foreground mt-3 font-body font-medium tracking-wide">{stat.label}</p>

      {/* Bottom decorative dot */}
      <div className={`w-2 h-2 rounded-full ${stat.bg.replace("50", "400")} mx-auto mt-4 opacity-60`} />
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="section-blue-soft px-4 md:px-12 lg:px-24 py-16 md:py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-20 text-3xl animate-float opacity-20 pointer-events-none select-none">⭐</div>
      <div className="absolute bottom-14 left-12 text-2xl animate-bounce-gentle opacity-15 pointer-events-none select-none">🎯</div>

      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              📊 Our Impact
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-[42px] font-heading font-bold text-foreground leading-tight">
              Brain Child in{" "}
              <span className="relative inline-block text-primary">
                Numbers
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 120 8" fill="none">
                  <path d="M2 6 Q30 2 60 5 Q90 8 118 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary opacity-50" />
                </svg>
              </span>
            </h2>
            <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto leading-relaxed">
              A decade of nurturing young minds with measurable impact across every classroom.
            </p>
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