import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
      <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-8 md:col-span-7 md:pb-10">
          <p className="animate-rise text-xs uppercase tracking-[0.25em] text-primary">
            Yogalehrerin und Heilpraktikerin
          </p>
          <h1
            className="animate-rise font-serif text-5xl leading-[1.02] tracking-tight text-balance text-foreground md:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Lorem ipsum dolor <em className="text-primary">Lorem ipsum dolor</em>.
          </h1>
          <p
            className="animate-rise max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty"
            style={{ animationDelay: '240ms' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero veritatis pariatur! Nobis deserunt incidunt dolores et omnis eaque impedit aliquid, facilis, sint beatae pariatur cumque labore? Quasi, nostrum accusantium.
          </p>
          <div className="animate-rise flex flex-wrap items-center gap-4" style={{ animationDelay: '360ms' }}>
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Erstgespräch vereinbaren
            </a>
            <a
              href="#angebote"
              className="flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Angebote entdecken
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div
            className="animate-rise relative aspect-[3/4] overflow-hidden rounded-t-full bg-muted"
            style={{ animationDelay: '200ms' }}
          >
            <Image
              src="/images/portrait.JPG"
              alt="Susanne Herrmann – Yogalehrerin und Heilpraktikerin"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-full bg-background px-5 py-3 shadow-sm ring-1 ring-border md:-left-10">
            <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-sm text-foreground">Neue Kurse ab Oktober</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}
