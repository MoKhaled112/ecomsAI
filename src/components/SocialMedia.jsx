import Link from 'next/link'
import clsx from 'clsx'

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M8.29 20.253c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.392 4.75a4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.715v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 2 18.41a11.616 11.616 0 0 0 6.29 1.84" />
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      stroke="#050505"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"  {...props}
    >
      <path
        d="m64,112c-8.8,0 -16,7.2 -16,16l0,22.1l172.5,141.6c20.7,17 50.4,17 71.1,0l172.4,-141.6l0,-22.1c0,-8.8 -7.2,-16 -16,-16l-384,0zm-16,100.2l0,171.8c0,8.8 7.2,16 16,16l384,0c8.8,0 16,-7.2 16,-16l0,-171.8l-142,116.6c-38.4,31.5 -93.7,31.5 -132,0l-142,-116.6zm-48,-84.2c0,-35.3 28.7,-64 64,-64l384,0c35.3,0 64,28.7 64,64l0,256c0,35.3 -28.7,64 -64,64l-384,0c-35.3,0 -64,-28.7 -64,-64l0,-256z"
      />
    </svg>
  );
}




function LinkedInIcon(props) {
  return (
    <svg {...props} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}


export const socialMediaProfiles = [
  { title: 'Twitter', href: 'https://twitter.com/EcomsAI_', icon: TwitterIcon },
  { title: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { title: 'Email', href: 'mailto:hello@ecomsai.com', icon: EmailIcon },
]

export function SocialMedia({ className, invert = false }) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-secondary' : 'text-background',
        className
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700'
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
