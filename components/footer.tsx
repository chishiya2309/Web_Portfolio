import { Github, Linkedin, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/chishiya2309", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hung-le-quang-154210239/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/le.q.hung.2309/",
    label: "Facebook",
  },
];

export function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Social Links - Mobile */}
        <div className="mb-6 flex justify-center gap-6 md:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Credits */}
        <div className="text-center">
          <a
            href="https://github.com/chishiya2309"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-mono text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            <p className="mb-2 flex items-center justify-center gap-1">
              Built with <Heart size={14} className="text-primary" /> by Hung Le
              Quang
            </p>
            <p>© 2025 All Rights Reserved</p>
          </a>
        </div>
      </div>

      {/* Social Links - Desktop Fixed */}
      <div className="fixed bottom-0 left-10 hidden flex-col items-center gap-6 md:flex">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
        <div className="h-24 w-px bg-muted" />
      </div>

      {/* Email - Desktop Fixed */}
      <div className="fixed bottom-0 right-10 hidden flex-col items-center gap-6 md:flex">
        <a
          href="mailto:lequanghung.work@gmail.com"
          className="font-mono text-sm tracking-widest text-muted-foreground transition-colors duration-300 hover:text-primary [writing-mode:vertical-rl]"
        >
          lequanghung.work@gmail.com
        </a>
        <div className="h-24 w-px bg-muted" />
      </div>
    </footer>
  );
}
