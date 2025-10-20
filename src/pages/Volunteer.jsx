export default function Volunteer(){
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8">Volunteer with Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <img src="../images/volunteer.jpg" alt="Volunteers at blood donation camp" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200" />
          <img src="../images/Yoga_program.jpg" alt="Volunteers at Yoga_program" className="w-full h-40 sm:h-56 object-cover rounded-lg border border-gray-200" />
        </div>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
          We encourage youth volunteerism to bring new energy into our activities. Contribute to
          awareness programs, health camps, training services, and environmental protection.
        </p>
        <p className="text-xs sm:text-sm text-teal-700 font-medium mb-4 sm:mb-6">"Join us in our mission to create a better future."</p>
        <form className="max-w-2xl space-y-3 sm:space-y-4">
          <input className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm" placeholder="Full Name" />
          <input className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm" placeholder="Email" />
          <input className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm" placeholder="Phone" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="text-xs sm:text-sm text-gray-700">
              Area of Interest
              <select className="mt-1 w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <option>Awareness Programs</option>
                <option>Health Camps</option>
                <option>Training & Counselling</option>
                <option>Environmental & Animal Welfare</option>
                <option>Administration</option>
                <option>Event Management</option>
                <option>Community Outreach</option>
              </select>
            </label>
            <label className="text-xs sm:text-sm text-gray-700">
              Skills
              <input className="mt-1 w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm" placeholder="e.g., Teaching, First Aid, Design, Coordination" />
            </label>
          </div>
          <textarea className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm" rows="4" placeholder="Tell us about yourself and areas you want to support" />
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm rounded">Submit Application</button>
        </form>
        <p className="text-xs sm:text-sm text-gray-600 mt-4">Interested in membership? See options on the <a href="/donate" className="text-teal-700 hover:underline">Donate</a> page.</p>
      </div>
    </div>
  )
}


