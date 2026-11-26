import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { LuX as X, LuCircleCheck as CheckCircle2 } from 'react-icons/lu'
import { FaWhatsapp as MessageCircle } from 'react-icons/fa'
import { waLink } from '../lib/wa'

const schema = z.object({
  name: z.string().min(2, 'name'),
  phone: z.string().regex(/^\+?[0-9\s-]{8,15}$/, 'phone'),
  age: z.string().refine((v) => {
    const n = Number(v)
    return Number.isInteger(n) && n >= 3 && n <= 90
  }, 'age'),
  program: z.string().min(1, 'program'),
})
type FormData = z.infer<typeof schema>

const PROGRAMS = ['kids', 'competitive', 'adults'] as const

export default function TrialModal({
  program,
  onClose,
}: {
  program?: string
  onClose: () => void
}) {
  const { t } = useTranslation()
  const [done, setDone] = useState<FormData | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { program: program ?? '' },
  })

  const err = (k?: string) =>
    k ? <p className="mt-1 text-sm text-red-400">{t(`trial.err.${k}`)}</p> : null

  const msg = (d: FormData) =>
    t('trial.waMessage', {
      name: d.name,
      phone: d.phone,
      age: Number(d.age),
      program: t(`programs.${d.program}.name`),
    })

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-1/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t('trial.title')}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl border border-line bg-card p-7 shadow-[0_0_50px_rgba(31,224,255,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h2 className="font-heading text-2xl font-bold text-neon text-glow">
            {t('trial.title')}
          </h2>
          <button onClick={onClose} aria-label={t('nav.close')} className="text-muted hover:text-text">
            <X size={22} />
          </button>
        </div>

        {!done ? (
          <form onSubmit={handleSubmit(setDone)} className="mt-5 space-y-4" noValidate>
            <div>
              <label className="mb-1 block text-sm font-semibold" htmlFor="t-name">{t('trial.name')}</label>
              <input
                id="t-name"
                {...register('name')}
                className="w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none"
                placeholder={t('trial.namePh')}
              />
              {err(errors.name?.message)}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold" htmlFor="t-phone">{t('trial.phone')}</label>
              <input
                id="t-phone"
                dir="ltr"
                {...register('phone')}
                className="w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none"
                placeholder="01xxxxxxxxx"
              />
              {err(errors.phone?.message)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-semibold" htmlFor="t-age">{t('trial.age')}</label>
                <input
                  id="t-age"
                  type="number"
                  {...register('age')}
                  className="w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none"
                  placeholder="10"
                />
                {err(errors.age?.message)}
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold" htmlFor="t-program">{t('trial.program')}</label>
                <select
                  id="t-program"
                  {...register('program')}
                  className="w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-text focus:border-neon focus:outline-none"
                >
                  <option value="">{t('trial.programPh')}</option>
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>
                      {t(`programs.${p}.name`)}
                    </option>
                  ))}
                </select>
                {err(errors.program?.message)}
              </div>
            </div>
            <button type="submit" className="btn-neon btn-ripple w-full">
              {t('trial.submit')}
            </button>
            <p className="text-center text-xs text-muted">{t('trial.hint')}</p>
          </form>
        ) : (
          <div className="mt-6 text-center">
            <CheckCircle2 size={64} className="pop-in mx-auto text-neon" />
            <h3 className="mt-4 font-heading text-xl font-bold">{t('trial.successTitle')}</h3>
            <p className="mt-2 text-muted">{t('trial.successText')}</p>
            <a
              href={waLink(msg(done))}
              target="_blank"
              rel="noreferrer"
              className="btn-neon btn-ripple mt-6 w-full"
            >
              <MessageCircle size={18} />
              {t('trial.confirmWa')}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
