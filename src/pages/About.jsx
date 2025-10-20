export default function About(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-4 text-center">About Us</h1>
        <div className="flex justify-center mb-8">
          <img src="../images/ARSDA-logo.png" alt="ARSDA Logo" className="h-40 w-auto animate-scale-in" />
        </div>

        {/* Establishment & History */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-light text-gray-900">Establishment & History</h2>
          <p className="text-gray-600 leading-relaxed">
            All Round Social Development Association (ARSDA) was established in <span className="font-medium text-gray-800">2008</span>,
            inspired by a vision of a better social, economic, and educational future for the
            weaker sections of society.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-medium text-gray-800">Registration</span>: All Round Social Development Association, Regd., Delhi.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Optimising Employment Opportunity through Quality Education for All in Rural & Urban India.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to serving the most vulnerable sections of society through education,
              healthcare access, and pathways to dignified employment.
            </p>
          </div>
        </section>

        {/* Founding Members */}
        <section className="mb-10">
          <h2 className="text-xl font-light text-gray-900 mb-4">Founding Members (April 2008)</h2>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium text-gray-900">Mr. Evan Singh</span> — Executive Engineer, BSNL</li>
            <li><span className="font-medium text-gray-900">Dharmendra Kumar</span> — Lecturer in English, Govt. of Delhi School</li>
            <li><span className="font-medium text-gray-900">Shyam Pal Bharti</span> — Principal, Govt. of Delhi School</li>
            <li><span className="font-medium text-gray-900">Raghuveer Singh</span> — Vice Principal, Govt. of Delhi School</li>
          </ul>
        </section>

        {/* Core Work Areas */}
        <section>
          <h2 className="text-xl font-light text-gray-900 mb-4">Core Work Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-base font-semibold text-teal-700 mb-1">Health</h4>
              <p className="text-gray-700">Citizens’ better health through regular health camps.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-base font-semibold text-teal-700 mb-1">Education</h4>
              <p className="text-gray-700">Quality education for students from weaker sections.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-base font-semibold text-teal-700 mb-1">Employment</h4>
              <p className="text-gray-700">Employment opportunities enabled through education and skilling.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


