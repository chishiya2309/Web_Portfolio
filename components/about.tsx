"use client";

import { useInView } from "@/hooks/use-in-view";

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Python",
    "Java",
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-12 flex items-center text-2xl font-bold text-foreground">
          <span className="mr-2 font-mono text-xl text-primary">01.</span>
          About
          <span className="ml-4 h-px flex-1 bg-muted" />
        </h2>

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Hung, a student and an aspiring developer who loves
              creating things that live on the internet. My web development
              journey began in 2025 when I decided to try building my very first
              website — exploring HTML and CSS taught me so much more than I
              expected!
            </p>
            <p>
              Today, I’ve had the chance to work on various personal and
              academic projects, and collaborate with different teams. My
              current focus is on building accessible digital products and
              crafting great user experiences.
            </p>

            <p>
              Here are some of the technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 pt-4">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 font-mono text-sm"
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden rounded">
              <img
                src="/professional-developer-portrait.png"
                alt="Developer portrait"
                className="w-full rounded transition-all duration-300 group-hover:scale-105 group-hover:filter-none grayscale"
              />
              <div className="absolute inset-0 bg-primary/20 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded border-2 border-primary transition-all duration-300 group-hover:-bottom-5 group-hover:-right-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
