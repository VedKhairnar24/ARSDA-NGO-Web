import HeroCarousel from '../components/HeroCarousel.jsx'
import VisionMission from '../components/VisionMission.jsx'
import MainIdea from '../components/MainIdea.jsx'
import Services from '../components/Services.jsx'
import PresidentDesk from '../components/PresidentDesk.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroCarousel />

      {/* Hero summary with slogan, vision, impact highlights, and CTAs */}
      <section className="px-4 sm:px-6 animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              GET EDUCATED, BE UNITED AND GAIN PROSPERITY
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Optimising Employment Opportunity through Quality Education for All in Rural & Urban India
            </p>

            {/* Impact highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-2">
              <div className="rounded-lg border border-gray-200 p-3 sm:p-4 text-left bg-white hover-lift">
                <p className="text-xs sm:text-sm text-teal-700 font-semibold">Scholarships</p>
                <p className="text-xs sm:text-sm text-gray-800">Scholarship amounts have been quadrupled for deserving students.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-3 sm:p-4 text-left bg-white hover-lift animation-delay-200 animate-fade-in-up">
                <p className="text-xs sm:text-sm text-teal-700 font-semibold">Healthcare Camps</p>
                <p className="text-xs sm:text-sm text-gray-800">Regular medical camps have benefited thousands with various treatments.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-3 sm:p-4 text-left bg-white hover-lift animation-delay-400 animate-fade-in-up sm:col-span-2 lg:col-span-1">
                <p className="text-xs sm:text-sm text-teal-700 font-semibold">Community Impact</p>
                <p className="text-xs sm:text-sm text-gray-800">Growing participation across rural and urban communities.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-4">
              <Link to="/donate" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-teal-600 px-4 sm:px-5 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-medium hover:bg-teal-700 hover-lift">
                Donate Now
              </Link>
              <Link to="/programs" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gray-300 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover-lift">
                Our Programs
              </Link>
              <Link to="/volunteer" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gray-300 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover-lift">
                Join Our Team (Volunteer)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing sections */}
      <VisionMission />
      <MainIdea />
      <Services />

      {/* President's Welcome Quote */}
      <section className="px-4 sm:px-6 animate-fade-in-up animation-delay-200">
        <div className="max-w-4xl mx-auto">
          <blockquote className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-800">
              "Welcome to ARSDA. Together, through education and service, we can unlock
              opportunities and build a more equitable future for every child and family."
            </p>
            <footer className="mt-3 text-xs sm:text-sm text-gray-600">— Hari Singh, Founder & President</footer>
          </blockquote>
        </div>
      </section>

      <PresidentDesk />
    </div>
  )
}


