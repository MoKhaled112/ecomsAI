import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

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
        To revolutionize the way Ecommerce companies interact with their customers. We believe that exceptional customer support is the backbone of every successful business, and our AI bots are designed to enhance efficiency, foster customer satisfaction, and build lasting relationships.
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
        socials: [
          { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/james-rawlings-4877121b6' },
          { platform: 'Twitter', url: 'https://twitter.com/jamesr_ai' },
        ],
      },
      {
        name: 'Carlos',
        role: 'Lead Engineer',
        image: { src: imageCarlos },
        socials: [
          { platform: 'GitHub', url: 'https://github.com/1cmasson' },
        ],
      },
      {
        name: 'Mohammed',
        role: 'Software Engineer',
        image: { src: imageMo },
        socials: [
          { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mokhaled112/' },
          { platform: 'GitHub', url: 'https://github.com/MoKhaled112/' },
        ],
      },
      {
        name: 'Benjamin',
        role: 'Creative Operations Manager',
        image: { src: imageBenjamin },
        socials: [
          { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/benjamin-kronvold-104931221/' },
        ],
      },
    ],
  },
];


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
          <p className="mt-2 text-sm text-white">{person.role}</p>
          <div className="mt-2 flex space-x-2">
            {person.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <svg
                  className="w-6 h-6 hover:fill-primary transition-all duration-500"
                  fill="white"
                  stroke="white"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {social.platform === 'LinkedIn' && (
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  )}
                  {social.platform === 'Twitter' && (
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                  )}
                   {social.platform === 'GitHub' && (
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    )}
                  {/* Add more social media icons as needed */}
                </svg>
              </a>
            ))}
          </div>
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
    'The pioneers in providing AI-powered customer support bots, marketing bots, and automations tailored specifically for Ecommerce companies.',
}

export default async function About() {

  return (
    <>
      <PageIntro eyebrow="About us" title="Elevate your customer support game">
        <p>
          At Ecoms AI, we are the pioneers in providing AI-powered customer support bots, marketing bots, and automations tailored specifically for Ecommerce
          companies. With an unwavering commitment to innovation and a passion for delivering exceptional customer experiences, our goal is to
          be a trusted partner for businesses looking to elevate their customer support game.
        </p>
      </PageIntro>
      <PageIntro className="mt-16" title="Ecoms AI, your trusted AI automation agency">
        <p>
          Established in 2023, our team of AI enthusiasts aims to revolutionize businesses through cutting-edge technology,
          providing unparalleled value by streamlining operations and driving growth. With expertise in AI, machine learning, and automation,
          we design tailored solutions to help businesses thrive in the rapidly evolving digital landscape.
        </p>
      </PageIntro>
      <Container className="mt-16">
      </Container>

      <Mission />

      <Team />

      <ContactSection />
    </>
  )
}
