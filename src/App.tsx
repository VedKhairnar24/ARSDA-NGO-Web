import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-xl md:text-2xl">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-none px-0 md:px-0 py-0 md:py-0 pt-16">
        <Outlet />
      </main>
      <footer className="border-t text-center py-8 text-lg md:text-xl text-gray-600">
        <small>© {new Date().getFullYear()} ARSDA (Regd.), Delhi</small>
      </footer>
    </div>
  )
}

export default App
