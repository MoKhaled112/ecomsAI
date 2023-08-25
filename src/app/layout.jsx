import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Ecoms AI',
    default: 'Ecoms AI - Empowering Businesses with Affordable AI Solutions',
  },
}

export default function Layout({ children }) {
  return (
    <html id="top" lang="en" className="h-full bg-background text-secondary text-base antialiased">

      
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <a href="#top" className="back-to-top-button" aria-label="Back to Top">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </a>
      </body>
    </html>
  )
}
