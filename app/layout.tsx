import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEAT Engagements - Professional Services',
  description: 'Leading provider of professional engagement solutions for businesses',
  keywords: 'NEAT, Engagements, Professional Services, Business Solutions',
  authors: [{ name: 'NEAT Engagements' }],
  openGraph: {
    title: 'NEAT Engagements - Professional Services',
    description: 'Leading provider of professional engagement solutions',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'NEAT Engagements',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
