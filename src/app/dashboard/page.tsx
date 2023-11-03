
import CardComponent from "@/component/Card";
import { getServerSession } from "next-auth";
import { authOptions } from "../helpers/AuthOptions";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
  }

export default async function Dashboard() {

    const session = await getServerSession(authOptions)
    try {
        const res = await fetch(`http://localhost:4000/api/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${session?.user.accessToken}`,
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        } else {
            const data = await res.json();
            console.log(data)
        }

    } catch (error) {
        console.error('Error:', error);
    }








    const mockupdata = [
        {
            greeting: "Hello",
            sub1: "Daily Mix",
            sub2: "12 Tracks",
            name: "Frontend Radio",
            img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tracks: 12

        },
        {
            greeting: "Hello",
            sub1: "Daily Day",
            sub2: "14 Tracks",
            name: "Disco Radio",
            img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tracks: 12
        },
        {
            greeting: "Hello",
            sub1: "Daily Tracks",
            sub2: "18 Tracks",
            name: "Backend Radio",
            img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tracks: 12

        },
        {
            greeting: "Hello",
            sub1: "Daily Task",
            sub2: "18 Tracks",
            name: "API Radio",
            img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tracks: 12
        },
        {
            greeting: "Hello",
            sub1: "Daily Chill",
            sub2: "11 Tracks",
            name: "Chill Radio",
            img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tracks: 12
        }
    ]

    return (
        <main className="">
            <div className="flex-col">
                <div className="flex justify-center mt-5 font-bold text-[#113946]">
                    <span>Dashboard {session?.user.roles}</span>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-[90vw]">
                        <div className="grid grid-cols-4 gap-2 md:grid-cols-2 sm:grid-cols-2" >
                            {mockupdata && mockupdata.map((item, index) => {
                                return (
                                    <div className={index === mockupdata.length - 1 ? "col-span-4 md:col-span-1 sm:col-span-1" : ""} key={index}>
                                        <CardComponent  {...item} />
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}