import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-primary before:content-['/_'] after:text-secondary after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-secondary sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function SectionInverted({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section] mt-24 rounded-4xl bg-secondary py-20 sm:mt-32 sm:py-32 lg:mt-56 !max-w-none">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-accent before:content-['/_'] after:text-background after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-background sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Planning() {
  return (
    <Section title="Planning" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-secondary">
        <p>To get started, simply fill out the contact us form with your information, and we&apos;ll be in touch promptly.
          Take the next step in transforming your business by booking a free consultation call, where we can learn more about your unique needs
          and tailor our solutions to drive your success. Let Ecoms AI be your partner in embracing AI automation for a more efficient and
          thriving future.
        </p>
      </div>
    </Section>
  )
}

function BuildingTesting() {
  return (
    <SectionInverted title="Building & Testing" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-background">
        <p>Once you&apos;ve shared your requirements, our skilled developers will begin crafting the AI chatbot,
          meticulously customizing it to meet your specific needs and preferences. After completion, we&apos;ll provide you with the bot for
          testing, and you can freely request any necessary changes to ensure it aligns perfectly with your vision. At Ecoms AI, our goal is
          to deliver a seamless and tailored chatbot experience, making your automation journey smooth and successful.

        </p>
      </div>
    </SectionInverted>
  )
}

function Implementation() {
  return (
    <Section title="Implementation" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-secondary">
        <p>
        Once you&apos;ve shared your requirements, our skilled developers will begin crafting the AI chatbot,
        meticulously customizing it to meet your specific needs and preferences. After completion, we&apos;ll provide you with the bot for testing,
        and you can freely request any necessary changes to ensure it aligns perfectly with your vision.
        At Ecoms AI, our goal is to deliver a seamless and tailored chatbot experience, making your automation journey smooth and successful.
        </p>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 py-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:py-40 rounded-4xl bg-secondary">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-primary stroke-accent/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
      <GridList>
  <GridListItem invert title="AI-Powered Chatbots">
    We specialize in creating advanced chatbots tailored for ecommerce sites and marketing. By harnessing the power of artificial intelligence, our chatbots engage customers, streamline customer support, and drive conversions like never before.
  </GridListItem>
  <GridListItem invert title="Enhanced Efficiency">
    Experience enhanced efficiency and productivity. Our chatbots handle repetitive tasks, answer frequently asked questions, and provide personalized recommendations, allowing your team to focus on high-value activities.
  </GridListItem>
  <GridListItem invert title="Seamless Integration">
    We seamlessly integrate our AI chatbots with your existing ecommerce platform and marketing systems. Whether it&apos;s Shopify, WooCommerce, or any other platform.
  </GridListItem>
  <GridListItem invert title="Tailored Solutions">
    Each chatbot we develop is tailored to meet your specific needs and business goals. Our bots are trained to provide relevant information, and enhance user experience.
  </GridListItem>
  <GridListItem invert title="Constant Innovation">
    We are committed to staying at the forefront of AI technology and innovation to ensure that your business is benefitting from cutting-edge AI capabilities.
  </GridListItem>
  <GridListItem invert title="Data-Driven Insights">
   We provide data-driven insights from chatbot interactions which helps you make informed decisions and optimize your strategies for maximum engagement and conversion rates.
  </GridListItem>
</GridList>

      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Planning />
        <BuildingTesting />
        <Implementation />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
