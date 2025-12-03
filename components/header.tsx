"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Exercises", href: "#exercises" },
  // { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"}'
      }
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group relative text-2xl font-bold text-primary transition-transform duration-300 hover:scale-105"
          >
            <span className="font-mono">{"<"}</span>
            <span className="text-foreground">LQH</span>
            <span className="font-mono">{" />"}</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <span className="font-mono text-xs text-primary">
                    0{index + 1}.{" "}
                  </span>
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="/23110110_CV.pdf"
                className="rounded border border-primary px-4 py-2 text-sm text-primary transition-all duration-300 hover:bg-primary/10"
              >
                Resume
              </a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-card/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    <span className="font-mono text-xs text-primary">
                      0{index + 1}.{" "}
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/23110110_CV.pdf"
                  className="rounded border border-primary px-4 py-2 text-primary transition-all duration-300 hover:bg-primary/10"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
