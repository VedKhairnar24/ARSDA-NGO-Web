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
              <img src="../images/Yoga_program.jpg" alt="Yoga_program" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200 hover-lift" />
              <img src="../images/helth check.jpg" alt="Community program" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200 hover-lift" />
            </div>
          </section>

          {/* Gallery Section */}
          <section className="animate-fade-in-up animation-delay-800">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-6">Program Gallery</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Explore our programs and activities through these images showcasing our community engagement, 
              educational initiatives, and social impact.
            </p>
            
            {/* Main Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Program Activities */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900 border-b border-gray-200 pb-2">Program Activities</h3>
                <div className="grid grid-cols-1 gap-3">
                  <img src="../img1/img-1.jpg" alt="Program Activity 1" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                  <img src="../img1/img-2.jpg" alt="Program Activity 2" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                  <img src="../img1/img-7.jpg" alt="Program Activity 3" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                </div>
              </div>

              {/* Community Engagement */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900 border-b border-gray-200 pb-2">Community Engagement</h3>
                <div className="grid grid-cols-1 gap-3">
                  <img src="../img1/IMG-20251015-WA0018.jpg" alt="Community Event 1" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                  <img src="../img1/IMG-20251015-WA0021.jpg" alt="Community Event 2" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                  <img src="../img1/IMG-20251015-WA0022.jpg" alt="Community Event 3" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                </div>
              </div>

              {/* Educational Initiatives */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900 border-b border-gray-200 pb-2">Educational Initiatives</h3>
                <div className="grid grid-cols-1 gap-3">
                  <img src="../img1/IMG-20251015-WA0025.jpg" alt="Education Program 1" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                  <img src="../img1/IMG-20251015-WA0026.jpg" alt="Education Program 2" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                  <img src="../img1/IMG-20251015-WA0027.jpg" alt="Education Program 3" className="w-full h-32 sm:h-40 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Extended Gallery - More Activities */}
            <div className="mt-8">
              <h3 className="text-base font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">More Activities & Events</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                <img src="../img1/IMG-20251015-WA0029.jpg" alt="Activity 1" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/IMG-20251015-WA0060.jpg" alt="Activity 2" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/IMG-20251015-WA0064.jpg" alt="Activity 3" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/IMG-20251015-WA0065.jpg" alt="Activity 4" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/WhatsApp Image 2025-10-15 at 06.39.31_ad420e70.jpg" alt="Activity 5" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/WhatsApp Image 2025-10-15 at 06.40.54_2dc81401.jpg" alt="Activity 6" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/WhatsApp Image 2025-10-15 at 06.40.57_6db83279.jpg" alt="Activity 7" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/WhatsApp Image 2025-10-15 at 06.41.03_7f64b501.jpg" alt="Activity 8" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Team & Members Gallery */}
            <div className="mt-8">
              <h3 className="text-base font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Our Team & Members</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                <img src="../img1/members/IMG-20251015-WA0032.jpg" alt="Team Member 1" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/IMG-20251015-WA0033.jpg" alt="Team Member 2" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/IMG-20251015-WA0034.jpg" alt="Team Member 3" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/IMG-20251015-WA0035.jpg" alt="Team Member 4" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/IMG-20251015-WA0036.jpg" alt="Team Member 5" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/WhatsApp Image 2025-10-15 at 06.39.00_4c72a52b.jpg" alt="Team Member 6" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/WhatsApp Image 2025-10-15 at 06.39.08_e489bd2d.jpg" alt="Team Member 7" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
                <img src="../img1/members/WhatsApp Image 2025-10-15 at 06.39.35_3dc01076.jpg" alt="Team Member 8" className="w-full h-24 sm:h-32 object-cover rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


