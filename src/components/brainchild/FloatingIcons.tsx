import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import arrow from "@/assets/arrow.svg";

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
      <img src={icon2} alt="" className="absolute top-5 left-[7.5rem] animate-float-slow w-12" />
      <img src={icon1} alt="" className="absolute top-10 right-[20.5rem] animate-float w-12" />
      <img src={icon1} alt="" className="absolute top-[12.5rem] left-10 animate-float-fast w-12" />
      <img src={icon4} alt="" className="absolute top-[7.5rem] right-24 animate-float w-12" />
      <img src={icon3} alt="" className="absolute top-[20rem] right-24 animate-float w-12" />
      <img src={arrow} alt="" className="absolute top-[12.5rem] left-40 animate-float w-16" />
    </div>
  );
}
