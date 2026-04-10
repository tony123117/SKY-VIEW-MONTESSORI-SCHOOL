import { useState } from "react";
import logo from "@/assets/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 pt-5 pb-2.5 sticky top-0 z-50 bg-white/80 backdrop-blur-md font-heading border-b border-border/50">
      <div className="flex items-center">
        <img src={logo} width={50} height={48} alt="logo" className="md:w-[63px] md:h-[60px]" />
        <p className="text-primary font-extrabold text-sm md:text-base">
          Brainchild <br />Int&apos;l Schools
        </p>
      </div>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-8 items-center">
        {["Home", "About Us", "Admissions", "Blog", "Careers", "Contact us"].map((item) => (
          <li key={item}>
            <a href="/" className="text-brand-dark hover:text-primary hover:border-b-2 border-b-primary/50 transition-all">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-4">
        <BrainButton variant="secondary">
          Portal <FiUser />
        </BrainButton>
        <BrainButton variant="outline">Enroll my child</BrainButton>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-2xl text-brand-dark"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50 p-6 flex flex-col gap-4">
          {["Home", "About Us", "Admissions", "Blog", "Careers", "Contact us"].map((item) => (
            <a key={item} href="/" className="text-lg text-brand-dark hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <BrainButton variant="secondary">
              Portal <FiUser />
            </BrainButton>
            <BrainButton variant="outline">Enroll my child</BrainButton>
          </div>
        </div>
      )}
    </nav>
  );
}
