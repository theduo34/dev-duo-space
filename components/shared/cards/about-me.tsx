
import { Marquee } from "@/components/ui/marquee";
import { Icon } from "@iconify/react";

const skillIcons = [
  { name: "React", icon: "logos:react" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "Stripe", icon: "logos:stripe" },
  { name: "Java", icon: "logos:java" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Flyway", icon: "simple-icons:flyway" },
  { name: "Inertia.js", icon: "simple-icons:inertia" },
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
  const firstRow = skillIcons.slice(0, 9);
  const secondRow = skillIcons.slice(9, 17);
  const thirdRow = skillIcons.slice(17);

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Professional Summary */}
      <div className="space-y-4 text-left">
        <p className="leading-relaxed">
          {`I'm a`} <span className="font-mono">Frontend-Heavy Fullstack Developer</span>. On the web I
          build with <span className="font-medium">React, Next.js, and Vue.js</span>, and on mobile with
          <span className="font-medium"> React Native and Expo</span>.{`On the backend I'm comfortable in
          Node.js and Java with Spring Boot, so I don't need someone else to wire up an API when a
          project calls for it. I also build simulations when that's what the problem actually needs.`}
        </p>

        <p className="leading-relaxed">
          {`What I actually care about is whether an interface makes sense to the person using it: the
            loading states, the error messages, the difference between a form that feels safe to fill out
            and one that doesn't. I'm just as comfortable being the only developer on a project as one of
            several, picking up whatever stack is already there. The specifics of what I've built are in
            Portfolio and Experience; this is just how I build.`}
        </p>
      </div>

      {/* Skillset Section */}
      <div className="space-y-4">
        <div className="text-left">
          <h3 className="text-lg md:text-2xl font-bold mb-2">Skillset</h3>
          <p>
            {`Technologies I've built with.`}
          </p>
        </div>

        <div className="relative space-y-2 md:space-y-4">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((skill) => (
              <div key={skill.name} className="mx-2 md:mx-6">
                <Icon
                  icon={skill.icon}
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((skill) => (
              <div key={skill.name} className="mx-2 md:mx-6">
                <Icon
                  icon={skill.icon}
                  width={52}
                  height={52}
                />
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((skill) => (
              <div key={skill.name} className="mx-2 md:mx-6">
                <Icon
                  icon={skill.icon}
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </div>
  );
}
