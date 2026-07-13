'use client';

import React from "react";
import PortfolioCard from "@/components/features/portfolio/portfolio-card";
import {myPortfolio, otherWebsites, ProjectInterface, ProjectType} from "@/components/features/portfolio/index";
import {ExternalLink} from "lucide-react";

const Portfolio = () => {
  const groupedProjects = myPortfolio.reduce<Record<ProjectType, ProjectInterface[]>>(
    (acc, project) => {
      acc[project.type] = acc[project.type] || [];
      acc[project.type].push(project);
      return acc;
    },
    {} as Record<ProjectType, ProjectInterface[]>
  );

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      {Object.entries(groupedProjects).map(([type, projects]) => (
        <div key={type} className="flex flex-col">
          <h4 className="text-accent text-lg">{type}</h4>
          <div className="h-0.5 bg-muted-foreground rounded-full my-1"/>

          <div className="flex flex-col gap-8 py-4">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col">
        <h4 className="text-accent text-lg">Other Websites</h4>
        <div className="h-0.5 bg-muted-foreground rounded-full my-1"/>

        <div className="flex flex-col rounded-card border border-border divide-y divide-border mt-4">
          {otherWebsites.map((site) => (
            <a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-4 hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">{site.title}</p>
                <p className="text-sm text-muted-foreground">{site.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0"/>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio