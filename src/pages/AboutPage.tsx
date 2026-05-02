import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import francis from "@/assets/images/Francis.jpeg";
import tonia from "@/assets/images/mrs tonia.jpeg";
import ogechi from "@/assets/images/ogechis.jpg";
import director from '@/assets/images/BrainChildDirector.jpeg';


import creativeImg from "@/assets/images/creative.jpeg";
import teachersImg from "@/assets/images/teachers.jpeg";
import enterImg from "@/assets/images/enter.jpg";
import outsideImg from "@/assets/images/outside.jpg";
import curiculum from '@/assets/images/curiculum.jpg'

import img1 from "@/assets/images/544A7170.jpg.jpg";
import img2 from "@/assets/images/544A7178.jpg.jpg";
import img3 from "@/assets/images/544A7188.jpg.jpg";
import img4 from "@/assets/images/544A7218.jpg.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: creativeImg,
    title: "Our Story",
    subtitle: "Brain Child Nursery and Primary School"
  },
  {
    image: teachersImg,
    title: "Excellence in Education",
    subtitle: "Nurturing young minds with excellence"
  },
  {
    image: enterImg,
    title: "Community & Growth",
    subtitle: "Where learning meets character"
  },
  {
    image: curiculum,
    title: "Community & Growth",
    subtitle: "Where learning meets character"
  }
];

const leadership = [
  {
    name: "Dr. (Mrs.) Ijeoma Darling Onwubuya",
    role: "Director & Founder",
    image: director,
    bio: "With over 15 years in early childhood education, Dr. Ijeoma brings passion and expertise to every aspect of Brain Child Nursery and Primary School"
  },
  {
    name: "Mr. Francis",
    role: "Head of Academics",
    image: francis,
    bio: "Leading our academic excellence with innovative teaching methods and curriculum development."
  },
  {
    name: "Ms Tonia Edeh.",
    role: "Head of Operations",
    image: tonia,
    bio: "Ensuring smooth operations and creating a safe, nurturing environment for all students."
  },
  {
    name: "Ezeorah Ogechi Regina",
    role: "Head of Operations",
    image: ogechi,
    bio: "Ensuring smooth operations and creating a safe, nurturing environment for all students."
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen">

        {/* HERO */}
        <section className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                    <div className="absolute inset-0">
                      <img src={slide.image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#303778]/80 via-[#4f78ed]/60 to-[#303778]/80"></div>
                    </div>

                    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                      <AnimatedSection>
                        <span className="bg-white/20 px-4 py-1 rounded-full text-xs mb-4 inline-block">
                          🏫 About Us
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-lg text-white/90">{slide.subtitle}</p>
                      </AnimatedSection>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* STORY */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#303778] mb-6">
                Founded on a Vision of Excellence
              </h2>
              <p className="text-[#303778]/80 mb-4">
                Brain Child Nursery and Primary School was established to nurture the whole child—academically, socially, and emotionally.
              </p>
              <p className="text-[#303778]/80">
                We combine traditional values with modern teaching to prepare students for the future.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {[img1, img2, img3, img4].map((img, i) => (
                <img key={i} src={img} className="rounded-2xl object-cover h-48 w-full" />
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#303778]">
              Meet Our Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
                <img src={leader.image} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-bold">{leader.name}</h3>
                <p className="text-blue-600 text-sm">{leader.role}</p>
                <p className="text-sm mt-2 text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MINI TEAM */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#303778]">
              Our Team
            </h2>
            <p className="text-[#303778]/70 text-sm mt-2">
              Meet more of the people shaping our students’ future
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Dr. Ijeoma Darling Onwubuya", role: "Director", image: director},
              { name: "Mr. Francis", role: "Staff", image: outsideImg },
              { name: "Ms Tonia Edeh", role: "Head Teacher", image: teachersImg },
              { name: "Ezeorah Ogechi Regina", role: "Administrator", image: img1 },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-4 text-center hover:shadow-lg"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <img src={member.image} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-sm font-semibold">{member.name}</h3>
                <p className="text-xs text-blue-600">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/team" className="text-blue-600 text-sm font-semibold hover:underline">
              View Full Team →
            </Link>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#303778] to-[#4f78ed] text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Compassion", "Excellence", "Innovation"].map((val, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl">
                <h3 className="font-bold">{val}</h3>
                <p className="text-sm text-white/80">
                  We uphold {val.toLowerCase()} in everything we do.
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
