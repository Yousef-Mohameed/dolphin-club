export type Honor = {
  name: { en: string; ar: string }
  year: number
  medal: 'gold' | 'silver' | 'bronze'
  event: { en: string; ar: string }
}

export const honors: Honor[] = [
  { name: { en: 'Yassin Hany', ar: 'ياسين هاني' }, year: 2026, medal: 'gold', event: { en: '50m freestyle - Nationals U14', ar: '50 متر حرة - الجمهورية تحت 14' } },
  { name: { en: 'Mariam Adel', ar: 'مريم عادل' }, year: 2026, medal: 'gold', event: { en: '100m butterfly - Nationals U16', ar: '100 متر فراشة - الجمهورية تحت 16' } },
  { name: { en: 'Omar Tarek', ar: 'عمر طارق' }, year: 2026, medal: 'silver', event: { en: '200m medley - Regionals', ar: '200 متر متنوع - المنطقة' } },
  { name: { en: 'Mariam Adel', ar: 'مريم عادل' }, year: 2025, medal: 'gold', event: { en: '50m butterfly - Regionals', ar: '50 متر فراشة - المنطقة' } },
  { name: { en: 'Yassin Hany', ar: 'ياسين هاني' }, year: 2025, medal: 'bronze', event: { en: '100m freestyle - Nationals U14', ar: '100 متر حرة - الجمهورية تحت 14' } },
  { name: { en: 'Salma Nagy', ar: 'سلمى ناجي' }, year: 2025, medal: 'silver', event: { en: '100m backstroke - Regionals', ar: '100 متر ظهر - المنطقة' } },
  { name: { en: 'Salma Nagy', ar: 'سلمى ناجي' }, year: 2024, medal: 'gold', event: { en: '50m backstroke - Clubs Cup', ar: '50 متر ظهر - كأس الأندية' } },
  { name: { en: 'Omar Tarek', ar: 'عمر طارق' }, year: 2024, medal: 'bronze', event: { en: '100m breaststroke - Clubs Cup', ar: '100 متر صدر - كأس الأندية' } },
]
