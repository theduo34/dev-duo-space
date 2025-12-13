"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  imagePosition?: "left" | "right";
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`flex flex-col ${
        project.imagePosition === "right"
          ? "lg:flex-row-reverse"
          : "lg:flex-row"
      } gap-4 md:gap-8 items-center border md:border-none rounded-tl-2xl rounded-br-2xl md:rounded-none`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative group overflow-hidden rounded-tl-2xl md:rounded-lg border border-border hover:border-primary/50 transition-all duration-300 ">
          <Image
            src={project.image}
            alt={project.title}
            height={40}
            width={50}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-4 p-4 md:p-0">
        {project.featured && (
          <div className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
            Featured Project
          </div>
        )}

        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
          {project.title}
        </h3>

        <div className="bg-card p-4 md:p-6 rounded-lg border border-border shadow-md">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm rounded-md bg-secondary text-secondary-foreground font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-background text-foreground hover:bg-muted border border-border transition-all duration-300 font-medium group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium group"
            >
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Live Demo
            </a>
          )}

          {!project.githubUrl && !project.liveUrl && (
            <div className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium">
              Private Project
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
