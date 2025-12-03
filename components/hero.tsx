"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-primary">Hi, I'm</p>
        </div>

        <div
          className={`transition-all delay-100 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-4 text-5xl font-bold text-foreground md:text-7xl">Hung Le Quang.</h1>
        </div>

        <div
          className={`transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold text-muted-foreground md:text-6xl">
            I build great things.
          </h2>
        </div>

        <div
          className={`transition-all delay-300 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
            I'm a Full Stack Developer with a passion for creating beautiful, high-performing, and accessible web experiences. Currently, I am focusing on building special digital products.
          </p>
        </div>

        <div
          className={`flex flex-col gap-6 sm:flex-row sm:items-center transition-all delay-[400ms] duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded border border-primary px-8 py-4 font-mono text-primary transition-all duration-300 hover:bg-primary/10"
          >
            <span className="relative z-10">See my projects</span>
            <div className="absolute inset-0 -z-0 translate-y-full bg-primary/10 transition-transform duration-300 group-hover:translate-y-0" />
          </a>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/chishiya2309", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/hung-le-quang-154210239/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lequanghung.work@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors duration-300 hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
