import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <div className="flex items-center rounded-full border border-line bg-card/60 p-1 text-sm font-semibold">
      <button
        onClick={() => i18n.changeLanguage('en')}
        aria-pressed={!isArabic}
        className={`rounded-full px-3 py-1 transition-colors ${
          !isArabic ? 'bg-neon text-navy-1' : 'text-muted hover:text-text'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('ar')}
        aria-pressed={isArabic}
        className={`rounded-full px-3 py-1 transition-colors ${
          isArabic ? 'bg-neon text-navy-1' : 'text-muted hover:text-text'
        }`}
      >
        AR
      </button>
    </div>
  )
}
