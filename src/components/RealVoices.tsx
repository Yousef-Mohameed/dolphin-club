import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaQuoteRight } from 'react-icons/fa'
import { Reveal } from '../lib/reveal'

// Real public comments from the club's Facebook page (facebook.com/dolphinBenha), Nov 2026.
const voices = [
  { key: 'v1', name: 'Mariam Sameh' },
  { key: 'v2', name: 'Nasser Elads' },
  { key: 'v3', name: 'NoRa Om Maka' },
] as const

export default function RealVoices() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h2 className="text-center font-heading text-4xl font-bold text-glow">
          {t('voices.title')}
        </h2>
        <p className="mt-3 text-center text-muted">{t('voices.subtitle')}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {voices.map((v, i) => (
          <Reveal key={v.key} delay={i * 110}>
            <figure className="glow-card sweep relative h-full rounded-3xl border border-line bg-card p-8">
              <FaQuoteRight size={26} className="text-neon/60" />
              <blockquote className="mt-4 min-h-24 leading-relaxed text-text">
                {t(`voices.${v.key}.text`)}
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-line/50 pt-4">
                <span className="font-heading font-bold text-neon">{v.name}</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <FaFacebookF size={12} />
                  {t('voices.source')}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
