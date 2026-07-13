"use client";

import {Briefcase, Calendar, MapPin, ExternalLink} from "lucide-react";
import StackCard from "@/components/shared/cards/stack-card";
import Link from "next/link";

interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Doltech Ltd",
    role: "Frontend Developer",
    type: "Contract",
    location: "Ghana (Remote)",
    period: "Feb 2025 – May 2025",
    responsibilities: [
      "Designed and implemented the user interface for a cashless toll system, enhancing efficiency with AI-powered solutions",
      "Developed dynamic dashboards for drivers, toll operators, and government officials, improving data accessibility",
      "Engineered KYC applications, secure payment pages, and an operator management system to streamline processes",
      "Conducted rigorous testing and debugging, ensuring cross-browser compatibility and seamless user experiences"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "AI Integration"]
  },
  {
    id: 2,
    company: "Kornel Growth Agency",
    role: "Frontend Developer",
    type: "Contract",
    location: "Remote, Ghana",
    period: "Jan 2024 – Mar 2025",
    responsibilities: [
      "Built a secure investment platform for property and asset management, improving financial tracking for users",
      "Designed and implemented investor dashboards with real-time transaction tracking and dividend analytics",
      "Developed role-based access control, ensuring secure authentication for investors, admins, and super admins",
      "Optimized frontend performance by implementing lazy loading and efficient state management strategies"
    ],
    technologies: ["React", "Redux RTK Query", "TypeScript", "Tailwind CSS", "Security"],
    companyUrl: "https://kornelgrowth.com"
  },
  {
    id: 3,
    company: "Goodwill Systems",
    role: "Frontend Developer",
    type: "Full-Stack Focus",
    location: "Remote, USA",
    period: "Jan 2024 – Dec 2024",
    responsibilities: [
      "Implemented SEO optimization techniques, increasing search engine rankings and user engagement",
      "Designed and developed key platform features, including user profiles, business dashboards, and revenue analytics",
      "Developed and optimized Redux RTK Query endpoints to efficiently manage API calls and application state",
      "Implemented stateful UI components that dynamically update based on API responses, improving user experience"
    ],
    technologies: ["React", "Redux", "TypeScript", "Node.js", "SEO"],
    companyUrl: "https://goodwillsystems.com"
  }
];

export default function Experience() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="bg-card border rounded-card p-4 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 md:p-3 rounded-card">
                  <Briefcase className="w-5 h-5 text-muted-foreground"/>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-secondary/20">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-semibold text-primary">
                      {exp.company}
                    </p>
                    {exp.companyUrl && (
                      <Link
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4"/>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 lg:text-right text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 lg:justify-end">
                <Calendar className="w-4 h-4"/>
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 lg:justify-end">
                <MapPin className="w-4 h-4"/>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {exp.responsibilities.map((responsibility, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-primary mt-1.5">▸</span>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <StackCard key={tech} tech={tech}/>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
