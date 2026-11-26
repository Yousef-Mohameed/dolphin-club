import { useTranslation } from 'react-i18next'
import Champions from '../components/Champions'
import Stats from '../components/Stats'
import { Reveal } from '../lib/reveal'
import { useSEO } from '../lib/seo'

export default function AboutPage() {
  const { t } = useTranslation()
  useSEO({ title: t('seo.aboutTitle'), description: t('seo.aboutDesc') })
  return (
    <main className="pt-6">
      <section className="mx-auto max-w-3xl px-6 py-14 text-center">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold text-glow">{t('about.title')}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{t('about.body')}</p>
        </Reveal>
      </section>
      <Stats />
      <Champions />
    </main>
  )
}
