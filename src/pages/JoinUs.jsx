export default function JoinUs(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Join Us</h1>
        <div className="space-y-10">
          {/* Core Appeal */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-3">Be Part of the Change</h2>
            <p className="text-gray-700">
              We encourage youth volunteerism to bring new energy and ideas into our activities.
              Join ARSDA as a member or volunteer and help drive education, healthcare, and community
              development initiatives forward.
            </p>
          </section>

          {/* Volunteer Opportunities */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-3">Volunteer Opportunities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Organizing and conducting Awareness Programs on "Quality Education, Employment & Prosperity".</li>
              <li>Assisting in health camps.</li>
              <li>Supporting training services (Soft Skills, Time Management, etc.).</li>
              <li>Environmental protection and animal welfare activities.</li>
            </ul>
          </section>

          {/* Membership Links */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-3">Membership</h2>
            <p className="text-gray-700 mb-4">Become a member and support our mission:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/donate" className="block rounded border border-gray-200 p-4 hover:bg-gray-50">
                <div className="text-gray-900 font-medium">General Membership</div>
                <div className="text-teal-700">₹100</div>
              </a>
              <a href="/donate" className="block rounded border border-gray-200 p-4 hover:bg-gray-50">
                <div className="text-gray-900 font-medium">Lifetime Membership</div>
                <div className="text-teal-700">₹2000</div>
              </a>
            </div>
          </section>

          {/* Volunteer Form link */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-3">Ready to Volunteer?</h2>
            <p className="text-gray-700 mb-4">Tell us about your skills and interests.</p>
            <a href="/volunteer" className="inline-flex items-center rounded bg-teal-600 px-5 py-2.5 text-white text-sm hover:bg-teal-700">Go to Volunteer Form</a>
          </section>
        </div>
      </div>
    </div>
  )
}


