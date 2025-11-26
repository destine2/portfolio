import { AboutSection } from "../components/AboutSection";
import {ContactSection} from  "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {


  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
     
    {/* theme togggle */}

    <ThemeToggle/>
    {/* background Effect */}
    <StarBackground/>

    {/* Nav bar */}
    <NavBar/>

    {/* Main Content */}

    <main>

      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>

    </main>

    {/* Footer */}
    <Footer/>


  </div>;
}