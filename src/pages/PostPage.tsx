import { Link, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { posts } from '../data/posts'
import { useSEO } from '../lib/seo'
import { useTrial } from '../components/TrialProvider'
import NotFound from './NotFound'

export default function PostPage() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const { openTrial } = useTrial()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const post = posts.find((p) => p.slug === slug)

  useSEO({
    title: post ? `${post.title[lang]} | ${t('brand')}` : t('brand'),
    description: post?.excerpt[lang],
    jsonLd: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title[lang],
          datePublished: post.date,
          inLanguage: lang,
        }
      : undefined,
  })

  if (!post) return <NotFound />

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <Link to="/blog" className="inline-flex items-center gap-2 text-neon hover:underline">
        <ArrowLeft size={16} className="rtl:rotate-180" />
        {t('blog.back')}
      </Link>
      <p className="mt-6 text-sm font-semibold text-neon">{post.tag[lang]}</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold leading-snug md:text-4xl">
        {post.title[lang]}
      </h1>
      <p className="mt-2 text-sm text-muted">
        {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { dateStyle: 'long' })}
      </p>
      <article className="mt-8 space-y-5 text-lg leading-8 text-text/90">
        {post.body[lang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
      <div className="mt-10 rounded-3xl border border-neon/40 bg-card p-7 text-center">
        <p className="font-heading text-xl font-bold">{t('blog.ctaText')}</p>
        <button onClick={() => openTrial()} className="btn-neon btn-ripple mt-4">
          {t('hero.ctaTrial')}
        </button>
      </div>
    </main>
  )
}
