import { useTranslation } from 'react-i18next'
import { LuTimer as Timer } from 'react-icons/lu'
import { CountUp } from '../lib/countup'
import { Reveal } from '../lib/reveal'

const rows = [
  { key: 'club', secs: 24.8, max: 45 },
  { key: 'national', secs: 27.5, max: 45 },
  { key: 'beginner', secs: 45.0, max: 45 },
] as const

export default function Records() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t('records.title')}
        </h2>
        <p className="mt-3 text-center text-muted">{t('records.subtitle')}</p>
      </Reveal>

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="glow-card rounded-3xl border border-neon/40 bg-card p-10 text-center">
            <Timer size={36} className="mx-auto text-neon" />
            <p className="mt-2 text-sm font-semibold text-muted">{t('records.stopwatch')}</p>
            <p className="mt-2 font-heading text-6xl font-extrabold tabular-nums text-neon text-glow md:text-7xl" dir="ltr">
              <CountUp to={24.8} decimals={2} duration={2480} />
              <span className="text-2xl text-muted"> {t('records.sec')}</span>
            </p>
            <p className="mt-3 font-semibold">{t('records.clubLabel')}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-5">
            {rows.map((r) => (
              <div key={r.key}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-semibold">{t(`records.${r.key}Name`)}</span>
                  <span className="tabular-nums text-muted" dir="ltr">{r.secs.toFixed(2)}s</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-bg2">
                  <div
                    className={`h-full rounded-full ${r.key === 'club' ? 'bg-neon shadow-[0_0_12px_rgba(31,224,255,0.8)]' : 'bg-line'}`}
                    style={{ width: `${(r.secs / r.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="text-sm text-muted">{t('records.note')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
