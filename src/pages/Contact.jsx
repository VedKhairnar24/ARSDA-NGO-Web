export default function Contact(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-light text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Email:</strong> arsda2008@gmail.com</p>
              <p><strong>Phone:</strong> 8130674739 / 9013266400</p>
              <p><strong>Address:</strong> Delhi, India</p>
            </div>
          </div>
          <form className="space-y-4">
            <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Name" />
            <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Email" />
            <input className="w-full border border-gray-300 rounded px-4 py-2 text-sm" placeholder="Subject" />
            <textarea className="w-full border border-gray-300 rounded px-4 py-2 text-sm" rows="4" placeholder="Message" />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}


