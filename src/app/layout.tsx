
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import RecoidContextProvider from '@/atoms/atoms'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drug Abuse App',
  description: 'Report Drug Abuse Online Anonymously',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoidContextProvider>
        <Navbar/>
        {children}
        </RecoidContextProvider>
        </body>

    </html>
  )
}
