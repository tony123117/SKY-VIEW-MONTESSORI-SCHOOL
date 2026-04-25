import { useState } from "react";
import BlogModal from "./BlogModal";
import BrainButton from "./BrainButton";
import BlogGrid from "./BlogGrid";
import { AnimatedSection } from "./AnimatedSection";
import { BlogPost } from "@/types/blogs";

import creativeImg from "@/assets/creative.jpeg"; 
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";
import danceImg from "@/assets/dance.jpeg";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    { id: "1", title: "EXTRA-CURRICULAR ACTIVITIES", excerpt: "Culinary, Public Speaking, Science and Mathematics, Arts and Crafts, Theatre/Drama, Dance, swimming.", coverImage: enterImg, author: "Admins", publishedAt: "2026-02-01", slug: "extra-curricular-activities", link: "/blog" },
    { id: "2", title: "PUNCTUALITY & ATTENDANCE", excerpt: "School opens at 7:30am daily. The gate closes at 8:00am.", coverImage: outsideImg, author: "Admin", publishedAt: "2026-02-01", slug: "punctuality-attendance", link: "/blog" },
    { id: "3", title: "HOME LESSONS POLICY", excerpt: "Teachers maintain professional relationships with parents.", coverImage: creativeImg, author: "Admin", publishedAt: "2026-02-01", slug: "home-lessons-policy", link: "/blog" },
    { id: "4", title: "DIGITAL LITERACY", excerpt: "Equipping students with 21st-century skills.", coverImage: enterImg, author: "Admin", publishedAt: "2026-02-15", slug: "digital-literacy", link: "/blog" },
    { id: "5", title: "NUTRITION", excerpt: "A healthy body fuels a sharp mind.", coverImage: teachersImg, author: "Nurse", publishedAt: "2026-03-05", slug: "nutrition", link: "/blog" },
    { id: "6", title: "CREATIVE PLAY", excerpt: "Learn how social interaction builds character.", coverImage: danceImg, author: "Teacher", publishedAt: "2026-03-20", slug: "creative-play", link: "/blog" },
  ];

  return (
    <section className="bg-[#FFF5F7] px-6 md:px-12 lg:px-24 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-10 right-[-5%] text-[20vw] font-black text-primary/5 select-none leading-none pointer-events-none italic">
        Journal
      </div>
      <div className="max-w-[1400px] mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[11px] font-black tracking-[0.4em] uppercase text-primary mb-4 block">Insights & Updates</span>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-slate-900 tracking-tight leading-[0.9]">
                Inside Our <br /> <span className="text-primary italic font-light">Learning Journal.</span>
              </h2>
            </div>
            <BrainButton variant="primary" className="rounded-full px-10 py-6 shadow-xl">View All Stories</BrainButton>
          </div>
        </AnimatedSection>
        <BlogGrid posts={posts} onPostClick={setSelectedPost} />
      </div>
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}