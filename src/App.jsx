import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programs from './pages/Programs.jsx'
import Impact from './pages/Impact.jsx'
import Team from './pages/Team.jsx'
import JoinUs from './pages/JoinUs.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Donate from './pages/Donate.jsx'
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}
