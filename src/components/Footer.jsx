import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [

  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Process', href: '/process' },
      { title: 'Work Cases', href: '/work' },
    ],
  },
    //   t{
  //   title: 'Work',
  //   links: [
  //     { title: 'FamilyFund', href: '/work/family-fund' },
  //     { title: 'Unseal', href: '/work/unseal' },
  //     { title: 'Phobia', href: '/work/phobia' },
  //   ],
  // },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-accent">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-background">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4 w-auto ">
                  <Link
                    href={link.href}
                    className="transition text-background hover:underline underline-offset-4"
                    target="_blank"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
<form
  className="max-w-sm"
  method="POST"
  data-netlify="true"
  name="newsletter"
>
  <input type="hidden" name="form-name" value="newsletter" />
  <h2 className="font-display text-sm font-semibold tracking-wider text-accent">
    Sign up for our newsletter
  </h2>
  <p className="mt-4 text-sm text-neutral-700">
    Subscribe to get the latest Artificial Intelligence news, articles, resources and
    inspiration.
  </p>
  <div className="relative mt-6">
    <input
      type="email"
      name="email"
      placeholder="Email address"
      autoComplete="email"
      aria-label="Email address"
      required
      className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
    />
    <div className="absolute inset-y-1 right-1 flex justify-end">
      <button
        type="submit"
        aria-label="Submit"
        className="flex aspect-square h-full items-center justify-center rounded-xl bg-accent text-secondary transition hover:bg-accent/70"
      >
        <ArrowIcon className="w-4" />
      </button>
    </div>
  </div>
</form>

  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40 bg-secondary pt-16 rounded-4xl rounded-b-none">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-16 mt-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-accent pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="block" />
          </Link>
          <p className="text-sm text-neutral-700">
            © Ecoms AI Agency 2023
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
