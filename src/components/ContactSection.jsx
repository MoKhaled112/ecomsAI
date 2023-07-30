import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-secondary [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Contact us
              </Button>
            </div>
            <div className="mt-10 border-t border-secondary/10 pt-10">
              <h3 className="font-display text-base font-semibold text-secondary">
                Or email us at              
              </h3>
              <a className="font-display text-2xl text-primary hover:underline underline-offset-8" href="mailto:hello@ecomsai.com" target="_blank" rel="noreferrer">hello@ecomsai.com</a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
