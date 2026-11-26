import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { LuClock, LuUsers, LuGraduationCap, LuChevronDown } from 'react-icons/lu'
import Waves from './Waves'
import RippleLayer from './RippleLayer'
import DolphinIcon from './DolphinIcon'
import { waLink } from '../lib/wa'

const trustIcons = [LuClock, LuUsers, LuGraduationCap] as const

function StaggeredWords({ text, base, gradient = false }: { text: string; base: number; gradient?: boolean }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className={`rise ${gradient ? 'text-gradient' : ''}`}
          style={{ animationDelay: `${base + i * 110}ms` }}
        >
          {word}
          {i < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const base = import.meta.env.BASE_URL

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* glowing orbs */}
      <div className="orb start-[8%] top-[12%] size-72 bg-neon/25" />
      <div className="orb end-[10%] bottom-[30%] size-96 bg-neon/15" style={{ animationDelay: '-4s' }} />
      <div className="orb start-[40%] bottom-[8%] size-64 bg-[#0b9fd6]/20" style={{ animationDelay: '-7s' }} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-28 lg:grid-cols-2 lg:pt-20">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 text-sm font-bold text-neon backdrop-blur-sm">
            <span className="live-dot" />
            {t('hero.badge')}
          </p>
          <h1 className="mt-6 font-heading text-[2.9rem] font-black leading-[1.04] text-glow sm:text-6xl lg:text-7xl">
            <StaggeredWords text={t('hero.title1')} base={150} />
            <br />
            <StaggeredWords text={t('hero.title2')} base={420} gradient />
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{t('hero.subtitle')}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={waLink(t('hero.waMsg'))}
              target="_blank"
              rel="noreferrer"
              className="btn-neon btn-ripple"
            >
              <FaWhatsapp size={20} />
              {t('hero.ctaWhatsapp')}
            </a>
            <Link to="/programs" className="btn-ghost btn-ripple">
              {t('hero.ctaPrograms')}
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {trustIcons.map((Icon, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-line/60 bg-card/50 px-4 py-2 text-sm font-semibold text-muted backdrop-blur-md"
              >
                <Icon size={16} className="shrink-0 text-neon" />
                {t(`hero.trust.${i}`)}
              </span>
            ))}
          </div>
        </div>

        {/* Layered photo composition with real club photos from the Dolphin Benha Facebook page */}
        <div className="relative z-10 mx-auto w-full max-w-lg">
          <div className="absolute inset-0 rounded-[2rem] bg-neon/20 blur-2xl" />
          <div className="relative rounded-[1.8rem] bg-gradient-to-br from-neon/70 via-neon/20 to-transparent p-[2px]">
            <img
              src={`${base}media/dolphin-cover.jpg`}
              alt="Dolphin Swimming Pool Benha"
              className="hero-photo relative w-full rounded-[1.7rem] object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* rotating club badge */}
          <div className="absolute -top-10 -start-8 z-20 hidden size-28 items-center justify-center sm:flex md:size-32">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full drop-shadow-[0_0_12px_rgba(31,224,255,0.45)]">
              <defs>
                <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-neon" style={{ fontSize: '9.2px', fontWeight: 700, letterSpacing: '1.6px' }}>
                <textPath href="#badge-circle">{t('hero.ring')}</textPath>
              </text>
            </svg>
            <span className="flex size-12 items-center justify-center rounded-full border border-neon/50 bg-deep/90 text-neon shadow-[0_0_18px_rgba(31,224,255,0.4)] backdrop-blur-md md:size-14">
              <DolphinIcon size={26} />
            </span>
          </div>

          {/* floating follower chip */}
          <a
            href="https://www.facebook.com/dolphinswimmingpool"
            target="_blank"
            rel="noreferrer"
            className="glow-card absolute -bottom-7 -end-3 z-20 flex items-center gap-2.5 rounded-2xl border border-neon/40 px-4 py-2.5 text-sm font-bold text-text"
          >
            <FaFacebookF size={15} className="text-neon" />
            {t('hero.trust.1')}
          </a>

          <img
            src={`${base}media/photo-kids.jpg`}
            alt={t('hero.altKids')}
            className="hero-tile hero-tile-a absolute -bottom-8 -start-6 z-10 w-32 rounded-xl border-4 border-card object-cover shadow-xl md:w-44"
            loading="lazy"
          />
          <img
            src={`${base}media/photo-swim.jpg`}
            alt={t('hero.altSwim')}
            className="hero-tile hero-tile-b absolute -top-9 -end-3 z-10 w-28 rounded-xl border-4 border-card object-cover shadow-xl md:w-40"
            loading="lazy"
          />
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#programs"
        aria-label={t('hero.scroll')}
        className="scroll-cue absolute bottom-36 left-1/2 z-20 hidden -translate-x-1/2 text-neon/80 md:block"
      >
        <LuChevronDown size={30} />
      </a>

      <RippleLayer />
      <Waves height={130} />
    </section>
  )
}
