import { motion } from "framer-motion";
import ToniaImg from "@/assets/images/mrs tonia.jpeg";
import OgechiImg from "@/assets/images/ogechis.jpg";
import principalImg from "@/assets/images/BrainChildDirector.jpeg";
import francisImg from '@/assets/images/Francis.jpeg'

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen font-heading">

      {/* ================= HERO HEADER ================= */}
      <section className="py-20 md:py-28 text-center px-4 bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Meet Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Passionate educators and administrators dedicated to nurturing excellence,
            character, and lifelong learning.
          </p>
        </motion.div>
      </section>


      {/* ================= TEAM SECTION ================= */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-28 md:space-y-32">

          {/* ================= PRINCIPAL ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* IMAGE */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] rotate-3 scale-105" />
              <div className="relative w-56 h-72 md:w-72 md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={principalImg}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Welcome to a Place Where{" "}
                <span className="text-blue-600">Curiosity</span> Meets{" "}
                <span className="text-pink-500">Character</span>.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                At <strong>Brain Child International Schools</strong>, we believe
                that education is not the filling of a pail, but the lighting of a fire.
              </p>

              <p className="text-slate-600 mb-4">
                We focus on critical thinking, global citizenship, and moral integrity,
                ensuring every child grows into a confident and capable individual.
              </p>

              <p className="text-blue-700 font-semibold mt-6">
                Dr. (Mrs.) Ijeoma Darling Onwubuya — Director & Founder
              </p>.
            </div>
          </motion.div>





          {/* ================= francis ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* IMAGE */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] rotate-3 scale-105" />
              <div className="relative w-56 h-72 md:w-72 md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={francisImg}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Welcome to a Place Where Vision {" "}
                <span className="text-blue-600">Inspires </span> Meets{" "}
                <span className="text-pink-500">Excellence.</span>.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                At <strong>Brain Child Nursery And Primary School</strong>,we believe that true education goes beyond the classroom—it shapes character, builds confidence, and prepares every child for a meaningful future.
              </p>

              <p className="text-slate-600 mb-4">
                With a strong commitment to academic excellence and personal development, Mr. Francis plays an important role in shaping a positive and nurturing school experience for every learner.
              </p>

              <p className="text-blue-700 font-semibold mt-6">
                Mr. Francis
              </p>.
            </div>
          </motion.div>



          {/* ================= HEAD TEACHER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* TEXT */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Ms Tonia Edeh
              </h3>
              <p className="text-pink-500 font-medium mb-6">
                Head Teacher, Kindergarten
              </p>

              <p className="text-slate-600 leading-relaxed mb-4">
                With over 15 years of experience in early childhood education,
                Ms Tonia is a cornerstone of our kindergarten team, known for her
                warmth, patience, and ability to make every child feel seen.
              </p>

              <p className="text-slate-600 mb-4">
                She transforms learning into an adventure using phonics,
                storytelling, songs, and play-based methods.
              </p>

              {/* SPECIALTIES */}
              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Specialties
                </h4>
                <p className="text-slate-600 text-sm">
                  Early literacy • Phonics • Play-based learning • Numeracy •
                  Social development
                </p>
              </div>

              {/* QUOTE */}
              <div className="mt-6 border-l-4 border-blue-500 pl-4">
                <p className="italic text-blue-700 font-medium">
                  "I treat every child like my own. We'll laugh, play and learn
                  together—and your child will surprise you."
                </p>
              </div>

              <p className="text-sm text-slate-500 mt-6">
                8+ years at Brain Child • TRCN Licensed • HND • PGDE (Early Childhood Education)
              </p>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <img
              src={ToniaImg}
              alt="Ezeorah Ogechi Regina"
              className="w-56 h-72 md:w-72 md:h-[420px] object-cover object-top rounded-[2rem] shadow-lg"
            />
          </motion.div>

          {/* ================= ADMINISTRATOR ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* IMAGE */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-blue-500/10 rounded-[2rem] rotate-2 scale-105" />
                <div className="relative w-48 h-56 md:w-60 md:h-72 rounded-[1.8rem] overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={OgechiImg}
                    alt="Ezeorah Ogechi Regina"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Ezeorah Ogechi Regina
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  School Administrator | Admissions & Records Specialist
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  A detail-oriented professional with over five years of experience in the educational sector, with a strong background in financial auditing and administration.
                </p>

                {/* CLEAN GRID (better than long list) */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                  <div>
                    <strong>Admissions:</strong> Enrollment guidance & onboarding
                  </div>
                  <div>
                    <strong>Data Integrity:</strong> Accurate records & compliance
                  </div>
                  <div>
                    <strong>Administration:</strong> Operations & planning
                  </div>
                  <div>
                    <strong>Audit:</strong> Financial oversight experience
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-1">
                  Classroom Teacher • External Auditor • Ministry of Finance (NYSC)
                </p>

                <p className="text-xs text-slate-400">
                  PGDE • HND Accountancy (Upper Credit) • NECO • FSLC
                </p>
              </div>

            </div>
          </motion.div>




        </div>
      </section>
    </div>
  );
}
