import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'
import Head from 'next/head';

export const metadata = {
  title: {
    template: '%s - Ecoms AI',
    default: 'Ecoms AI - Empowering Businesses with Affordable AI Solutions',
  },
}

export default function Layout({ children }) {
  return (
    <html id="top" lang="en" className="h-full bg-background text-secondary text-base antialiased">
      <head>
        {/* Include the Facebook Messenger Chat Plugin code here */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v17.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `
        }} />

        
      </head>

      
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat" page_id="747804045285782" attribution="biz_inbox"></div>

        <a href="#top" className="back-to-top-button" aria-label="Back to Top">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </a>
      </body>

    </html>

  )
}
