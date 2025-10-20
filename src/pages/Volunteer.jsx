export default function Volunteer(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Volunteer with Us</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Join our mission to provide quality education for all. Your time and skills 
          can make a real difference in our community.
        </p>
        <form className="max-w-2xl space-y-4">
          <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Full Name" />
          <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Email" />
          <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Phone" />
          <select className="w-full border border-gray-300 rounded px-4 py-2 text-sm">
            <option>Select Area of Interest</option>
            <option>Teaching</option>
            <option>Administration</option>
            <option>Event Management</option>
            <option>Community Outreach</option>
          </select>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2 text-sm" rows="4" placeholder="Tell us about yourself and why you want to volunteer" />
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm rounded">Submit Application</button>
        </form>
      </div>
    </div>
  )
}


