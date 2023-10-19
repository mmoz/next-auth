"use client"
import { useSession } from "next-auth/react";
import { ReactNode, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, image } from "@nextui-org/react";
import { Skeleton } from '@nextui-org/react';
import { Accordion, AccordionItem } from "@nextui-org/react";



export default function CardComponent({ greeting, sub1, sub2, name, img, tracks }: { greeting: ReactNode, sub1: ReactNode, sub2: ReactNode, name: ReactNode, img: ReactNode, tracks: ReactNode }) {
    const { data: session, status } = useSession()
    const [isLoading, setIsLoading] = useState(true);

    const userName = session?.user?.userFirstname
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <>
            <Card className="col-span-12 sm:col-span-4 relative h-[400px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">{sub1}</p>
                    <h4 className="text-white font-medium text-large">{sub2}</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={img as string}
                />
                <div className="w-full absolute bottom-0 z-10 bg-transparent ">
                    <Accordion variant="light">
                        <AccordionItem key="1" aria-label="Accordion 1" title={<span className="text-white"
                        >รายละเอียด</span>}
                            className=" bg-transparent "
                            indicator={<svg
                                viewBox="0 0 24 24"
                                fill="white"
                                height="1em"
                                width="1em"
                            >
                                <path d="M18.464 2.114a.998.998 0 00-1.033.063l-13 9a1.003 1.003 0 000 1.645l13 9A1 1 0 0019 21V3a1 1 0 00-.536-.886zM17 19.091L6.757 12 17 4.909v14.182z" />
                            </svg>}
                        >
                            <div className="overflow-auto max-h-[10rem] md:max-h-[12rem] sm:max-[10rem] bg-white opacity-[0.8]">
                                {defaultContent}
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Card>



            {/* <Card className=" flex justify-center items-center h-[420px] pb-5 " isBlurred shadow="sm"
>
                <CardHeader className="pb-0 w-full  sm:order-2  px-4 flex-col items-center justify-center text-center">
                    <p className="text-tiny uppercase font-bold"> {greeting} {userName}</p>
                    <p className="text-tiny uppercase font-bold">{sub1}</p>
                    <small className="text-default-500">{sub2}</small>
                    <h4 className="font-bold text-large">{name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 flex justify-center items-center w-full">
                    {isLoading ? <Skeleton className="rounded-lg">
                        <Image
                            alt="Card background"
                            className="objct-cover rounded-xl "
                            src={img as string}
                            width={160}
                            onLoad={() => setIsLoading(false)}
                        />
                    </Skeleton> : <Image
                        alt="Card background"
                        className="object-cover rounded-xl "
                        src={img as string}
                        width={160}
                    />}
                </CardBody>
               

            </Card> */}
        </>
    );
}