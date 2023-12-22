"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Button, Image, Chip } from "@nextui-org/react";
import CardImg from "../list/CardImg";
import Highlight from "./HighlightSection";
import CardContent from "../list/CardContent";

type Props = {
    itemtab: Tab[]
    Component?: any

}

type Tab = {
    id: string,
    label: string,
    content: string[]
}



export default function TabsContentSection({ itemtab }: Props) {

    return (
        <div className="flex w-full h-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={itemtab} color={"success"}  variant={"light"} radius={"full"} className="flex justify-start bg-gray-200 rounded-full">
                {(item) => (
                    <Tab key={item.id} title={item.label} >
                        <div className="flex gap-10 md:flex-col">
                            <div className=" flex-col w-[60vw] md:w-full sm:w-full bg-white px-2 py-2 ">
                                <div className="grid grid-cols-4  md:grid-cols-2  sm:grid-cols-1 gap-4 ">
                                    {item.content.map((content, index) => (
                                        <div className={index === 0 ? "col-span-4 h-[300px] md:col-span-2 sm:col-span-1 " : ""} key={index}>
                                            {index === 0 ? <CardImg content={content} /> : <CardContent content={content} />}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-black  bg-white flex-col  py-5 rounded-b-lg">
                                    <div className="text-xl">
                                        <h1>ยอดนิยม</h1>
                                    </div>
                                    <div className="flex justi flex-wrap gap-4 mt-5">
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#dawdaw</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#Larfawfawge</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#dwadaf</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#fasfasf</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#we12d</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#Large</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#dawdf</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#wfw</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#dwqs</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#dwd</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#sssd</Chip>
                                        <Chip size="md" className="hover:bg-green-500 cursor-pointer hover:text-white">#ddqwdwe</Chip>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col h-fit w-[30vw] md:w-full  gap-y-5  justify-center">
                                <div className=" md:w-full">
                                    <Card
                                        isFooterBlurred
                                        radius="lg"
                                        className="border-none"
                                    >
                                        <Image
                                            alt="Woman listing to music"
                                            className="object-cover"
                                            height={200}
                                            src="/images/hero-card.jpeg"
                                            width={200}
                                        />
                                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                            <p className="text-tiny text-white/80">Available soon.</p>
                                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                                Notify me
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                                <div className="mt-10">
                                    <Highlight />
                                </div>
                                {/* <div className="mt-10">
                                    <Card
                                        isFooterBlurred
                                        radius="lg"
                                        className="border-none h-[600px]"
                                        
                                    >
                                        <Image
                                            alt="Woman listing to music"
                                            className="object-cover"
                                            height={200}
                                            src="/images/hero-card.jpeg"
                                            width={200}
                                        />
                                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                            <p className="text-tiny text-white/80">Available soon.</p>
                                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                                Notify me
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div> */}
                            </div>
                        </div>

                    </Tab>
                )}
            </Tabs>
        </div>
    );
}
