export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">All Round Social Development Association</h3>
          <p className="text-sm text-gray-600 mb-4 sm:mb-6">Quality Education for All</p>
          <div className="text-xs sm:text-sm text-gray-500 space-y-1">
            <p>Email: <a href="mailto:arsda2008@gmail.com" className="text-teal-600 hover:underline">arsda2008@gmail.com</a></p>
            <p>Phone: <a href="tel:+918130674739" className="text-teal-600 hover:underline">8130674739</a> / <a href="tel:+919013266400" className="text-teal-600 hover:underline">9013266400</a></p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} ARSDA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


