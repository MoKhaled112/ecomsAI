import clsx from 'clsx'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'

export const MDXComponents = {
  Blockquote({ className, ...props }) {
    return <Blockquote className={clsx('my-32', className)} {...props} />
  },
  img: function Img({ className, ...props }) {
    return (
      <div
        className={clsx(
          'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
          className
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    )
  },
  TopTip({ className, children }) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-950">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    )
  },
  Typography({ className, ...props }) {
    return <div className={clsx('typography', className)} {...props} />
  },
  wrapper({ className, ...props }) {
    return (
      <div
        className={clsx(
          '[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0',
          className
        )}
        {...props}
      />
    )
  },
}
