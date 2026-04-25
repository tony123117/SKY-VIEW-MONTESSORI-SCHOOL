import { useState } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import schoolBuildingImg from "@/assets/outside.jpg";
import receptionImg from "@/assets/class.jpg";
import teachersImg from "@/assets/teachers.jpg";

const contactImages = [schoolBuildingImg, receptionImg, teachersImg];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Carousel */}
        <section className="bg-gradient-to-br from-[#ffe1ec] via-[#4f78ed]/20 to-[#303778]/30 px-4 md:px-12 lg:px-24 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                Contact Us
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#303778] drop-shadow-lg mb-4">
                Get in Touch with Kayla School
              </h1>
              <p className="text-[#303778]/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                We're here to answer your questions and help you connect with our community.
              </p>
            </div>

            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {contactImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`Contact ${index + 1}`}
                        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl border border-white/20"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25" />
              <CarouselNext className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25" />
            </Carousel>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#303778] mb-6">
                      Visit Our Campus
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4f78ed] to-[#303778] rounded-xl flex items-center justify-center text-white">
                          📍
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#303778] mb-1">Address</h3>
                          <p className="text-[#303778]/70">No. 8 D.C Onyekwelu Street<br />Beside LomaLinda Estate, Enugu</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4f78ed] to-[#303778] rounded-xl flex items-center justify-center text-white">
                          📞
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#303778] mb-1">Phone</h3>
                          <p className="text-[#303778]/70">+234 706 117 5897</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4f78ed] to-[#303778] rounded-xl flex items-center justify-center text-white">
                          ✉️
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#303778] mb-1">Email</h3>
                          <p className="text-[#303778]/70">info@kaylaschool.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4f78ed] to-[#303778] rounded-xl flex items-center justify-center text-white">
                          🕒
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#303778] mb-1">Office Hours</h3>
                          <p className="text-[#303778]/70">Monday - Friday: 7:30 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/20 rounded-2xl p-6 shadow-xl">
                    <h3 className="font-semibold text-[#303778] mb-4">Find Us on Google Maps</h3>
                    <div className="aspect-video bg-[#303778]/10 rounded-xl flex items-center justify-center">
                      <p className="text-[#303778]/60">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-[#ffe1ec] via-[#4f78ed]/10 to-[#303778]/20 rounded-3xl p-8 shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#303778] mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="programs">Program Information</option>
                          <option value="tour">Schedule a Tour</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#303778] mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#4f78ed] to-[#303778] text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}