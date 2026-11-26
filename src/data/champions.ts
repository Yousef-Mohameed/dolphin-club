export type ChampionYear = {
  year: number
  items: { en: string; ar: string }[]
}

export const timeline: ChampionYear[] = [
  { year: 2026, items: [
    { en: '3 gold medals at the National Juniors Championship', ar: '3 ميداليات ذهبية في بطولة الجمهورية للناشئين' },
    { en: 'New club record in 100m freestyle: 55.4s', ar: 'رقم قياسي جديد للنادي في 100 متر حرة: 55.4 ثانية' },
  ]},
  { year: 2025, items: [
    { en: 'Best club award, Qalyubia region', ar: 'جائزة أفضل نادي على مستوى القليوبية' },
    { en: '12 swimmers qualified for nationals', ar: 'تأهل 12 سباحاً للبطولات القومية' },
  ]},
  { year: 2024, items: [
    { en: 'First international participation, Arab Championship', ar: 'أول مشاركة دولية في البطولة العربية' },
  ]},
  { year: 2023, items: [
    { en: 'Competitive team founded with 8 swimmers', ar: 'تأسيس فريق البطولات بـ 8 سباحين' },
  ]},
]

export const swimmerOfMonth = {
  name: { en: 'Yassin Hany', ar: 'ياسين هاني' },
  age: 14,
  stat: { en: '50m freestyle in 26.1s (club U14 record)', ar: '50 متر حرة في 26.1 ثانية (رقم قياسي للنادي تحت 14 سنة)' },
  quote: {
    en: 'The pool is my second home. Every session I chase my own record.',
    ar: 'المسبح بيتي التاني. كل حصة بطارد رقمي القياسي.',
  },
}
