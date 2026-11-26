import { useTranslation } from 'react-i18next'
import DolphinIcon from './DolphinIcon'

const COUNT = 6

export default function Marquee() {
  const { t } = useTranslation()
  const items = Array.from({ length: COUNT }, (_, i) => t(`marquee.${i}`))
  const doubled = [...items, ...items]

  return (
    <div className="marquee relative border-y border-line/50 bg-card/40 py-4 backdrop-blur-sm">
      <div className="marquee-track" dir="ltr">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-12" aria-hidden={i >= COUNT}>
            <span className="font-heading text-lg font-bold uppercase tracking-[0.18em] text-text/85 md:text-xl">
              {item}
            </span>
            <DolphinIcon size={20} className="text-neon/70" />
          </span>
        ))}
      </div>
    </div>
  )
}
