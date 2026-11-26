import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CalendarDays, MapPin, MessageCircle } from 'lucide-react'
import { events } from '../data/events'
import EventCountdown from '../components/EventCountdown'
import { Reveal } from '../lib/reveal'
import { waLink } from '../lib/wa'
import { useSEO } from '../lib/seo'

export default function EventsPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [eventId, setEventId] = useState(events[0]?.id ?? '')
  useSEO({ title: t('seo.eventsTitle'), description: t('seo.eventsDesc') })

  const sel = events.find((e) => e.id === eventId) ?? events[0]
  const valid = name.trim().length >= 2 && /^\+?[0-9\s-]{8,15}$/.test(phone)
  const input =
    'w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none'

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <Reveal>
        <h1 className="text-center font-heading text-4xl font-bold text-glow">
          {t('events.title')}
        </h1>
        <p className="mt-3 text-center text-muted">{t('events.subtitle')}</p>
      </Reveal>

      <div className="mt-10 grid gap-6">
        {events.map((e, i) => (
          <Reveal key={e.id} delay={i * 100}>
            <div className="glow-card sweep grid items-center gap-6 rounded-3xl border border-line bg-card p-8 md:grid-cols-2">
              <div>
                <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-neon">
                  <CalendarDays size={22} />
                  {e.title[lang]}
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <MapPin size={15} />
                  {e.place[lang]} · {new Date(e.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { dateStyle: 'full' })}
                </p>
                <p className="mt-3 text-muted">{e.desc[lang]}</p>
              </div>
              <div className="md:justify-self-end">
                <p className="mb-2 text-sm font-semibold text-muted">{t('events.counts')}</p>
                <EventCountdown date={e.date} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="glow-card mx-auto mt-12 max-w-xl rounded-3xl border border-neon/40 bg-card p-8">
          <h2 className="font-heading text-2xl font-bold text-glow">{t('events.regTitle')}</h2>
          <div className="mt-5 space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('events.name')} aria-label={t('events.name')} className={input} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="01xxxxxxxxx" aria-label={t('events.phone')} dir="ltr" className={input} />
            <select value={eventId} onChange={(e) => setEventId(e.target.value)} aria-label={t('events.pick')} className={input}>
              {events.map((e) => (
                <option key={e.id} value={e.id}>{e.title[lang]}</option>
              ))}
            </select>
            <a
              href={valid ? waLink(t('events.waMessage', { name, phone, event: sel?.title[lang] })) : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!valid}
              className={`btn-neon btn-ripple w-full ${!valid ? 'pointer-events-none opacity-50' : ''}`}
            >
              <MessageCircle size={18} />
              {t('events.register')}
            </a>
            <p className="text-center text-xs text-muted">{t('trial.hint')}</p>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
