const offers = [
  {
    title: 'Yoga- und/Pilates als Einzel- oder Kleingruppe in den eigenen Räumen',
    details: '60 Minuten: 80 € / 90 Minuten: 120 €',
  },
  {
    title: 'Naturheilkunde & Therapeutische Dialoge',
    details: '60 Minuten: 100 €',
    note: 'Bei Personen mit Zusatzversicherung für Heilpraktiker und Privatversicherung werden die Kosten erstattet bzw. je nach Tarif bezuschusst. Rechnungsstellung nach GebüH für Heilpraktiker.',
  },
  {
    title: 'Yoga- und/oder Pilatesretreats mit Natur, Golf & Kulinarik',
    details: 'Ohne oder mit Unterkunft im Beach & Golf Hotel Oliva Nova, Appartement oder Villa – je nach Zeit und Geschmack im Oliva Nova Resort an der Costa Blana, Provinz Valencia. Preis auf Anfrage.',
  },
]

export function Schedule() {
  return (
    <section id="kurse" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Kurse & Preise</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Finden Sie Ihren Wohlfühl - Rhythmus
          </h2>
        </div>

        <div className="mt-14 max-w-4xl">
          <h3 className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">Angebot</h3>

          <div className="mt-4 border-t border-primary-foreground/20 py-5">
            <h4 className="font-serif text-lg">Yoga- und Pilateskurse über vhs Odelzhausen</h4>
            <a
              href="mailto:bildung@vhs-odelzhausen.de"
              className="mt-1 inline-block text-sm text-accent underline-offset-4 hover:underline sm:text-base"
            >
              bildung@vhs-odelzhausen.de
            </a>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Dietenhausenerstrasse 17, 1. Stock
              <br />
              85235 Odelzhausen
            </p>
          </div>

          <ul className="flex flex-col">
            {offers.map((offer) => (
              <li key={offer.title} className="border-t border-primary-foreground/20 py-5">
                <h4 className="font-serif text-lg">{offer.title}</h4>
                <p className="mt-2 font-medium text-accent">{offer.details}</p>
                {offer.note && (
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{offer.note}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
