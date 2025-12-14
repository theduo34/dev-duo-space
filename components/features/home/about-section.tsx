"use client";

import { useState } from "react";
import AboutMe from "@/components/shared/cards/about-me";
import Education from "@/components/shared/cards/education";

type About = "About Me" | "Education";

const aboutTabs: { label: About, children: React.ReactNode}[] = [
  {
    label: "About Me",
    children: <AboutMe/>
  },
  {
    label: "Education",
    children: <Education/>
  },
]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<About>("About Me");

  const handleTabChange = (key: About) => {
    setActiveTab(key);
  }

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto space-y-8 bg-muted dark:bg-card rounded-card justify-start">
        <div className={"flex flex-col gap-2"}>
          <div className="flex items-start justify-between">
            <div className="ps-4 md:ps-8 pt-4 md:pt-8">
              <div className="space-y-2">
                <h2 className="text-lg md:text-4xl font-bold text-foreground">
                  {activeTab}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1.5 dark:bg-muted bg-primary/20 border rounded-card">
              {aboutTabs.map((tab) => {
                const active = activeTab === tab.label;
                return (
                  <div
                    key={tab.label}
                    onClick={() => handleTabChange(tab.label)}
                    className={`px-2 md:px-4 py-1 cursor-pointer font-medium capitalize transition-all duration-300 ${ active ? "text-accent shadow-md" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mx-4 md:mx-8 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="px-4 md:px-8 pb-4 md:pb-8">
          {aboutTabs.find((tab) => tab.label === activeTab)?.children}
        </div>
      </div>
    </section>
  );
}