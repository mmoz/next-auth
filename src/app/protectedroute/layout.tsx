import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protected Page',
  description: 'Admin Only',

}
export default function ProtectedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        {children}
    </section>
  )
}