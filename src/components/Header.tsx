"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
           <img src="/home/svg/logo.png" className="h-6 w-8"/>
            <span className="text-2xl ml-2 text-black " style={{ fontFamily: "'Inspiration', cursive" }}>TK Developers</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <a href="#" className="text-gray-600 hover:text-purple-600">
            About us
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Case Studies
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            How it Works
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Hire
          </a>
        </nav>

        <div className="hidden md:block">
        <button className="bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
  Contact Us
</button>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed w-full text-center bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-purple-600">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Case Studies
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              How it Works
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
            Hire
            </a>
            <button className="bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors w-full">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
