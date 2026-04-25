import { Navbar } from "@/components/brainchild/Navbar";
import { HeroSection } from "@/components/brainchild/HeroSection";
import { WhyChooseUs } from "@/components/brainchild/WhyChooseUs";
import ProgramsSection from "@/components/brainchild/ProgramsSection";
import { CoreValuesSection } from "@/components/brainchild/CoreValuesSection";
import { FacilitiesSection } from "@/components/brainchild/FacilitiesSection";
import { CurriculumSection } from "@/components/brainchild/CurriculumSection";
import { BlogSection } from "@/components/brainchild/BlogSection";
import { ParentSection } from "@/components/brainchild/ParentSection";
import ContactSection from "@/components/brainchild/ContactSection";
import { Footer } from "@/components/brainchild/Footer";
import { StatsSection } from "@/components/brainchild/StatsSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <div id="home"><HeroSection /></div>
      <div id="about"><WhyChooseUs /></div>
      <div id="programs"><ProgramsSection /></div>
      <StatsSection />
      <div id="admissions"><FacilitiesSection /></div>
    
      <div id="blog"><BlogSection /></div>
      <ParentSection />
      <div id="contact"><ContactSection /></div>
      <Footer />
    </>
  );
};

export default Index;
