
import { Marquee } from "@/components/ui/marquee";
import { Icon } from "@iconify/react";

const skillIcons = [
  { name: "React", icon: "logos:react" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Redis", icon: "logos:redis" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "Stripe", icon: "logos:stripe" },
  { name: "Java", icon: "logos:java" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "Figma", icon: "logos:figma" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "Postman", icon: "logos:postman-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "PHP", icon: "logos:php" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "JavaScript", icon: "logos:javascript" },
];


export default function AboutMe() {
  const firstRow = skillIcons.slice(0, 13);
  const secondRow = skillIcons.slice(13);

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Professional Summary */}
      <div className="space-y-4 text-left">
        <p className="leading-relaxed">
          I’m a <span className="font-semibold">Frontend-Focused Fullstack Developer</span> specializing in building modern, high-performance web applications with
          <span className="font-medium"> React and Next.js</span>, and cross-platform
          mobile applications using <span className="font-medium">React Native (Expo)</span>.
          I’m passionate about crafting intuitive user interfaces that are scalable,
          accessible, and performance-driven.
        </p>

        <p className="leading-relaxed">
          I have experience developing dashboards, fintech platforms, investment systems, and health-focused applications, translating complex business requirements into clean, maintainable, and user-friendly interfaces. I work closely with designers, backend engineers, and product teams to ensure seamless user experiences across web and mobile platforms.
        </p>

        <p className="leading-relaxed">
          While my strength lies in frontend engineering, I’m comfortable integrating
          APIs, managing application state, and collaborating across the stack to deliver complete, production-ready solutions that solve real-world problems.
        </p>
      </div>

      {/* Skillset Section */}
      <div className="space-y-4">
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-2">Skillset</h3>
          <p>
            The tools and technologies I use to design, build, and ship modern web and
            mobile applications.
          </p>
        </div>

        <div className="relative space-y-4">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((skill) => (
              <div key={skill.name} className="mx-6">
                <Icon
                  icon={skill.icon}
                  width={48}
                  height={48}
                />
              </div>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((skill) => (
              <div key={skill.name} className="mx-6">
                <Icon
                  icon={skill.icon}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </Marquee>

          {/*<Marquee reverse pauseOnHover className="[--duration:20s]">*/}
          {/*  {thirdRow.map((skill) => (*/}
          {/*    <div key={skill.name} className="mx-6">*/}
          {/*      <Icon*/}
          {/*        icon={skill.icon}*/}
          {/*        width={40}*/}
          {/*        height={40}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</Marquee>*/}
        </div>
      </div>
    </div>
  );
}
