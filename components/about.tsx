import Image from 'next/image'

const credentials = [
  { year: '2007', label: 'Craniosacraltherapeutin, Therapeutischer Dialog' },
  { year: '2000', label: 'Traditionelle Chinesische Medizin' },
  { year: '1999', label: 'Shiatsu- und Akupressurtherapeutin' },
  { year: '1999', label: 'Heilpraktikerin' },
  { year: '1999', label: 'Yogalehrerin' },
  { year: '1992', label: 'staatlich anerkannte Erzieherin' },
]

export function About() {
  return (
    <section id="ueber-mich" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted md:sticky md:top-28">
            <Image
              src="/images/uebermich.jpg"
              alt="Über Mich Susanne Herrmann"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Susanne Herrmann</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Hallo, ich bin Susanne Herrmann
          </h2>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Bewegung, Achtsamkeit und ein bewusster Lebensstil begleiten mich schon seit langem. Bereits im Alter von 18 Jahren lernte ich Yoga kennen und habe mich das erste Mal in meinem Leben „zu Hause gefühlt". 
            </p>
            <p>
              Nach meiner beruflichen Laufbahn als Erzieherin in verschiedenen Arbeitsfeldern mit Kindern und jungen Menschen qualifizierte ich mich als Yogalehrerin und Heilpraktikerin. Mit viel Achtsamkeit, Einfühlungsvermögen und Wertschätzung begleite ich Menschen dabei, zur Ruhe und innerem Frieden zu kommen, neue Energie zu schöpfen und wieder gesünder zu werden. Es ist meine Berufung und Passion Menschen „mit allen Sinnen zu berühren".
            </p>
          </div>

          <blockquote className="border-l-2 border-accent py-1 pl-6 font-serif text-2xl leading-snug text-foreground text-pretty">
            {'„Ich freue mich auf Sie.“'}<br />{'Ihre Susanne Herrmann'}
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
