import { useState, useMemo } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { motion, AnimatePresence } from "framer-motion";
import getResponsiveSrc from '@/lib/image';

import blocksimg from "@/assets/SKYVIEW-IMAGES/building-blocks.jpeg";
import bluildingimg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import computerLabImg from "@/assets/SKYVIEW-IMAGES/computer.png";
import craftImg from "@/assets/SKYVIEW-IMAGES/craft.jpeg";
import directorImg from "@/assets/SKYVIEW-IMAGES/director.png";
import footballImg from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";
import judoimg from "@/assets/SKYVIEW-IMAGES/judo.png";
import musicImg from "@/assets/SKYVIEW-IMAGES/music.png";
import playgroundimg from "@/assets/SKYVIEW-IMAGES/playground.png";
import scienceImg from "@/assets/SKYVIEW-IMAGES/SCIENCE.png";
import swimmingImg from "@/assets/SKYVIEW-IMAGES/swimming.jpeg";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  tall?: boolean;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: bluildingimg,
    title: "School Building",
    category: "facilities",
    description: "A conducive environment designed for learning and growth",
    tall: true,
  },
  {
    id: "2",
    src: computerLabImg,
    title: "Computer Laboratory",
    category: "academics",
    description: "Equipping students with essential digital skills",
  },
  {
    id: "3",
    src: scienceImg,
    title: "Science Discovery",
    category: "academics",
    description: "Hands-on experiments that spark curiosity and innovation",
  },
  {
    id: "4",
    src: footballImg,
    title: "Football Training",
    category: "activities",
    description: "Developing teamwork, fitness, and sportsmanship",
    tall: true,
  },
  {
    id: "5",
    src: judoimg,
    title: "Judo Classes",
    category: "activities",
    description: "Building discipline, confidence, and self-control",
  },
  {
    id: "6",
    src: swimmingImg,
    title: "Swimming Lessons",
    category: "activities",
    description: "Teaching water safety and swimming skills",
  },
  {
    id: "7",
    src: playgroundimg,
    title: "Playground Activities",
    category: "facilities",
    description: "Safe and engaging outdoor recreation",
    tall: true,
  },
  {
    id: "8",
    src: craftImg,
    title: "Arts & Crafts",
    category: "activities",
    description: "Encouraging creativity and self-expression",
  },
  {
    id: "9",
    src: musicImg,
    title: "Music Education",
    category: "activities",
    description: "Nurturing talent through music and performance",
  },
  {
    id: "10",
    src: blocksimg,
    title: "Building Blocks Learning",
    category: "academics",
    description: "Developing problem-solving and motor skills through play",
  },
  {
    id: "11",
    src: directorImg,
    title: "School Leadership",
    category: "facilities",
    description: "Dedicated leadership committed to academic excellence",
    tall: true,
  },
  {
    id: "12",
    src: bluildingimg,
    title: "Campus View",
    category: "facilities",
    description: "A welcoming campus that inspires learning",
  },
];

const categories = [
  { value: "all", label: "All", count: galleryImages.length },
  { value: "academics", label: "Academics", count: galleryImages.filter(i => i.category === "academics").length },
  { value: "activities", label: "Activities", count: galleryImages.filter(i => i.category === "activities").length },
  { value: "facilities", label: "Facilities", count: galleryImages.filter(i => i.category === "facilities").length },
];

const catAccents: Record<string, string> = {
  academics: "#4A9EDB",
  activities: "#9B1C2C",
  facilities: "#FF6B9D",
};

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = useMemo(() => {
    return galleryImages.filter((img) => {
      const matchSearch = img.title.toLowerCase().includes(search.toLowerCase()) ||
        img.description.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCategory === "all" || img.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .gl-root { font-family: 'DM Sans', sans-serif; background: #FFF6F8; color: #5A1018; }

        /* HERO */
        .gl-hero {
          background: #3D0B11;
          padding: 100px 60px 72px;
          position: relative; overflow: hidden;
        }
        .gl-hero::before {
          content: 'GALLERY';
          position: absolute;
          font-family: 'Fraunces', serif;
          font-size: 20vw; font-weight: 900;
          color: #FFF6F804;
          bottom: -30px; right: -20px;
          line-height: 1; letter-spacing: -0.05em;
          pointer-events: none; user-select: none;
        }
        .gl-hero-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: flex-end; gap: 40px;
          flex-wrap: wrap; position: relative; z-index: 1;
        }
        .gl-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;
          color: #FF6B9D; margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
        }
        .gl-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: #FF6B9D; flex-shrink: 0; }
        .gl-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.2rem, 6vw, 5.5rem);
          color: #FFF6F8; font-weight: 300; line-height: 1.05;
          margin: 0; word-break: break-word;
        }
        .gl-hero-title em { font-style: italic; color: #FF6B9D; }
        .gl-hero-sub { font-size: 13px; color: #FFF6F855; font-weight: 300; max-width: 300px; line-height: 1.7; text-align: right; }

        @media (max-width: 768px) {
          .gl-hero { padding: 76px 24px 52px; }
          .gl-hero-sub { text-align: left; max-width: 100%; }
        }
        @media (max-width: 480px) {
          .gl-hero { padding: 64px 18px 44px; }
          .gl-hero-title { font-size: clamp(1.9rem, 9vw, 2.6rem); }
        }

        /* FILTER BAR */
        .gl-filters {
          background: #FFFFFF;
          border: 1px solid #5A10180c;
          border-radius: 18px;
          box-shadow: 0 20px 48px rgba(90, 16, 24, 0.1);
          padding: 22px 32px;
          max-width: 1200px;
          margin: -44px auto 0;
          position: relative; z-index: 40;
        }
        .gl-filters-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
        }

        .gl-search {
          flex: 1; min-width: 180px;
          background: #5A101808;
          border: 1px solid #5A101812;
          border-radius: 999px;
          padding: 11px 18px;
          font-size: 13px; font-weight: 300;
          color: #5A1018; font-family: 'DM Sans', sans-serif;
          outline: none; transition: all 0.2s;
          box-sizing: border-box;
        }
        .gl-search::placeholder { color: #5A101855; }
        .gl-search:focus { border-color: #2E7EB8; background: white; }

        .gl-cat-tabs {
          display: flex; gap: 4px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          max-width: 100%;
        }
        .gl-cat-tabs::-webkit-scrollbar { display: none; }
        .gl-cat-btn {
          padding: 9px 18px; border-radius: 100px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.05em;
          border: 1px solid #5A101815; background: transparent; color: #5A101877;
          cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
          display: flex; align-items: center; gap: 7px;
          white-space: nowrap; flex-shrink: 0;
        }
        .gl-cat-btn:hover { border-color: #9B1C2C; color: #9B1C2C; }
        .gl-cat-btn.active { background: #2E7EB8; color: #FFFFFF; border-color: #2E7EB8; }
        .gl-cat-count { font-size: 10px; opacity: 0.55; }

        .gl-results { font-size: 12px; color: #5A101844; font-weight: 300; white-space: nowrap; }
        .gl-results strong { color: #9B1C2C; font-weight: 600; }

        @media (max-width: 900px) {
          .gl-filters { margin: -32px 16px 0; padding: 18px 18px; border-radius: 16px; }
          .gl-filters-inner { gap: 14px; }
        }
        @media (max-width: 640px) {
          .gl-filters-inner { flex-direction: column; align-items: stretch; }
          .gl-search { width: 100%; min-width: 0; order: 1; }
          .gl-cat-tabs { order: 2; width: 100%; }
          .gl-results { order: 3; text-align: center; }
        }

        /* GRID */
        .gl-grid-section { padding: 48px 60px 80px; }
        .gl-grid-inner { max-width: 1200px; margin: 0 auto; }

        .gl-masonry {
          columns: 3;
          column-gap: 12px;
        }
        @media (max-width: 900px) { .gl-masonry { columns: 2; } }
        @media (max-width: 560px) { .gl-masonry { columns: 1; } }

        @media (max-width: 768px) { .gl-grid-section { padding: 32px 24px 56px; } }
        @media (max-width: 480px) { .gl-grid-section { padding: 24px 16px 48px; } }

        .gl-item {
          break-inside: avoid;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border-radius: 6px;
        }
        .gl-item img {
          width: 100%; display: block;
          transition: transform 0.5s ease;
        }
        .gl-item:hover img { transform: scale(1.05); }

        .gl-item-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, #5A1018ee 0%, transparent 50%);
          opacity: 0; transition: opacity 0.3s;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 24px 20px;
        }
        .gl-item:hover .gl-item-overlay { opacity: 1; }
        /* Always show overlay on touch devices since there's no hover */
        @media (hover: none) {
          .gl-item-overlay {
            opacity: 1;
            background: linear-gradient(to top, #5A1018e0 0%, transparent 65%);
            padding: 16px 14px;
          }
        }
        .gl-item-cat {
          font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px; display: inline-block;
          margin-bottom: 8px; width: fit-content;
        }
        .gl-item-title { font-family: 'Fraunces', serif; font-size: 1rem; color: #FFF6F8; font-weight: 300; margin-bottom: 4px; }
        .gl-item-desc { font-size: 12px; color: #FFF6F877; font-weight: 300; }
        @media (max-width: 480px) {
          .gl-item-title { font-size: 0.9rem; }
          .gl-item-desc { font-size: 11px; }
        }

        .gl-empty { text-align: center; padding: 80px 24px; }
        .gl-empty-title { font-family: 'Fraunces', serif; font-size: 2rem; color: #5A1018; font-weight: 300; margin-bottom: 12px; }
        .gl-empty-sub { font-size: 14px; color: #5A101855; margin-bottom: 24px; }
        .gl-clear-btn { font-size: 13px; font-weight: 600; color: #9B1C2C; background: none; border: none; cursor: pointer; text-decoration: underline; font-family: 'DM Sans', sans-serif; }
        @media (max-width: 480px) { .gl-empty { padding: 56px 16px; } }

        /* LIGHTBOX */
        .gl-lightbox {
          position: fixed; inset: 0; z-index: 100;
          background: #5A1018f5;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          backdrop-filter: blur(8px);
        }
        .gl-lightbox-inner {
          max-width: 900px; width: 100%;
          max-height: 90vh;
          display: flex; flex-direction: column;
          position: relative;
        }
        .gl-lightbox-img {
          flex: 1; min-height: 0;
          object-fit: contain;
          border-radius: 6px 6px 0 0;
          max-height: 72vh;
          width: 100%;
        }
        .gl-lightbox-meta {
          background: #FFF6F8;
          padding: 20px 28px;
          border-radius: 0 0 6px 6px;
          display: flex; align-items: center; gap: 16px;
          flex-wrap: wrap;
        }
        .gl-lightbox-title { font-family: 'Fraunces', serif; font-size: 1.2rem; color: #5A1018; font-weight: 400; }
        .gl-lightbox-desc { font-size: 13px; color: #5A101866; font-weight: 300; margin-top: 2px; }
        .gl-lightbox-close {
          position: absolute; top: -48px; right: 0;
          background: #FFF6F815; border: 1px solid #FFF6F830;
          color: #FFF6F8; width: 36px; height: 36px;
          border-radius: 50%; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
        }
        .gl-lightbox-close:hover { background: #FFF6F825; }

        @media (max-width: 640px) {
          .gl-lightbox { padding: 14px; }
          .gl-lightbox-close { top: -42px; width: 32px; height: 32px; font-size: 12px; }
          .gl-lightbox-meta { padding: 16px 18px; gap: 10px; }
          .gl-lightbox-title { font-size: 1rem; }
          .gl-lightbox-desc { font-size: 12px; }
          .gl-lightbox-img { max-height: 62vh; }
        }
      `}</style>

      <div className="gl-root">
        <Navbar />

        {/* HERO */}
        <section className="gl-hero">
          <div className="gl-hero-inner">
            <div>
              <div className="gl-eyebrow">Visual Stories</div>
              <h1 className="gl-hero-title">Life at<br /><em>Brain Child International School</em></h1>
            </div>
            <p className="gl-hero-sub">
              A window into the moments, milestones, and everyday magic that make our school extraordinary.
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <div className="gl-filters">
          <div className="gl-filters-inner">
            <input
              type="text"
              className="gl-search"
              placeholder="Search photos…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="gl-cat-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`gl-cat-btn${selectedCategory === cat.value ? " active" : ""}`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                  <span className="gl-cat-count">{cat.count}</span>
                </button>
              ))}
            </div>
            <span className="gl-results">
              <strong>{filtered.length}</strong> of {galleryImages.length}
            </span>
          </div>
        </div>

        {/* GALLERY */}
        <section className="gl-grid-section">
          <div className="gl-grid-inner">
            {filtered.length > 0 ? (
              <motion.div
                className="gl-masonry"
                layout
              >
                <AnimatePresence>
                  {filtered.map((img) => (
                    <motion.div
                      key={img.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.3 }}
                      className="gl-item"
                      onClick={() => setLightbox(img)}
                    >
                      <img src={getResponsiveSrc(img.src)} alt={img.title} loading="lazy" />
                      <div className="gl-item-overlay">
                        <div
                          className="gl-item-cat"
                          style={{
                            background: `${catAccents[img.category] || "#FFF6F8"}22`,
                            color: catAccents[img.category] || "#FFF6F8",
                            border: `1px solid ${catAccents[img.category] || "#FFF6F8"}44`,
                          }}
                        >
                          {img.category}
                        </div>
                        <div className="gl-item-title">{img.title}</div>
                        <div className="gl-item-desc">{img.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="gl-empty">
                <div className="gl-empty-title">No photos found</div>
                <div className="gl-empty-sub">Try adjusting your search or filter</div>
                <button className="gl-clear-btn" onClick={() => { setSearch(""); setSelectedCategory("all"); }}>
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="gl-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                className="gl-lightbox-inner"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="gl-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
                <img src={getResponsiveSrc(lightbox.src)} alt={lightbox.title} className="gl-lightbox-img" />
                <div className="gl-lightbox-meta">
                  <div
                    style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: catAccents[lightbox.category] || "#9B1C2C",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div className="gl-lightbox-title">{lightbox.title}</div>
                    <div className="gl-lightbox-desc">{lightbox.description}</div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto", fontSize: 11, fontWeight: 600,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: catAccents[lightbox.category] || "#9B1C2C",
                    }}
                  >
                    {lightbox.category}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}