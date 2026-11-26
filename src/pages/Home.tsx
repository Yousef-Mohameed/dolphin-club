import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
// import RealVoices from '../components/RealVoices' // hidden until name approval
import Quiz from '../components/Quiz'
import Records from '../components/Records'
import ScheduleWidget from '../components/ScheduleWidget'
import Champions from '../components/Champions'
import PlanCalculator from '../components/PlanCalculator'
import Challenges from '../components/Challenges'
import ReelsGallery, { type Reel } from '../components/ReelsGallery'
import { useSEO } from '../lib/seo'

const testimonialReels: Reel[] = [
  { src: 'media/reel1.mp4', title: { en: 'Training moments at Dolphin', ar: 'لقطات من التدريب في دولفين' } },
  { src: 'media/reel2.mp4', title: { en: 'Kids swimming class', ar: 'حصة سباحة للأطفال' } },
  { src: 'media/reel3.mp4', title: { en: 'Practice session highlights', ar: 'أجمل لحظات التمارين' } },
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
      name: 'Dolphin Swimming Club',
      sport: 'Swimming',
    },
  })

  return (
    <main>
      <Hero />
      <Programs />
      {/* RealVoices hidden until the club confirms using commenters' names */}
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
