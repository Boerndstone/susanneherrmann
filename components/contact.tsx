import { Mail, MapPin, Phone, Clock } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    label: 'Praxis & Studio',
    value: 'Wiesenweg 12, 79098 Freiburg',
    href: 'https://maps.google.com/?q=Wiesenweg+12+79098+Freiburg',
  },
  { icon: Phone, label: 'Telefon', value: '+49 761 123 456 7', href: 'tel:+497611234567' },
  { icon: Mail, label: 'E-Mail', value: 'hallo@lena-hoffmann.de', href: 'mailto:hallo@lena-hoffmann.de' },
  { icon: Clock, label: 'Praxiszeiten', value: 'Mo – Fr, 9 – 18 Uhr nach Vereinbarung' },
]

export function Contact() {
  return (
    <section id="kontakt" className="bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="flex flex-col gap-6 md:col-span-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Kontakt</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
            Lassen Sie uns sprechen.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Ob Probestunde, Einzeltermin oder naturheilkundliches Erstgespräch – schreiben Sie mir
            oder rufen Sie an. Ich melde mich innerhalb von zwei Werktagen.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:hallo@lena-hoffmann.de?subject=Terminanfrage"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              E-Mail schreiben
            </a>
            <a
              href="tel:+497611234567"
              className="rounded-full px-7 py-3.5 text-sm font-medium text-foreground ring-1 ring-foreground/30 transition-colors hover:bg-background"
            >
              Anrufen
            </a>
          </div>
        </div>

        <ul className="flex flex-col md:col-span-6">
          {details.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-5 border-t border-border py-6 last:border-b">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
                {href ? (
                  <a
                    href={href}
                    className="text-lg text-foreground underline-offset-4 hover:underline"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-lg text-foreground">{value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
