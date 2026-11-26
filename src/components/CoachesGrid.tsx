import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../lib/reveal'
import { coaches } from '../data/coaches'

export default function CoachesGrid() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t('coaches.title')}
        </h2>
        <p className="mt-3 text-center text-muted">{t('coaches.subtitle')}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {coaches.map((c, i) => (
          <Reveal key={c.id} delay={i * 100}>
            <Link
              to={`/coaches/${c.id}`}
              className="glow-card sweep block h-full rounded-3xl border border-line bg-card p-8 text-center"
            >
              <div className="mx-auto flex size-24 items-center justify-center rounded-full border border-neon/50 bg-bg2 font-heading text-3xl font-bold text-neon shadow-[0_0_20px_rgba(31,224,255,0.25)]">
                {c.initials}
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">{c.name[lang]}</h3>
              <p className="mt-1 text-sm font-semibold text-neon">{c.title[lang]}</p>
              <p className="mt-3 line-clamp-3 text-sm text-muted">{c.bio[lang]}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-neon">
                {t('coaches.more')}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
