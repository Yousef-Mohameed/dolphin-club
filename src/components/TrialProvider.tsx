import { createContext, useContext, useState, type ReactNode } from 'react'
import TrialModal from './TrialModal'

type TrialCtx = { openTrial: (program?: string) => void }
const Ctx = createContext<TrialCtx>({ openTrial: () => {} })

export const useTrial = () => useContext(Ctx)

export default function TrialProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [program, setProgram] = useState<string | undefined>()

  const openTrial = (p?: string) => {
    setProgram(p)
    setOpen(true)
  }

  return (
    <Ctx.Provider value={{ openTrial }}>
      {children}
      {open && <TrialModal program={program} onClose={() => setOpen(false)} />}
    </Ctx.Provider>
  )
}
