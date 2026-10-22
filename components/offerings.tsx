import Image from 'next/image'

const offerings = [
  {
    title: 'Yoga & Pilates',
    image: '/images/yoga.jpg',
    alt: 'Frau in einer ruhigen Yoga-Haltung im hellen Studio',
    text: 'Bewege dich bewusst. Stärke Deine Muskulatur und schenke Deinem Geist wohltuende Entspannung und Ruhe.',
    points: ['vhs Odelzhausen - Gruppenunterricht', 'Yoga - Einzelunterricht oder Kleingruppe', 'Yoga- & Pilatesretreat an der Costa Blanca, Spanien'],
  },
  {
    title: 'Naturheilkunde',
    image: '/images/naturheilkunde.jpg',
    alt: 'Getrocknete Heilkräuter, Ringelblumen und Tinkturfläschchen auf einem Steintisch',
    text: 'Aktuell Hausbesuche. \n Abrechnung nach GebüH für Heilpraktiker für Privatversicherte und Zusatzversicherung für Heilpraktiker für Gesetzlichversicherte. \n Gutschein als Geschenk gerne möglich.',
    points: ['Shiatsu- und Akupressurbehandlung', 'Craniosacraltherapie und Therapeutischer Dialog', 'Akupunkturbehandlung'],
  },
  {
    title: 'Yoga & Pilates Retreat',
    image: '/images/retreat.jpg',
    alt: 'Yoga und Pilates',
    text: 'Ein geschützter Raum, in dem du zur Ruhe kommen kannst, neue Perspektiven entdecken und Bedürfnisse wahrnehmen darfst.',
    points: ['Gehen am Sandstrand', 'Journaling', 'Zeit für Golf', 'Wanderungen in der Natur', 'direkter Zugang zu Sandstrand und Mittelmeer', 'individuelle Angebote'],
  },
]

export function Offerings() {
  return (
    <section id="angebote" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Angebote</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            So kann ich Dich unterstützen
          </h2>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {offerings.map((item) => (
            <article key={item.title} className="flex flex-col gap-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <h3 className="font-serif text-3xl text-foreground">{item.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground whitespace-pre-line">{item.text}</p>
                <ul className="mt-1 flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
