"use client";

import ProjectCard, {Project} from "@/components/shared/cards/project-card";

const projects: Project[] = [
  {
    id: 1,
    title: "Xolace",
    description: "Xolace is a socio-hybrid digital mental health platform available on both web and mobile. It is built to support individuals navigating emotional and mental health challenges by combining social connection with professional guidance. Xolace offers a safe, secure space for anonymous self-expression, peer support, and access to professional guides for personalized one-on-one sessions, empowering users to find balance, clarity, and meaningful support.",
      image: "https://res.cloudinary.com/dnucdwa71/image/upload/c_fill,ar_3:2,w_800,q_80,f_auto,e_sharpen:150/v1765646755/xolace-mobile_t6tfol.jpg",
    tags: ["Web App", "Health Tech"],
    techStack: ["Next.js","Expo", "Tailwind CSS", "Supabase", "Docker","ElevenLabs"],
    githubUrl: "https://github.com/inside-aims/xolace",
    liveUrl: "https://xolace.app",
    imagePosition: "left"
  },
  {
    id: 4,
    title: "Cashless Toll System",
    description: "Designed and implemented the user interface for an AI-powered cashless toll system. Features dynamic dashboards for drivers, toll operators, and government officials with KYC applications and secure payment processing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Enterprise", "AI", "FinTech"],
    techStack: ["NextJs", "Spring Boot", "RTK Query", "PrimeFlex CSS", "REST APIs"],
    featured: true,
    imagePosition: "right"
  },
  {
    id: 5,
    title: "Investment Platform",
    description: "Built a secure investment platform for property and asset management with real-time transaction tracking, dividend analytics, and role-based access control for investors, admins, and super admins.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["FinTech", "Dashboard"],
    techStack: ["VueJS", "Laravel", "Inertia SSR", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://kornelgrowth.com",
    featured: true,
    imagePosition: "left"
  },
];

export default function ProjectSection() {
  return (
    <section id="project" className="section">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="section-parent-header text-center">
          <h2 className="section-header">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in fullstack development,
            from healthcare platforms to enterprise solutions.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}