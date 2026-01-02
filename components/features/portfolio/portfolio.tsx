'use client';

import React from "react";
import PortfolioCard from "@/components/features/portfolio/portfolio-card";
import {myPortfolio, ProjectInterface, ProjectType} from "@/components/features/portfolio/index";

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
    <div className="flex flex-col gap-8">
      {Object.entries(groupedProjects).map(([type, projects]) => (
        <div key={type} className="flex flex-col">
          <h4 className="text-accent text-lg">{type}</h4>
          <div className="h-0.5 bg-muted-foreground rounded-full my-1"/>

          <div className="flex flex-col gap-4 py-4">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Portfolio