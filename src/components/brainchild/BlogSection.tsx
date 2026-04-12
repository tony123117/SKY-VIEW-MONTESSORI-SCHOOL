import { useState } from "react";
import BlogModal from "./BlogModal";
import BrainButton from "./BrainButton";
import BlogCard from "./BlogCard";

import { AnimatedSection } from "./AnimatedSection";
import { BlogPost } from "@/types/blogs";
import classImg from "@/assets/class.jpg"; 
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "1",
      title: "EXTRA-CURRICULAR ACTIVITIES",
      excerpt: "Culinary, Public Speaking, Science and Mathematics, Arts and Crafts, Theatre/Drama , Dance, swimming. Each child chooses two clubs ",
      coverImage: enterImg,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "extra-curricular-activities",
      link: "/blog/extra-curricular-activities",
      color: "text-pink-500"
    },
    {
      id: "2",
      title: "PUNCTUALITY & ATTENDANCE",
      excerpt: "School opens at 7:30am daily. The gate closes at 8:00am. Parents should call early for unavoidable delays to prevent embarrassment at the gate.",
      coverImage: outsideImg,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "punctuality-attendance",
      link: "/blog/punctuality-attendance",
      color: "text-pink-500"
    },
    {
      id: "3",
      title: "HOME LESSONS POLICY",
      excerpt: "Teachers maintain professional relationships with parents. Private lessons require clearance from school management to protect integrity and effectiveness.",
      coverImage: classImg,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "home-lessons-policy",
      link: "/blog/home-lessons-policy",
      color: "text-pink-500"
    },
   {
      id: "4",
      title: "DIGITAL LITERACY IN EARLY YEARS",
      excerpt: "Equipping students with 21st-century skills. Our hybrid curriculum integrates safe technology use to foster innovation and future-readiness.",
      coverImage: enterImg, // Using your existing imported image
      author: "Admin",
      publishedAt: "2026-02-15",
      slug: "digital-literacy-early-years",
      link: "/blog/digital-literacy-early-years",
      color: "text-blue-500"
    },
    {
      id: "5",
      title: "NUTRITION & BRAIN DEVELOPMENT",
      excerpt: "A healthy body fuels a sharp mind. Explore our guidelines on balanced school meals and how they impact your child's concentration levels.",
      coverImage: teachersImg, // Using your existing imported image
      author: "School Nurse",
      publishedAt: "2026-03-05",
      slug: "nutrition-and-brain-development",
      link: "/blog/nutrition-and-brain-development",
      color: "text-green-500"
    },
    {
      id: "6",
      title: "THE POWER OF CREATIVE PLAY",
      excerpt: "Why we prioritize playground time. Learn how social interaction and physical activities build character and leadership from a young age.",
      coverImage: classImg, // Using your existing imported image
      author: "Admin",
      publishedAt: "2026-03-20",
      slug: "power-of-creative-play",
      link: "/blog/power-of-creative-play",
      color: "text-amber-500"
    },
  ];

  return (
    <section className="section-pink px-4 md:px-12 lg:px-24 py-12 md:py-24 overflow-hidden relative">
      <div className="absolute top-10 right-16 text-3xl animate-float-slow opacity-25 pointer-events-none">✏️</div>
      <div className="absolute bottom-16 left-10 text-2xl animate-bounce-gentle opacity-20 pointer-events-none">📝</div>
      <div className="absolute top-1/2 left-6 text-3xl animate-wiggle opacity-15 pointer-events-none">🎨</div>

      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-primary bg-white/70 px-3 py-1 rounded-full inline-block w-fit">
                📝 Blog & Updates
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

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <AnimatedSection key={post.id} delay={0.1 * i}>
              <BlogCard post={post} onPostClick={(p) => setSelectedPost(p)} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
