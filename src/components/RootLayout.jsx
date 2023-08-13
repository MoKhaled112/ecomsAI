'use client'

import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/Button'
import { NavButton } from '@/components/NavButton'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'

function XIcon() {
  return (
    <NavButton className = 'inline-flex rounded-full px-4 p-1.5 text-sm font-semibold transition bg-background text-secondary hover:bg-background/70' aria-label="Menu Button">
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-secondary">
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
    </NavButton>
  )
}

function MenuIcon() {
  return (
    <NavButton className = 'inline-flex rounded-full px-4 p-1.5 text-sm font-semibold transition bg-secondary text-background hover:bg-secondary/70' aria-label="Menu Button">
    <svg viewBox="0 0 24 24" aria-hidden="true"  className="h-6 w-6">
      <path d="M2 6h20v2H2zM2 16h20v2H2z" className="fill-current text-background" />
    </svg>
    </NavButton>
  )
}

function Header({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) {

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
        >
          <Logomark
            className="block sm:hidden"
            invert={!invert}
          />
          <Logo
            className="hidden sm:block"
            invert={!invert}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href="/contact" invert={!invert}>
            Contact us
          </Button>
          <div
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-background/10' : 'hover:bg-secondary/10'
            )}
            aria-label="Toggle Menu"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                ? 'fill-secondary group-hover:fill-secondary/20'
                : 'fill-background group-hover:fill-background/70'
              )}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="border-collapse sm:border sm:border-x-0 sm:border-background even:border-y-0">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:border-background sm:even:pl-16 hover:text-secondary"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-background opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="font-display text-5xl font-medium tracking-tight text-background">
      <NavigationRow>
        <NavigationItem href="/about">About Us</NavigationItem>
        <NavigationItem href="/services">Our Services</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/work">Work Cases</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef()
  let closeRef = useRef()
  let navRef = useRef()
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest('a')?.href === window.location.href) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0rem' }}
          className="relative z-50 overflow-hidden bg-secondary"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-primary/50">
            <div ref={navRef} className="bg-secondary pb-16 pt-16">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-primary before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-background/80">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-12 pt-8 sm:grid-cols-2 sm:pt-14">
                  <div>
                    <h2 className="font-display text-base font-semibold text-background">
                      Email us
                    </h2>
                    <a className="font-display text-2xl text-background mt-6 block leading-none align-top hover:underline underline-offset-8" href="mailto:hello@ecomsai.com" target="_blank" rel="noreferrer">hello@ecomsai.com</a>
                  </div>
                  <div className="sm:border-l sm:border-background sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-background">
                      Connect
                    </h2>
                    
                    <SocialMedia className="mt-6" />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-background text-secondary pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-primary/75 stroke-accent/10 [mask-image:linear-gradient(to_bottom_left,background_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()

  return (
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
  )
}
