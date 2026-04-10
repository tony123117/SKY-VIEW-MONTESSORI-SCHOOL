import logo from "@/assets/brainlogo.png";
import x from "@/assets/icons/x.png";
import insta from "@/assets/icons/insta.png";
import facebook from "@/assets/icons/facebook.png";
import github from "@/assets/icons/github.png";
import visa from "@/assets/icons/visa.png";
import mastercard from "@/assets/icons/mastercard.png";
import paypal from "@/assets/icons/paypal.png";
import applepay from "@/assets/icons/applepay.png";
import gpay from "@/assets/icons/gpay.png";
import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
  return (
    <footer className="section-blue-dark font-heading text-white/90">
      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 pt-12 md:pt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Brand */}
            <div className="flex flex-col gap-4 text-white/70 col-span-2 md:col-span-1">
              <div className="flex items-start gap-3">
                <img src={logo} alt="Brain Child Logo" className="w-[50px] h-[50px] flex-shrink-0" />
                <h3 className="text-xl text-primary font-bold leading-tight">
                  Brain Child Int&apos;l Schools.
                </h3>
              </div>
              <p className="text-sm leading-relaxed">
                At Brainchild Int&apos;l, we focus on more than academics. We create a supportive space where children feel safe.
              </p>
              <div className="flex gap-4">
                {[{ src: x, alt: "Twitter" }, { src: insta, alt: "Instagram" }, { src: facebook, alt: "Facebook" }, { src: github, alt: "GitHub" }].map((icon) => (
                  <div key={icon.alt} className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity invert">
                    <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-semibold text-white">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-white/60 text-sm">
                {["Back to top", "About us", "Enrollment", "Careers"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-semibold text-white">Help</h4>
              <ul className="flex flex-col gap-3 text-white/60 text-sm">
                {["Customer Support", "Admission Requirements", "Terms & Conditions", "Privacy Policy"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-semibold text-white">Resources</h4>
              <ul className="flex flex-col gap-3 text-white/60 text-sm">
                {["Download E-brochure/ Curriculum", "Staff portal Tutorial", "Read our Blog", "Meet our Admin"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-semibold text-white">Contact Us</h4>
              <ul className="flex flex-col gap-3 text-white/60 text-sm">
                <li className="hover:text-primary cursor-pointer transition-colors">+2347061175897, +2347054498469</li>
                <li className="hover:text-primary cursor-pointer transition-colors break-all">info@brainchildschoolsint.com</li>
                <li className="hover:text-primary cursor-pointer transition-colors leading-relaxed">
                  No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-6 gap-4 border-t border-white/10 mt-8">
            <p className="text-white/40 text-sm">
              Bravotechmedia © 2026, All Rights Reserved
            </p>
            <div className="flex gap-2">
              {[{ src: visa, alt: "Visa" }, { src: mastercard, alt: "Mastercard" }, { src: paypal, alt: "PayPal" }, { src: applepay, alt: "Apple Pay" }, { src: gpay, alt: "Google Pay" }].map((icon) => (
                <div key={icon.alt} className="opacity-60 hover:opacity-100 transition-opacity invert">
                  <img src={icon.src} alt={icon.alt} className="w-[46px] h-[30px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}
