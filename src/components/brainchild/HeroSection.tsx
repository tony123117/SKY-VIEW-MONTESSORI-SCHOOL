import { MdOutlineArrowUpward } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden font-heading min-h-screen">
      <FloatingIcons />
      <div className="flex flex-col items-center justify-center gap-[37px] py-20">
        <div className="text-center leading-[3rem]">
          <span className="text-primary text-[60px] font-bold text-center">
            Unlock a More
          </span>
          <h1 className="text-[60px] font-bold text-center">
            Thoughtful Way to Learn.
          </h1>
        </div>
        <p className="max-w-[625px] text-center text-[17px]">
          We focus on more than academics. Our approach blends discipline,
          curiosity, and care to prepare students for lifelong learning.
        </p>
        <div className="flex gap-2">
          <BrainButton variant="secondary">
            Enroll my child <MdOutlineArrowUpward />
          </BrainButton>
          <BrainButton variant="abstract">Tour Our Campus</BrainButton>
        </div>
        <div>
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
