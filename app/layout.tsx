import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yoga, Pilates & Naturheilkunde in Odelzhausen | Susanne Herrmann',
  description:
    'Yoga, Pilates und Naturheilkunde in Odelzhausen bei Dachau. Susanne Herrmann begleitet Sie mit Yogakursen, Shiatsu und Craniosacraltherapie.',
  metadataBase: new URL('https://www.susanneherrmann.de/'),
  alternates: {
    canonical: 'https://www.susanneherrmann.de/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Susanne Herrmann',
    title: 'Susanne Herrmann – Yogalehrerin und Heilpraktikerin',
    description:
      'Yoga, Pilates und Naturheilkunde: Susanne Herrmann begleitet Sie mit achtsamer Bewegung und ganzheitlichen Behandlungen.',
    url: 'https://www.susanneherrmann.de/',
    images: [
      {
        url: 'https://www.susanneherrmann.de/images/portraitNeu.jpg',
        alt: 'Susanne Herrmann – Yogalehrerin und Heilpraktikerin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Susanne Herrmann – Yogalehrerin und Heilpraktikerin',
    description:
      'Yoga, Pilates und Naturheilkunde: Susanne Herrmann begleitet Sie mit achtsamer Bewegung und ganzheitlichen Behandlungen.',
    images: ['https://www.susanneherrmann.de/images/portraitNeu.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eff1eb',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.susanneherrmann.de/#susanne-herrmann',
  name: 'Susanne Herrmann',
  url: 'https://www.susanneherrmann.de/',
  image: 'https://www.susanneherrmann.de/images/portraitNeu.jpg',
  jobTitle: ['Yogalehrerin', 'Heilpraktikerin'],
  description:
    'Yogalehrerin und Heilpraktikerin mit Angeboten in Yoga, Pilates und Naturheilkunde.',
  email: 'susanne.sittenbach@gmx.de',
  telephone: '+49 176 16120801',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
