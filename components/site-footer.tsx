export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-3xl">Susanne Herrmann</span>
          <span className="text-sm text-background/65">Yogalehrerin und Heilpraktikerin</span>
        </div>
        <div className="flex flex-col gap-4 text-sm text-background/65 md:items-end">
          <nav aria-label="Rechtliches" className="flex gap-6">
            <a href="#" className="hover:text-background">
              Impressum
            </a>
            <a href="#" className="hover:text-background">
              Datenschutz
            </a>
          </nav>
          <p>{`© ${new Date().getFullYear()} Susanne Herrmann. Alle Rechte vorbehalten.`}</p>
        </div>
      </div>
    </footer>
  )
}
