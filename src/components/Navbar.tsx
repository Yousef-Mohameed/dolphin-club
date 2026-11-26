import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { LuMenu as Menu, LuX as X } from 'react-icons/lu'
import DolphinIcon from './DolphinIcon'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
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
  const [progress, setProgress] = useState(0)
  const { openTrial } = useTrial()
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-bg/70 backdrop-blur-md">
      {/* scroll progress */}
      <div
        aria-hidden="true"
        className="nav-progress absolute inset-x-0 top-0 h-[2.5px] origin-left bg-gradient-to-r from-neon-soft via-neon to-[#0b9fd6]"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-2 font-heading text-xl font-bold text-neon text-glow"
        >
          <DolphinIcon size={28} />
          {t('brand')}
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageToggle />
          <ThemeToggle />
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
          className="text-text xl:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line/40 px-5 pb-5 pt-4 xl:hidden">
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
