'use client';

import Image from "next/image";
import StackCard from "@/components/shared/cards/stack-card";
import {ExternalLink, Github, ImageOff, Smartphone} from "lucide-react";
import {ProjectInterface} from "@/components/features/portfolio/index";
import {useEffect, useState} from "react";

const getInitialStoreUrl = (project: ProjectInterface) =>
  project.playStoreUrl ?? project.appStoreUrl;

const PortfolioCard = ({project}:{project: ProjectInterface}) => {
  const [storeUrl, setStoreUrl] = useState(() => getInitialStoreUrl(project));

  useEffect(() => {
    if (project.appStoreUrl && project.playStoreUrl && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setStoreUrl(project.appStoreUrl);
    }
  }, [project]);

  return (
    <div className="flex flex-col gap-2 md:flex-row bg-muted rounded-card shadow-lg">
      <div className="w-full md:w-2/5 p-0 md:p-4 ">
        <div className="relative group p-0 overflow-hidden rounded-tr-2xl md:rounded-none border border-border hover:border-primary/50 transition-all duration-300 h-40">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-secondary/10">
              <ImageOff className="h-6 w-6 text-muted-foreground"/>
              <span className="text-xs text-muted-foreground">Screenshot coming soon</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-3/5 space-y-2 md:pl-4 p-2">
        <h3 className="text-lg md:text-2xl font-bold text-foreground">
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

          {storeUrl && (
            <a
              href={storeUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium group"
            >
              <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform"/>
              Get the App
            </a>
          )}

          {!project.githubUrl && !project.liveUrl && !storeUrl && (
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