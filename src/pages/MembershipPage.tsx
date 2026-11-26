import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Reveal } from '../lib/reveal'
import { useTrial } from '../components/TrialProvider'
import { useSEO } from '../lib/seo'

const plans = [
  { key: 'monthly', price: 800, popular: false },
  { key: 'quarterly', price: 2100, popular: true },
  { key: 'yearly', price: 7500, popular: false },
] as const

export default function MembershipPage() {
  const { t } = useTranslation()
  const { openTrial } = useTrial()
  useSEO({ title: t('seo.membershipTitle'), description: t('seo.membershipDesc') })

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <Reveal>
        <h1 className="text-center font-heading text-4xl font-bold text-glow">
          {t('membership.title')}
        </h1>
        <p className="mt-3 text-center text-muted">{t('membership.subtitle')}</p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.key} delay={i * 100}>
            <div
              className={`glow-card sweep relative flex h-full flex-col rounded-3xl border bg-card p-8 ${
                p.popular ? 'border-neon shadow-[0_0_35px_rgba(31,224,255,0.25)]' : 'border-line'
              }`}
            >
              {p.popular && (
                <span className="mb-3 self-center rounded-full bg-neon px-4 py-1 text-xs font-bold text-navy-1">
                  {t('membership.popular')}
                </span>
              )}
              <h2 className="font-heading text-xl font-bold">{t(`membership.${p.key}.name`)}</h2>
              <p className="mt-4 font-heading text-4xl font-extrabold text-neon text-glow">
                {p.price.toLocaleString('en-EG')}
                <span className="text-lg text-muted"> {t('membership.egp')}</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-muted">
                {(t(`membership.${p.key}.features`, { returnObjects: true }) as string[]).map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="shrink-0 text-neon" />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => openTrial()} className="btn-neon btn-ripple mt-6 w-full">
                {t('membership.cta')}
              </button>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted">{t('membership.note')}</p>
    </main>
  )
}
