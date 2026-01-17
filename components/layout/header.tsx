"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { KeyboardIcon, Menu, ShoppingCart, X } from "lucide-react"
import { Home, UserPen, BookOpenText } from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const [active, setActive] = useState<number>(2) // Start with plus icon (middle) selected

    const icons = [
        { Icon: ShoppingCart, label: "Cart" },
        { Icon: BookOpenText, label: "Course" },
        { Icon: Home, label: "Home" },
        { Icon: KeyboardIcon, label: "Keyboard" },
        { Icon: UserPen, label: "Profile" },

    ]

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50  bg-white backdrop-blur-md border-b border-gray-200 ">

                <div className='w-full h-8 bg-gray-800'>
                    <h1 className="text-white flex justify-center text-lg align-items-center">Topbar Component</h1>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-22 sm:h-18 px-4 sm:px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-25 sm:w-25 md:w-25 bg-primary-orange rounded-md flex items-center justify-center p-2 ">
                                <Image
                                    src="/acc-logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <NavigationMenu className="hidden md:flex">
                            <NavigationMenuList className="gap-8">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#home" className="text-black">
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-black ">Learning</NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <ul className="w-48 p-2 space-y-2">
                                            <li>
                                                <Link href="#courses" className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#tutorials" className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                                                    Tutorials
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#blog" className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#contact" className="text-black">
                                            Contact
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#achievements" className="text-black">
                                            Achievements
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Button
                                variant="outline"
                                className="bg-primary-orange text-black px-4 lg:px-6 py-2  hover:bg-white/99 hover:text-black transition "
                            >
                                Get Started
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <nav className="md:hidden pb-4 space-y-2">
                            <Link href="#home" className="block text-gray-600 hover:text-primary-orange py-2">
                                Home
                            </Link>
                            <Link href="#learning" className="block text-gray-600 hover:text-primary-orange py-2">
                                Learning
                            </Link>
                            <Link href="#contact" className="block text-gray-600 hover:text-primary-orange py-2">
                                Contact
                            </Link>
                            <Link href="#achievements" className="block text-gray-600 hover:text-primary-orange py-2">
                                Achievements
                            </Link>
                            <button className="w-full bg-primary-orange text-black px-6 py-2 rounded-full hover:bg-gray-800 transition font-medium text-sm mt-4">
                                Get Started
                            </button>
                        </nav>
                    )}
                </div>


            </header>

            <div className="fixed z-50 bottom-0 left-0 right-0 border-t bg-white pb-3 md:hidden">
                <div className="mx-auto flex w-full items-center justify-center gap-4 py-3 shadow-lg">
                    {icons.map((item, index) => {
                        const Icon = item.Icon
                        const isActive = active === index

                        return (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`flex items-center justify-center rounded-full 
            ${isActive
                                        ? "bg-gray-800 text-white w-12 h-12 scale-110 shadow-md transition duration-100"
                                        : "text-gray-600 w-10 h-10 hover:bg-gray-100"
                                    }`}
                                aria-label={item.label}
                            >
                                <Icon size={isActive ? 24 : 20} />
                            </button>
                        )
                    })}
                </div>
            </div>


        </>
    )
}
