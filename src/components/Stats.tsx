import { useTranslation } from 'react-i18next'
import { CountUp } from '../lib/countup'
import { Reveal } from '../lib/reveal'

const stats = [
  { key: 'swimmers', to: 1200, prefix: '+', suffix: '' },
  { key: 'champions', to: 35, prefix: '', suffix: '' },
  { key: 'coaches', to: 12, prefix: '', suffix: '' },
  { key: 'years', to: 8, prefix: '', suffix: '' },
] as const

export default function Stats() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.key} delay={i * 90}>
            <div className="glow-card sweep rounded-3xl border border-line bg-card p-8 text-center">
              <p className="font-heading text-4xl font-extrabold text-neon text-glow md:text-5xl">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-muted">{t(`stats.${s.key}`)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
