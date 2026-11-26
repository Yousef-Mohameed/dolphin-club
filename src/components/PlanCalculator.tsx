import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LuCalculator as Calculator } from 'react-icons/lu'
import { Reveal } from '../lib/reveal'
import { useTrial } from './TrialProvider'

type Level = 'beginner' | 'intermediate' | 'advanced'
type Goal = 'learn' | 'fitness' | 'competition'

export default function PlanCalculator() {
  const { t } = useTranslation()
  const { openTrial } = useTrial()
  const [age, setAge] = useState('')
  const [level, setLevel] = useState<Level>('beginner')
  const [goal, setGoal] = useState<Goal>('learn')

  const plan = useMemo(() => {
    const a = parseInt(age, 10)
    if (!a || a < 3 || a > 90) return null
    const program: string = a <= 10 ? 'kids' : goal === 'competition' ? 'competitive' : 'adults'
    const sessions =
      goal === 'competition' ? (level === 'advanced' ? 6 : 5) : goal === 'fitness' ? 3 : 2
    const monthly = goal === 'competition' ? 1400 : sessions === 3 ? 1100 : 800
    return { program, sessions, monthly }
  }, [age, level, goal])

  const sel =
    'w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none'

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <div className="glow-card rounded-3xl border border-line bg-card p-8 md:p-10">
          <Calculator size={34} className="text-neon" />
          <h2 className="mt-3 font-heading text-3xl font-bold text-glow">
            {t('calc.title')}
          </h2>
          <p className="mt-2 text-muted">{t('calc.subtitle')}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="c-age" className="mb-1 block text-sm font-semibold">{t('calc.age')}</label>
              <input
                id="c-age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className={sel}
                placeholder="12"
              />
            </div>
            <div>
              <label htmlFor="c-level" className="mb-1 block text-sm font-semibold">{t('calc.level')}</label>
              <select id="c-level" value={level} onChange={(e) => setLevel(e.target.value as Level)} className={sel}>
                <option value="beginner">{t('calc.levels.beginner')}</option>
                <option value="intermediate">{t('calc.levels.intermediate')}</option>
                <option value="advanced">{t('calc.levels.advanced')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="c-goal" className="mb-1 block text-sm font-semibold">{t('calc.goal')}</label>
              <select id="c-goal" value={goal} onChange={(e) => setGoal(e.target.value as Goal)} className={sel}>
                <option value="learn">{t('calc.goals.learn')}</option>
                <option value="fitness">{t('calc.goals.fitness')}</option>
                <option value="competition">{t('calc.goals.competition')}</option>
              </select>
            </div>
          </div>

          {plan && (
            <div className="pop-in mt-6 rounded-2xl border border-neon/40 bg-bg2 p-6" aria-live="polite">
              <p className="font-heading text-xl font-bold text-neon">
                {t(`programs.${plan.program}.name`)}
              </p>
              <ul className="mt-3 space-y-1 text-muted">
                <li>{t('calc.sessions', { count: plan.sessions })}</li>
                <li>{t(`calc.focus.${plan.program}`)}</li>
                <li className="font-semibold text-text">
                  {t('calc.price', { price: plan.monthly.toLocaleString('en-EG') })}
                </li>
              </ul>
              <button
                onClick={() => openTrial(plan.program)}
                className="btn-neon btn-ripple mt-5"
              >
                {t('calc.cta')}
              </button>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
