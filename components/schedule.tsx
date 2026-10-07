const classes = [
  { day: 'Montag', time: '18:00 – 19:15', name: 'Hatha Yoga', level: 'Alle Level' },
  { day: 'Dienstag', time: '09:30 – 10:30', name: 'Pilates Rückenfit', level: 'Einsteiger' },
  { day: 'Mittwoch', time: '19:00 – 20:15', name: 'Yin Yoga & Meditation', level: 'Alle Level' },
  { day: 'Donnerstag', time: '18:30 – 19:30', name: 'Pilates Matte', level: 'Fortgeschritten' },
  { day: 'Samstag', time: '10:00 – 11:30', name: 'Yoga Flow', level: 'Alle Level' },
]

const prices = [
  { label: 'Probestunde', price: '15 €', note: 'einmalig, für alle Kurse' },
  { label: '10er-Karte', price: '160 €', note: 'Yoga & Pilates, 4 Monate gültig' },
  { label: 'Einzelstunde', price: '75 €', note: '60 Minuten, Yoga oder Pilates' },
  { label: 'Naturheilkunde', price: 'ab 90 €', note: 'Erstanamnese ca. 90 Minuten (GebüH)' },
]

export function Schedule() {
  return (
    <section id="kurse" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Kurse & Preise</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Finden Sie Ihren Rhythmus.
          </h2>
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">Wochenplan</h3>
            <ul className="mt-4 flex flex-col">
              {classes.map((item) => (
                <li
                  key={item.day + item.name}
                  className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1 border-t border-primary-foreground/20 py-5 sm:grid-cols-[7rem_9rem_1fr_auto] sm:items-baseline"
                >
                  <span className="font-serif text-lg">{item.day}</span>
                  <span className="text-sm text-primary-foreground/70 sm:text-base">{item.time}</span>
                  <span className="col-span-2 font-medium sm:col-span-1">{item.name}</span>
                  <span className="col-span-2 text-xs uppercase tracking-[0.15em] text-primary-foreground/60 sm:col-span-1">
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">Preise</h3>
            <div className="mt-4 flex flex-col gap-3">
              {prices.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-primary-foreground/[0.07] px-5 py-4 ring-1 ring-primary-foreground/15"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-sm text-primary-foreground/65">{item.note}</span>
                  </div>
                  <span className="shrink-0 font-serif text-2xl text-accent">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/65">
              Viele Krankenkassen bezuschussen Präventionskurse. Heilpraktikerleistungen können
              teilweise über private Zusatzversicherungen erstattet werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
