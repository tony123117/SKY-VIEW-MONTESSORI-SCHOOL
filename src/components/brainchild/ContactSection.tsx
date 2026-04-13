import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import BrainButton from "./BrainButton";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

export function ContactSection() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      // Sending to Formspree (or your preferred endpoint)
      const response = await fetch("https://formspree.io/f/info@brainchildintschools.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ parentName: "", childName: "", email: "", phone: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section 
      id="contact" 
      className="section-pink-soft px-4 md:px-12 lg:px-24 pt-12 md:pt-24 pb-32 md:pb-56 font-body relative"
    >
      <div className="absolute top-8 left-12 text-3xl animate-float opacity-20 pointer-events-none">✉️</div>
      <div className="absolute bottom-16 right-8 text-4xl animate-bounce-gentle opacity-15 pointer-events-none">🏫</div>

      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">📞 Get In Touch</span>
            <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">Contact Us</h2>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Have questions about enrollment or our programs? We'd love to hear from you!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-8 shadow-md h-full flex flex-col gap-6">
              <h3 className="text-xl font-heading font-bold text-foreground">Reach Us Directly</h3>
              {[
                { icon: <FiPhone />, label: "Phone", values: ["+234 706 117 5897", "+234 705 449 8469"], color: "bg-secondary/10 text-secondary" },
                { icon: <FiMail />, label: "Email", values: ["info@brainchildintschools.com"], color: "bg-primary/10 text-primary" },
                { icon: <FiMapPin />, label: "Address", values: ["No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu"], color: "bg-accent/15 text-accent" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    {item.values.map((v) => (
                      <p key={v} className="text-sm text-muted-foreground">{v}</p>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-auto pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground">
                  <strong>School Hours:</strong><br />
                  Pre-school & KG: 7:30am – 1:00pm daily<br />
                  Elementary 1–6: 7:30am – 3:00pm (Mon–Thu), 7:30am – 1:00pm (Fri)
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-8 shadow-md"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">Send Us a Message</h3>
              
              {status === "SUCCESS" ? (
                <div className="py-12 text-center">
                  <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-lg font-bold text-foreground">Message Sent Successfully!</h4>
                  <p className="text-sm text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">Parent's Name *</label>
                      <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="e.g. Mrs. Okonkwo" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">Child's Name *</label>
                      <input type="text" name="childName" required value={formData.childName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="e.g. Chioma" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="parent@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1 block">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="+234 xxx xxx xxxx" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="text-sm font-semibold text-foreground mb-1 block">Message</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="Tell us about your child's age, interests, or any questions you have..." />
                  </div>
                  
                  <BrainButton 
                    variant="primary" 
                    type="submit" 
                    className="w-full sm:w-auto"
                    disabled={status === "SENDING"}
                  >
                    {status === "SENDING" ? "Sending..." : "Send Message"} <FiSend />
                  </BrainButton>

                  {status === "ERROR" && (
                    <p className="text-red-500 text-xs mt-3">Something went wrong. Please try again or call us directly.</p>
                  )}
                </>
              )}
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}