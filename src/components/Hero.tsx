import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { FaWhatsapp } from 'react-icons/fa'
import { LuClock, LuUsers, LuGraduationCap } from 'react-icons/lu'
import Waves from './Waves'
import RippleLayer from './RippleLayer'
import { waLink } from '../lib/wa'

const trustIcons = [LuClock, LuUsers, LuGraduationCap] as const

export default function Hero() {
  const { t } = useTranslation()
  const base = import.meta.env.BASE_URL

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* glowing orbs */}
      <div className="orb start-[8%] top-[15%] size-72 bg-neon/25" />
      <div className="orb end-[10%] bottom-[30%] size-96 bg-neon/15" style={{ animationDelay: '-4s' }} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 text-sm font-bold text-neon backdrop-blur-sm">
            {t('hero.badge')}
          </p>
          <h1 className="mt-4 font-heading text-5xl font-black leading-tight text-glow md:text-7xl">
            {t('hero.title1')}
            <br />
            <span className="text-gradient">{t('hero.title2')}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="mt-8 flex flex-wrap gap-3">
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

        {/* Real club photos from the Dolphin Benha Facebook page */}
        <div className="relative z-10 mx-auto w-full max-w-lg">
          <div className="absolute inset-0 rounded-[2rem] bg-neon/20 blur-2xl" />
          <img
            src={`${base}media/dolphin-cover.jpg`}
            alt="Dolphin Swimming Pool Benha"
            className="hero-photo relative w-full rounded-[1.6rem] border border-neon/40 object-cover shadow-[0_0_60px_rgba(31,224,255,0.35)]"
            loading="eager"
          />
          <img
            src={`${base}media/photo-kids.jpg`}
            alt={t('hero.altKids')}
            className="hero-tile hero-tile-a absolute -bottom-8 -start-6 w-36 rounded-xl border-4 border-card object-cover shadow-xl md:w-44"
            loading="lazy"
          />
          <img
            src={`${base}media/photo-swim.jpg`}
            alt={t('hero.altSwim')}
            className="hero-tile hero-tile-b absolute -top-8 -end-4 w-32 rounded-xl border-4 border-card object-cover shadow-xl md:w-40"
            loading="lazy"
          />
        </div>
      </div>

      <RippleLayer />
      <Waves height={130} />
    </section>
  )
}
