export type ClubEvent = {
  id: string
  title: { en: string; ar: string }
  date: string // ISO
  place: { en: string; ar: string }
  desc: { en: string; ar: string }
}

export const events: ClubEvent[] = [
  {
    id: 'winter-sprint-cup',
    title: { en: 'Winter Sprint Cup', ar: 'كأس الشتاء للسرعات' },
    date: '2026-12-20T09:00:00+02:00',
    place: { en: 'Dolphin main pool', ar: 'مسبح دولفين الرئيسي' },
    desc: {
      en: '50m and 100m sprints for all age groups. Heats in the morning, finals in the evening.',
      ar: 'سباقات 50 و100 متر لكل الفئات العمرية. تصفيات الصبح ونهائيات بالليل.',
    },
  },
  {
    id: 'open-water-day',
    title: { en: 'Open Water Day', ar: 'يوم المياه المفتوحة' },
    date: '2027-03-15T08:00:00+02:00',
    place: { en: 'To be announced', ar: 'يتم الإعلان قريباً' },
    desc: {
      en: 'A fun 1km open-water swim for advanced members, with safety boats and medals for all finishers.',
      ar: 'سباحة ممتعة 1 كم في المياه المفتوحة للأعضاء المتقدمين، مع قوارب أمان وميداليات لكل المنهيين.',
    },
  },
]
