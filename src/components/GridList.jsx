import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function GridList({ className, children }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({ title, children, className, invert = false }) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-background before:bg-primary after:bg-primary'
          : 'text-secondary before:bg-accent after:bg-accent',
        className
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-accent' : 'text-secondary'
            )}
          >
            {title}.
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
