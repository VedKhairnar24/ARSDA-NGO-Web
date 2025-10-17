import { Link } from 'react-router-dom'
import { organizationName, visionMission, slogan, services } from '../data/ngo'
import { use } from 'react'

export default function HomePage() {
  return (
    <div className="grid gap-6">
      {/* Hero with horizontal moving background (inspired by Smile Foundation) */}
      <section className="hero-scroll-wrapper rounded border border-blue-100">
        <div
          className="hero-scroll-bg"
          style={{
            backgroundImage:
              'ur[](https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop)',
          }}
        />
        <div className="relative px-6 py-12 text-left">
          <h2 className="text-3xl font-bold">Empowering Communities</h2>
          <p className="text-gray-700 mt-2 max-w-2xl">
            Together we bring education, healthcare, and opportunity to those who need it most.
          </p>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-2xl font-bold">{organizationName}</h2>
        <p className="text-gray-700 mt-2">{visionMission}</p>
      </section>

      <section className="bg-blue-50 border border-blue-100 p-4 rounded">
        <h3 className="font-semibold">Slogan</h3>
        <blockquote className="italic text-blue-900 mt-1">“{slogan}”</blockquote>
      </section>

      <section>
        <h3 className="font-semibold mb-2">What we do</h3>
        <ul className="list-disc pl-6 space-y-1">
          {services.slice(0, 5).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-2">
          Explore our <Link to="/services" className="text-blue-700 underline">Services</Link>.
        </p>
      </section>

      <section className="grid gap-1">
        <h3 className="font-semibold">Get Involved</h3>
        <p>
          Meet our <Link to="/team" className="text-blue-700 underline">Executive Body</Link> and our{' '}
          <Link to="/volunteers" className="text-blue-700 underline">Volunteers</Link>.
        </p>
        <p>
          Learn how to support our mission in <Link to="/funding" className="text-blue-700 underline">Research & Funding</Link>.
        </p>
        <p>
          Read the <Link to="/about" className="text-blue-700 underline">President’s Desk</Link>.
        </p>
      </section>
    </div>
  )
}

