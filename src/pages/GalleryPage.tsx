import { useTranslation } from 'react-i18next'
import ReelsGallery, { type Reel } from '../components/ReelsGallery'
import { useSEO } from '../lib/seo'

const trainingReels: Reel[] = [
  { src: 'media/reel1.mp4', title: { en: 'Freestyle drill', ar: 'تمرين السباحة الحرة' } },
  { src: 'media/reel2.mp4', title: { en: 'Starts practice', ar: 'تمرين البدايات' } },
  { src: 'media/reel3.mp4', title: { en: 'Kids water games', ar: 'ألعاب مائية للأطفال' } },
  { src: 'media/reel4.mp4', title: { en: 'Evening fitness lane', ar: 'حارة اللياقة المسائية' } },
]
const testimonialReels: Reel[] = [
  { src: 'media/reel3.mp4', title: { en: "Yassin's first nationals", ar: 'أول بطولة جمهورية لياسين' } },
  { src: 'media/reel1.mp4', title: { en: 'Mariam - from fear to gold', ar: 'مريم - من الخوف للذهب' } },
  { src: 'media/reel2.mp4', title: { en: 'Omar lost 12kg swimming', ar: 'عمر خس 12 كيلو بالسباحة' } },
  { src: 'media/reel4.mp4', title: { en: 'A parent says thanks', ar: 'كلمة شكر من ولي أمر' } },
]

export default function GalleryPage() {
  const { t } = useTranslation()
  useSEO({ title: t('seo.galleryTitle'), description: t('seo.galleryDesc') })
  return (
    <main className="pt-6">
      <ReelsGallery reels={trainingReels} titleKey="gallery.title" subtitleKey="gallery.subtitle" />
      <ReelsGallery reels={testimonialReels} titleKey="testimonials.title" subtitleKey="testimonials.subtitle" />
    </main>
  )
}
