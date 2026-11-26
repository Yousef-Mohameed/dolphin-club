import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { CLUB } from '../config'
import { waLink } from '../lib/wa'
import { Reveal } from '../lib/reveal'
import { useSEO } from '../lib/seo'
import { useTrial } from '../components/TrialProvider'

export default function ContactPage() {
  const { t, i18n } = useTranslation()
  const { openTrial } = useTrial()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  useSEO({ title: t('seo.contactTitle'), description: t('seo.contactDesc') })

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <Reveal>
        <h1 className="text-center font-heading text-4xl font-bold text-glow">
          {t('contact.title')}
        </h1>
      </Reveal>
      <Reveal>
        <div className="glow-card mt-10 space-y-5 rounded-3xl border border-line bg-card p-8">
          <p className="flex items-center gap-3"><MapPin className="text-neon" size={20} /> {CLUB.address[lang]}</p>
          <p className="flex items-center gap-3" dir="ltr"><Phone className="text-neon" size={20} /> {CLUB.phoneDisplay}</p>
          <p className="flex items-center gap-3"><Clock className="text-neon" size={20} /> {CLUB.hours[lang]}</p>
          <div className="flex flex-wrap gap-4 pt-3">
            <a href={waLink(t('wa.prefill'))} target="_blank" rel="noreferrer" className="btn-neon btn-ripple">
              <MessageCircle size={18} />
              {t('contact.wa')}
            </a>
            <button onClick={() => openTrial()} className="btn-ghost btn-ripple">
              {t('hero.ctaTrial')}
            </button>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
