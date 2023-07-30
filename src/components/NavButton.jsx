import clsx from 'clsx'

export function NavButton({ invert, className, children }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 p-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  )

  return (
    <button className={className}>
      {children}
    </button>
  )
}
