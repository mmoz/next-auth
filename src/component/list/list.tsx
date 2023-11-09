"use client"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

type Props = {
    content?: string
}

export default function List({ content }: Props) {
    return (
        <>
            <Card className="py-4 h-full">
                <CardBody className="overflow-visible">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1695653422909-20d8cc35ca2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={250}
                    />
                </CardBody>
                <CardFooter className="pb-0  px-4 flex-col items-start">
                    <span className="font-bold text-md line-clamp-2">{content}</span>
                    <small className="text-default-500">12 Tracks</small>
                </CardFooter>
            </Card>
        </>
    );
}