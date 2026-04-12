import { Navbar } from "@/components/brainchild/Navbar";
import { HeroSection } from "@/components/brainchild/HeroSection";
import { WhyChooseUs } from "@/components/brainchild/WhyChooseUs";
import ProgramsSection from "@/components/brainchild/ProgramsSection";
import { CoreValuesSection } from "@/components/brainchild/CoreValuesSection";
import { FacilitiesSection } from "@/components/brainchild/FacilitiesSection";
import { CurriculumSection } from "@/components/brainchild/CurriculumSection";
import { BlogSection } from "@/components/brainchild/BlogSection";
import { ParentSection } from "@/components/brainchild/ParentSection";
import { ContactSection } from "@/components/brainchild/ContactSection";
import { Footer } from "@/components/brainchild/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <div id="home"><HeroSection /></div>
      <WhyChooseUs />
      <div id="programs"><ProgramsSection /></div>
      
      <FacilitiesSection />
      
      <div id="blog"><BlogSection /></div>
      <ParentSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
