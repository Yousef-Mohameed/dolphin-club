import { useTranslation } from 'react-i18next'
import Programs from '../components/Programs'
import PlanCalculator from '../components/PlanCalculator'
import { useSEO } from '../lib/seo'

export default function ProgramsPage() {
  const { t } = useTranslation()
  useSEO({ title: t('seo.programsTitle'), description: t('seo.programsDesc') })
  return (
    <main className="pt-6">
      <Programs />
      <PlanCalculator />
    </main>
  )
}
