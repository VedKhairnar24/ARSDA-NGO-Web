export default function Donate(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Support Our Mission</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Your contribution helps us provide quality education to those who need it most. 
          Every donation makes a difference in someone's life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <div className="border border-gray-200 rounded p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">General Membership</h3>
            <div className="text-2xl font-light text-teal-600 mb-2">₹100</div>
            <p className="text-sm text-gray-600">Annual membership</p>
          </div>
          <div className="border border-gray-200 rounded p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Lifetime Membership</h3>
            <div className="text-2xl font-light text-teal-600 mb-2">₹2000</div>
            <p className="text-sm text-gray-600">One-time payment</p>
          </div>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-sm rounded">Donate Now</button>
      </div>
    </div>
  )
}


