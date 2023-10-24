
"use client"
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Skeleton } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavbarComponent({ sessionSS }: any) {

    const { data: session, status } = useSession()


    const menuItems = [
        { page: "หน้าแรก", href: "/dashboard", roles: ["Admin", "User"] },
        { page: "หน้าลับเฉพาะ Admin", href: "/protectedroute", roles: ["Admin"] }
    ];


    const pathname = usePathname();


    return (
        <>
            {pathname !== "/" ? (<Navbar isBordered  >
                <NavbarContent className="sm:flex md:flex hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent>
                <NavbarContent className="hidden md:flex sm:flex pr-3" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">X</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="flex justify-between">
                    <NavbarContent className="sm:hidden md:hidden  flex gap-4" justify="center">
                        <NavbarBrand>
                            <div className="font-bold text-inherit">{status === "loading" ? <Skeleton className="flex  w-20 h-6" />
                                : <span>X</span>}</div>
                        </NavbarBrand>
                        <NavbarItem>
                            <Link href="/dashboard">
                                {status === "loading" ? <Skeleton className="flex  w-20 h-6" />
                                    : <span>หน้าแรก</span>}
                            </Link>
                        </NavbarItem>
                        {session?.user.roles === "Admin" ? <NavbarItem isActive>
                            <Link href="/protectedroute">
                                หน้าลับเฉพาะ Admin
                            </Link>
                        </NavbarItem> : null}
                    </NavbarContent>
                    <NavbarContent  >
                        {/* <NavbarItem isActive className="flex justify-center w-full">
                            <ThemeSwitcher />
                        </NavbarItem> */}
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            {status === "loading" ? <Skeleton className="flex rounded w-20 h-[2.5rem]" />
                                : <Button as={Link} className="#FAF8ED" href="#" variant="flat" onClick={() => signOut({
                                    callbackUrl: "/",
                                })}>
                                    Logout
                                </Button>}

                        </NavbarItem>
                    </NavbarContent></NavbarContent>

                <NavbarMenu>
                    {menuItems.filter((item) => item.roles.includes(session?.user.roles || ""))
                        .map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link href={item.href}
                                >
                                    <div className="w-full"
                                        color={
                                            index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                        }
                                    >
                                        {item.page}
                                    </div>

                                </Link>
                            </NavbarMenuItem>
                        ))}
                </NavbarMenu>
            </Navbar>) : null}
        </>




    );
}
