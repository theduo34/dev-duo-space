'use client';

import {Marquee} from "@/components/ui/marquee";

const skillIcons = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "Tailwind", icon: "💨" },
  { name: "Redux", icon: "🔮" },
  { name: "Firebase", icon: "🔥" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Figma", icon: "🎨" },
  { name: "Postman", icon: "📮" }
];


export default function AboutMe() {

  const firstRow = skillIcons.slice(0, 8);
  const secondRow = skillIcons.slice(8, 16);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/*professional summary*/}
      <div className="space-y-4 text-left">
        <p className="leading-relaxed">
          I am a results-driven <span className="font-semibold">Fullstack Developer</span> with a strong backend focus in Java and Spring Boot, experienced in building scalable, secure, and user-centric web applications. Proven ability to collaborate with cross-functional teams to deliver high-quality solutions. Adept at designing RESTful APIs, applying MVC and SOLID principles, and optimizing performance in fast-paced environments.
        </p>
        <p className="leading-relaxed">
          Working alongside my colleagues, I contribute to shaping the digital landscape, driving innovation in web application design and development. Being part of this dynamic environment allows me to push the boundaries of {`what's`} possible in software.
        </p>
      </div>

      {/* Skill set Section */}
      <div className="space-y-4">
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-2">Skillset</h3>
          <p className="">
            Here are the technologies and tools I use in my development workflow, enabling me to build efficient, scalable, and high-quality web applications.
          </p>
        </div>

        <div className="relative space-y-4">
          {/* First Row - Right to Left */}
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((skill) => (
              <div key={skill.name} className="mx-4">
                <span className="text-6xl">{skill.icon}</span>
              </div>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((skill) => (
              <div key={skill.name} className="mx-4">
                <span className="text-3xl">{skill.icon}</span>
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((skill) => (
              <div key={skill.name} className="mx-4 ">
                <span className="text-2xl">{skill.icon}</span>
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </div>
  )
}