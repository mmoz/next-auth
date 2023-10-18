"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import ToggleComponent from "./Toggle";
import { ThemeSwitcher } from "./Switcher";

export default function NavbarComponent() {
    const menuItems = [
        { page: "หน้าแรก", href: "/dashboard" },
        { page: "หน้าลับเฉพาะ Admin", href: "/protectedroute" }
    ];

    const pathname = usePathname();

    return (
        <>
            {pathname !== "/" ? (<Navbar disableAnimation isBordered  >
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
                            <Link color="foreground" href="/dashboard">
                                หน้าแรก
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="/protectedroute" aria-current="page" color="warning">
                                หน้าลับเฉพาะ Admin
                            </Link>
                        </NavbarItem>
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
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href={item.href}
                                size="lg"
                            >
                                {item.page}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>) : null}
        </>




    );
}
