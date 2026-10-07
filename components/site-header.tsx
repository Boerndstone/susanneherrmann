'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#angebote', label: 'Angebote' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#kurse', label: 'Kurse & Preise' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-foreground">Susanne Herrmann</span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Yogalehrerin und Heilpraktikerin
          </span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Termin anfragen
          </a>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="flex flex-col gap-1 border-t border-border px-5 pb-6 pt-3 md:hidden"
        >
          {[...links, { href: '#kontakt', label: 'Kontakt' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-serif text-2xl text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
