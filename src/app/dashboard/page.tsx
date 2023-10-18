
"use client"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Dashboard() {

    const { data: session } = useSession()
    const router = useRouter()

        return (
            <>
                <div className="flex justify-end mr-2 mt-2">
                    <button onClick={() => signOut({
                        callbackUrl: "/",
                    })}>Signout</button>
                </div>
                <div className="flex justify-center">
                    <span>Dashboard {session?.user.userFirstname}</span>
                </div>
            </>
        );
}