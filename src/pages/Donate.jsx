export default function Donate(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Support Our Mission</h1>

        {/* Appeal */}
        <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
          As our President warmly invites you, join our noble mission to create a better future.
          Your generosity fuels education, healthcare, and opportunity for those who need it most.
        </p>

        {/* Funding Utilization */}
        <div className="border border-gray-200 rounded p-6 text-left max-w-3xl mx-auto mb-8 bg-white">
          <h2 className="text-lg font-medium text-gray-900 mb-2">How Your Contribution Helps</h2>
          <p className="text-gray-700">
            Donations support the expansion of efforts in education and community development,
            including providing scholarships and conducting medical camps.
          </p>
        </div>

        {/* Contribution Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="border border-gray-200 rounded p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-1">General Donations</h3>
            <p className="text-sm text-gray-600">As per individual capacity</p>
          </div>
          <div className="border border-gray-200 rounded p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-1">General Membership Fees</h3>
            <div className="text-2xl font-light text-teal-600">₹100</div>
          </div>
          <div className="border border-gray-200 rounded p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Lifetime Membership Fees</h3>
            <div className="text-2xl font-light text-teal-600">₹2000</div>
          </div>
        </div>

        {/* CSR & Govt Funding */}
        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          We welcome Corporate Social Responsibility (CSR) and Government Funding for our
          "Quality Education for All" initiatives.
        </p>

        {/* Payment Gateway Placeholder */}
        <div className="max-w-md mx-auto">
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-sm rounded">
            Donate / Become a Member
          </button>
          <p className="text-xs text-gray-500 mt-2">Secure payment gateway integration coming here.</p>
        </div>
      </div>
    </div>
  )
}


