import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Synergex — The Language of Systems',
  description: 'Universal Systems-of-Systems Meta Language (USSML) for modeling complex systems, flows, and feedback loops.',
  keywords: 'Synergex, USSML, systems thinking, complex systems, modeling, meta language',
  authors: [{ name: 'Synergex Team' }],
  creator: 'Synergex',
  publisher: 'Synergex',
  robots: 'index, follow',
  metadataBase: new URL('https://synergex.org'),
  openGraph: {
    title: 'Synergex — The Language of Systems',
    description: 'Universal Systems-of-Systems Meta Language (USSML) for modeling complex systems, flows, and feedback loops.',
    url: 'https://synergex.org',
    siteName: 'Synergex',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Synergex - The Language of Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synergex — The Language of Systems',
    description: 'Universal Systems-of-Systems Meta Language (USSML) for modeling complex systems, flows, and feedback loops.',
    images: ['/og-image.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d1b2a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-synergex-background">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M27MH4CTDV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M27MH4CTDV');
          `}
        </Script>
      </body>
    </html>
  )
}

