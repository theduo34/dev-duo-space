"use client";

import { MyButton } from "@/components/shared/my-button";

  export default function HeroSection() {
    return (
      <section id="hero" className="section  flex flex-col items-center relative overflow-hidden gap-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"/>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"/>
        </div>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium backdrop-blur-sm border border-border">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          Available for opportunities
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8 text-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-primary font-medium">Hi there!</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                {`I'm Emmanuel`}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Full-stack Developer | DevOps
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A Passionate <span className="text-foreground font-semibold">Full-stack developer</span> and{" "}
              <span className="text-foreground font-semibold">DevOps Engineer</span> with experience in a variety
              of technologies and frameworks.
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <MyButton
                label="Download Resume"
                onClick={() => {
                }}
              />
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full h-full">
              {/* Image Container with rounded corners and border */}
              <div
                className="relative overflow-hidden rounded-3xl border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 h-full">
                {/* Placeholder for your image - replace with actual image */}
                <div className="h-full bg-gradient-to-br from-card to-muted flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div
                      className="w-32 h-32 mx-auto rounded-full bg-primary/20 border-4 border-primary/30 flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                    <p className="text-muted-foreground">
                      Replace with your professional photo
                    </p>
                  </div>
                </div>
                {/* Uncomment and use this when you have your image */}
                {/* <img
                src="/path-to-your-image.jpg"
                alt="Emmanuel Somuah"
                className="w-full h-full object-cover"
              /> */}
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"/>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10"/>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="-translate-x-1/2 animate-bounce pt-8">
          <div className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mx-auto animate-pulse"/>
          </div>
        </div>
      </section>
  );
}