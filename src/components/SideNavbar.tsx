/** @format */
"use client"

import React, { useState } from 'react'
import { Nav } from './ui/nav';
import {
    LayoutDashboard,
    UsersRound,
    Settings,
    ShoppingCart,
    ChevronRight,

} from "lucide-react";
import { Button } from './ui/button';

import {
    useWindowWidth
} from '@react-hook/window-size'

export default function SideNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;
    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <div className='relative min-w-[100px] border-r px-3 pb-10 pt-24'>
            {!mobileWidth &&
                <div className='absolute right-[-15px] top-7'>
                    <Button onClick={toggleSidebar} variant='secondary' className='rounded-full p-2'>
                        <ChevronRight />
                    </Button>
                </div>
            }


            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                        variant: "ghost",
                    }
                ]}
            />
        </div >
    )
}
