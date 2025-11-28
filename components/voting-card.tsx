"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface VotingCardProps {
  title: string
  artist: string
  image: string
  votes: number
  onVote: () => void
}

export function VotingCard({ title, artist, image, votes, onVote }: VotingCardProps) {
  const [isVoted, setIsVoted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleVote = () => {
    setIsVoted(true)
    onVote()

    // Reset after animation
    setTimeout(() => setIsVoted(false), 1000)
  }

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300",
              isHovered && "opacity-100",
            )}
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="mb-1 line-clamp-1 text-balance font-semibold text-foreground">{title}</h3>
          <p className="line-clamp-1 text-sm text-muted-foreground">{artist}</p>
        </div>

        <div className="flex w-full items-center justify-between gap-2">
          <Button
            onClick={handleVote}
            className={cn("flex-1 gap-2 transition-all", isVoted && "animate-pulse bg-primary")}
            variant={isVoted ? "default" : "secondary"}
          >
            <Heart className={cn("size-4 transition-all", isVoted && "fill-current")} />
            <span>{isVoted ? "Votado!" : "Votar"}</span>
          </Button>

          {votes > 0 && (
            <div className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              <Heart className="size-3 fill-current" />
              <span>{votes}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
