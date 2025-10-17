import { Link } from 'react-router-dom'
import { organizationName, slogan, services } from '../data/ngo'
import Carousel from '../components/Carousel'
// Assuming you have installed heroicons: npm install @heroicons/react
import { BookOpenIcon, HeartIcon, UsersIcon, GlobeAltIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Data extracted from the NGO file for direct use
const organizationVision = "Optimising Employment Opportunity through Quality Education for All in Rural & Urban India."
const presidentMessageSnippet = "Founded with the passion to serve the most vulnerable sections of society, we continue to move forward with this commitment. This year, we have quadrupled our scholarship amounts for deserving students..."

const mainFocusAreas = [
  { 
    name: 'Quality Education', 
    description: 'Establishing quality educational institutes (CBSE schools, ITIs, Polytechnics, Degree Colleges) across India.', 
    icon: BookOpenIcon,
    color: 'text-blue-600',
  },
  { 
    name: 'Healthcare & Welfare', 
    description: 'Running regular medical camps (homeopathy, Ayurveda, allopathic) and free daily eye check-ups.', 
    icon: HeartIcon,
    color: 'text-red-600',
  },
  { 
    name: 'Environmental & Social', 
    description: 'Devotion to social service, environmental protection, animal welfare, and youth volunteerism.', 
    icon: GlobeAltIcon,
    color: 'text-green-600',
  },
];

const featuredServices = services.slice(0, 4); // Show top 4 services

export default function HomePage() {
  return (
    <div className="space-y-16">

      {/* 1. Hero Section with Carousel, Mission, and Prominent CTA */}
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Carousel
            images={[
              'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop', // Education
              'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1600&auto=format&fit=crop', // Teamwork
              'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop', // Help/Donation
            ]}
            autoPlayMs={5000}
            fullHeight
            showControls={false}
          />
        </div>
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
          {/* Background gradient for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="relative max-w-4xl text-left px-6 sm:px-12 lg:px-20 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              {organizationName}
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Quality Education, Real Opportunity.
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-xl text-white/90 font-medium">
              Our Vision: {organizationVision}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/funding"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                Donate Now &nbsp; <HeartIcon className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition duration-300"
              >
                Our Impact &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Slogan & Key Statistics (Impact Metrics) */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <blockquote className="text-2xl sm:text-3xl font-bold text-gray-800 italic leading-snug">
          “{slogan}”
        </blockquote>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-blue-50">
            <p className="text-3xl font-bold text-blue-700">4X</p>
            <p className="text-gray-600 font-medium">Scholarship Amount Quadrupled</p>
          </div>
          <div className="p-4 rounded-lg bg-red-50">
            <p className="text-3xl font-bold text-red-700">Thousands</p>
            <p className="text-gray-600 font-medium">Benefited from Regular Medical Camps</p>
          </div>
          <div className="p-4 rounded-lg bg-green-50">
            <p className="text-3xl font-bold text-green-700">Daily</p>
            <p className="text-gray-600 font-medium">Free Eye Check-up Camps in Delhi</p>
          </div>
        </div>
      </section>

      {/* 3. Core Focus Areas (What We Do - Detailed) */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Three Pillars of Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainFocusAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                <area.icon className={`h-10 w-10 ${area.color} mb-4`} aria-hidden="true" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Snippet / Employment Focus */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Preparing Youth for Prosperity</h2>
          <Link to="/services" className="mt-4 md:mt-0 inline-flex items-center text-blue-700 font-semibold hover:underline">
            Explore All Programs <ArrowRightIcon className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
            <div key={s} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-blue-400 transition duration-300">
              <UsersIcon className="h-5 w-5 text-red-500 flex-shrink-0" aria-hidden="true" />
              <p className="font-medium text-gray-800">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. President's Desk & Get Involved CTA Block (Humanizing the Mission) */}
      <section className="bg-blue-800/90 py-12">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* President's Message */}
            <div className="space-y-4">
              <p className="text-lg font-semibold uppercase tracking-wide text-blue-200">A Personal Commitment</p>
              <h3 className="text-3xl font-bold text-white">Message from the President</h3>
              <p className="text-blue-100 italic border-l-4 border-white/50 pl-4">
                "{presidentMessageSnippet} We invite all to join us in this noble mission to create a better future."
              </p>
              <Link to="/about" className="inline-flex items-center font-medium text-white hover:text-blue-200 transition duration-300">
                Read the Full Message by Hari Singh &rarr;
              </Link>
            </div>
            
            {/* Get Involved CTA */}
            <div className="bg-white p-8 rounded-xl shadow-2xl text-gray-800">
              <UsersIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold mb-3">Be the Change. Get Involved.</h4>
              <p className="mb-6">
                Your support is crucial for expanding scholarships, running medical camps, and promoting environmental protection.
              </p>
              <div className="space-y-3">
                <Link to="/volunteers" className="block w-full text-center rounded-lg bg-red-500 px-5 py-3 text-base font-semibold text-white shadow-md hover:bg-red-600 transition duration-300">
                  Become a Volunteer
                </Link>
                <Link to="/funding" className="block w-full text-center rounded-lg border-2 border-blue-500 px-5 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50 transition duration-300">
                  Support Our Research & Funding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}