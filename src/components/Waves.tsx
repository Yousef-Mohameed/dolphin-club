export default function Waves({ height = 120 }: { height?: number }) {
  return (
    <div className="waves" style={{ height }} aria-hidden="true">
      <div className="wave wave-1" />
      <div className="wave wave-2" />
      <div className="wave wave-3" />
    </div>
  )
}
