import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { waLink } from '../lib/wa'

export default function WhatsAppFloat() {
  const { t } = useTranslation()
  return (
    <a
      href={waLink(t('wa.prefill'))}
      target="_blank"
      rel="noreferrer"
      aria-label={t('wa.aria')}
      className="pulse-ring fixed bottom-5 end-5 z-[80] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  )
}
