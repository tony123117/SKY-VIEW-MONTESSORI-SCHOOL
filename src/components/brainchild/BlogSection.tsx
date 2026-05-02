import { useState } from "react";
import BlogModal from "./BlogModal";
import BrainButton from "./BrainButton";
import BlogGrid from "./BlogGrid";
import { AnimatedSection } from "./AnimatedSection";
import { BlogPost } from "@/types/blogs";
import activitiesImg from '@/assets/images/activities.jpg'
import fruitsImg from '@/assets/images/students.jpg'
import computerImg from "@/assets/images/computer.jpeg";

import outsideImg from "@/assets/images/assembly.jpg";
import curriculumImg from "@/assets/images/curiculum.jpg";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Extra-Curricular Activities",
      excerpt: "From culinary arts to drama and swimming, our programs help children explore talents beyond the classroom.",
      coverImage: activitiesImg,
      author: "School Admin",
      publishedAt: "2026-02-01",
      slug: "extra-curricular-activities",
      link: "/blog",
    },
    {
      id: "2",
      title: "Punctuality & Attendance",
      excerpt: "Our school day begins at 7:30am, with gates closing at 8:00am to encourage discipline and structure.",
      coverImage: outsideImg,
      author: "School Admin",
      publishedAt: "2026-02-01",
      slug: "punctuality-attendance",
      link: "/blog",
    },
    {
      id: "3",
      title: "Academic Excellence",
      excerpt: "We combine strong academic foundations with modern teaching methods to help every child thrive.",
      coverImage: curriculumImg,
      author: "Academic Team",
      publishedAt: "2026-02-10",
      slug: "academic-excellence",
      link: "/blog",
    },
    {
      id: "4",
      title: "Digital Literacy",
      excerpt: "Preparing students with essential 21st-century technology skills in a guided learning environment.",
      coverImage: computerImg,
      author: "ICT Department",
      publishedAt: "2026-02-15",
      slug: "digital-literacy",
      link: "/blog",
    },
    {
      id: "5",
      title: "Nutrition & Wellbeing",
      excerpt: "A balanced diet supports focus, growth, and overall student wellbeing in and out of school.",
      coverImage: fruitsImg,
      author: "School Nurse",
      publishedAt: "2026-03-05",
      slug: "nutrition",
      link: "/blog",
    },
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