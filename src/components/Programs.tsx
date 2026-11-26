import { useTranslation } from 'react-i18next'
import { LuBaby as Baby, LuTrophy as Trophy, LuDumbbell as Dumbbell } from 'react-icons/lu'
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
    <section id="programs" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:py-24">
      <Reveal className="flex flex-col items-center gap-3">
        <p className="eyebrow">{t('programs.eyebrow')}</p>
        <h2 className="text-center font-heading text-4xl font-bold text-glow md:text-5xl">
          {t('programs.title')}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.key} delay={i * 110}>
            <div className="glow-card sweep group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-8">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 end-5 font-heading text-7xl font-black text-neon/10 transition-colors duration-300 group-hover:text-neon/20"
              >
                0{i + 1}
              </span>
              <div className="icon-blob self-start">
                <p.icon size={30} className="text-neon" />
              </div>
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
