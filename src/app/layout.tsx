import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '../component/Providers'
import { NextUiProviders } from './provider/NextUiProviders'
import NavbarComponent from '../component/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from './helpers/AuthOptions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard App'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)


  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <NextUiProviders>
            <NavbarComponent sessionSS={session?.user.roles} />
            {children}
          </NextUiProviders>
        </Providers>
      </body>
    </html>
  )
}
