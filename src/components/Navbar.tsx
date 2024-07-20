"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



function Navbar() {

    return (
        <>
            <header className="fixed top-4 ml-3 w-full bg-white z-50 shadow-md rounded-md flex items-center justify-between px-4 py-5">
                <div className="flex items-center"> 
                    <Link href="/">
                        <h1 className="text-xl font-bold text-gray-800">Company Logo</h1>
                    </Link>
                </div>
                <nav className="flex space-x-4">
                    <Link href="#" className="text-gray-700 hover:text-gray-500">
                        Services
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-500">
                        Media
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-500">
                        Cases
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-500">
                        FAQ
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-500">
                        Contact Us
                    </Link>
                </nav>
                <div className="flex space-x-2"> {/* Part 3: Buttons */}
                    <button className="px-3 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                        Button 1
                    </button>
                    <button className="px-3 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300">
                        Button 2
                    </button>
                </div>
            </header>

        </>

    )
}

export default Navbar
