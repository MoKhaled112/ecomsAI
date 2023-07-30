import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import imageBenjamin from '@/images/team/Benjamin.jpg'
import imageJames from '@/images/team/James.jpg'
import imageCarlos from '@/images/team/Carlos.jpg'
import imageMo from '@/images/team/Mo.jpg'

function Mission() {
  return (
    <div className="mt-24 rounded-4xl bg-secondary py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Mission"
        title="Lower the barrier of entry for Ecommerce businesses."
      >
        <p>
        to revolutionize the way Ecommerce companies interact with their customers. We believe that exceptional customer support is the backbone of every successful business, and our AI bots are designed to enhance efficiency, foster customer satisfaction, and build lasting relationships.
        </p>
      </SectionIntro>
    </div>
  )
}

const team = [
  {
    title: 'The Team',
    people: [
      {
        name: 'James',
        role: 'AI Project Manager',
        image: { src: imageJames },
      },
      {
        name: 'Carlos',
        role: 'Lead Engineer',
        image: { src: imageCarlos },
      },
      {
        name: 'Mohammed',
        role: 'Software Engineer',
        image: { src: imageMo },
      },
      {
        name: 'Benjamin',
        role: 'Creative Operations Manager',
        image: { src: imageBenjamin },
      }
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-primary">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt={person.name}
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 motion-safe:group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'The pioneers in providing AI-powered customer support bots and automations tailored specifically for Ecommerce companies.',
}

export default async function About() {

  return (
    <>
      <PageIntro eyebrow="About us" title="Elevate your customer support game">
        <p>
          At Ecoms AI, we are the pioneers in providing AI-powered customer support bots and automations tailored specifically for Ecommerce
          companies. With an unwavering commitment to innovation and a passion for delivering exceptional customer experiences, our goal is to
          be a trusted partner for businesses looking to elevate their customer support game.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>

      <Mission />

      <Team />

      <ContactSection />
    </>
  )
}
