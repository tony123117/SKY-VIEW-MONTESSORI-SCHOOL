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
    <section className="section-blue px-4 md:px-12 lg:px-24 py-12 md:py-24">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-2xl md:text-[40px] font-medium font-body text-brand-dark">
              From Our Learning Journal
            </h2>
            <p className="max-w-[757px] text-muted-foreground font-heading text-sm md:text-base">
              Thoughts, insights, and updates from our school community—shared to
              support parents, inspire learning, and offer a closer look into life
              at Brainchild.
            </p>
          </div>
          <BrainButton variant="secondary">View all</BrainButton>
        </div>
      </AnimatedSection>

      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18">
        {[0, 1, 2, 3].map((i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <BlogGrid posts={posts} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
