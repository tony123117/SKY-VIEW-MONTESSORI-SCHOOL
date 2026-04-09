import logo from "@/assets/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiUser } from "react-icons/fi";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 pt-5 pb-2.5 sticky top-0 z-50 bg-background font-heading">
      <div className="flex items-center">
        <img src={logo} width={63} height={60} alt="logo" />
        <p className="text-primary font-extrabold">
          Brainchild <br />Int&apos;l Schools
        </p>
      </div>
      <ul className="flex gap-8 items-center">
        {["Home", "About Us", "Admissions", "Blog", "Careers", "Contact us"].map((item) => (
          <li key={item}>
            <a href="/" className="hover:border-b-2 border-b-primary/50 transition-all">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <BrainButton variant="primary">
          Portal <FiUser />
        </BrainButton>
        <BrainButton variant="outline">Enroll my child</BrainButton>
      </div>
    </nav>
  );
}
