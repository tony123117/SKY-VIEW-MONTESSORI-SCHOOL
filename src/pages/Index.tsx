import { Navbar } from "@/components/brainchild/Navbar";
import { HeroSection } from "@/components/brainchild/HeroSection";
import { WhyChooseUs } from "@/components/brainchild/WhyChooseUs";
import ProgramsSection from "@/components/brainchild/ProgramsSection";
import { BlogSection } from "@/components/brainchild/BlogSection";
import { ParentSection } from "@/components/brainchild/ParentSection";
import { Footer } from "@/components/brainchild/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ProgramsSection />
      <BlogSection />
      <ParentSection />
      <Footer />
    </>
  );
};

export default Index;
