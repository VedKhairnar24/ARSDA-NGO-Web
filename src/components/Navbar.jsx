import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import DonateButton from './DonateButton.jsx'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="ARSDA Home">
            <img src="/../images/ARSDA-logo.png" alt="ARSDA logo" className="h-6 sm:h-8 w-auto animate-scale-in" />
            <span className="text-base sm:text-lg font-semibold text-[#34495E]">ARSDA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavLink to="/" className={({isActive})=>`text-sm ${isActive?'text-[#2980B9]':'text-[#34495E] hover:text-[#2980B9]'} hover-lift`}>Home</NavLink>
            <NavLink to="/about" className="text-sm text-[#34495E] hover:text-[#2980B9] hover-lift">About</NavLink>
            <NavLink to="/programs" className="text-sm text-[#34495E] hover:text-[#2980B9] hover-lift">Programs</NavLink>
            <NavLink to="/impact" className="text-sm text-[#34495E] hover:text-[#2980B9] hover-lift">Impact</NavLink>
            <NavLink to="/team" className="text-sm text-[#34495E] hover:text-[#2980B9] hover-lift">Team</NavLink>
            <NavLink to="/contact" className="text-sm text-[#34495E] hover:text-[#2980B9] hover-lift">Contact</NavLink>
            <DonateButton />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 lg:hidden">
            <div className="hidden sm:block">
              <DonateButton />
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-300 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <NavLink 
                to="/" 
                className={`block px-3 py-2 text-sm rounded-md ${({isActive}) => isActive ? 'text-[#2980B9] bg-blue-50' : 'text-[#34495E] hover:text-[#2980B9] hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="block px-3 py-2 text-sm text-[#34495E] hover:text-[#2980B9] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/programs" 
                className="block px-3 py-2 text-sm text-[#34495E] hover:text-[#2980B9] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </NavLink>
              <NavLink 
                to="/impact" 
                className="block px-3 py-2 text-sm text-[#34495E] hover:text-[#2980B9] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </NavLink>
              <NavLink 
                to="/team" 
                className="block px-3 py-2 text-sm text-[#34495E] hover:text-[#2980B9] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </NavLink>
              <NavLink 
                to="/contact" 
                className="block px-3 py-2 text-sm text-[#34495E] hover:text-[#2980B9] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <div className="pt-2 border-t border-gray-300">
                <div className="sm:hidden">
                  <DonateButton />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


