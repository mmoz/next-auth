
"use client"
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavbarComponent({ sessionSS }: any) {

    const { data: session } = useSession()


    const menuItems = [
        { page: "หน้าแรก", href: "/dashboard" },
        { page: "หน้าลับเฉพาะ Admin", href: "/protectedroute", roles: "Admin" }
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
                            <p className="font-bold text-inherit">X</p>
                        </NavbarBrand>
                        <NavbarItem>
                            <Link href="/dashboard">
                                หน้าแรก
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
                            <Button as={Link} className="#FAF8ED" href="#" variant="flat" onClick={() => signOut({
                                callbackUrl: "/",
                            })}>
                                Logout
                            </Button>
                        </NavbarItem>
                    </NavbarContent></NavbarContent>

                <NavbarMenu>
                    {menuItems
                        .filter(item => item.roles === sessionSS)
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
