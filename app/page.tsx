import { MouseFollower } from "@/components/mouse-follower";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import {Exercises} from "@/components/exercises"
import { Skills } from "@/components/skills";
import {Contact} from "@/components/contact"
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MouseFollower />
      <Header />
      <Hero />
      <About />
      <Exercises />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
