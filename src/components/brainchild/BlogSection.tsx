import { useState } from "react";
import BlogModal from "./BlogModal";
import BrainButton from "./BrainButton";
import BlogGrid from "./BlogGrid";
import { AnimatedSection } from "./AnimatedSection";
import { BlogPost } from "@/types/blogs";
import judoImg  from '@/assets/skyview-images/judo.png';
import footballImg     from '@/assets/skyview-images/football.png';
import computerLabImg    from "@/assets/skyview-images/computer.png";
import schoolBuildingImg    from "@/assets/skyview-images/building.jpeg";
import scienceCraftImg  from "@/assets/skyview-images/science.png";



export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
  {
    id: "1",
    title: "Judo & Character Development",
    excerpt: "Our judo program teaches discipline, confidence, respect, and self-control while promoting physical fitness.",
    coverImage: judoImg,
    author: "Sports Department",
    publishedAt: "2026-02-01",
    slug: "judo-character-development",
    link: "/blog",
  },
  {
    id: "2",
    title: "Football Excellence",
    excerpt: "Through football training, students develop teamwork, leadership, sportsmanship, and healthy competition.",
    coverImage: footballImg,
    author: "Sports Department",
    publishedAt: "2026-02-05",
    slug: "football-excellence",
    link: "/blog",
  },
  {
    id: "3",
    title: "Digital Learning & Computer Skills",
    excerpt: "Our computer laboratory equips students with essential digital literacy and technology skills for the future.",
    coverImage: computerLabImg,
    author: "ICT Department",
    publishedAt: "2026-02-10",
    slug: "digital-learning",
    link: "/blog",
  },
  {
    id: "4",
    title: "A Conducive Learning Environment",
    excerpt: "Our modern school facilities provide a safe, comfortable, and inspiring atmosphere for academic success.",
    coverImage: schoolBuildingImg,
    author: "School Admin",
    publishedAt: "2026-02-15",
    slug: "learning-environment",
    link: "/blog",
  },
  {
    id: "5",
    title: "Science, Creativity & Discovery",
    excerpt: "From science experiments to creative crafts and outdoor activities, students learn by exploring and creating.",
    coverImage: scienceCraftImg,
    author: "Academic Team",
    publishedAt: "2026-03-05",
    slug: "science-creativity-discovery",
    link: "/blog",
  },
];

  return (
    <section
      className="relative py-24 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#F8F4F6' }}
    >
      {/* Subtle background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 80% 20%, rgba(74,158,219,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Doodle accent — right margin rule */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[3px] pointer-events-none opacity-20"
        style={{
          background:
            'repeating-linear-gradient(180deg, #4A9EDB 0px, #4A9EDB 8px, transparent 8px, transparent 18px)',
        }}
      />
      {/* Corner watermark */}
      <span
        className="absolute bottom-8 left-8 select-none pointer-events-none opacity-[0.07] text-lg font-bold rotate-[-6deg]"
        style={{ fontFamily: "'Schoolbell', cursive", color: '#9B1C2C' }}
      >
        📖 Read
      </span>

      <div className="relative max-w-[1400px] mx-auto">

        {/* HEADER */}
        <AnimatedSection className="mb-14 md:mb-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px] rounded-full" style={{ backgroundColor: '#4A9EDB' }} />
                <span
                  className="text-[11px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: '#2E7EB8', fontFamily: 'var(--font-body)' }}
                >
                  Insights & Updates
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-[1.1]"
                style={{ fontFamily: 'var(--font-heading)', color: '#1F1F1F' }}
              >
                Inside our{' '}
                <span className="italic font-light" style={{ color: '#9B1C2C' }}>
                  learning journal
                </span>
              </h2>
            </div>

            <BrainButton
              variant="primary"
              className="self-start md:self-end rounded-xl px-8 py-4 text-[11px] font-bold tracking-widest uppercase shrink-0"
            >
              View All Stories
            </BrainButton>
          </div>

          <div className="mt-8 h-[1px] w-full" style={{ backgroundColor: '#E5DDE0' }} />
        </AnimatedSection>

        {/* BLOG GRID */}
        <BlogGrid posts={posts} onPostClick={setSelectedPost} />

      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}