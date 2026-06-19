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

// ── Images from BlogSection ──────────────────────────────────────────────────
import judoImg         from "@/assets/skyview-images/judo.png";
import footballImg     from "@/assets/skyview-images/football.png";
import computerLabImg  from "@/assets/skyview-images/computer.png";
import schoolBuildingImg from "@/assets/skyview-images/building.jpeg";
import scienceCraftImg from "@/assets/skyview-images/science.png";

// ────────────────────────────────────────────────────────────────────────────

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

// ── Posts — same stories & images as BlogSection ─────────────────────────────
const posts = [
  {
    id: "1",
    title: "Judo & Character Development",
    excerpt: "Our judo program teaches discipline, confidence, respect, and self-control while promoting physical fitness.",
    content:
      "At Sky View, we believe physical education goes far beyond fitness. Our judo programme instils the values of discipline, mutual respect, self-control, and confidence in every student who steps onto the mat.\n\nChildren learn to set goals, accept defeat graciously, and celebrate victory humbly. These lessons transfer directly into the classroom and into life. Whether a student becomes a competitive martial artist or simply a more grounded individual, judo at Sky View shapes character from the inside out.",
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
      "Football is more than a sport at Sky View — it is a classroom without walls. Our football programme nurtures teamwork, communication, and strategic thinking while keeping students physically active and emotionally engaged.\n\nStudents participate in inter-house competitions, inter-school fixtures, and skills training sessions that bring out the best in every player. Whether or not they pursue football professionally, the lessons of persistence and collective effort stay with them forever.",
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
      "In today's rapidly evolving world, digital literacy is no longer optional — it is essential. Our fully equipped computer laboratory gives every student hands-on experience with modern technology in a structured, supervised environment.\n\nFrom basic computing and typing skills in the early years, to research techniques, creative software, and introductory coding in higher classes, our ICT curriculum grows with each child. We prepare students not just to use technology, but to think critically about how and why they use it.",
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
      "The environment in which a child learns matters enormously. At Sky View, we have invested thoughtfully in every space — from well-ventilated classrooms and organised library corners, to clean outdoor play areas and calm reading zones.\n\nOur facilities are designed to reduce distraction, encourage focus, and inspire creativity. When children feel safe, comfortable, and proud of their school environment, they show up ready to learn. We continually upgrade and maintain our spaces to ensure Sky View remains a place where excellence feels natural.",
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
      "Curiosity is the engine of learning, and at Sky View we keep that engine running. Our science programme blends structured experiments with open-ended discovery, encouraging students to ask questions, make predictions, and observe results with wonder.\n\nBeyond the lab, creativity is woven into every subject — through art projects, drama, storytelling, and hands-on craft activities. These experiences develop the whole child: curious, expressive, analytical, and confident. Science and creativity are not separate worlds at Sky View — they grow together.",
    image: scienceCraftImg,
    author: "Academic Team",
    date: "Mar 5, 2026",
    tag: "Academics",
  },
];

const tagColors: Record<string, string> = {
  Sports:     "#F4845F",
  Technology: "#6C63FF",
  Campus:     "#4E9AF1",
  Academics:  "#2DCE89",
  Enrichment: "#F4845F",
  Policies:   "#4E9AF1",
  Wellness:   "#2DCE89",
  Development:"#F7B731",
  Community:  "#4E9AF1",
  Insight:    "#F4845F",
  Balance:    "#2DCE89",
  Future:     "#6C63FF",
};

export default function BlogPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .bl-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; }

        /* HERO */
        .bl-hero {
          background: #1A1A2E;
          padding: 120px 60px 80px;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) { .bl-hero { padding: 80px 24px 60px; } }
        .bl-hero::before {
          content: 'JOURNAL';
          position: absolute;
          font-family: 'Fraunces', serif;
          font-size: 22vw; font-weight: 900;
          color: #FAF8F505;
          bottom: -40px; right: -40px;
          line-height: 1; letter-spacing: -0.05em;
          pointer-events: none; user-select: none;
        }
        .bl-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;
          color: #F4845F; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .bl-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: #F4845F; }
        .bl-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(3rem, 6vw, 6rem);
          color: #FAF8F5; line-height: 1.0; font-weight: 300;
          max-width: 800px; margin-bottom: 32px;
        }
        .bl-hero-title em { font-style: italic; color: #F4845F; }
        .bl-hero-sub {
          color: #FAF8F566; font-size: 15px; line-height: 1.8;
          max-width: 520px; font-weight: 300;
        }
        .bl-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
        }
        @media (max-width: 768px) { .bl-hero-grid { grid-template-columns: 1fr; gap: 40px; } }

        /* NEWS + CALENDAR */
        .bl-news-cal {
          background: #1A1A2E;
          border-top: 1px solid #FAF8F510;
          padding: 0 60px 80px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 48px;
        }
        @media (max-width: 1024px) { .bl-news-cal { grid-template-columns: 1fr; padding: 0 24px 60px; } }

        .bl-news-section { padding-top: 60px; }
        .bl-news-label { font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: #F4845F; margin-bottom: 32px; }
        .bl-news-card {
          padding: 28px 0;
          border-bottom: 1px solid #FAF8F510;
          display: flex; gap: 20px; align-items: flex-start;
          transition: all 0.2s;
        }
        .bl-news-card:last-child { border-bottom: none; }
        .bl-news-tag {
          font-size: 10px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 100px;
          background: #F4845F22; color: #F4845F; flex-shrink: 0; margin-top: 3px;
          white-space: nowrap;
        }
        .bl-news-title { font-family: 'Fraunces', serif; font-size: 1.05rem; color: #FAF8F5; margin-bottom: 6px; font-weight: 400; }
        .bl-news-excerpt { font-size: 13px; color: #FAF8F566; line-height: 1.6; font-weight: 300; margin-bottom: 10px; }
        .bl-news-link { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #F4845F; text-decoration: none; }
        .bl-news-link:hover { text-decoration: underline; }

        /* Calendar */
        .bl-cal { padding-top: 60px; }
        .bl-cal-header { margin-bottom: 28px; }
        .bl-cal-month { font-family: 'Fraunces', serif; font-size: 1.5rem; color: #FAF8F5; font-weight: 300; }
        .bl-cal-year { font-size: 12px; color: #FAF8F544; font-weight: 300; }
        .bl-cal-labels {
          display: grid; grid-template-columns: repeat(7, 1fr);
          gap: 3px; margin-bottom: 3px;
        }
        .bl-cal-label { font-size: 9px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #FAF8F533; text-align: center; padding: 6px 0; }
        .bl-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
        .bl-cal-day {
          aspect-ratio: 1;
          background: #FAF8F506;
          border: 1px solid #FAF8F50a;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 6px;
          position: relative;
          overflow: hidden;
        }
        .bl-cal-day.has-event { background: #F4845F15; border-color: #F4845F33; }
        .bl-cal-day-num { font-size: 11px; font-weight: 600; color: #FAF8F5; }
        .bl-cal-day.has-event .bl-cal-day-num { color: #F4845F; }
        .bl-cal-event-dot {
          width: 4px; height: 4px; border-radius: 50%; background: #F4845F;
          position: absolute; bottom: 5px; right: 5px;
        }

        /* FEATURED SECTION */
        .bl-featured {
          background: #FAF8F5;
          padding: 100px 60px;
        }
        @media (max-width: 768px) { .bl-featured { padding: 60px 24px; } }
        .bl-featured-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; gap: 24px; flex-wrap: wrap; }
        .bl-featured-title { font-family: 'Fraunces', serif; font-size: clamp(2rem, 3.5vw, 3rem); color: #1A1A2E; font-weight: 300; }
        .bl-featured-title em { font-style: italic; color: #F4845F; }
        .bl-featured-sub { font-size: 14px; color: #1A1A2E66; max-width: 280px; line-height: 1.6; font-weight: 300; }

        .bl-featured-card {
          background: #1A1A2E;
          border-radius: 8px;
          padding: 48px 40px;
          height: 100%;
          display: flex; flex-direction: column; justify-content: space-between;
          min-height: 280px;
        }
        .bl-featured-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; padding: 5px 14px; border-radius: 100px; display: inline-block; margin-bottom: 24px; }
        .bl-featured-card-title { font-family: 'Fraunces', serif; font-size: 1.4rem; color: #FAF8F5; font-weight: 300; margin-bottom: 16px; line-height: 1.2; }
        .bl-featured-card-desc { font-size: 13.5px; color: #FAF8F566; line-height: 1.7; font-weight: 300; }

        /* POSTS */
        .bl-posts { padding: 80px 60px; }
        @media (max-width: 768px) { .bl-posts { padding: 40px 24px; } }

        .bl-post-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #1A1A2E0c;
          margin-bottom: 3px;
          transition: box-shadow 0.3s;
        }
        .bl-post-card:hover { box-shadow: 0 20px 60px #1A1A2E14; }
        @media (max-width: 768px) { .bl-post-card { grid-template-columns: 1fr; } }
        .bl-post-card.reversed { direction: rtl; }
        .bl-post-card.reversed > * { direction: ltr; }

        .bl-post-img { height: 340px; overflow: hidden; }
        .bl-post-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .bl-post-card:hover .bl-post-img img { transform: scale(1.04); }
        @media (max-width: 768px) { .bl-post-img { height: 220px; } }

        .bl-post-body { padding: 48px; display: flex; flex-direction: column; justify-content: center; }
        @media (max-width: 768px) { .bl-post-body { padding: 28px; } }
        .bl-post-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
        .bl-post-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; }
        .bl-post-author { font-size: 12px; color: #1A1A2E66; font-weight: 500; }
        .bl-post-date { font-size: 12px; color: #1A1A2E44; font-weight: 300; }
        .bl-post-title { font-family: 'Fraunces', serif; font-size: 1.5rem; color: #1A1A2E; font-weight: 400; margin-bottom: 16px; line-height: 1.2; }
        .bl-post-excerpt { font-size: 13.5px; color: #1A1A2E77; line-height: 1.7; font-weight: 300; margin-bottom: 12px; }
        .bl-post-content { font-size: 13.5px; color: #1A1A2E88; line-height: 1.8; font-weight: 300; white-space: pre-line; }

        /* BACK */
        .bl-back { padding: 60px; text-align: center; background: #FAF8F5; }
        @media (max-width: 768px) { .bl-back { padding: 40px 24px; } }
        .bl-btn-back {
          display: inline-flex; align-items: center; gap: 10px;
          background: #1A1A2E; color: #FAF8F5; padding: 16px 40px;
          border-radius: 4px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s;
        }
        .bl-btn-back:hover { background: #F4845F; }
      `}</style>

      <div className="bl-root">
        <Navbar />

        {/* HERO */}
        <section className="bl-hero">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="bl-hero-grid">
              <div>
                <div className="bl-eyebrow">Sky View Nursery, Primary &amp; Secondary School — Learning Journal</div>
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
          </div>
        </section>

        {/* NEWS + CALENDAR */}
        <section className="bl-news-cal">
          <div className="bl-news-section">
            <div className="bl-news-label">Latest Updates</div>
            {latestNews.map((item) => (
              <div key={item.title} className="bl-news-card">
                <div
                  className="bl-news-tag"
                  style={{ background: `${tagColors[item.tag] ?? "#F4845F"}22`, color: tagColors[item.tag] ?? "#F4845F" }}
                >
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
            <div className="bl-cal-header">
              <div className="bl-news-label">Academic Calendar</div>
              <div className="bl-cal-month">April Events</div>
              <div className="bl-cal-year">2026</div>
            </div>
            <div className="bl-cal-labels">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={i} className="bl-cal-label">{d}</div>
              ))}
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
              <p className="bl-featured-sub">Curated stories and practical insights that define life at Sky View.</p>
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {featuredTopics.map((topic) => (
                  <CarouselItem key={topic.title} style={{ paddingLeft: 16, flex: "0 0 45%" }}>
                    <div className="bl-featured-card">
                      <div>
                        <div
                          className="bl-featured-tag"
                          style={{ background: `${tagColors[topic.tag] ?? "#F4845F"}22`, color: tagColors[topic.tag] ?? "#F4845F" }}
                        >
                          {topic.tag}
                        </div>
                        <h3 className="bl-featured-card-title">{topic.title}</h3>
                        <p className="bl-featured-card-desc">{topic.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious style={{ background: "#1A1A2E", color: "#FAF8F5", border: "none" }} />
              <CarouselNext style={{ background: "#1A1A2E", color: "#FAF8F5", border: "none" }} />
            </Carousel>
          </div>
        </section>

        {/* POSTS */}
        <section className="bl-posts">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="bl-eyebrow" style={{ color: "#1A1A2E55", marginBottom: 48 }}>
              <span style={{ background: "#1A1A2E55", width: 32, height: 2, display: "inline-block" }} />
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
                      <div
                        className="bl-post-tag"
                        style={{
                          background: `${tagColors[post.tag] ?? "#1A1A2E"}18`,
                          color: tagColors[post.tag] ?? "#1A1A2E",
                        }}
                      >
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