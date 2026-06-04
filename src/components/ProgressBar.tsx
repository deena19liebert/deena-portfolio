import { useScrollProgress } from '../hooks/useScrollProgress'

export function ProgressBar() {
  const { progress } = useScrollProgress()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'var(--accent)',
        zIndex: 1000,
        transition: 'width 0.1s linear',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  )
}
