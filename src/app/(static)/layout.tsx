import NavbarComponent from "@/component/Navbar"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Dashboard App'
}

export default async function StaticLayout({
    children,
}: {
    children: React.ReactNode
}) {



    return (
        <>
            <NavbarComponent />
            {children}
        </>
    )
}
