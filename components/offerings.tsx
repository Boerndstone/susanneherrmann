import Image from 'next/image'

const offerings = [
  {
    title: 'Yoga',
    subtitle: 'Hatha & Yin',
    image: '/images/yoga.jpg',
    alt: 'Frau in einer ruhigen Yoga-Haltung im hellen Studio',
    text: 'Lorem ipsum....',
    points: ['vhs Odelzhausen', 'Yoga - Einzelunterricht oder Kleingruppe', 'Yoga- & Pilatesretreat an der Costa Blanca, Spanien'],
  },
  {
    title: 'Pilates',
    subtitle: 'Matte & Kleingerät',
    image: '/images/pilates.png',
    alt: 'Frau bei einer Pilates-Übung mit kleinem Ball auf der Matte',
    text: 'Lorem ipsum....',
    points: ['Rückenfit & Beckenboden', 'Kleine Gruppen bis 8 Personen', 'Rückbildung nach der Geburt'],
  },
  {
    title: 'Naturheilkunde',
    subtitle: 'Heilpraktikerin',
    image: '/images/naturheilkunde.jpg',
    alt: 'Getrocknete Heilkräuter, Ringelblumen und Tinkturfläschchen auf einem Steintisch',
    text: 'Aktuell Hausbesuche. \n Abrechnung nach GebüH für Heilpraktiker für Privatversicherte und Zusatzversicherung für Heilpraktiker für Gesetzlichversicherte. \n Gutschein als Geschenk gerne möglich.',
    points: ['Shiatsu- und Akupressurbehandlung', 'Craniosacraltherapie und Therapeutischer Dialog', 'Akupunkturbehandlung'],
  },
]

export function Offerings() {
  return (
    <section id="angebote" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Angebote</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Drei Wege, ein Ziel: Ihr Wohlbefinden.
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
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item.subtitle}
                  </span>
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
