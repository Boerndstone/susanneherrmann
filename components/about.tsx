import Image from 'next/image'

const credentials = [
  { year: '2024', label: 'Zertifizierung Yin Yoga & Faszien' },
  { year: '2019', label: 'Pilates-Trainerin (Matte & Kleingerät)' },
  { year: '2017', label: 'Heilpraktikerin, Erlaubnis nach HeilprG' },
  { year: '2014', label: 'Yogalehrerin, 500 h (BDY-anerkannt)' },
]

export function About() {
  return (
    <section id="ueber-mich" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted md:sticky md:top-28">
            <Image
              src="/images/praxis.png"
              alt="Heller Praxis- und Yogaraum mit Holzboden, Matten und Olivenbaum"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Über mich</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Hallo, ich bin Susanne.
          </h2>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis qui cum repellat, totam unde consectetur odit excepturi harum consequuntur nostrum laudantium est et, molestias id maiores doloremque? Magnam, saepe.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis qui cum repellat, totam unde consectetur odit excepturi harum consequuntur nostrum laudantium est et, molestias id maiores doloremque? Magnam, saepe.
            </p>
          </div>

          <blockquote className="border-l-2 border-accent py-1 pl-6 font-serif text-2xl leading-snug text-foreground text-pretty">
            {'„Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis qui cum repellat, totam unde consectetur“'}
          </blockquote>

          <div className="mt-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Ausbildung</h3>
            <dl className="mt-4 flex flex-col">
              {credentials.map((item) => (
                <div key={item.label} className="flex items-baseline gap-6 border-t border-border py-4">
                  <dt className="w-14 shrink-0 font-serif text-lg text-primary">{item.year}</dt>
                  <dd className="text-foreground">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
