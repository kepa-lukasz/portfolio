import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsSection from "./components/SkillsSection";
import HobbiesSection from "./components/HobbiesSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Smooth Scroll Container */}
      <div className="relative">
        <HeroSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />
      </div>
    </div>
  );
}