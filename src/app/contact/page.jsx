import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, isRequired, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        required={isRequired}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
      {label}
        {isRequired && <span className="text-red-500 text-lg ml-1">*</span>}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
<form
  method="POST"
  data-netlify="true"
  name="contact_us_page"
  novalidate
>
  <input type="hidden" name="form-name" value="contact_us_page" />
  <h2 className="font-display text-base font-semibold text-primary">
    Contact us
  </h2>
  <div className="isolate mt-6 -space-y-px rounded-2xl bg-secondary">
    <TextInput label="Name" name="name" isRequired autoComplete="name" />
    <TextInput label="Email" type="email" isRequired name="email" autoComplete="email" />
    <TextInput label="Company" name="company" autoComplete="organization" />
    <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
    <TextInput label="Message" isRequired name="message" />
    <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
    <Button type="submit" className="mt-10">
    Let’s work together
  </Button>
  </div>
  </div>
</form>

    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
        <h2 className="font-display text-base font-semibold text-primary mb-4">
          Email us
        </h2>
        <a className="font-display text-2xl text-secondary hover:underline underline-offset-8" href="mailto:hello@ecomsai.com" target="_blank" rel="noreferrer">hello@ecomsai.com</a>


      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-primary">
          Connect
        </h2>
        <SocialMedia invert className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
