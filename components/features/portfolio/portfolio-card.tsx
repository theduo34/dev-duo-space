'use client';

import Image from "next/image";
import StackCard from "@/components/shared/cards/stack-card";
import {ExternalLink, Github} from "lucide-react";
import {ProjectInterface} from "@/components/features/portfolio/index";

const PortfolioCard = ({project}:{project: ProjectInterface}) => {
  return (
    <div className="flex bg-muted rounded-card p-4 shadow-lg">
      <div className="w-2/5">
        <div className="relative group overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 h-40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
      </div>

      <div className="w-3/5 space-y-2 pl-4">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <StackCard key={tech} tech={tech}/>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-muted-foreground px-2 py-1">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-background text-foreground hover:bg-muted border border-border transition-all duration-300 font-medium group"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform"/>
              Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium group"
            >
              <ExternalLink
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
              Live Demo
            </a>
          )}

          {!project.githubUrl && !project.liveUrl && (
            <div className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium">
              Private Project
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default PortfolioCard;