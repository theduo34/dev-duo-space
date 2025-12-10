import Navbar from "@/components/layout/navbar";
import ProjectSection from "@/components/features/project-section";
import AboutSection from "@/components/features/about-section";
import SkillsSection from "@/components/features/skills-section";
import ContactSection from "@/components/features/contact-section";
import ExperienceSection from "@/components/features/experience";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className={"main"}>
      <Navbar/>
      <div className="flex flex-col items-center ">
        <ProjectSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </main>
  );
}
