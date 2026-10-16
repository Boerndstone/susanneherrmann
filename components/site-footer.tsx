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
        <div className="space-y-4 text-[13px] leading-relaxed">
          <section>
            <h3 className="font-bold text-foreground mb-1">Allgemeine Hinweise</h3>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist für mich ein wichtiges Anliegen. 
              Ich behandle Ihre personenbezogenen Daten gemäß den Datenschutzbestimmungen der 
              EU-Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
            </p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-1">Verantwortliche Stelle</h3>
            <p>
              Verantwortlich für die Datenverarbeitung im Rahmen dieser Website ist:<br />
              <strong>Susanne Herrmann</strong><br />
              Nelkenweg 4b 85235 Sittenbach<br />
              susanne.sittenbach@gmx.com
            </p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-1">Datenerfassung auf dieser Website</h3>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt ausschließlich, wenn Sie mir gegenüber 
              eine entsprechende Einwilligung erklären oder die Verarbeitung zur Erfüllung 
              eines Vertrags oder zur Wahrnehmung berechtigter Interessen erforderlich ist.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Server-Log-Files:</strong> Der Provider der Website erhebt und speichert automatisch 
                IP-Adressen, Datum/Uhrzeit der Anfrage sowie den Browsertyp. Diese Daten sind 
                technisch notwendig, um die Stabilität und Sicherheit der Website zu gewährleisten.
              </li>
              <li>
                <strong>Kontaktformular/E-Mail:</strong> Wenn Sie mir über ein Kontaktformular 
                oder per E-Mail eine Nachricht zukommen lassen, werden meine Angaben aus dem 
                Nachrichtentext auch gespeichert. Diese Daten dienen ausschließlich der Bearbeitung 
                Ihrer Anfrage.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-1">Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft über Ihre bei mir gespeicherten personenbezogenen 
              Daten sowie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. 
              Sie können zudem jederzeit Ihre erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.
            </p>
          </section>

          <section className="pt-2 border-t border-slate-700">
            <p className="italic text-[11px] text-slate-400">
              Hinweis: Diese Datenschutzerklärung dient der Information und stellt keine 
              Rechtsberatung dar.
            </p>
          </section>
        </div>
      </LegalModal>

    </footer>
  )
}