"use client";

import { useInView } from "@/hooks/use-in-view";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🖥",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: "⚙",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Python",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    title: "Design & Others",
    icon: "🎨",
    skills: [
      "Figma",
      "UI/UX Design",
      "Responsive Design",
      "Accessibility",
      "SEO",
    ],
  },
];

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-12 flex items-center text-2xl font-bold text-foreground">
          <span className="mr-2 font-mono text-xl text-primary">03.</span>
          Skills & Technologies
          <span className="ml-4 h-px flex-1 bg-muted" />
        </h2>

        <p className="mb-10 text-muted-foreground max-w-2xl">
          Here are the technologies and tools I work with regularly. I'm always
          exploring new things and expanding my skill set.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`rounded-lg border border-muted bg-card/50 p-6 transition-all duration-500 hover:border-primary/50 hover:bg-card ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <span className="text-xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20 ${
                      isInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${
                        categoryIndex * 150 + skillIndex * 30
                      }ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
