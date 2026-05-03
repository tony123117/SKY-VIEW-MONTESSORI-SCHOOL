import { useState, useMemo } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/images/activities.jpg";
import img2 from "@/assets/images/544A7178.jpg.jpg";
import img3 from "@/assets/images/544A7188.jpg.jpg";
import img4 from "@/assets/images/544A7218.jpg.jpg";
import img5 from "@/assets/images/544A7241.jpg.jpg";
import img6 from "@/assets/images/544A7290.jpg.jpg";
import img7 from "@/assets/images/544A7328.jpg.jpg";
import img8 from "@/assets/images/544A7353.jpg.jpg";
import img9 from "@/assets/images/544A7364.jpg.jpg";
import playImg from "@/assets/images/play.jpg";
import creativeFun from "@/assets/images/creative.jpeg";
import studentsImg from "@/assets/images/students.jpg";
import kidsImg from "@/assets/images/kids.jpg";
import holdImg from "@/assets/images/hold.jpg";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  tall?: boolean;
}

const galleryImages: GalleryImage[] = [
  { id: "1", src: img1, title: "Classroom Learning", category: "academics", description: "Interactive classroom sessions", tall: true },
  { id: "2", src: img2, title: "Creative Workshop", category: "activities", description: "Children exploring creativity" },
  { id: "3", src: img3, title: "Outdoor Play", category: "facilities", description: "Safe and fun outdoor activities" },
  { id: "4", src: img4, title: "Team Building", category: "activities", description: "Collaborative learning experiences", tall: true },
  { id: "5", src: img5, title: "Class Activities", category: "academics", description: "Engaging class activities" },
  { id: "6", src: img6, title: "Student Engagement", category: "academics", description: "Passionate learning moments" },
  { id: "7", src: img7, title: "Sports & Recreation", category: "facilities", description: "Active playground activities", tall: true },
  { id: "8", src: img8, title: "Group Experience", category: "activities", description: "Together we grow stronger" },
  { id: "9", src: img9, title: "Classroom Moments", category: "academics", description: "Daily learning adventures" },
  { id: "10", src: playImg, title: "Playtime Fun", category: "facilities", description: "Creative outdoor play" },
  { id: "11", src: creativeFun, title: "Arts & Crafts", category: "activities", description: "Artistic expression", tall: true },
  { id: "12", src: studentsImg, title: "Student Life", category: "academics", description: "Life at Brain Child" },
  { id: "13", src: kidsImg, title: "Happy Kids", category: "activities", description: "Smiling at success" },
  { id: "14", src: holdImg, title: "Care & Support", category: "facilities", description: "Nurturing environment" },
];

const categories = [
  { value: "all", label: "All", count: galleryImages.length },
  { value: "academics", label: "Academics", count: galleryImages.filter(i => i.category === "academics").length },
  { value: "activities", label: "Activities", count: galleryImages.filter(i => i.category === "activities").length },
  { value: "facilities", label: "Facilities", count: galleryImages.filter(i => i.category === "facilities").length },
];

const catAccents: Record<string, string> = {
  academics: "#4E9AF1",
  activities: "#F4845F",
  facilities: "#2DCE89",
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

        .gl-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; }

        /* HERO */
        .gl-hero {
          background: #1A1A2E;
          padding: 100px 60px 72px;
          position: relative; overflow: hidden;
        }
        @media (max-width: 768px) { .gl-hero { padding: 80px 24px 56px; } }
        .gl-hero::before {
          content: 'GALLERY';
          position: absolute;
          font-family: 'Fraunces', serif;
          font-size: 20vw; font-weight: 900;
          color: #FAF8F504;
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
          color: #F4845F; margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
        }
        .gl-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: #F4845F; }
        .gl-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          color: #FAF8F5; font-weight: 300; line-height: 1.0;
          margin: 0;
        }
        .gl-hero-title em { font-style: italic; color: #F4845F; }
        .gl-hero-sub { font-size: 14px; color: #FAF8F555; font-weight: 300; max-width: 300px; line-height: 1.7; text-align: right; }
        @media (max-width: 640px) { .gl-hero-sub { text-align: left; } }

        /* FILTER BAR */
        .gl-filters {
          background: #FAF8F5;
          border-bottom: 1px solid #1A1A2E0c;
          padding: 24px 60px;
          position: sticky; top: 64px; z-index: 40;
        }
        @media (max-width: 768px) { .gl-filters { padding: 20px 24px; top: 56px; } }
        .gl-filters-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
        }

        .gl-search {
          flex: 1; min-width: 200px;
          background: #1A1A2E08;
          border: 1px solid #1A1A2E12;
          border-radius: 4px;
          padding: 11px 18px;
          font-size: 13px; font-weight: 300;
          color: #1A1A2E; font-family: 'DM Sans', sans-serif;
          outline: none; transition: all 0.2s;
        }
        .gl-search::placeholder { color: #1A1A2E55; }
        .gl-search:focus { border-color: #F4845F; background: white; }

        .gl-cat-tabs { display: flex; gap: 4px; }
        .gl-cat-btn {
          padding: 9px 20px; border-radius: 100px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.05em;
          border: 1px solid #1A1A2E15; background: transparent; color: #1A1A2E77;
          cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
          display: flex; align-items: center; gap: 7px;
        }
        .gl-cat-btn:hover { border-color: #F4845F; color: #F4845F; }
        .gl-cat-btn.active { background: #1A1A2E; color: #FAF8F5; border-color: #1A1A2E; }
        .gl-cat-count { font-size: 10px; opacity: 0.55; }

        .gl-results { font-size: 12px; color: #1A1A2E44; font-weight: 300; white-space: nowrap; }
        .gl-results strong { color: #F4845F; font-weight: 600; }

        /* GRID */
        .gl-grid-section { padding: 48px 60px 80px; }
        @media (max-width: 768px) { .gl-grid-section { padding: 32px 24px 60px; } }
        .gl-grid-inner { max-width: 1200px; margin: 0 auto; }

        .gl-masonry {
          columns: 3;
          column-gap: 12px;
        }
        @media (max-width: 900px) { .gl-masonry { columns: 2; } }
        @media (max-width: 560px) { .gl-masonry { columns: 1; } }

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
          background: linear-gradient(to top, #1A1A2Eee 0%, transparent 50%);
          opacity: 0; transition: opacity 0.3s;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 24px 20px;
        }
        .gl-item:hover .gl-item-overlay { opacity: 1; }
        .gl-item-cat {
          font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px; display: inline-block;
          margin-bottom: 8px; width: fit-content;
        }
        .gl-item-title { font-family: 'Fraunces', serif; font-size: 1rem; color: #FAF8F5; font-weight: 300; margin-bottom: 4px; }
        .gl-item-desc { font-size: 12px; color: #FAF8F577; font-weight: 300; }

        .gl-empty { text-align: center; padding: 80px 24px; }
        .gl-empty-title { font-family: 'Fraunces', serif; font-size: 2rem; color: #1A1A2E; font-weight: 300; margin-bottom: 12px; }
        .gl-empty-sub { font-size: 14px; color: #1A1A2E55; margin-bottom: 24px; }
        .gl-clear-btn { font-size: 13px; font-weight: 600; color: #F4845F; background: none; border: none; cursor: pointer; text-decoration: underline; font-family: 'DM Sans', sans-serif; }

        /* LIGHTBOX */
        .gl-lightbox {
          position: fixed; inset: 0; z-index: 100;
          background: #1A1A2Ef5;
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
          background: #FAF8F5;
          padding: 20px 28px;
          border-radius: 0 0 6px 6px;
          display: flex; align-items: center; gap: 16px;
        }
        .gl-lightbox-title { font-family: 'Fraunces', serif; font-size: 1.2rem; color: #1A1A2E; font-weight: 400; }
        .gl-lightbox-desc { font-size: 13px; color: #1A1A2E66; font-weight: 300; margin-top: 2px; }
        .gl-lightbox-close {
          position: absolute; top: -48px; right: 0;
          background: #FAF8F515; border: 1px solid #FAF8F530;
          color: #FAF8F5; width: 36px; height: 36px;
          border-radius: 50%; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
        }
        .gl-lightbox-close:hover { background: #FAF8F525; }
      `}</style>

      <div className="gl-root">
        <Navbar />

        {/* HERO */}
        <section className="gl-hero">
          <div className="gl-hero-inner">
            <div>
              <div className="gl-eyebrow">Visual Stories</div>
              <h1 className="gl-hero-title">Life at<br /><em>Brain Child</em></h1>
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
                      <img src={img.src} alt={img.title} loading="lazy" />
                      <div className="gl-item-overlay">
                        <div
                          className="gl-item-cat"
                          style={{
                            background: `${catAccents[img.category] || "#FAF8F5"}22`,
                            color: catAccents[img.category] || "#FAF8F5",
                            border: `1px solid ${catAccents[img.category] || "#FAF8F5"}44`,
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
                <img src={lightbox.src} alt={lightbox.title} className="gl-lightbox-img" />
                <div className="gl-lightbox-meta">
                  <div
                    style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: catAccents[lightbox.category] || "#F4845F",
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
                      color: catAccents[lightbox.category] || "#F4845F",
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