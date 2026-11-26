import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Programs from '../components/Programs'
import Quiz from '../components/Quiz'
import Records from '../components/Records'
import ScheduleWidget from '../components/ScheduleWidget'
import Champions from '../components/Champions'
import PlanCalculator from '../components/PlanCalculator'
import Challenges from '../components/Challenges'
import ReelsGallery, { type Reel } from '../components/ReelsGallery'
import { useSEO } from '../lib/seo'

const testimonialReels: Reel[] = [
  { src: 'media/reel1.mp4', title: { en: 'Mariam - from fear to gold', ar: 'مريم - من الخوف للذهب' } },
  { src: 'media/reel2.mp4', title: { en: 'Omar lost 12kg swimming', ar: 'عمر خس 12 كيلو بالسباحة' } },
  { src: 'media/reel3.mp4', title: { en: "Yassin's first nationals", ar: 'أول بطولة جمهورية لياسين' } },
  { src: 'media/reel4.mp4', title: { en: 'Kids class moments', ar: 'لقطات من حصص الأطفال' } },
]

export default function Home() {
  const { t } = useTranslation()
  useSEO({
    title: t('seo.homeTitle'),
    description: t('seo.homeDesc'),
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SportsClub',
      name: 'Aqua Wave Swimming Club',
      sport: 'Swimming',
    },
  })

  return (
    <main>
      <Hero />
      <Stats />
      <Programs />
      <Quiz />
      <Records />
      <ScheduleWidget />
      <Champions />
      <ReelsGallery
        reels={testimonialReels}
        titleKey="testimonials.title"
        subtitleKey="testimonials.subtitle"
      />
      <PlanCalculator />
      <Challenges />
    </main>
  )
}
