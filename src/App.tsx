import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import TrialProvider from './components/TrialProvider'
import Home from './pages/Home'
import { useButtonRipples } from './lib/ripple'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'))
const CoachesPage = lazy(() => import('./pages/CoachesPage'))
const CoachDetailPage = lazy(() => import('./pages/CoachDetailPage'))
const SchedulePage = lazy(() => import('./pages/SchedulePage'))
const MembershipPage = lazy(() => import('./pages/MembershipPage'))
const HonorsPage = lazy(() => import('./pages/HonorsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PostPage = lazy(() => import('./pages/PostPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { i18n, t } = useTranslation()
  useButtonRipples()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.dir(i18n.language)
    localStorage.setItem('lang', i18n.language)
  }, [i18n.language])

  useEffect(() => {
    if (!document.documentElement.dataset.theme) {
      document.documentElement.dataset.theme =
        localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
    }
  }, [])

  return (
    <TrialProvider>
      <div className="flex min-h-screen flex-col bg-bg text-text">
        <a href="#main-content" className="skip-link">
          {t('a11y.skip')}
        </a>
        <ScrollToTop />
        <Navbar />
        <div className="flex-1" id="main-content">
          <Suspense fallback={<div className="mx-auto max-w-7xl px-6 py-24" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/coaches" element={<CoachesPage />} />
            <Route path="/coaches/:id" element={<CoachDetailPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/honors" element={<HonorsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* legacy aliases from the old site */}
            <Route path="/courses" element={<Navigate to="/programs" replace />} />
            <Route path="/trainers" element={<Navigate to="/coaches" replace />} />
            <Route path="/pricing" element={<Navigate to="/membership" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </TrialProvider>
  )
}
