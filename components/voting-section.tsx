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

const nominees = {
  ep: [
    { id: 1, title: "B.O.Y (Best of You)", artist: "Kylie Cantrall", image: "/purple-album-cover.png" },
    { id: 2, title: "10 Minute Songs (Volume 1)", artist: "Kylie Cantrall", image: "/ep-cover-neon.jpg" },
    { id: 3, title: "Nights Edition", artist: "Kylie Cantrall", image: "/music-ep-blue.jpg" },
  ],
  musica: [
    { id: 4, title: "Feeling Some Type of Way", artist: "Kylie Cantrall", image: "/music-single-cover.jpg" },
    { id: 5, title: "Red", artist: "Kylie Cantrall", image: "/pop-song-cover.jpg" },
    { id: 6, title: "Crazy Town", artist: "Kylie Cantrall", image: "/music-artwork.jpg" },
    { id: 7, title: "That's What I Want", artist: "Kylie Cantrall", image: "/single-artwork.jpg" },
  ],
  boy: [
    { id: 8, title: "Best of You", artist: "EP B.O.Y", image: "/purple-album-cover.png" },
    { id: 9, title: "Red Hearts", artist: "EP B.O.Y", image: "/pop-song-cover.jpg" },
    { id: 10, title: "Falling", artist: "EP B.O.Y", image: "/music-artwork.jpg" },
    { id: 11, title: "Dreams", artist: "EP B.O.Y", image: "/single-artwork.jpg" },
  ],
  "10min": [
    { id: 12, title: "10 Minute Love Song", artist: "10 Minute Songs Vol. 1", image: "/ep-cover-neon.jpg" },
    { id: 13, title: "Extended Dreams", artist: "10 Minute Songs Vol. 1", image: "/music-ep-blue.jpg" },
    { id: 14, title: "Long Night", artist: "10 Minute Songs Vol. 1", image: "/music-single-cover.jpg" },
  ],
  visualizer: [
    { id: 15, title: "Feeling Some Type of Way (Visualizer)", artist: "Music Video", image: "/music-single-cover.jpg" },
    { id: 16, title: "Red (Official Video)", artist: "Music Video", image: "/pop-song-cover.jpg" },
    { id: 17, title: "Crazy Town (Clip)", artist: "Music Video", image: "/music-artwork.jpg" },
    { id: 18, title: "That's What I Want (Visual)", artist: "Music Video", image: "/single-artwork.jpg" },
  ],
  coreografia: [
    { id: 19, title: "Red Performance", artist: "Coreografia", image: "/stage-outfit.jpg" },
    { id: 20, title: "Feeling Some Type of Way Dance", artist: "Coreografia", image: "/music-single-cover.jpg" },
    { id: 21, title: "Awards Show Performance", artist: "Coreografia", image: "/award-show-outfit.jpg" },
    { id: 22, title: "TikTok Dance Challenge", artist: "Coreografia", image: "/pop-song-cover.jpg" },
  ],
  atuacao: [
    { id: 23, title: "Descendants: The Rise of Red", artist: "Disney+", image: "/red-carpet-gown.jpg" },
    { id: 24, title: "Gabby Duran & The Unsittables", artist: "Disney Channel", image: "/award-show-outfit.jpg" },
    { id: 25, title: "The Phantom", artist: "Film", image: "/fashion-street-style.jpg" },
  ],
  outfit: [
    { id: 26, title: "Met Gala 2024", artist: "Red Carpet", image: "/red-carpet-gown.jpg" },
    { id: 27, title: "MTV Awards Look", artist: "Awards Show", image: "/award-show-outfit.jpg" },
    { id: 28, title: "Street Style", artist: "Casual", image: "/fashion-street-style.jpg" },
    { id: 29, title: "Magazine Photoshoot", artist: "Editorial", image: "/abstract-fashion-editorial.png" },
    { id: 30, title: "Concert Outfit", artist: "Performance", image: "/stage-outfit.jpg" },
  ],
  feat: [
    { id: 31, title: "That's What I Want", artist: "feat. Artist 1", image: "/kylie-cantrall-collaboration.jpg" },
    { id: 32, title: "Crazy Town", artist: "feat. Artist 2", image: "/kylie-music-collab.jpg" },
    { id: 33, title: "Feeling Some Kinda Way", artist: "feat. Artist 3", image: "/duet-performance.jpg" },
    { id: 34, title: "Red Hearts", artist: "feat. Artist 4", image: "/music-collaboration.png" },
  ],
  "musica-filme": [
    {
      id: 35,
      title: "What's My Name (Red Version)",
      artist: "Descendants: The Rise of Red",
      image: "/red-carpet-gown.jpg",
    },
    { id: 36, title: "Life Is Sweeter", artist: "Descendants: The Rise of Red", image: "/pop-song-cover.jpg" },
    { id: 37, title: "Red", artist: "Descendants: The Rise of Red", image: "/music-artwork.jpg" },
    { id: 38, title: "Love Ain't It", artist: "Descendants: The Rise of Red", image: "/single-artwork.jpg" },
  ],
  fic: [
    { id: 39, title: "Love in Hollywood", artist: "Romance", image: "/romance-book-cover.png" },
    { id: 40, title: "The Rising Star", artist: "Drama", image: "/story-book-cover.jpg" },
    { id: 41, title: "Red Carpet Dreams", artist: "Fiction", image: "/fanfic-cover.jpg" },
    { id: 42, title: "Stage Lights", artist: "AU", image: "/placeholder.svg?height=300&width=300" },
  ],
}

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
