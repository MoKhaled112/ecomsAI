import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

export const metadata = {
  title: 'Our Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="From AI powered tools to Automation for your business, we got you covered"
        className="mt-24 sm:mt-32 lg:mt-40"
        invert
      >
        <p>
          It&apos;s undeniable that AI and Automation is here to stay. Future proof your business now.
        </p>
      </PageIntro>
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

      <ContactSection />
      
    </>
  )
}
