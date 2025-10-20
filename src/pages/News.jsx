export default function News(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">News & Updates</h1>
        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-light text-gray-900 mb-2">Latest Updates</h2>
            <p className="text-gray-600 leading-relaxed">
              Stay updated with our latest programs, events, and success stories.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-medium text-gray-900">New Educational Program Launched</h3>
              <p className="text-sm text-gray-500">March 2024</p>
              <p className="text-gray-600 text-sm mt-1">We have launched a new skill development program for underprivileged youth.</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-medium text-gray-900">Community Awareness Drive</h3>
              <p className="text-sm text-gray-500">February 2024</p>
              <p className="text-gray-600 text-sm mt-1">Successfully conducted awareness programs in 5 communities across Delhi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


