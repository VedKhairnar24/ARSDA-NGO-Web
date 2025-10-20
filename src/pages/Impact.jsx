export default function Impact(){
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 animate-fade-in-up">
        <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8">Our Impact</h1>
        <div className="space-y-8 sm:space-y-10">
          {/* Education */}
          <section className="animate-fade-in-up">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Education</h2>
            <p className="text-sm sm:text-base text-gray-700">
              Scholarship amounts for deserving students have been quadrupled to access quality education.
            </p>
          </section>

          {/* Health Camps */}
          <section className="animate-fade-in-up animation-delay-200">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Health Camps</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              Thousands have benefited from regular medical camps offering homeopathy, Ayurveda, and allopathic treatments.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              We run free daily eye check-up camps in Delhi and refer cataract patients for free surgery at
              government hospitals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
              <img src="../images/volunteer.jpg" alt="Blood donation camp" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200 hover-lift" />
              <img src="../images/eye-checkup.jpg" alt="Medical camp" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200 hover-lift" />
            </div>
          </section>

          {/* Training and Counselling */}
          <section className="animate-fade-in-up animation-delay-400">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Training and Counselling</h2>
            <p className="text-sm sm:text-base text-gray-700">
              Career Guidance, Soft Skills Training, and Motivational Sessions equip youth with vital skills.
            </p>
          </section>

          {/* Environmental & Welfare */}
          <section className="animate-fade-in-up animation-delay-600">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Environmental & Welfare</h2>
            <p className="text-sm sm:text-base text-gray-700">
              We are committed to environmental protection and animal welfare as part of our holistic community work.
            </p>
          </section>

          {/* Future Impact */}
          <section className="animate-fade-in-up animation-delay-800">
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Future Impact (The Vision)</h2>
            <p className="text-sm sm:text-base text-gray-700">
              We envision building educational infrastructure across India — establishing a CBSE School, ITI,
              Polytechnic, and Degree College in each Panchayat/Council.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


