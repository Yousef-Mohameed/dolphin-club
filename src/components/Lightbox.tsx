import { LuX as X } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'

export default function Lightbox({
  src,
  poster,
  title,
  onClose,
}: {
  src: string
  poster?: string
  title: string
  onClose: () => void
}) {
  const { t } = useTranslation()
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-1/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label={t('nav.close')}
          className="absolute -top-10 end-0 text-white hover:text-neon"
        >
          <X size={26} />
        </button>
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          className="w-full rounded-2xl border border-neon/40 shadow-[0_0_50px_rgba(31,224,255,0.25)]"
        />
        <p className="mt-3 text-center font-semibold text-white">{title}</p>
      </div>
    </div>
  )
}
