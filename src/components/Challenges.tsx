import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Target, Award, Plus } from 'lucide-react'
import { Reveal } from '../lib/reveal'
import { loadJSON, saveJSON } from '../lib/storage'

const GOAL = 10000 // 10 km in a month
const BADGES = [0.25, 0.5, 0.75, 1]

type State = { joined: boolean; meters: number }

export default function Challenges() {
  const { t } = useTranslation()
  const [state, setState] = useState<State>(() =>
    loadJSON('challenge-10k', { joined: false, meters: 0 }),
  )
  const [log, setLog] = useState('')

  const pct = Math.min(state.meters / GOAL, 1)
  const points = Math.floor(state.meters / 100)

  const update = (next: State) => {
    setState(next)
    saveJSON('challenge-10k', next)
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <div className="glow-card rounded-3xl border border-line bg-card p-8 md:p-10">
          <Target size={34} className="text-neon" />
          <h2 className="mt-3 font-heading text-3xl font-bold text-glow">
            {t('challenge.title')}
          </h2>
          <p className="mt-2 text-muted">{t('challenge.subtitle')}</p>

          {!state.joined ? (
            <button
              onClick={() => update({ joined: true, meters: 0 })}
              className="btn-neon btn-ripple mt-6"
            >
              {t('challenge.join')}
            </button>
          ) : (
            <div className="mt-6">
              <div className="flex justify-between text-sm font-semibold">
                <span>
                  {(state.meters / 1000).toFixed(1)} / {GOAL / 1000} {t('challenge.km')}
                </span>
                <span className="text-neon">
                  {points} {t('challenge.points')}
                </span>
              </div>
              <div className="mt-2 h-4 overflow-hidden rounded-full bg-bg2">
                <div
                  className="h-full rounded-full bg-neon shadow-[0_0_14px_rgba(31,224,255,0.8)] transition-all duration-500"
                  style={{ width: `${pct * 100}%` }}
                />
              </div>

              <div className="mt-4 flex gap-3">
                <input
                  type="number"
                  min={0}
                  value={log}
                  onChange={(e) => setLog(e.target.value)}
                  placeholder={t('challenge.logPh')}
                  aria-label={t('challenge.logPh')}
                  className="w-40 rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none"
                />
                <button
                  onClick={() => {
                    const m = parseInt(log, 10)
                    if (m > 0) update({ ...state, meters: state.meters + m })
                    setLog('')
                  }}
                  className="btn-ghost btn-ripple"
                >
                  <Plus size={16} />
                  {t('challenge.logBtn')}
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold ${
                      pct >= b
                        ? 'border-neon bg-neon/15 text-neon shadow-[0_0_12px_rgba(31,224,255,0.35)]'
                        : 'border-line text-muted'
                    }`}
                  >
                    <Award size={15} />
                    {t(`challenge.badge${b * 100}`)}
                  </span>
                ))}
              </div>
              {pct >= 1 && (
                <p className="pop-in mt-4 font-heading text-xl font-bold text-neon">
                  {t('challenge.done')}
                </p>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
