import { useTranslation } from 'react-i18next'
import CoachesGrid from '../components/CoachesGrid'
import { useSEO } from '../lib/seo'

export default function CoachesPage() {
  const { t } = useTranslation()
  useSEO({ title: t('seo.coachesTitle'), description: t('seo.coachesDesc') })
  return (
    <main className="pt-6">
      <CoachesGrid />
    </main>
  )
}
