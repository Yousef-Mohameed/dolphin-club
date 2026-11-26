import { Link, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { MessageCircle, ArrowLeft, BadgeCheck } from 'lucide-react'
import { coaches } from '../data/coaches'
import { waLink } from '../lib/wa'
import { useSEO } from '../lib/seo'
import NotFound from './NotFound'

export default function CoachDetailPage() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const coach = coaches.find((c) => c.id === id)

  useSEO({
    title: coach ? `${coach.name[lang]} | ${t('brand')}` : t('brand'),
    description: coach ? coach.bio[lang] : undefined,
  })

  if (!coach) return <NotFound />

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <Link to="/coaches" className="inline-flex items-center gap-2 text-neon hover:underline">
        <ArrowLeft size={16} className="rtl:rotate-180" />
        {t('coaches.back')}
      </Link>

      <div className="mt-6 grid gap-8 rounded-3xl border border-line bg-card p-8 md:grid-cols-3 md:p-10">
        <div className="text-center">
          <div className="mx-auto flex size-36 items-center justify-center rounded-full border border-neon/50 bg-bg2 font-heading text-5xl font-bold text-neon shadow-[0_0_30px_rgba(31,224,255,0.3)]">
            {coach.initials}
          </div>
          <h1 className="mt-4 font-heading text-2xl font-bold">{coach.name[lang]}</h1>
          <p className="mt-1 font-semibold text-neon">{coach.title[lang]}</p>
          <a
            href={waLink(t('coaches.waBook', { name: coach.name[lang] }))}
            target="_blank"
            rel="noreferrer"
            className="btn-neon btn-ripple mt-5 w-full"
          >
            <MessageCircle size={18} />
            {t('coaches.book')}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="text-muted">{coach.bio[lang]}</p>
          <h2 className="mt-6 font-heading text-lg font-bold text-neon">
            {t('coaches.specialties')}
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {coach.specialties[lang].map((s) => (
              <span key={s} className="rounded-full border border-line bg-bg2 px-4 py-1.5 text-sm">
                {s}
              </span>
            ))}
          </div>
          <h2 className="mt-6 font-heading text-lg font-bold text-neon">
            {t('coaches.achievements')}
          </h2>
          <ul className="mt-2 space-y-2 text-muted">
            {coach.achievements[lang].map((a) => (
              <li key={a} className="flex items-center gap-2">
                <BadgeCheck size={17} className="shrink-0 text-neon" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
