"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50  bg-[#F45E29] backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-22 sm:h-18 px-4 sm:px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-20 sm:w-20 md:w-20 bg-primary-orange rounded-md flex items-center justify-center ">
                            <Image
                                src="/acc-logo.png"
                                alt="Logo"
                                width={100}
                                height={70}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link href="#features" className="text-white hover:text-primary-orange transition">
                            Features
                        </Link>
                        <Link href="#learning" className="text-white hover:text-primary-orange transition">
                            Learning
                        </Link>
                        <Link href="#solutions" className="text-white hover:text-primary-orange transition">
                            Solutions
                        </Link>
                        <Link href="#achievements" className="text-white hover:text-primary-orange transition">
                            Achievements
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-primary-orange text-white px-4 lg:px-6 py-2 rounded-full hover:bg-orange-600 transition text-sm font-medium">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden pb-4 space-y-2">
                        <Link href="#features" className="block text-gray-600 hover:text-primary-orange py-2">
                            Features
                        </Link>
                        <Link href="#learning" className="block text-gray-600 hover:text-primary-orange py-2">
                            Learning
                        </Link>
                        <Link href="#solutions" className="block text-gray-600 hover:text-primary-orange py-2">
                            Solutions
                        </Link>
                        <Link href="#achievements" className="block text-gray-600 hover:text-primary-orange py-2">
                            Achievements
                        </Link>
                        <button className="w-full bg-primary-orange text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium text-sm mt-4">
                            Get Started
                        </button>
                    </nav>
                )}
            </div>
        </header>
    )
}
