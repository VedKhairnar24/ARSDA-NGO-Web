export default function Programs(){
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 animate-fade-in-up">
        <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8">Our Programs</h1>
        <div className="space-y-8 sm:space-y-10">
          {/* Services & Training Programs */}
          <section className="animate-fade-in-up">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Services & Training Programs</h2>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Career Guidance</li>
              <li>Soft Skills Training</li>
              <li>Self-Study Skills Training</li>
              <li>Personality Development Training</li>
              <li>Time Management Training</li>
              <li>Motivational Sessions</li>
              <li>Blending Career with Capabilities Training</li>
            </ul>
          </section>

          {/* Counselling and Outreach */}
          <section className="animate-fade-in-up animation-delay-200">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Counselling and Outreach</h2>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Awareness Programs on "Quality Education, Employment & Prosperity"</li>
              <li>Counselling through seminars, webinars, and articles</li>
            </ul>
          </section>

          {/* Health & Welfare Programs */}
          <section className="animate-fade-in-up animation-delay-400">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Health & Welfare Programs</h2>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Regular medical and eye check-up camps</li>
              <li>Quality education support/scholarships for students from weaker sections</li>
            </ul>
          </section>

          {/* Long-Term Goals */}
          <section className="animate-fade-in-up animation-delay-600">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Long-Term Goals (Future Development)</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-2">We aim to establish or collaborate with:</p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>A Qualitative English Medium CBSE Pattern Senior Secondary School and an Industrial Training Institute (ITI) in each Panchayat across India</li>
              <li>A Qualitative Polytechnic and a Degree College in each Panchayat and Council</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
              <img src="../images/Yoga program.jpg" alt="Yoga program" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200 hover-lift" />
              <img src="../images/helth check.jpg" alt="Community program" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200 hover-lift" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


