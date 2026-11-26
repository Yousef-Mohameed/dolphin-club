import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { LuCalendarClock as CalendarClock } from 'react-icons/lu'
import { Reveal } from '../lib/reveal'

type Session = { day: number; time: string; program: string; spotsLeft: number }

export default function ScheduleWidget() {
  const { t, i18n } = useTranslation()
  const [sessions, setSessions] = useState<Session[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/schedule.json`)
      .then((r) => r.json())
      .then((d) => setSessions(d.sessions ?? []))
      .catch(() => setSessions([]))
  }, [])

  const next = useMemo(() => {
    const now = new Date()
    let best: { s: Session; at: Date } | null = null
    for (const s of sessions) {
      for (let add = 0; add < 8; add++) {
        const d = new Date(now)
        d.setDate(d.getDate() + ((s.day - d.getDay() + 7) % 7) + add)
        const [h, m] = s.time.split(':').map(Number)
        d.setHours(h, m, 0, 0)
        if (d <= now) continue
        if (!best || d < best.at) best = { s, at: d }
        break
      }
    }
    return best
  }, [sessions])

  const fmt = (d: Date) =>
    new Intl.DateTimeFormat(i18n.language === 'ar' ? 'ar-EG' : 'en-GB', {
      weekday: 'long',
      hour: 'numeric',
      minute: '2-digit',
    }).format(d)

  const hoursLeft = next
    ? Math.max(1, Math.round((next.at.getTime() - Date.now()) / 3.6e6))
    : 0

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="glow-card sweep flex flex-col items-center gap-6 rounded-3xl border border-neon/40 bg-card p-8 text-center md:flex-row md:text-start">
          <CalendarClock size={44} className="shrink-0 text-neon" />
          {next ? (
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-glow">
                {t('scheduleWidget.title')}
              </h2>
              <p className="mt-2 text-lg">
                {t('scheduleWidget.next', {
                  time: fmt(next.at),
                  program: t(`programs.${next.s.program}.name`),
                })}
              </p>
              <p className={`mt-1 font-semibold ${next.s.spotsLeft === 0 ? 'text-red-400' : 'text-neon'}`}>
                {next.s.spotsLeft === 0
                  ? t('scheduleWidget.full')
                  : t('scheduleWidget.spots', { hours: hoursLeft, count: next.s.spotsLeft })}
              </p>
            </div>
          ) : (
            <p className="flex-1 text-muted">{t('scheduleWidget.loading')}</p>
          )}
          <Link to="/schedule" className="btn-ghost btn-ripple shrink-0">
            {t('scheduleWidget.fullSchedule')}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
