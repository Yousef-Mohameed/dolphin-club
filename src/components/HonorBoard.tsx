import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Medal } from 'lucide-react'
import { Reveal } from '../lib/reveal'
import { honors } from '../data/honors'

const medalColor: Record<string, string> = {
  gold: 'text-yellow-300',
  silver: 'text-slate-300',
  bronze: 'text-amber-600',
}

export default function HonorBoard() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const years = useMemo(
    () => [...new Set(honors.map((h) => h.year))].sort((a, b) => b - a),
    [],
  )
  const [year, setYear] = useState<number | 'all'>('all')
  const shown = honors.filter((h) => year === 'all' || h.year === year)

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t('honors.title')}
        </h2>
        <p className="mt-3 text-center text-muted">{t('honors.subtitle')}</p>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setYear('all')}
            aria-pressed={year === 'all'}
            className={`rounded-full border px-5 py-1.5 text-sm font-semibold transition-colors ${
              year === 'all' ? 'border-neon bg-neon text-navy-1' : 'border-line text-muted hover:text-text'
            }`}
          >
            {t('honors.all')}
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              aria-pressed={year === y}
              className={`rounded-full border px-5 py-1.5 text-sm font-semibold transition-colors ${
                year === y ? 'border-neon bg-neon text-navy-1' : 'border-line text-muted hover:text-text'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((h, i) => (
          <Reveal key={`${h.name.en}-${h.year}-${h.event.en}`} delay={(i % 4) * 80}>
            <div className="glow-card sweep h-full rounded-3xl border border-line bg-card p-6">
              <Medal size={30} className={medalColor[h.medal]} />
              <h3 className="mt-3 font-heading text-lg font-bold">{h.name[lang]}</h3>
              <p className="mt-1 text-sm text-muted">{h.event[lang]}</p>
              <p className="mt-2 text-sm font-bold text-neon">{h.year}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
