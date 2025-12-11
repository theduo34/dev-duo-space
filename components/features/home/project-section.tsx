"use client";

import ProjectCard, {Project} from "@/components/shared/cards/project-card";

const projects: Project[] = [
  {
    id: 1,
    title: "Xolace",
    description: "A digital platform designed to support individuals facing emotional and mental health challenges. Xolace provides a safe space for users to find comfort, connect with others, and express themselves through anonymous sharing and supportive tools.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Web App", "Health Tech"],
    techStack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/xolace",
    liveUrl: "https://xolace.com",
    featured: true,
    imagePosition: "left"
  },
  {
    id: 2,
    title: "Space Traveller",
    description: "This is a web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80",
    tags: ["Web App", "API"],
    techStack: ["ReactJS", "Redux", "JavaScript", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/space-traveller",
    liveUrl: "https://space-traveller.com",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "Pokemon",
    description: "Pokemon is a webapp that simulates a pokedex showing the pokemon of a certain type. The user can choose the type of pokemon they want to see. The app will show the pokemon of that type. The use can see the name, type, and image of the pokemon.",
    image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=800&q=80",
    tags: ["Web App", "Gaming"],
    techStack: ["Webpack", "JavaScript", "TailwindCSS", "HTML"],
    githubUrl: "https://github.com/yourusername/pokemon",
    imagePosition: "left"
  },
  {
    id: 4,
    title: "Cashless Toll System",
    description: "Designed and implemented the user interface for an AI-powered cashless toll system. Features dynamic dashboards for drivers, toll operators, and government officials with KYC applications and secure payment processing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Enterprise", "AI", "FinTech"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://toll-system.com",
    featured: true,
    imagePosition: "right"
  },
  {
    id: 5,
    title: "Investment Platform",
    description: "Built a secure investment platform for property and asset management with real-time transaction tracking, dividend analytics, and role-based access control for investors, admins, and super admins.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["FinTech", "Dashboard"],
    techStack: ["React", "Redux RTK Query", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://kornelgrowth.com",
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