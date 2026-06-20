import { Link } from "react-router-dom";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import judoImg from "@/assets/SKYVIEW-IMAGES/judo.png";
import footballImg from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";
import computerLabImg from "@/assets/SKYVIEW-IMAGES/computer.png";
import schoolBuildingImg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import scienceCraftImg from "@/assets/SKYVIEW-IMAGES/SCIENCE.png";

const featuredTopics = [
  { title: "Learning Beyond The Classroom", description: "Explore our clubs, events and community stories that make learning rich and memorable.", tag: "Insight" },
  { title: "Wellness & Growth", description: "See how our programs support children's wellbeing, confidence, and purposeful discovery.", tag: "Balance" },
  { title: "Tech & Creativity", description: "A peek into our labs, digital learning, and creative studios that inspire future-ready thinkers.", tag: "Future" },
];

const latestNews = [
  { title: "New Academic Term Begins", excerpt: "Our new term begins with refreshed classrooms, updated learning stations, and increased outdoor play.", href: "/blog", tag: "Campus" },
  { title: "Parent-Teacher Meet", excerpt: "Join us for a morning of conversation, growth planning, and community connection.", href: "/about", tag: "Community" },
  { title: "School Sports Festival", excerpt: "A day of teamwork, friendly competitions, and celebration for every child.", href: "/admissions", tag: "Events" },
];

const calendarEvents: Record<number, string> = {
  3: "Orientation Day",
  12: "Science Fair",
  19: "Parent Day",
  27: "Holiday Celebration",
};

const posts = [
  {
    id: "1",
    title: "Judo & Character Development",
    excerpt: "Our judo program teaches discipline, confidence, respect, and self-control while promoting physical fitness.",
    content:
      "At Sky View, we believe physical education goes far beyond fitness. Our judo programme instils the values of discipline, mutual respect, self-control, and confidence in every student who steps onto the mat.\n\nChildren learn to set goals, accept defeat graciously, and celebrate victory humbly. These lessons transfer directly into the classroom and into life.",
    image: judoImg,
    author: "Sports Department",
    date: "Feb 1, 2026",
    tag: "Sports",
  },
  {
    id: "2",
    title: "Football Excellence",
    excerpt: "Through football training, students develop teamwork, leadership, sportsmanship, and healthy competition.",
    content:
      "Football is more than a sport at Sky View — it is a classroom without walls. Our football programme nurtures teamwork, communication, and strategic thinking while keeping students physically active and emotionally engaged.",
    image: footballImg,
    author: "Sports Department",
    date: "Feb 5, 2026",
    tag: "Sports",
  },
  {
    id: "3",
    title: "Digital Learning & Computer Skills",
    excerpt: "Our computer laboratory equips students with essential digital literacy and technology skills for the future.",
    content:
      "In today's rapidly evolving world, digital literacy is no longer optional — it is essential. Our fully equipped computer laboratory gives every student hands-on experience with modern technology in a structured, supervised environment.",
    image: computerLabImg,
    author: "ICT Department",
    date: "Feb 10, 2026",
    tag: "Technology",
  },
  {
    id: "4",
    title: "A Conducive Learning Environment",
    excerpt: "Our modern school facilities provide a safe, comfortable, and inspiring atmosphere for academic success.",
    content:
      "The environment in which a child learns matters enormously. At Sky View, we have invested thoughtfully in every space — from well-ventilated classrooms and organised library corners, to clean outdoor play areas and calm reading zones.",
    image: schoolBuildingImg,
    author: "School Admin",
    date: "Feb 15, 2026",
    tag: "Campus",
  },
  {
    id: "5",
    title: "Science, Creativity & Discovery",
    excerpt: "From science experiments to creative crafts and outdoor activities, students learn by exploring and creating.",
    content:
      "Curiosity is the engine of learning, and at Sky View we keep that engine running. Our science programme blends structured experiments with open-ended discovery, encouraging students to ask questions, make predictions, and observe results with wonder.",
    image: scienceCraftImg,
    author: "Academic Team",
    date: "Mar 5, 2026",
    tag: "Academics",
  },
];

const tagColors: Record<string, string> = {
  Sports: "#F4845F",
  Technology: "#6C63FF",
  Campus: "#4E9AF1",
  Academics: "#2DCE89",
  Community: "#4E9AF1",
  Events: "#F7B731",
  Insight: "#F4845F",
  Balance: "#2DCE89",
  Future: "#6C63FF",
};

export default function BlogPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .bl-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; overflow-x: hidden; }

        /* ── HERO ── */
        .bl-hero {
          background: #1A1A2E;
          padding: clamp(80px, 12vw, 120px) clamp(20px, 5vw, 60px) clamp(60px, 8vw, 80px);
          position: relative; overflow: hidden;
        }
        .bl-hero::before {
          content: 'JOURNAL';
          position: absolute;
          font-family: 'Fraunces', serif;
          font-size: clamp(18vw, 22vw, 22vw); font-weight: 900;
          color: #FAF8F505;
          bottom: -40px; right: -40px;
          line-height: 1; letter-spacing: -0.05em;
          pointer-events: none; user-select: none;
        }
        .bl-hero-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: end;
        }
        @media (max-width: 640px) {
          .bl-hero-grid { grid-template-columns: 1fr; gap: 28px; }
        }
        .bl-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          color: #F4845F; margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .bl-eyebrow::before { content: ''; display: block; width: 28px; height: 2px; background: #F4845F; flex-shrink: 0; }
        .bl-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.2rem, 6vw, 6rem);
          color: #FAF8F5; line-height: 1.05; font-weight: 300;
          margin: 0 0 16px;
        }
        .bl-hero-title em { font-style: italic; color: #F4845F; }
        .bl-hero-sub {
          color: #FAF8F566; font-size: clamp(13px, 1.5vw, 15px); line-height: 1.8;
          font-weight: 300; margin: 0;
        }

        /* ── NEWS + CALENDAR ── */
        .bl-news-cal {
          background: #1A1A2E;
          border-top: 1px solid #FAF8F510;
          padding: 0 clamp(20px, 5vw, 60px) clamp(48px, 6vw, 80px);
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(32px, 4vw, 48px);
          max-width: 100%;
        }
        @media (max-width: 900px) {
          .bl-news-cal { grid-template-columns: 1fr; }
        }
        .bl-news-section { padding-top: clamp(40px, 5vw, 60px); }
        .bl-news-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em;
          text-transform: uppercase; color: #F4845F; margin-bottom: 24px;
        }
        .bl-news-card {
          padding: clamp(16px, 2vw, 28px) 0;
          border-bottom: 1px solid #FAF8F510;
          display: flex; gap: 16px; align-items: flex-start;
        }
        .bl-news-card:last-child { border-bottom: none; }
        .bl-news-tag {
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px;
          background: #F4845F22; color: #F4845F; flex-shrink: 0; margin-top: 2px;
          white-space: nowrap;
        }
        .bl-news-title { font-family: 'Fraunces', serif; font-size: clamp(0.9rem, 2vw, 1.05rem); color: #FAF8F5; margin-bottom: 5px; font-weight: 400; }
        .bl-news-excerpt { font-size: 13px; color: #FAF8F566; line-height: 1.6; font-weight: 300; margin-bottom: 8px; }
        .bl-news-link { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #F4845F; text-decoration: none; }
        .bl-news-link:hover { text-decoration: underline; }

        /* Calendar */
        .bl-cal { padding-top: clamp(40px, 5vw, 60px); }
        .bl-cal-month { font-family: 'Fraunces', serif; font-size: clamp(1.2rem, 2vw, 1.5rem); color: #FAF8F5; font-weight: 300; }
        .bl-cal-year { font-size: 12px; color: #FAF8F544; font-weight: 300; margin-bottom: 20px; }
        .bl-cal-labels { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; margin-bottom: 3px; }
        .bl-cal-label { font-size: 9px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #FAF8F533; text-align: center; padding: 5px 0; }
        .bl-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
        .bl-cal-day {
          aspect-ratio: 1; background: #FAF8F506; border: 1px solid #FAF8F50a;
          border-radius: 4px; display: flex; flex-direction: column;
          align-items: flex-start; justify-content: flex-start;
          padding: 4px; position: relative; overflow: hidden;
        }
        .bl-cal-day.has-event { background: #F4845F15; border-color: #F4845F33; }
        .bl-cal-day-num { font-size: clamp(9px, 1.2vw, 11px); font-weight: 600; color: #FAF8F5; }
        .bl-cal-day.has-event .bl-cal-day-num { color: #F4845F; }
        .bl-cal-event-dot { width: 4px; height: 4px; border-radius: 50%; background: #F4845F; position: absolute; bottom: 4px; right: 4px; }

        /* ── FEATURED ── */
        .bl-featured { background: #FAF8F5; padding: clamp(48px, 8vw, 100px) clamp(20px, 5vw, 60px); overflow: hidden; }
        .bl-featured-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: clamp(28px, 4vw, 48px); gap: 20px; flex-wrap: wrap;
        }
        .bl-featured-title { font-family: 'Fraunces', serif; font-size: clamp(1.6rem, 4vw, 3rem); color: #1A1A2E; font-weight: 300; margin: 0; }
        .bl-featured-title em { font-style: italic; color: #F4845F; }
        .bl-featured-sub { font-size: 13px; color: #1A1A2E66; max-width: 260px; line-height: 1.6; font-weight: 300; }
        .bl-featured-card {
          background: #1A1A2E; border-radius: 8px;
          padding: clamp(28px, 4vw, 48px) clamp(20px, 3vw, 40px);
          height: 100%; display: flex; flex-direction: column; justify-content: space-between;
          min-height: 240px;
        }
        .bl-featured-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 5px 13px; border-radius: 100px; display: inline-block; margin-bottom: 20px;
        }
        .bl-featured-card-title { font-family: 'Fraunces', serif; font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: #FAF8F5; font-weight: 300; margin-bottom: 12px; line-height: 1.25; }
        .bl-featured-card-desc { font-size: 13px; color: #FAF8F566; line-height: 1.7; font-weight: 300; }

        /* Featured carousel nav buttons — mobile-safe */
        .bl-featured [data-slot="carousel-previous"],
        .bl-featured [data-slot="carousel-next"] {
          width: 40px; height: 40px;
        }

        /* ── POSTS ── */
        .bl-posts { padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px); }
        .bl-post-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #1A1A2E0c;
          margin-bottom: 4px;
          transition: box-shadow 0.3s;
        }
        .bl-post-card:hover { box-shadow: 0 16px 48px #1A1A2E14; }
        @media (max-width: 700px) {
          .bl-post-card { grid-template-columns: 1fr; }
          .bl-post-card.reversed { direction: ltr; }
        }
        .bl-post-card.reversed { direction: rtl; }
        .bl-post-card.reversed > * { direction: ltr; }

        .bl-post-img { height: clamp(200px, 30vw, 340px); overflow: hidden; }
        .bl-post-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .bl-post-card:hover .bl-post-img img { transform: scale(1.04); }

        .bl-post-body { padding: clamp(20px, 4vw, 48px); display: flex; flex-direction: column; justify-content: center; }
        .bl-post-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
        .bl-post-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 100px; }
        .bl-post-author { font-size: 12px; color: #1A1A2E66; font-weight: 500; }
        .bl-post-date { font-size: 12px; color: #1A1A2E44; font-weight: 300; }
        .bl-post-title { font-family: 'Fraunces', serif; font-size: clamp(1.1rem, 2.5vw, 1.5rem); color: #1A1A2E; font-weight: 400; margin-bottom: 12px; line-height: 1.2; }
        .bl-post-excerpt { font-size: 13px; color: #1A1A2E77; line-height: 1.7; font-weight: 300; margin-bottom: 8px; }
        .bl-post-content { font-size: 13px; color: #1A1A2E88; line-height: 1.8; font-weight: 300; white-space: pre-line; }

        /* ── BACK ── */
        .bl-back { padding: clamp(32px, 5vw, 60px) clamp(20px, 5vw, 60px); text-align: center; background: #FAF8F5; }
        .bl-btn-back {
          display: inline-flex; align-items: center; gap: 10px;
          background: #1A1A2E; color: #FAF8F5;
          padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px);
          border-radius: 4px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s;
        }
        .bl-btn-back:hover { background: #F4845F; }

        /* ════════════════════════════════
           RESPONSIVE — CAROUSEL & BUTTONS
        ════════════════════════════════ */

        /* Tablet */
        @media (max-width: 1024px) {
          .bl-news-cal { padding-bottom: 56px; }
        }

        /* Mobile — ≤ 768px */
        @media (max-width: 768px) {
          .bl-cal-grid { gap: 2px; }
          .bl-cal-day { padding: 3px; }

          /* featured carousel: shrink cards + nav buttons, keep arrows inside view */
          .bl-featured [data-slot="carousel-previous"],
          .bl-featured [data-slot="carousel-next"] {
            width: 34px; height: 34px;
          }
          .bl-featured [data-slot="carousel-previous"] { left: 4px !important; }
          .bl-featured [data-slot="carousel-next"] { right: 4px !important; }
          .bl-featured-card { min-height: 200px; padding: 24px 20px; }

          .bl-post-body { padding: 20px; }
        }

        /* Small mobile — ≤ 640px: carousel items take most of the width, full item peeking */
        @media (max-width: 640px) {
          [data-carousel-item] { flex: 0 0 85% !important; }
          .bl-cal-labels, .bl-cal-grid { gap: 2px; }
        }

        /* Very small — ≤ 420px */
        @media (max-width: 420px) {
          .bl-featured [data-slot="carousel-previous"],
          .bl-featured [data-slot="carousel-next"] {
            width: 30px; height: 30px;
          }
          .bl-cal-day-num { font-size: 8px; }
          .bl-post-title { font-size: 1.1rem; }
        }
      `}</style>

      <div className="bl-root">
        <Navbar />

        {/* HERO */}
        <section className="bl-hero">
          <div className="bl-hero-grid">
            <div>
              <div className="bl-eyebrow">Sky View Nursery, Primary &amp; Secondary — Learning Journal</div>
              <h1 className="bl-hero-title">
                Stories from<br />our <em>school</em><br />community
              </h1>
            </div>
            <div>
              <p className="bl-hero-sub">
                Thoughts, insights, and updates from our educators and staff — shared to support parents, inspire learning, and offer a closer look into life at Sky View.
              </p>
            </div>
          </div>
        </section>

        {/* NEWS + CALENDAR */}
        <section className="bl-news-cal">
          <div className="bl-news-section">
            <div className="bl-news-label">Latest Updates</div>
            {latestNews.map((item) => (
              <div key={item.title} className="bl-news-card">
                <div className="bl-news-tag" style={{ background: `${tagColors[item.tag] ?? "#F4845F"}22`, color: tagColors[item.tag] ?? "#F4845F" }}>
                  {item.tag}
                </div>
                <div>
                  <div className="bl-news-title">{item.title}</div>
                  <div className="bl-news-excerpt">{item.excerpt}</div>
                  <Link to={item.href} className="bl-news-link">Read More →</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bl-cal">
            <div className="bl-news-label">Academic Calendar</div>
            <div className="bl-cal-month">April Events</div>
            <div className="bl-cal-year">2026</div>
            <div className="bl-cal-labels">
              {["M","T","W","T","F","S","S"].map((d, i) => <div key={i} className="bl-cal-label">{d}</div>)}
            </div>
            <div className="bl-cal-grid">
              {Array.from({ length: 28 }).map((_, i) => {
                const day = i + 1;
                const event = calendarEvents[day];
                return (
                  <div key={day} className={`bl-cal-day${event ? " has-event" : ""}`}>
                    <span className="bl-cal-day-num">{day}</span>
                    {event && <span className="bl-cal-event-dot" />}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="bl-featured">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="bl-featured-header">
              <h2 className="bl-featured-title">Featured <em>topics</em></h2>
              <p className="bl-featured-sub">Curated stories and insights that define life at Sky View.</p>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredTopics.map((topic) => (
                  <CarouselItem key={topic.title} data-carousel-item style={{ paddingLeft: 16, flex: "0 0 min(45%, 320px)" }}>
                    <div className="bl-featured-card">
                      <div>
                        <div className="bl-featured-tag" style={{ background: `${tagColors[topic.tag] ?? "#F4845F"}22`, color: tagColors[topic.tag] ?? "#F4845F" }}>
                          {topic.tag}
                        </div>
                        <h3 className="bl-featured-card-title">{topic.title}</h3>
                        <p className="bl-featured-card-desc">{topic.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious data-slot="carousel-previous" style={{ background: "#1A1A2E", color: "#FAF8F5", border: "none" }} />
              <CarouselNext data-slot="carousel-next" style={{ background: "#1A1A2E", color: "#FAF8F5", border: "none" }} />
            </Carousel>
          </div>
        </section>

        {/* POSTS */}
        <section className="bl-posts">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="bl-eyebrow" style={{ color: "#1A1A2E55", marginBottom: 40 }}>
              <span style={{ background: "#1A1A2E55", width: 28, height: 2, display: "inline-block" }} />
              All Articles
            </div>
            {posts.map((post, i) => (
              <AnimatedSection key={post.id} delay={0.08 * i}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`bl-post-card${i % 2 === 1 ? " reversed" : ""}`}
                >
                  <div className="bl-post-img">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                  <div className="bl-post-body">
                    <div className="bl-post-meta">
                      <div className="bl-post-tag" style={{ background: `${tagColors[post.tag] ?? "#1A1A2E"}18`, color: tagColors[post.tag] ?? "#1A1A2E" }}>
                        {post.tag}
                      </div>
                      <span className="bl-post-author">{post.author}</span>
                      <span className="bl-post-date">{post.date}</span>
                    </div>
                    <h2 className="bl-post-title">{post.title}</h2>
                    <p className="bl-post-excerpt">{post.excerpt}</p>
                    <p className="bl-post-content">{post.content}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* BACK */}
        <div className="bl-back">
          <Link to="/" className="bl-btn-back">← Back to Home</Link>
        </div>

        <Footer />
      </div>
    </>
  );
}