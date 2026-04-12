import { useState } from "react";
import BlogGrid from "./BlogGrid";
import BlogModal from "./BlogModal";
import BrainButton from "./BrainButton";
import blog1 from "@/assets/blog/blogimg.png";
import { AnimatedSection } from "./AnimatedSection";
import { BlogPost } from "@/types/blogs";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
      {
      id: "1",
      title: "EXTRA-CURRICULAR ACTIVITIES",
      excerpt: `Music, Culinary, Igbo Club, Dance, Science and Computer, Public Speaking, Arts and Calligraphy, Swimming.\n\n While swimming is compulsory for all pupils, each child is expected to choose any other two clubs from the list. Club activities are scheduled from 1.00pm–2.30pm.`,
      coverImage: blog1,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "how-children-learn-through-play",
      link: "/blog/how-children-learn-through-play",
    },
    {
      id: "2",
      title: "PUNCTUALITY/ABSENTEEISM",
      excerpt:
        "Parents should support a punctual attendance to school because late coming is disruptive and negatively impacts on a child. School opens at 7.30am daily and there is always a staff to receive the student. The school gate closes at 8.00am and late comers are turned back. \n\n   Parents are advised to call the school earlier if they have unavoidable delays to prevent embarrassment at the gate. Parents should also inform the school if a child would be absent from school. ",
      coverImage: blog1,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "how-children-learn-through-play",
      link: "/blog/how-children-learn-through-play",
    },
    {
      id: "3",
      title: "HOME LESSONS",
      excerpt:
        "Brain Child would love her teachers to maintain a professional relationship with parents. In view of this, parents are barred from classrooms except during Open House. Teachers are prohibited to take private lessons with pupils of the school without obtaining clearance from the school management. \n\n This is to protect both the integrity of the parent and the teacher while ensuring that such lessons are effective. Also, teachers may accept gifts from parents and ensure that all such benevolence are reported to the school management.",
      coverImage: blog1,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "how-children-learn-through-play",
      link: "/blog/how-children-learn-through-play",
    },
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
    <section className="section-pink px-4 md:px-12 lg:px-24 py-12 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white/80 bg-primary/30 px-3 py-1 rounded-full inline-block w-fit">
                📝 Blog
              </span>
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

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0,2].map((i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <BlogGrid posts={posts} onPostClick={(post) => setSelectedPost(post)} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}