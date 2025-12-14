'use client';

import {Calendar, GraduationCap, MapPin} from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
}

const educationData: Education[] = [
  {
    institution: "Koforidua Technical University",
    degree: "Higher National Diploma in Computer Networking Management",
    location: "Ghana",
    period: "Jan 2022 – Sept 2024",
    highlights: [
      "Acquired expertise in IP addressing, subnetting, and troubleshooting network infrastructures",
      "Developed foundational programming skills in Java, C++, and Visual Basic"
    ]
  },
  {
    institution: "University of the People",
    degree: "Online Degree, Diploma of Science in Computer Science",
    location: "Online",
    period: "Sept 2021 – Jan 2024",
    highlights: [
      "Studied Python programming, Java OOP principles, and computer science fundamentals",
      "Gained skills in collaborative online learning and global educational diversity"
    ]
  }
];


export default function Education() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 text-muted-foreground">
      {educationData.map((edu) => (
        <div
          key={`${edu.degree}${edu.institution}`}
          className="bg-card border border-border rounded-card p-4 md:p-8 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-5 h-5 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">
                    {edu.institution}
                  </h3>
                  <p className="text-md md:text-lg text-primary font-semibold">
                    {edu.degree}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 lg:text-right text-sm">
              <div className="flex items-center gap-1.5 lg:justify-end">
                <Calendar className="w-4 h-4"/>
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1.5 lg:justify-end">
                <MapPin className="w-4 h-4"/>
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {edu.highlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="text-primary">▸</span>
                <p className="text-sm leading-relaxed flex-1">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}