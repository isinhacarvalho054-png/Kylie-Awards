"use client"

import { useState } from "react"
import { VotingCard } from "@/components/voting-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const categories = [
  { id: "ep", label: "Melhor EP", icon: "💿" },
  { id: "musica", label: "Melhor Música", icon: "🎵" },
  { id: "boy", label: "Melhor Música do EP B.O.Y", icon: "🎧" },
  { id: "10min", label: "Melhor Música do EP 10 Minute Songs (Volume 1)", icon: "⏱️" },
  { id: "visualizer", label: "Melhor Visualizer/Clip", icon: "🎬" },
  { id: "coreografia", label: "Melhor Coreografia", icon: "💃" },
  { id: "atuacao", label: "Melhor Filme/Série Atuação", icon: "🎭" },
  { id: "outfit", label: "Melhor Outfit", icon: "👗" },
  { id: "feat", label: "Melhor Feat", icon: "🎤" },
  { id: "musica-filme", label: "Melhor Filme/Série Música", icon: "🎼" },
  { id: "fic", label: "Melhor Fic", icon: "📖" },
]

const nominees = 
  export const kylieAwardsData = {
  // Slide 5-6: Melhor EP
  ep: [
    { id: 1, title: "B.O.Y", artist: "Kylie Cantrall", image: "/Boy.jpg" },
    { id: 2, title: "B.O.Y (Delux)", artist: "Kylie Cantrall", image: "/boy-delux.jpg" },
    { id: 3, title: "10 Minute Songs (Volume 1)", artist: "Kylie Cantrall", image: "/10minutes-songs.avif" },
  ],

  // Slide 9-10: Melhor Música
  musica: [
    { id: 4, title: "Elastic", artist: "Kylie Cantrall", image: "/Elastic.jpg" },
    { id: 5, title: "Denim", artist: "Kylie Cantrall", image: "/Denim.jpg" },
    { id: 6, title: "Goodie Bag", artist: "Kylie Cantrall", image: "/Goodie-Bag.jpg" },
    { id: 7, title: "Red", artist: "Kylie Cantrall", image: "/Red.jpg" },
    { id: 8, title: "Boy For A Day", artist: "Kylie Cantrall", image: "/Boy-for-a-day.jpg" },
    { id: 9, title: "Like A Movie", artist: "Kylie Cantrall", image: "/10minutes-songs.avif" },
  ],

  // Slide 11-12: Melhor Música do EP B.O.Y
  boy: [
    { id: 10, title: "RAISED BY RIHANNA", artist: "EP B.O.Y", image: "/Boy.jpg" },
    { id: 11, title: "BOY IS OURS", artist: "EP B.O.Y", image: "/Boy.jpg" },
    { id: 12, title: "Boy For A Day", artist: "EP B.O.Y", image: "/Boy-for-a-day.jpg" },
    { id: 13, title: "Goodie Bag", artist: "EP B.O.Y", image: "/Goodie-Bag.jpg" },
    { id: 14, title: "Denim", artist: "EP B.O.Y", image: "/Denim.jpg" },
    { id: 15, title: "See U Tonight", artist: "EP B.O.Y", image: "/SEE-U-TONIGTH.jpg" },
  ],

  // Slide 13-14: Melhor Música do EP 10 Minute Songs (Vol 1)
  "10min": [
    { id: 16, title: "Like A Movie", artist: "10 Minute Songs", image: "/10minutes-songs.avif" },
    { id: 17, title: "Mascara", artist: "10 Minute Songs", image: "/10minutes-songs.avif" },
    { id: 18, title: "Dear Diary", artist: "10 Minute Songs", image: "/10minutes-songs.avif" },
    { id: 19, title: "Put The Record On", artist: "10 Minute Songs", image: "/10minutes-songs.avif" },
  ],

  // Slide 15-16: Melhor Visualizer/Clip
  visualizer: [
    { id: 20, title: "Boy For A Day", artist: "Visualizer", image: "/Boy-for-a-day.jpg" },
    { id: 21, title: "See U Tonight", artist: "Visualizer", image: "SEE-U-TONIGTH.jpg" },
    { id: 22, title: "Denim", artist: "Visualizer", image: "/Denim.jpg" },
    { id: 23, title: "Goodie Bag", artist: "Visualizer", image: "/Goodie-Bag.jpg" },
    { id: 24, title: "99", artist: "Visualizer", image: "/99.jpg" },
  ],

  // Slide 17-18: Melhor Coreografia
  coreografia: [
    { id: 25, title: "Elastic", artist: "Dance", image: "/Boy-for-a-day.jpg" },
    { id: 26, title: "Red", artist: "Dance", image: "/Red.jpg" },
    { id: 27, title: "See U Tonight", artist: "Dance", image: "/SEE-U-TONIGTH.jpg" },
    { id: 28, title: "Boy For A Day", artist: "Dance", image: "/dance/boy-day.jpg" },
    { id: 29, title: "Goodie Bag", artist: "Dance", image: "/Boy-for-a-day.jpg" },
    { id: 30, title: "Texts go Green", artist: "Dance", image: "/Texts-go-green.jpg" },
  ],

  // Slide 19-20: Melhor Filme/Série (Atuação)
  atuacao: [
    { id: 31, title: "Gabby Duran", artist: "Série", image: "/Gabby-Duran.jpg" },
    { id: 32, title: "Descendentes 4", artist: "Filme", image: "/Descendentes4.jpg" },
    { id: 33, title: "High School Musical: The Series", artist: "Série", image: "/High-School-Musical.jpg" },
  ],

  // Slide 7-8: Melhor Outfit
  outfit: [
    { id: 34, title: "Premiere Descendentes 4", artist: "Red Carpet", image: "/PremiereDescendentes4.jpg" },
    { id: 35, title: "Premiere Zombies 4", artist: "Red Carpet", image: "/PremiereZombies4.jpg" },
    { id: 36, title: "Grammy 2024", artist: "Red Carpet", image: "/Grammy2024.jpg" },
  ],

  // Slide 3-4: Melhor Feat
  feat: [
    { id: 37, title: "See U Tonight", artist: "Feat", image: "/SEE-U-TONIGTH.jpg" },
    { id: 38, title: "What's My Name", artist: "Feat", image: "/What's-my-name.jpg" },
    { id: 39, title: "Usure", artist: "Feat", image: "/UNSURE.jpg" },
    { id: 40, title: "Wickedly Sweet", artist: "Feat", image: "/Wickedly-Sweet.jpg" },
    { id: 41, title: "Sad Boy", artist: "Feat", image: "/Sad-Boy.jpg" },
    { id: 42, title: "Fight Of Our Lives", artist: "Feat", image: "/Fight-of-our-lives.jpg" },
  ],

  // Slide 21-22: Melhor Filme/Série (Música)
  "musica-filme": [
    { id: 43, title: "Red", artist: "Descendants 4", image: "/Red.jpg" },
    { id: 44, title: "Calling All The Monsters", artist: "Soundtrack", image: "/calling-all-the-monters.jpg" },
    { id: 45, title: "Feeling Some Kinda Way", artist: "Soundtrack", image: "/Feeling-some-kinda-way.jpg" },
    { id: 46, title: "What's My Name (Red Version)", artist: "Descendants 4", image: "/What's-my-name.jpg" },
    { id: 47, title: "Fight Of Our Lives", artist: "Soundtrack", image: "/Fight-of-our-lives.jpg" },
  ],

  fic: [
    { id: 48, title: "Entre Astros e Trofeus", artist: "Fanfic", image: "/EntreAstroseTrofeus.jpg" },
    { id: 49, title: "Rivais até o Último Salto", artist: "Fanfic", image: "/RivaisateoUltimoSalto.jpg" },
    { id: 50, title: "Sussurros da Meia-Noite", artist: "Fanfic", image: "/SussurrosdaMeiaNoite.jpg" },
    { id: 51, title: "Na Sombra do Pecado", artist: "Fanfic", image: "/NaSombradoPecado.jpg" },
    { id: 52, title: "The Rain", artist: "Fanfic", image: "/TheRain.jpg" },
  ],
};

export function VotingSection() {
  const [activeCategory, setActiveCategory] = useState("ep")
  const [votes, setVotes] = useState<Record<string, number>>({})

  const handleVote = (nomineeId: number) => {
    setVotes((prev) => ({
      ...prev,
      [nomineeId]: (prev[nomineeId] || 0) + 1,
    }))
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Vote nas Suas Favoritas
        </h2>
        <p className="text-pretty text-muted-foreground md:text-lg">
          Escolha as categorias abaixo e vote nos seus favoritos
        </p>
      </div>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-all hover:bg-card/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground md:px-6 md:text-base"
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {nominees[category.id as keyof typeof nominees].map((nominee) => (
                <VotingCard
                  key={nominee.id}
                  title={nominee.title}
                  artist={nominee.artist}
                  image={nominee.image}
                  votes={votes[nominee.id] || 0}
                  onVote={() => handleVote(nominee.id)}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
