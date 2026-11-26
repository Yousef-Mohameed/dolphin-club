import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import Waves from './Waves'
import RippleLayer from './RippleLayer'
import { useTrial } from './TrialProvider'

export default function Hero() {
  const { t } = useTranslation()
  const { openTrial } = useTrial()
  const base = import.meta.env.BASE_URL

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* glowing orbs */}
      <div className="orb start-[8%] top-[15%] size-72 bg-neon/25" />
      <div className="orb end-[10%] bottom-[30%] size-96 bg-neon/15" style={{ animationDelay: '-4s' }} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="font-semibold text-neon">{t('hero.badge')}</p>
          <h1 className="mt-3 font-heading text-5xl font-extrabold leading-tight text-glow md:text-6xl">
            {t('hero.title1')}
            <br />
            {t('hero.title2')}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => openTrial()} className="btn-neon btn-ripple">
              {t('hero.ctaTrial')}
            </button>
            <Link to="/programs" className="btn-ghost btn-ripple">
              {t('hero.ctaPrograms')}
            </Link>
          </div>
        </div>

        {/* Media orb: swap /public/media/hero.mp4 (or the poster) to change it */}
        <div className="relative z-10 mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full bg-neon/20 blur-2xl" />
          <video
            className="relative h-full w-full rounded-full border border-neon/40 object-cover shadow-[0_0_60px_rgba(31,224,255,0.35)]"
            autoPlay
            muted
            loop
            playsInline
            poster={`${base}media/hero-poster.png`}
          >
            <source src={`${base}media/hero.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>

      <RippleLayer />
      <Waves height={130} />
    </section>
  )
}
