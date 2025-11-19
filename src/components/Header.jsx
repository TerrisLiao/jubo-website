import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)

  const toggleMegaMenu = (menu) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu)
  }

  return (
    <header className="bg-white shadow-md">
      {/* Navigation Bar */}
      <nav className="bg-white px-4 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-[#00b2c0]">
            Jubo Health
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <button className="relative group">
            <span className="flex items-center gap-1 text-gray-700 hover:text-[#00b2c0] transition">
              Services <ChevronDown size={16} />
            </span>
          </button>
          <button className="relative group">
            <span className="flex items-center gap-1 text-gray-700 hover:text-[#00b2c0] transition">
              Solutions <ChevronDown size={16} />
            </span>
          </button>
          <a href="#" className="text-gray-700 hover:text-[#00b2c0] transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-[#00b2c0] transition">
            Contact
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <button className="px-4 py-2 text-[#00b2c0] border border-[#00b2c0] rounded hover:bg-[#00b2c0] hover:text-white transition">
            Login
          </button>
          <button className="px-6 py-2 bg-[#00b2c0] text-white rounded hover:bg-[#009aa6] transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00b2c0] to-[#009aa6] text-white py-16 lg:py-24 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Jubo Health
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-100">
            智慧長照解決方案平台 - Your intelligent long-term care solution
          </p>
          <button className="px-8 py-3 bg-[#d8d82b] text-[#26497A] font-semibold rounded hover:bg-[#c7c724] transition">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
            Services
          </a>
          <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
            Solutions
          </a>
          <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
            About
          </a>
          <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
            Contact
          </a>
          <div className="px-4 py-4 border-t border-gray-200 flex gap-4">
            <button className="flex-1 px-4 py-2 text-[#00b2c0] border border-[#00b2c0] rounded">
              Login
            </button>
            <button className="flex-1 px-4 py-2 bg-[#00b2c0] text-white rounded">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
