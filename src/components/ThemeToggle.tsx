import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ThemeToggle() {
  const { t } = useTranslation()
  const [light, setLight] = useState(
    () => localStorage.getItem('theme') === 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])

  return (
    <button
      onClick={() => setLight(!light)}
      aria-label={light ? t('theme.dark') : t('theme.light')}
      title={light ? t('theme.dark') : t('theme.light')}
      className="rounded-full border border-line bg-card/60 p-2 text-neon transition-shadow hover:shadow-[0_0_14px_rgba(31,224,255,0.4)]"
    >
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
