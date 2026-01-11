"use client";

import React, { useState } from "react";
import AboutMe from "@/components/shared/cards/about-me";
import {Separator} from "@/components/ui/separator";
import Image from 'next/image';
import {Briefcase, Github, Instagram, Linkedin, LucideIcon, Mail, MapPin, PhoneIcon} from "lucide-react";
import {GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MY_MAIL, PROFILE_URL, RESUME_URL} from "@/lib/costants";
import {ToggleTheme} from "@/components/layout/toggle-theme";
import Portfolio from "@/components/features/portfolio/portfolio";
import ContactMe from "@/components/features/contact-me/contact-me";
import Link from "next/link";
import {Button} from "@/components/ui/button";

type About = "About Me" | "Portfolio" | "Contact Me";

interface SocialLink {
  icon: LucideIcon;
  label: string;
  url: string;
}

const aboutTabs: { label: About, children: React.ReactNode, href: string}[] = [
  {
    label: "About Me",
    children: <AboutMe/>,
    href: "#about"
  },
  {
    label: "Portfolio",
    children: <Portfolio/>,
    href: "#portfolio"
  },
  {
    label: "Contact Me",
    children: <ContactMe/>,
    href: "#contact"
  },
];

const addresses: {label: string, value: string, icon: LucideIcon }[] = [
  {label: "Email", value: MY_MAIL, icon: Mail,},
  {label: "Phone", value: "+233********73", icon: PhoneIcon },
  {label: "Location", value: "Accra,Ghana", icon: MapPin}
]

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    url: GITHUB_URL,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: LINKEDIN_URL,
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: INSTAGRAM_URL,
  }
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<About>("About Me");

  const handleTabChange = (key: About) => {
    setActiveTab(key);
  }

  const handleViewResume = () => {
    window.open(
      `${RESUME_URL}/view`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="about" className="p-4 md:p-8 min-h-screen">
      <div className="flex flex-col md:flex-row w-full gap-8 min-h-screen md:h-screen">
        {/*Profile section*/}
        <div className="w-full md:w-1/5 flex flex-col justify-start p-2 md:p-6  bg-muted dark:bg-card rounded-card">
          <div className={"flex flex-col gap-2"}>
            <Image
              src={PROFILE_URL}
              alt={"profile image"}
              height={200}
              width={200}
              className="w-full object-cover h-40 w-40 rounded-card"
            />
            <h1 className="text-center text-xl font-bold  leading-tight">
              Emmanuel Somuah
            </h1>
            <p className={"text-center font-mono text-xs"}>
              Frontend-Heavy Fullstack Developer
            </p>
          </div>
          <Separator className={"my-4"}/>

          <div className={"flex flex-col gap-2 md:gap-6"}>
            {addresses.map((address) => {
              const IconComponent = address.icon;
              return (
                <div key={address.label} className="flex items-start justify-start gap-4 text-sm overflow-hidden">
                  <div className={"p-1.5 md:p-3 rounded-card"}>
                    <IconComponent className="h-5 w-5 text-secondary"/>
                  </div>
                  <div className={"flex flex-col"}>
                    <h3 className={"text-muted-foreground"}>{address.label}</h3>
                    <p className={"line-clamp-1"}>{address.value}</p>
                  </div>
                </div>
              )
            })}

            <div  className="flex items-start justify-start gap-4 text-sm">
              <div className={"p-1.5 md:p-3 rounded-card"}>
                <Briefcase className="h-5 w-5 text-secondary"/>
              </div>
              <div className={"flex flex-col"}>
                <Button variant={"link"} className={"p-0"} onClick={() => handleViewResume()}>
                  Visit resume
                </Button>
              </div>
            </div>

            <div className={"flex items-center justify-between"}>
              <div className={"flex items-center justify-center text-center gap-4"}>
                {socialLinks.map(link => {
                  const IconComponent = link.icon;
                  return (
                    <Link key={link.label} href={link.url} target="_blank">
                      <IconComponent className="h-5 w-5"/>
                    </Link>
                  )
                })}
              </div>
              <ToggleTheme/>
            </div>
          </div>
        </div>

        {/*About and other info section*/}
        <div
          className="w-full md:w-4/5 mx-auto space-y-8 bg-muted dark:bg-card rounded-card justify-start overflow-y-auto">
          <div className={"flex flex-col gap-2"}>
            <div className="flex items-start justify-between">
              <div className="ps-2 md:ps-6 pt-4 md:pt-6">
                <div className="space-y-2">
                  <h2 className="text-sm md:text-4xl font-bold text-foreground">
                    {activeTab}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 dark:bg-muted bg-primary/20 border rounded-card">
                {aboutTabs.map((tab) => {
                  const active = activeTab === tab.label;
                  return (
                    <Link href={tab.href} key={tab.label}>
                      <div
                        onClick={() => handleTabChange(tab.label)}
                        className={`px-2 md:px-4 py-1 text-sm md:text-base cursor-pointer font-medium capitalize transition-all duration-300 ${active ? "text-accent shadow-md" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="mx-2 md:mx-6 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="px-2 md:px-6 pb-4 md:pb-6">
            {aboutTabs.find((tab) => tab.label === activeTab)?.children}
          </div>
        </div>
      </div>
    </section>
  );
}