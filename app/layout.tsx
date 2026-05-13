import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { WhatsAppButton } from '@/components/whatsapp-button'
import {
  LocalBusinessSchema,
  OrganizationSchema,
  WebSiteSchema,
} from '@/components/seo/schemas'
import { SITE_URL } from '@/lib/seo/business-info'
import './globals.css'

const GTM_ID = 'GTM-MGJZJHJ4'
const META_PIXEL_ID = '2043183399894614'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const TITLE = 'GTiQ — Control horario y fichaje legal para pymes'
const DESCRIPTION =
  'Software de fichaje y control horario para pymes españolas. Cumple el RD 8/2019, evita multas de hasta 220.000 € y ahorra hasta un 62% frente a Sesame, Factorial o Bizneo.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · GTiQ' },
  description: DESCRIPTION,
  applicationName: 'GTiQ',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'control horario',
    'registro de jornada',
    'fichaje empleados',
    'RD 8/2019',
    'real decreto 8/2019',
    'control horario pymes',
    'software de fichaje España',
    'alternativa Sesame',
    'alternativa Factorial',
    'alternativa Bizneo',
  ],
  authors: [{ name: 'GNERAI' }],
  generator: 'GTiQ',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'GTiQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
