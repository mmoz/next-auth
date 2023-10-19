"use client";

import { Button, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "../app/icons/Sunicon";
import { MoonIcon } from "../app/icons/Moonicon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            <Switch
                defaultSelected
                size="lg"
                color="success"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (

                        <SunIcon className={className} 
                        />
                    ) : (
                        <MoonIcon className={className}
                        />
                    )
                }
            >
            </Switch>
        </div>
    )
};