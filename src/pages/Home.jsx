import HeroCarousel from '../components/HeroCarousel.jsx'
import VisionMission from '../components/VisionMission.jsx'
import MainIdea from '../components/MainIdea.jsx'
import Services from '../components/Services.jsx'
import PresidentDesk from '../components/PresidentDesk.jsx'

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroCarousel />
      <VisionMission />
      <MainIdea />
      <Services />
      <PresidentDesk />
    </div>
  )
}


