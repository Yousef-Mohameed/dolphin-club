import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Menu, X, Waves as WavesIcon } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import SoundToggle from './SoundToggle'
import { useTrial } from './TrialProvider'

const links = [
  { to: '/', key: 'home', end: true },
  { to: '/programs', key: 'programs', end: false },
  { to: '/coaches', key: 'coaches', end: false },
  { to: '/schedule', key: 'schedule', end: false },
  { to: '/membership', key: 'membership', end: false },
  { to: '/honors', key: 'honors', end: false },
  { to: '/gallery', key: 'gallery', end: false },
  { to: '/events', key: 'events', end: false },
  { to: '/blog', key: 'blog', end: false },
  { to: '/contact', key: 'contact', end: false },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `font-medium transition-colors hover:text-neon ${
    isActive
      ? 'text-neon underline decoration-2 underline-offset-8 drop-shadow-[0_0_8px_rgba(31,224,255,0.7)]'
      : 'text-text/85'
  }`

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { openTrial } = useTrial()
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-2 font-heading text-xl font-bold text-neon text-glow"
        >
          <WavesIcon size={26} />
          {t('brand')}
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <SoundToggle />
          <button
            onClick={() => openTrial()}
            className="btn-neon btn-ripple whitespace-nowrap px-5 py-2 text-sm"
          >
            {t('nav.join')}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? t('nav.close') : t('nav.menu')}
          aria-expanded={open}
          className="text-text lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line/40 px-5 pb-5 pt-4 lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={close}
              className={linkClass}
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <LanguageToggle />
            <ThemeToggle />
            <SoundToggle />
            <button
              onClick={() => {
                close()
                openTrial()
              }}
              className="btn-neon btn-ripple whitespace-nowrap px-5 py-2 text-sm"
            >
              {t('nav.join')}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
