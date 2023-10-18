
"use client"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Skeleton } from '@nextui-org/react';
import { useState } from "react";

export default function Dashboard() {

    const { data: session, status } = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true);

    const userName = session?.user?.userFirstname


    return (
        <main className="h-[100dvh]">
            <div className="flex-col">
                <div className="flex justify-center mt-5">
                    <span>Dashboard </span>
                </div>
                <div className="flex justify-center w-full mt-5">
                    <Card className=" w-fit flex px-20 py-10">
                        <CardHeader className="pb-0  sm:order-2  px-4 flex-col items-center">
                            <p className="text-tiny uppercase font-bold"> Hello {userName}</p>
                            <p className="text-tiny uppercase font-bold">Daily Mix</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 flex justify-center items-center w-full">
                            {isLoading ? <Skeleton className="rounded-lg">
                                <Image
                                    alt="Card background"
                                    className="objct-cover rounded-xl "
                                    src="https://images.unsplash.com/photo-1695509038650-7dd05e5cf6a4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887"
                                    width={160}
                                    onLoad={() => setIsLoading(false)}
                                />
                            </Skeleton> : <Image
                                alt="Card background"
                                className="object-cover rounded-xl "
                                src="https://images.unsplash.com/photo-1695509038650-7dd05e5cf6a4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887"
                                width={160}
                            />}

                        </CardBody>
                    </Card>
                </div>
            </div>


        </main>
    );
}