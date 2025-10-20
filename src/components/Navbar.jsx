import { Link, NavLink } from 'react-router-dom'
import DonateButton from './DonateButton.jsx'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="ARSDA Home">
            <img src="/ARSDA-logo.png" alt="ARSDA logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-900">ARSDA</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive})=>`text-sm ${isActive?'text-teal-600':'text-gray-600 hover:text-gray-900'}`}>Home</NavLink>
            <NavLink to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</NavLink>
            <NavLink to="/programs" className="text-sm text-gray-600 hover:text-gray-900">Programs</NavLink>
            <NavLink to="/impact" className="text-sm text-gray-600 hover:text-gray-900">Impact</NavLink>
            <NavLink to="/team" className="text-sm text-gray-600 hover:text-gray-900">Team</NavLink>
            <NavLink to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</NavLink>
            <DonateButton />
          </nav>
          <div className="md:hidden"><DonateButton /></div>
        </div>
      </div>
    </header>
  )
}


