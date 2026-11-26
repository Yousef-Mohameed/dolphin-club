import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function SoundToggle() {
  const { t } = useTranslation()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [on, setOn] = useState(false)

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${import.meta.env.BASE_URL}media/water.mp3`)
      audioRef.current.loop = true
      audioRef.current.volume = 0.35
    }
    if (on) {
      audioRef.current.pause()
      setOn(false)
    } else {
      audioRef.current
        .play()
        .then(() => setOn(true))
        .catch(() => setOn(false))
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? t('sound.off') : t('sound.on')}
      title={on ? t('sound.off') : t('sound.on')}
      className="rounded-full border border-line bg-card/60 p-2 text-neon transition-shadow hover:shadow-[0_0_14px_rgba(31,224,255,0.4)]"
    >
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}
