import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LuPlay as Play } from 'react-icons/lu'
import { Reveal } from '../lib/reveal'
import Lightbox from './Lightbox'

export type Reel = { src: string; title: { en: string; ar: string } }

export default function ReelsGallery({
  reels,
  titleKey,
  subtitleKey,
}: {
  reels: Reel[]
  titleKey: string
  subtitleKey?: string
}) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const [open, setOpen] = useState<Reel | null>(null)
  const base = import.meta.env.BASE_URL

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t(titleKey)}
        </h2>
        {subtitleKey && (
          <p className="mt-3 text-center text-muted">{t(subtitleKey)}</p>
        )}
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
        {reels.map((r, i) => (
          <Reveal key={r.src} delay={i * 80}>
            <button
              onClick={() => setOpen(r)}
              className="glow-card group relative block w-full overflow-hidden rounded-3xl border border-line bg-card text-start"
              aria-label={r.title[lang]}
            >
              <video
                src={`${base}${r.src}`}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="aspect-[9/13] w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-navy-1/30 opacity-0 transition-opacity group-hover:opacity-100">
                <Play size={40} className="text-neon" />
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-1/90 to-transparent p-3 text-sm font-semibold text-white">
                {r.title[lang]}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <Lightbox
          src={`${base}${open.src}`}
          title={open.title[lang]}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
