import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './component/Providers'
import { NextUiProviders } from './provider/NextUiProviders'
import NavbarComponent from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextUiProviders>
            <NavbarComponent/>
            {children}
          </NextUiProviders>
        </Providers>
      </body>
    </html>
  )
}
