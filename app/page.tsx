import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ExperienceSection } from "@/components/experience-section"
import { ConnectSection } from "@/components/connect-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <HeroSection />
        <FeaturedProjects />
        <ExperienceSection />
        <ConnectSection />
      </div>
    </main>
  )
}
