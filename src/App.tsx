import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t text-center py-4 text-sm text-gray-600">
        <small>© {new Date().getFullYear()} ARSDA (Regd.), Delhi</small>
      </footer>
    </div>
  )
}

export default App
