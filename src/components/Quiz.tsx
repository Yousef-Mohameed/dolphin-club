import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Waves as WavesIcon, RotateCcw } from 'lucide-react'
import { Reveal } from '../lib/reveal'
import { useTrial } from './TrialProvider'

// 3 questions x 3 answers; each answer scores kids/competitive/adults.
const QUESTIONS = [
  {
    key: 'goal',
    options: [
      { key: 'learn', score: { kids: 2, adults: 1, competitive: 0 } },
      { key: 'compete', score: { kids: 0, adults: 0, competitive: 3 } },
      { key: 'fitness', score: { kids: 0, adults: 3, competitive: 0 } },
    ],
  },
  {
    key: 'age',
    options: [
      { key: 'child', score: { kids: 3, adults: 0, competitive: 1 } },
      { key: 'teen', score: { kids: 1, adults: 0, competitive: 2 } },
      { key: 'adult', score: { kids: 0, adults: 3, competitive: 0 } },
    ],
  },
  {
    key: 'level',
    options: [
      { key: 'beginner', score: { kids: 2, adults: 2, competitive: 0 } },
      { key: 'intermediate', score: { kids: 1, adults: 1, competitive: 1 } },
      { key: 'advanced', score: { kids: 0, adults: 0, competitive: 3 } },
    ],
  },
] as const

type Program = 'kids' | 'competitive' | 'adults'

export default function Quiz() {
  const { t } = useTranslation()
  const { openTrial } = useTrial()
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Record<Program, number>>({
    kids: 0,
    competitive: 0,
    adults: 0,
  })

  const result: Program | null = useMemo(() => {
    if (step < QUESTIONS.length) return null
    return (Object.entries(scores) as [Program, number][]).sort(
      (a, b) => b[1] - a[1],
    )[0][0]
  }, [step, scores])

  const answer = (score: Record<Program, number>) => {
    setScores((s) => ({
      kids: s.kids + score.kids,
      competitive: s.competitive + score.competitive,
      adults: s.adults + score.adults,
    }))
    setStep((v) => v + 1)
  }

  const reset = () => {
    setStep(0)
    setScores({ kids: 0, competitive: 0, adults: 0 })
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <div className="glow-card rounded-3xl border border-neon/40 bg-card p-8 text-center shadow-[0_0_40px_rgba(31,224,255,0.15)] md:p-10">
          <WavesIcon size={36} className="mx-auto text-neon" />
          <h2 className="mt-3 font-heading text-3xl font-bold text-glow">
            {t('quiz.title')}
          </h2>
          <p className="mt-2 text-muted">{t('quiz.subtitle')}</p>

          {!result ? (
            <div className="mt-8" aria-live="polite">
              <p className="text-sm font-semibold text-neon">
                {t('quiz.progress', { n: step + 1, total: QUESTIONS.length })}
              </p>
              <h3 className="mt-2 text-xl font-bold">
                {t(`quiz.q.${QUESTIONS[step].key}`)}
              </h3>
              <div className="mt-6 grid gap-3">
                {QUESTIONS[step].options.map((o) => (
                  <button
                    key={o.key}
                    onClick={() => answer(o.score)}
                    className="btn-ghost btn-ripple w-full"
                  >
                    {t(`quiz.a.${o.key}`)}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="pop-in mt-8" aria-live="polite">
              <p className="text-muted">{t('quiz.resultLead')}</p>
              <p className="mt-2 font-heading text-3xl font-extrabold text-neon text-glow">
                {t(`programs.${result}.name`)}
              </p>
              <p className="mx-auto mt-3 max-w-md text-muted">
                {t(`programs.${result}.desc`)}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <button onClick={() => openTrial(result)} className="btn-neon btn-ripple">
                  {t('quiz.bookNow')}
                </button>
                <button onClick={reset} className="btn-ghost btn-ripple">
                  <RotateCcw size={16} />
                  {t('quiz.retake')}
                </button>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
