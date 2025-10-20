export default function About(){
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 text-center">About Us</h1>
        <div className="flex justify-center mb-6 sm:mb-8">
          <img src="../images/ARSDA-logo.png" alt="ARSDA Logo" className="h-24 sm:h-32 md:h-40 w-auto animate-scale-in" />
        </div>

        {/* Establishment & History */}
        <section className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-light text-gray-900">Establishment & History</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            All Round Social Development Association (ARSDA) was established in <span className="font-medium text-gray-800">2008</span>,
            inspired by a vision of a better social, economic, and educational future for the
            weaker sections of society.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            <span className="font-medium text-gray-800">Registration</span>: All Round Social Development Association, Regd., Delhi.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Optimising Employment Opportunity through Quality Education for All in Rural & Urban India.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We are committed to serving the most vulnerable sections of society through education,
              healthcare access, and pathways to dignified employment.
            </p>
          </div>
        </section>

        {/* Founding Members */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Founding Members (April 2008)</h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            <li><span className="font-medium text-gray-900">Mr. Evan Singh</span> — Executive Engineer, BSNL</li>
            <li><span className="font-medium text-gray-900">Dharmendra Kumar</span> — Lecturer in English, Govt. of Delhi School</li>
            <li><span className="font-medium text-gray-900">Shyam Pal Bharti</span> — Principal, Govt. of Delhi School</li>
            <li><span className="font-medium text-gray-900">Raghuveer Singh</span> — Vice Principal, Govt. of Delhi School</li>
          </ul>
        </section>

        {/* Core Work Areas */}
        <section>
          <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Core Work Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
              <h4 className="text-sm sm:text-base font-semibold text-teal-700 mb-1">Health</h4>
              <p className="text-xs sm:text-sm text-gray-700">Citizens' better health through regular health camps.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
              <h4 className="text-sm sm:text-base font-semibold text-teal-700 mb-1">Education</h4>
              <p className="text-xs sm:text-sm text-gray-700">Quality education for students from weaker sections.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
              <h4 className="text-sm sm:text-base font-semibold text-teal-700 mb-1">Employment</h4>
              <p className="text-xs sm:text-sm text-gray-700">Employment opportunities enabled through education and skilling.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


