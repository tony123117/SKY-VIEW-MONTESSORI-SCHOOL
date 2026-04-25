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
import creativeImg from "@/assets/creative.jpeg";
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";
import danceImg from "@/assets/dance.jpeg";

const featuredTopics = [
  {
    title: "Learning Beyond The Classroom",
    description: "Explore our clubs, events and community stories that make learning rich and memorable.",
    tag: "Insight",
  },
  {
    title: "Wellness & Growth",
    description: "See how our programs support children's wellbeing, confidence, and purposeful discovery.",
    tag: "Balance",
  },
  {
    title: "Tech & Creativity",
    description: "A peek into our labs, digital learning, and creative studios that inspire future-ready thinkers.",
    tag: "Future",
  },
];

const latestNews = [
  {
    title: "New Academic Term Begins",
    excerpt: "Our new term begins with refreshed classrooms, updated learning stations, and increased outdoor play.",
    href: "/blog",
  },
  {
    title: "Parent-Teacher Meet",
    excerpt: "Join us for a morning of conversation, growth planning, and community connection.",
    href: "/about",
  },
  {
    title: "School Sports Festival",
    excerpt: "A day of teamwork, friendly competitions, and celebration for every child.",
    href: "/admissions",
  },
];

const calendarLabels = [
  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
];

const calendarEvents = {
  3: "Orientation Day",
  12: "Science Fair",
  19: "Parent Day",
  27: "Holiday Celebration",
};

const posts = [
  {
    id: "1",
    title: "Extra-Curricular Activities",
    excerpt: "Culinary, Public Speaking, Science and Mathematics, Arts and Crafts, Theatre/Drama, Dance, Swimming. Each child chooses two clubs to participate in every term, building diverse skills beyond the classroom.",
    content: "At Brainchild International Schools, we believe education extends far beyond the classroom. Our extra-curricular programme offers a rich variety of clubs including Culinary Arts, Public Speaking, Science & Mathematics Club, Arts and Crafts, Theatre/Drama, Dance, and Swimming.\n\nEach child is encouraged to choose two clubs per term, allowing them to explore different interests and develop new talents. These activities build confidence, teamwork, and creativity — skills that serve children throughout their lives.\n\nOur trained instructors ensure every activity is age-appropriate, safe, and fun. Whether your child dreams of being on stage or loves experimenting in the kitchen, there's something for everyone at Brainchild.",
    image: enterImg,
    author: "Admin",
    date: "February 1, 2026",
    color: "text-primary",
  },
  {
    id: "2",
    title: "Punctuality & Attendance",
    excerpt: "School opens at 7:30am daily. The gate closes at 8:00am. Parents should call early for unavoidable delays.",
    content: "Punctuality is a core value at Brainchild International Schools. We believe that arriving on time sets the tone for a productive and focused school day.\n\nSchool gates open at 7:30am and close promptly at 8:00am. Morning assembly begins immediately after, and late arrivals miss important announcements and bonding time with classmates.\n\nWe understand that occasional delays are unavoidable. In such cases, parents are kindly requested to call the school office before 7:45am to inform us. This helps us plan accordingly and avoids any embarrassment for the child at the gate.\n\nConsistent attendance is equally important. Regular attendance ensures children don't miss key lessons and stay connected with their peers. We track attendance carefully and work with parents to address any patterns of absence.",
    image: outsideImg,
    author: "Admin",
    date: "February 1, 2026",
    color: "text-secondary",
  },
  {
    id: "3",
    title: "Home Lessons Policy",
    excerpt: "Teachers maintain professional relationships with parents. Private lessons require clearance from school management.",
    content: "At Brainchild International Schools, we maintain strict professional boundaries between our teaching staff and parents to protect the integrity of our educational programme.\n\nWhile we understand that some parents may desire additional tutoring for their children, any private lessons involving our staff must receive prior clearance from school management. This policy exists to:\n\n• Prevent conflicts of interest in assessment and grading\n• Ensure teachers maintain their energy and focus for school hours\n• Protect both parents and teachers from misunderstandings\n• Maintain the quality and consistency of our curriculum delivery\n\nIf your child needs additional academic support, please speak with their class teacher or the academic coordinator. We offer in-school support programmes designed to help every child succeed.",
    image: creativeImg,
    author: "Admin",
    date: "February 1, 2026",
    color: "text-primary",
  },
  {
    id: "4",
    title: "Digital Literacy in Early Years",
    excerpt: "Equipping students with 21st-century skills through safe technology integration.",
    content: "In today's rapidly evolving world, digital literacy is no longer optional — it's essential. At Brainchild International Schools, we integrate age-appropriate technology into our curriculum starting from the early years.\n\nOur approach to digital literacy includes:\n\n• Interactive learning apps that reinforce numeracy and literacy skills\n• Basic coding concepts introduced through fun, game-based platforms\n• Digital safety awareness — teaching children about responsible online behaviour\n• Creative projects using tablets and computers to express ideas\n\nOur computer lab is equipped with modern systems and internet access, allowing students to explore, create, and learn in a safe digital environment. Teachers are trained to guide children through technology use that enhances rather than replaces traditional learning methods.\n\nWe believe that when introduced thoughtfully, technology can be a powerful tool for fostering innovation and preparing children for the future.",
    image: enterImg,
    author: "Admin",
    date: "February 15, 2026",
    color: "text-secondary",
  },
  {
    id: "5",
    title: "Nutrition & Brain Development",
    excerpt: "A healthy body fuels a sharp mind. Our guidelines on balanced school meals and concentration.",
    content: "Research consistently shows that good nutrition directly impacts a child's ability to learn, concentrate, and retain information. At Brainchild International Schools, we take nutrition seriously.\n\nOur school meal programme is designed with input from nutrition experts to ensure every meal is:\n\n• Balanced with proteins, carbohydrates, vitamins, and minerals\n• Fresh and locally sourced where possible\n• Free from excessive sugar and processed ingredients\n• Portioned appropriately for different age groups\n\nWe also educate parents on the importance of a healthy breakfast before school. Children who eat a nutritious breakfast show improved concentration, better problem-solving abilities, and more positive social interactions.\n\nOur school nurse monitors children's health and works with parents to address any dietary concerns or allergies. Together, we ensure every child has the fuel they need to thrive academically and physically.",
    image: teachersImg,
    author: "School Nurse",
    date: "March 5, 2026",
    color: "text-primary",
  },
  {
    id: "6",
    title: "The Power of Creative Play",
    excerpt: "Why we prioritize playground time and how it builds character and leadership.",
    content: "At Brainchild International Schools, playtime isn't just a break from learning — it IS learning. Creative play is a fundamental part of our educational philosophy.\n\nThrough structured and free play, children develop:\n\n• Social skills — learning to share, negotiate, and cooperate\n• Physical development — building strength, coordination, and motor skills\n• Emotional intelligence — understanding feelings and developing empathy\n• Problem-solving abilities — figuring out challenges in real-time\n• Leadership qualities — taking initiative and guiding peers\n\nOur playground is designed with age-appropriate equipment that encourages exploration and physical activity. We also incorporate guided play sessions where teachers introduce games that reinforce classroom concepts.\n\nFrom building sandcastles that teach about shapes and structures to team sports that build resilience, every moment of play at Brainchild is an opportunity for growth.",
    image: danceImg,
    author: "Teacher",
    date: "March 20, 2026",
    color: "text-accent",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="section-pink-soft min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#ffe1ec] via-[#4f78ed]/20 to-[#303778]/30 px-4 md:px-12 lg:px-24 py-16 md:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-10 left-10 text-4xl animate-float opacity-25 pointer-events-none">📝</div>
          <div className="absolute bottom-10 right-16 text-3xl animate-wiggle opacity-20 pointer-events-none">✏️</div>
          <AnimatedSection>
            <span className="inline-block bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
              📰 Our Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-lg">
              From Our Learning Journal
            </h1>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Thoughts, insights, and updates from our school community — shared to support parents,
              inspire learning, and offer a closer look into life at Brainchild.
            </p>
          </AnimatedSection>
        </div>

        <section id="gallery" className="px-4 md:px-12 lg:px-24 py-10 md:py-16 bg-gradient-to-br from-[#ffe1ec] via-[#4f78ed]/10 to-[#303778]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] font-black text-[#303778] bg-[#303778]/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  #BCIS Gallery
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-[#303778] drop-shadow-lg">
                  Bright school moments from our learning family.
                </h2>
                <p className="mt-4 text-[#303778]/80 leading-relaxed text-sm md:text-base">
                  Snapshots of joyful learning, teamwork, and adventure from Brainchild International Schools.
                </p>
              </div>
              <Link to="/admissions" className="text-sm font-semibold text-[#4f78ed] hover:underline hover:text-[#303778] transition-colors">
                Apply to join our community
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[creativeImg, teachersImg, enterImg, outsideImg, danceImg].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300">
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-12 lg:px-24 py-10 md:py-16 bg-gradient-to-br from-[#4f78ed] via-[#303778] to-[#4f78ed] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="max-w-[1400px] mx-auto relative z-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.35em] font-black text-[#ffe1ec] bg-[#ffe1ec]/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  Latest News
                </span>
                <p className="text-sm text-white/80">School updates and upcoming events</p>
              </div>
              {latestNews.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">{item.excerpt}</p>
                  <Link to={item.href} className="text-sm font-semibold text-[#ffe1ec] hover:underline transition-colors">
                    Read More →
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#ffe1ec]">Academic Calendar</p>
                  <h3 className="text-2xl font-heading font-bold text-white">April Events</h3>
                </div>
                <span className="text-sm font-semibold text-[#ffe1ec]">2026</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[11px] uppercase tracking-[0.25em] text-white/70 mb-3">
                {calendarLabels.map((label) => (
                  <div key={label}>{label}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }).map((_, index) => {
                  const day = index + 1;
                  const event = calendarEvents[day];
                  return (
                    <div key={day} className={`min-h-[70px] rounded-2xl border border-white/20 p-2 text-left ${event ? "bg-[#ffe1ec]/20 border-[#ffe1ec]/30" : "bg-white/10"} backdrop-blur-sm`}>
                      <p className="text-sm font-semibold text-white">{day}</p>
                      {event && <p className="mt-2 text-[10px] text-[#ffe1ec] leading-tight">{event}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Posts */}
        <div className="px-4 md:px-12 lg:px-24 py-10 md:py-16 max-w-[1400px] mx-auto">
          <section className="mb-12 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#303778] via-[#4f78ed] to-[#303778] border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="px-6 py-10 md:px-10 md:py-12 relative z-10">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="text-xs uppercase tracking-[0.35em] font-black text-[#ffe1ec] bg-[#ffe1ec]/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured Stories
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white drop-shadow-lg">
                    Discover the premium learning culture behind every post.
                  </h2>
                  <p className="mt-4 text-white/80 leading-relaxed text-sm md:text-base">
                    Curated stories, thoughtful insights, and practical updates that show why Brainchild is more than a school — it's a distinguished learning community.
                  </p>
                </div>
                <Link to="/admissions" className="mt-4 md:mt-0">
                  <button className="bg-gradient-to-r from-[#ffe1ec] to-[#4f78ed] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Start Admissions
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Carousel className="relative">
                <CarouselContent className="flex py-6">
                  {featuredTopics.map((topic) => (
                    <CarouselItem key={topic.title}>
                      <div className="min-h-[220px] w-full rounded-[2rem] border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-xl hover:scale-105 transition-all duration-300">
                        <span className="text-xs uppercase tracking-[0.35em] text-[#ffe1ec]">{topic.tag}</span>
                        <h3 className="mt-4 text-2xl font-heading font-bold">{topic.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/80">{topic.description}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25" />
                <CarouselNext className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25" />
              </Carousel>
            </div>
          </section>
          <div className="space-y-12 md:space-y-16">
            {posts.map((post, i) => (
              <AnimatedSection key={post.id} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/60 shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-white bg-primary px-2.5 py-0.5 rounded-full">{post.author}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className={`text-xl md:text-2xl font-heading font-bold ${post.color} mb-3`}>
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {post.content}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-16">
              <Link to="/" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  ← Back to Home
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </>
  );
}
