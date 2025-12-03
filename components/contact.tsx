"use client";

import { useInView } from "@/hooks/use-in-view";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="mb-4 font-mono text-primary">04. What's next?</p>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Please contact me
        </h2>
        <p className="mb-12 text-muted-foreground leading-relaxed">
          I am currently seeking new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out. I will do my best to
          get back to you as soon as possible!
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href="mailto:lequanghung.work@gmail.com"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded border border-primary px-8 py-4 font-mono text-primary transition-all duration-300 hover:bg-primary/10"
          >
            <Mail size={20} />
            <span>Send Email</span>
            <div className="absolute inset-0 -z-10 translate-y-full bg-primary/10 transition-transform duration-300 group-hover:translate-y-0" />
          </a>

          <a
            href="https://t.me/hunghaohan2309"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded bg-primary px-8 py-4 font-mono text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            <Send size={20} />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
