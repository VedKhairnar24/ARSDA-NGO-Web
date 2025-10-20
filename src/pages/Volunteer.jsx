export default function Volunteer(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Volunteer with Us</h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          We encourage youth volunteerism to bring new energy into our activities. Contribute to
          awareness programs, health camps, training services, and environmental protection.
        </p>
        <form className="max-w-2xl space-y-4">
          <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Full Name" />
          <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Email" />
          <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Phone" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="text-sm text-gray-700">
              Area of Interest
              <select className="mt-1 w-full border border-gray-300 rounded px-4 py-2 text-sm">
                <option>Awareness Programs</option>
                <option>Health Camps</option>
                <option>Training & Counselling</option>
                <option>Environmental & Animal Welfare</option>
                <option>Administration</option>
                <option>Event Management</option>
                <option>Community Outreach</option>
              </select>
            </label>
            <label className="text-sm text-gray-700">
              Skills
              <input className="mt-1 w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="e.g., Teaching, First Aid, Design, Coordination" />
            </label>
          </div>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2 text-sm" rows="4" placeholder="Tell us about yourself and areas you want to support" />
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm rounded">Submit Application</button>
        </form>
        <p className="text-sm text-gray-600 mt-4">Interested in membership? See options on the <a href="/donate" className="text-teal-700 hover:underline">Donate</a> page.</p>
      </div>
    </div>
  )
}


