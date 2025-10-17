import { Link } from 'react-router-dom'

interface NavbarProps {
  className?: string
}

export default function Navbar({ className = '' }: NavbarProps) {
  return (
    <header className={`border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed top-0 left-0 right-0 z-50 h-16 w-full shadow-sm ${className}`}>
      <div className="mx-auto max-w-6xl px-4 h-full flex items-center justify-between gap-4">
        <h1 className="m-0 text-lg font-semibold">All Round Social Development Association</h1>
        <nav className="flex gap-4 text-sm text-blue-700">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/team" className="hover:underline">Executive Body</Link>
          <Link to="/volunteers" className="hover:underline">Volunteers</Link>
          <Link to="/funding" className="hover:underline">Funding</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
