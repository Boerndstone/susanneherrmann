"use client";

import React, { useState } from "react";
import { LegalModal } from "@/components/modals/legal-modal";

export function SiteFooter() {

  const [activeModal, setActiveModal] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-3xl">Susanne Herrmann</span>
          <span className="text-sm text-background/65">Yogalehrerin und Heilpraktikerin</span>
        </div>
        <div className="flex flex-col gap-4 text-sm text-background/65 md:items-end">
          <nav aria-label="Rechtliches" className="flex gap-6">
            {/* Impressum Link */}
            <button 
              onClick={() => setActiveModal("impressum")}
              className="hover:underline hover:text-background hover:cursor-pointer"
            >
              Impressum
            </button>

            {/* Datenschutz Link */}
            <button 
              onClick={() => setActiveModal("datenschutz")}
              className="hover:underline hover:text-background hover:cursor-pointer"
            >
              Datenschutz
            </button>
          </nav>
          <p>{`© ${new Date().getFullYear()} Susanne Herrmann. Alle Rechte vorbehalten.`}</p>
        </div>
      </div>
      {/* Impressum Modal */}
      <LegalModal
        isOpen={activeModal === "impressum"}
        onClose={() => setActiveModal(null)}
        title="Impressum"
      >
        <p><strong>Copyright:</strong> © 2026 www.susanneherrmann.de</p>
        <p>Alle Rechte vorbehalten.</p>
        <p className="mt-2"><strong>Inhaltlich verantwortlich gemäß § 6 MDStV:</strong></p>
        <p>Susanne Herrmann</p>
        <p>Nelkenweg 4b</p>
        <p>85235 Sittenbach</p>
        <p>susanne.sittenbach@gmx.com</p>
        <p className="mt-2"><strong>Konzeption und Design:</strong></p>
        <p>Bernd Ullmann</p>
        <p className="mt-2"><strong>Technische Umsetzung:</strong></p>
        <p>Bernd Ullmann | <a href="https://www.berndullmann.de" target="_blank" rel="noopener noreferrer" className="hover:underline">www.berndullmann.de</a></p>
      </LegalModal>

      {/* Datenschutz Modal */}
      <LegalModal
        isOpen={activeModal === "datenschutz"}
        onClose={() => setActiveModal(null)}
        title="Datenschutz"
      >
        <p>Wir legen großen Wert auf den Schutz Ihrer Daten.</p>
        <p className="mt-2">Hier finden Sie alle Informationen zur Verarbeitung Ihrer personenbezogenen Daten...</p>
        {/* Add more privacy details here */}
      </LegalModal>
    </footer>
  )
}