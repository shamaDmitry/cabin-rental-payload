import Headline from '@/components/core/Headline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

// Import global styles and fonts
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col items-center justify-center">
        <div className="container py-28 mx-auto px-4">
          <div className="max-w-none text-center">
            <Link href="/" className="inline-flex mb-4">
              <Image src="/images/logo.webp" alt="logo" width={181} height={79} />
            </Link>

            <Headline>404</Headline>

            <p className="mb-4">This page could not be found.</p>

            <Button asChild variant="default">
              <Link href="/">Go home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
