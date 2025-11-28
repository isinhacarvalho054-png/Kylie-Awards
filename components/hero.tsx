import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-background" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Award badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
            <Sparkles className="size-4" />
            <span>Votação Aberta 2025</span>
          </div>

          {/* Main title */}
          <h1 className="mb-4 text-balance font-sans text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Kylie Awards
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl md:text-2xl">
            A maior premiação sobre a Kylie Cantrall
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base">
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold text-primary md:text-3xl">11</div>
              <div className="text-muted-foreground">Categorias</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold text-secondary md:text-3xl">∞</div>
              <div className="text-muted-foreground">Votos</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold text-accent md:text-3xl">1</div>
              <div className="text-muted-foreground">Vencedor por Categoria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
