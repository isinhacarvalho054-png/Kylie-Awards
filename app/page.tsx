import { Hero } from "@/components/hero"
import { VotingSection } from "@/components/voting-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VotingSection />
    </main>
  )
}
