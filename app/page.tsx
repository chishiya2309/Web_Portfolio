import { MouseFollower } from "@/components/mouse-follower"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MouseFollower />  
      <Header />
      <Footer />
    </main>
  )
}