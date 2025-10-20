export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">All Round Social Development Association</h3>
          <p className="text-sm text-gray-600 mb-6">Quality Education for All</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>Email: arsda2008@gmail.com</p>
            <p>Phone: 8130674739 / 9013266400</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} ARSDA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


