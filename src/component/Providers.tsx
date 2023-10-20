"use client"
import React, { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children: React.ReactNode
  session: any
}



export const Providers = ({ children }: Props, { session }: Props) => {

  

  return <SessionProvider session={session}>{children}</SessionProvider>
}
export default Providers
