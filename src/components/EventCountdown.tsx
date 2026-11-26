import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function EventCountdown({ date }: { date: string }) {
  const { t } = useTranslation()
  const target = new Date(date).getTime()
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target - now)
  const d = Math.floor(diff / 8.64e7)
  const h = Math.floor((diff % 8.64e7) / 3.6e6)
  const m = Math.floor((diff % 3.6e6) / 6e4)
  const s = Math.floor((diff % 6e4) / 1000)

  const cells = [
    { v: d, k: 'days' },
    { v: h, k: 'hours' },
    { v: m, k: 'mins' },
    { v: s, k: 'secs' },
  ] as const

  return (
    <div className="flex gap-3" dir="ltr" aria-live="off">
      {cells.map((c) => (
        <div
          key={c.k}
          className="min-w-16 rounded-2xl border border-line bg-bg2 px-3 py-2 text-center"
        >
          <p className="font-heading text-2xl font-extrabold tabular-nums text-neon text-glow">
            {String(c.v).padStart(2, '0')}
          </p>
          <p className="text-xs text-muted">{t(`countdown.${c.k}`)}</p>
        </div>
      ))}
    </div>
  )
}
