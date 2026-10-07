import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Offerings } from '@/components/offerings'
import { About } from '@/components/about'
import { Schedule } from '@/components/schedule'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Offerings />
        <About />
        <Schedule />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
