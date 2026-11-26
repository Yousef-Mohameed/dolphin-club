import { useTranslation } from 'react-i18next'
import HonorBoard from '../components/HonorBoard'
import Champions from '../components/Champions'
import { useSEO } from '../lib/seo'

export default function HonorsPage() {
  const { t } = useTranslation()
  useSEO({ title: t('seo.honorsTitle'), description: t('seo.honorsDesc') })
  return (
    <main className="pt-6">
      <HonorBoard />
      <Champions />
    </main>
  )
}
