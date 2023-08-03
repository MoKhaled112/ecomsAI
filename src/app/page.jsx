import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { Quote } from '@/components/Quote'
import logoCustomGPT from '@/images/technologies/CustomGPT.png'
import logoManyChat from '@/images/technologies/ManyChat.png'
import logoZapier from '@/images/technologies/zapier.png'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const technologies = [
  ['CustomGPT', logoCustomGPT],
  ['Zapier', logoZapier],
  ['ManyChat', logoManyChat],
]

function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-secondary py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-background sm:text-left">
          We Use Modern Technologies to Deliver Cutting-Edge Solutions
          </h2>
          <div className="h-px flex-auto bg-accent" />
        </FadeIn>
        <FadeInStagger faster>
        <ul
  role="list"
  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3"
>
  {technologies.map(([technology, logo]) => (
    <li key={technology}>
      <div className="max-w-[250px] max-h-[100px] flex justify-between">
        <FadeIn>
          <Image src={logo} alt={technology} className="object-contain h-full" loading="lazy" decoding="async" />
        </FadeIn>
      </div>
    </li>
  ))}
</ul>


        </FadeInStagger>
      </Container>
    </div>
  )
}

// function CaseStudies({ caseStudies }) {
//   return (
//     <>
//     <div className="mt-4 rounded-4xl bg-secondary py-4 sm:mt-6 sm:py-6 lg:mt-8">
//       <SectionIntro
//         title="Harnessing technology for a brighter future"
//         className="mt-4 sm:mt-6 lg:mt-8 "
//       >
//         <p>
//           We believe technology is the answer to the world’s greatest
//           challenges. It’s also the cause, so we find ourselves in bit of a
//           catch 22 situation.
//         </p>
//       </SectionIntro>
//       <Container className="pt-16">
//         <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {caseStudies.map((caseStudy) => (
//             <FadeIn key={caseStudy.href} className="flex">
//               <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-background/20 transition hover:bg-secondary sm:p-8">
//                 <h3>
//                   <Link href={caseStudy.href}>
//                     <span className="absolute inset-0 rounded-3xl" />
//                     <Image
//                       src={caseStudy.logo}
//                       alt={caseStudy.client}
//                       className="h-16 w-16"
//                       unoptimized
//                     />
//                   </Link>
//                 </h3>
//                 <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
//                   <time dateTime={caseStudy.year} className="font-semibold">
//                     {caseStudy.date.split('-')[0]}
//                   </time>
//                   <span className="text-neutral-300" aria-hidden="true">
//                     /
//                   </span>
//                   <span>Case study</span>
//                 </p>
//                 <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
//                   {caseStudy.title}
//                 </p>
//                 <p className="mt-4 text-base text-neutral-600">
//                   {caseStudy.description}
//                 </p>
//               </article>
//             </FadeIn>
//           ))}
//         </FadeInStagger>
//       </Container>
//       </div>
//       </>
//   )
// }

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="From AI powered tools to Automation for your business, we got you covered"
        className="mt-24 sm:mt-32 lg:mt-40"
        invert
      >
        <p>
          It&apos;s undeniable that AI and Automation is here to stay. Future proof your business now.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4" invert>
            <ListItem title="Automated Chatbot Development and Customization">
              We design and build custom chatbots tailored to your clients&apos; specific business needs and target audience. Bots will collect feedback and be integrated into backend processes for streamlined data management. 
            </ListItem>
            <ListItem title="24/7 Automated Customer Support">
            Provide round-the-clock customer support through automated chatbots, reducing response times and enhancing customer satisfaction.
            </ListItem>
            <ListItem title="Multi-Platform Deployment">
            Deploy chatbots across various messaging platforms, websites, and social media channels to reach customers wherever they are. 
            </ListItem>
            <ListItem title="Chatbot Maintenance and Innovation">
            Offer ongoing maintenance and support services to address any issues, update chatbot capabilities to the latest AI advancements, and ensure smooth operation.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We pioneer AI-powered customer support bots, marketing bots, and automations driven by innovation and a passion for exceptional customer experiences.',
}

export default async function Home() {
  // let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-20 sm:mt-28 md:mt-48 mb-20">
        <FadeIn className="max-w-3xl">
        <h1 class="font-display pl-4 text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-secondary drop-shadow-md [text-wrap:balance]">
          Your business is
          </h1>
          <div class="inline-block px-4 pt-2 pb-2 bg-neutral-900 rounded-lg">
          <h1 class="heroGradient font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight [text-wrap:balance]">OVERSPENDING.</h1>
          </div>

          <p className="mt-6 text-lg sm:text-2xl text-secondary/80">
          We pioneer AI-powered customer support bots, marketing bots, and automations, driven by innovation and a passion for exceptional customer experiences. <a className='text-primary underline' href='/about'>Learn more</a>
          </p>
        </FadeIn>
      </Container>

      {<Technologies />}

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Services />

      <Quote author="- Ecoms AI Team"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        Whether you run a one man business or a large one, AI can make your life easier and save time, effort and money.
      </Quote>



      <ContactSection />
    </>
  )
}
