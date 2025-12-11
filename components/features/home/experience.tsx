"use client";

import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

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

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="section-parent-header text-center">
          <h2 className="section-header">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across fintech, healthcare, and enterprise platforms
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 top-8 w-0.5 -ml-px">
                  <div className="relative w-4 h-4 -ml-[7px]">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    <div className="relative w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:ml-20 bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <Briefcase className="w-5 h-5 text-primary" />
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
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 lg:text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
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

                  {/* Technologies */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium hover:bg-muted/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-8">
          <button className="relative inline-flex overflow-hidden rounded-full focus:outline-none w-fit p-[3px] group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2.5 font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 backdrop-blur-3xl gap-2 shadow-md transition-colors duration-300 relative z-10">
              View Full Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}