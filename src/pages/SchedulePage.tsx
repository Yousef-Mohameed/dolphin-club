import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScheduleWidget from '../components/ScheduleWidget'
import { Reveal } from '../lib/reveal'
import { useSEO } from '../lib/seo'

type Session = { day: number; time: string; program: string; spotsLeft: number }

export default function SchedulePage() {
  const { t, i18n } = useTranslation()
  const [sessions, setSessions] = useState<Session[]>([])
  useSEO({ title: t('seo.scheduleTitle'), description: t('seo.scheduleDesc') })

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/schedule.json`)
      .then((r) => r.json())
      .then((d) => setSessions(d.sessions ?? []))
      .catch(() => setSessions([]))
  }, [])

  const dayFmt = new Intl.DateTimeFormat(i18n.language === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'long' })
  const dayName = (d: number) => dayFmt.format(new Date(2026, 0, 4 + d)) // Jan 4 2026 is Sunday
  const byDay = [...sessions].sort((a, b) => a.day - b.day || a.time.localeCompare(b.time))

  return (
    <main className="pt-6">
      <ScheduleWidget />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Reveal>
          <h1 className="text-center font-heading text-4xl font-bold text-glow">
            {t('schedulePage.title')}
          </h1>
        </Reveal>
        <Reveal>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-line bg-card">
            <table className="w-full min-w-[560px] text-start">
              <thead>
                <tr className="border-b border-line text-neon">
                  <th className="p-4 text-start">{t('schedulePage.day')}</th>
                  <th className="p-4 text-start">{t('schedulePage.time')}</th>
                  <th className="p-4 text-start">{t('schedulePage.program')}</th>
                  <th className="p-4 text-start">{t('schedulePage.spots')}</th>
                </tr>
              </thead>
              <tbody>
                {byDay.map((s, i) => (
                  <tr key={i} className="border-b border-line/40 last:border-0">
                    <td className="p-4 font-semibold">{dayName(s.day)}</td>
                    <td className="p-4 tabular-nums" dir="ltr">{s.time}</td>
                    <td className="p-4">{t(`programs.${s.program}.name`)}</td>
                    <td className={`p-4 font-semibold ${s.spotsLeft === 0 ? 'text-red-400' : 'text-neon'}`}>
                      {s.spotsLeft === 0 ? t('scheduleWidget.full') : s.spotsLeft}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="mt-4 text-center text-sm text-muted">{t('schedulePage.note')}</p>
      </section>
    </main>
  )
}
