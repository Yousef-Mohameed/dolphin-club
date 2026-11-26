import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { LuPhone as Phone, LuMapPin as MapPin, LuClock as Clock } from 'react-icons/lu'
import DolphinIcon from './DolphinIcon'
import { CLUB } from '../config'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'

  return (
    <footer className="border-t border-line/40 bg-navy-1 px-6 py-12 text-muted [data-theme=light_&]:bg-bg2">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-heading text-2xl font-bold text-neon text-glow">
            <DolphinIcon size={30} />
            {t('brand')}
          </div>
          <p className="mt-3 max-w-xs">{t('footer.tagline')}</p>
        </div>

        <div className="leading-8">
          <h3 className="font-heading text-lg font-bold text-neon">
            {t('footer.linksTitle')}
          </h3>
          <div className="mt-2 grid grid-cols-2 gap-x-6">
            <Link className="hover:text-neon" to="/programs">{t('nav.programs')}</Link>
            <Link className="hover:text-neon" to="/coaches">{t('nav.coaches')}</Link>
            <Link className="hover:text-neon" to="/schedule">{t('nav.schedule')}</Link>
            <Link className="hover:text-neon" to="/membership">{t('nav.membership')}</Link>
            <Link className="hover:text-neon" to="/events">{t('nav.events')}</Link>
            <Link className="hover:text-neon" to="/blog">{t('nav.blog')}</Link>
          </div>
        </div>

        <div className="leading-8">
          <h3 className="font-heading text-lg font-bold text-neon">
            {t('footer.contactTitle')}
          </h3>
          <p className="mt-2 flex items-center gap-2">
            <MapPin size={16} className="text-neon" /> {CLUB.address[lang]}
          </p>
          <p className="flex items-center gap-2" dir="ltr">
            <Phone size={16} className="text-neon" /> {CLUB.phoneDisplay}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={16} className="text-neon" /> {CLUB.hours[lang]}
          </p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl border-t border-line/40 pt-6 text-sm">
        © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
      </p>
    </footer>
  )
}
