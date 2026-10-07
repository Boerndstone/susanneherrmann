const testimonials = [
  {
    quote:
      'Nach Jahren mit Rückenschmerzen habe ich durch die Pilates-Stunden bei Lena endlich wieder Vertrauen in meinen Körper gefunden.',
    name: 'Sabine K.',
    context: 'Pilates Rückenfit',
  },
  {
    quote:
      'Die Mittwochabende im Yin Yoga sind mein fester Anker in der Woche. Ruhig, warm und mit so viel Achtsamkeit geführt.',
    name: 'Jonas M.',
    context: 'Yin Yoga',
  },
  {
    quote:
      'Lena hat sich wirklich Zeit genommen und genau zugehört. Die naturheilkundliche Begleitung hat mir aus meiner Erschöpfung geholfen.',
    name: 'Miriam T.',
    context: 'Naturheilkunde',
  },
]

export function Testimonials() {
  return (
    <section id="stimmen" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-4 md:max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Stimmen</p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
          Was andere erleben.
        </h2>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {testimonials.map((item) => (
          <figure key={item.name} className="flex flex-col justify-between gap-8 border-t border-foreground/80 pt-6">
            <blockquote className="font-serif text-xl leading-snug text-foreground text-pretty">
              {`„${item.quote}“`}
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <span className="font-medium text-foreground">{item.name}</span>
              <span className="text-sm text-muted-foreground">{item.context}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
