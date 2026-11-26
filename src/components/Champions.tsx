import { useTranslation } from 'react-i18next'
import { Trophy, Star } from 'lucide-react'
import { Reveal } from '../lib/reveal'
import { timeline, swimmerOfMonth } from '../data/champions'

export default function Champions() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t('champions.title')}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Swimmer of the month */}
        <Reveal>
          <div className="glow-card sweep h-full rounded-3xl border border-neon/40 bg-card p-8">
            <Star size={32} className="text-neon" />
            <p className="mt-2 text-sm font-semibold text-neon">{t('champions.ofMonth')}</p>
            <div className="mt-4 flex size-20 items-center justify-center rounded-full border border-neon/50 bg-bg2 font-heading text-2xl font-bold text-neon">
              YH
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold">
              {swimmerOfMonth.name[lang]}, {swimmerOfMonth.age}
            </h3>
            <p className="mt-1 font-semibold text-neon">{swimmerOfMonth.stat[lang]}</p>
            <blockquote className="mt-4 border-s-2 border-neon/50 ps-4 text-muted">
              {swimmerOfMonth.quote[lang]}
            </blockquote>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <ol className="relative space-y-8 border-s-2 border-line ps-6">
            {timeline.map((y, i) => (
              <Reveal key={y.year} delay={i * 100}>
                <li className="relative">
                  <span className="absolute -start-[31px] top-1 flex size-4 items-center justify-center rounded-full bg-neon shadow-[0_0_12px_rgba(31,224,255,0.9)]" />
                  <p className="flex items-center gap-2 font-heading text-xl font-bold text-neon">
                    <Trophy size={18} />
                    {y.year}
                  </p>
                  <ul className="mt-2 space-y-1 text-muted">
                    {y.items.map((it, j) => (
                      <li key={j}>{it[lang]}</li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
