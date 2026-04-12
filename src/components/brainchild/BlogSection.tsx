import BlogGrid from "./BlogGrid";
import BrainButton from "./BrainButton";
import blog1 from "@/assets/blog/blogimg.png";
import { AnimatedSection } from "./AnimatedSection";

export function BlogSection() {
  const posts = [
    {
      id: "1",
      title: "2026/2027 Session Begins",
      excerpt:
        "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach across all platforms. This is a website rebrand.",
      coverImage: blog1,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "how-children-learn-through-play",
      link: "/blog/how-children-learn-through-play",
    },
  ];

  return (
    <section className="section-pink px-4 md:px-12 lg:px-24 py-12 md:py-24 overflow-hidden relative">
      <div className="absolute top-10 right-16 text-3xl animate-float-slow opacity-20 pointer-events-none">✏️</div>
      <div className="absolute bottom-16 left-10 text-2xl animate-bounce-gentle opacity-15 pointer-events-none">📝</div>
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white/80 bg-primary/30 px-3 py-1 rounded-full inline-block w-fit">📝 Blog</span>
              <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">
                From Our Learning Journal
              </h2>
              <p className="max-w-[757px] text-foreground/70 font-body text-sm md:text-base leading-relaxed">
                Thoughts, insights, and updates from our school community—shared to
                support parents, inspire learning, and offer a closer look into life
                at Brainchild.
              </p>
            </div>
            <BrainButton variant="secondary">View all</BrainButton>
          </div>
        </AnimatedSection>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <BlogGrid posts={posts} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
