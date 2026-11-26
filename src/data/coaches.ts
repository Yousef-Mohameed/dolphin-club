export type Coach = {
  id: string
  name: { en: string; ar: string }
  title: { en: string; ar: string }
  bio: { en: string; ar: string }
  specialties: { en: string[]; ar: string[] }
  achievements: { en: string[]; ar: string[] }
  initials: string
}

export const coaches: Coach[] = [
  {
    id: 'captain-ahmed-samy',
    name: { en: 'Capt. Ahmed Samy', ar: 'كابتن أحمد سامي' },
    title: { en: 'Head Coach', ar: 'المدرب الأول' },
    bio: {
      en: 'Former national team swimmer with 15 years of coaching experience. Built most of our champions squad.',
      ar: 'سباح سابق في المنتخب القومي وله 15 سنة خبرة في التدريب. بنا أغلب فريق أبطالنا.',
    },
    specialties: {
      en: ['Freestyle', 'Competition prep', 'Starts & turns'],
      ar: ['السباحة الحرة', 'إعداد البطولات', 'البدايات واللفات'],
    },
    achievements: {
      en: ['Coached 20+ national medalists', 'FINA Level 3 certified'],
      ar: ['درب أكثر من 20 بطل قومي', 'شهادة فينا المستوى الثالث'],
    },
    initials: 'AS',
  },
  {
    id: 'captain-mona-elhariry',
    name: { en: 'Capt. Mona Elhariry', ar: 'كابتن منى الحريري' },
    title: { en: 'Kids Program Lead', ar: 'مسؤولة برنامج الأطفال' },
    bio: {
      en: 'Specialist in teaching young swimmers water safety and confidence, with a playful, patient approach.',
      ar: 'متخصصة في تعليم الأطفال الأمان في المياه والثقة، بأسلوب مرح وصبور.',
    },
    specialties: {
      en: ['Kids 4-10', 'Water safety', 'Beginner technique'],
      ar: ['أطفال 4-10 سنوات', 'الأمان في المياه', 'تأسيس التكنيك'],
    },
    achievements: {
      en: ['Taught 500+ kids to swim', 'Red Cross certified instructor'],
      ar: ['علمت أكثر من 500 طفل السباحة', 'مدربة معتمدة من الهلال الأحمر'],
    },
    initials: 'MH',
  },
  {
    id: 'captain-karim-fathy',
    name: { en: 'Capt. Karim Fathy', ar: 'كابتن كريم فتحي' },
    title: { en: 'Fitness & Adults Coach', ar: 'مدرب اللياقة والكبار' },
    bio: {
      en: 'Helps adults reach fitness and weight-loss goals through structured swim programs.',
      ar: 'بيساعد الكبار يوصلوا لأهداف اللياقة والتخسيس من خلال برامج سباحة منظمة.',
    },
    specialties: {
      en: ['Adult fitness', 'Technique correction', 'Triathlon prep'],
      ar: ['لياقة الكبار', 'تصحيح التكنيك', 'إعداد الترايثلون'],
    },
    achievements: {
      en: ['ASCA Level 2', '10 years coaching adults'],
      ar: ['شهادة ASCA المستوى الثاني', '10 سنوات تدريب كبار'],
    },
    initials: 'KF',
  },
]
