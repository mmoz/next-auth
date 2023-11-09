import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function CardImg({content}: any) {
    return (<>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute bottom-0 z-10  flex-col  items-center">
                <h4 className="text-white font-medium text-large">{content}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1695653422909-20d8cc35ca2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={250}
            />
        </Card>
    </>)
}