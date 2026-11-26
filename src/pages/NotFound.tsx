import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main className="px-6 py-24 text-center">
      <h1 className="font-heading text-7xl font-extrabold text-neon text-glow">404</h1>
      <p className="mt-3 text-muted">{t('notFound.text')}</p>
      <Link to="/" className="btn-ghost btn-ripple mt-6 inline-flex">
        {t('notFound.back')}
      </Link>
    </main>
  )
}
