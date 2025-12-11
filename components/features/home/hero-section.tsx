"use client";

import {Code2, Database, PhoneCall} from "lucide-react";
import {MyButton} from "@/components/shared/my-button";
import {Button} from "@/components/ui/button";

const techStack = [
  {label: "Frontend", icon: <Code2 className="w-5 h-5"/>},
  {label: "Backend", icon: <Database className="w-5 h-5"/>},
  {label: "Mobile Application", icon: <PhoneCall className="w-5 h-5"/>}
];

export default function HeroSection() {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium backdrop-blur-sm border border-border">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for opportunities
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {`Hi, I'm`}{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Emmanuel Somuah
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
            Fullstack Developer
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          I craft seamless digital experiences from frontend to backend,
          turning complex problems into elegant, scalable solutions.
          Specialized in modern web technologies and cloud architecture.
        </p>

        <div className="flex items-center justify-center gap-4 py-4">
          {techStack.map((item, i) => (
            <div key={item.label} className={"flex flex gap-4"}>
              <div className="flex items-center gap-2 text-muted-foreground">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              {i < techStack.length - 1 && (
                <div className="w-px h-6 bg-border"/>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
         <MyButton
           label={"Visit resume"}
           onClick={() => ''}
         />
          <Button className={"rounded-full h-10 px-4 border border-primary/20"} variant="outline">
            Get In Touch
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <div className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}