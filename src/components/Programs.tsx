import { useTranslation } from 'react-i18next'
import { Baby, Trophy, Dumbbell } from 'lucide-react'
import { Reveal } from '../lib/reveal'
import { useTrial } from './TrialProvider'

const programs = [
  { key: 'kids', icon: Baby },
  { key: 'competitive', icon: Trophy },
  { key: 'adults', icon: Dumbbell },
] as const

export default function Programs() {
  const { t } = useTranslation()
  const { openTrial } = useTrial()

  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t('programs.title')}
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.key} delay={i * 110}>
            <div className="glow-card sweep flex h-full flex-col rounded-3xl border border-line bg-card p-8">
              <p.icon size={40} className="text-neon" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-neon">
                {t(`programs.${p.key}.name`)}
              </h3>
              <p className="mt-3 flex-1 text-muted">{t(`programs.${p.key}.desc`)}</p>
              <button
                onClick={() => openTrial(p.key)}
                className="btn-ghost btn-ripple mt-6 self-start"
              >
                {t('programs.cta')}
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
