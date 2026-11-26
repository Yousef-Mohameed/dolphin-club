import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { LuNewspaper as Newspaper } from 'react-icons/lu'
import { posts } from '../data/posts'
import { Reveal } from '../lib/reveal'
import { useSEO } from '../lib/seo'

export default function BlogPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  useSEO({ title: t('seo.blogTitle'), description: t('seo.blogDesc') })

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <Reveal>
        <h1 className="text-center font-heading text-4xl font-bold text-glow">
          {t('blog.title')}
        </h1>
        <p className="mt-3 text-center text-muted">{t('blog.subtitle')}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <Link
              to={`/blog/${p.slug}`}
              className="glow-card sweep flex h-full flex-col rounded-3xl border border-line bg-card p-7"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-neon">
                <Newspaper size={15} />
                {p.tag[lang]}
              </span>
              <h2 className="mt-3 font-heading text-xl font-bold">{p.title[lang]}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt[lang]}</p>
              <p className="mt-4 text-xs text-muted">
                {new Date(p.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { dateStyle: 'long' })}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
