import Navbar from "@/components/layout/navbar";
import ProjectSection from "@/components/features/home/project-section";
import AboutSection from "@/components/features/home/about-section";
import ContactSection from "@/components/features/home/contact-section";
import ExperienceSection from "@/components/features/home/experience";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/features/home/hero-section";

export default function Home() {
  return (
    <main className={"main"}>
      <Navbar/>
      <div className="flex flex-col items-center ">
        <HeroSection/>
        <ProjectSection/>
        <AboutSection/>
        <ExperienceSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </main>
  );
}
