import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import TrialProvider from './components/TrialProvider'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import CoachesPage from './pages/CoachesPage'
import CoachDetailPage from './pages/CoachDetailPage'
import SchedulePage from './pages/SchedulePage'
import MembershipPage from './pages/MembershipPage'
import HonorsPage from './pages/HonorsPage'
import GalleryPage from './pages/GalleryPage'
import EventsPage from './pages/EventsPage'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import { useButtonRipples } from './lib/ripple'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { i18n } = useTranslation()
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
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">
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
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </TrialProvider>
  )
}
