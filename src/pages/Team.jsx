export default function Team(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Our Team</h1>
        <div className="space-y-10">
          {/* Photo Note */}
          <p className="text-gray-600">Profile photos for all team members will be added soon.</p>

          {/* Executive Body */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-4">Executive Body</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium text-gray-900">Mr. Hari Singh</span> — President</li>
              <li><span className="font-medium text-gray-900">Mr. Babulal Kanojia</span> — Vice President</li>
              <li><span className="font-medium text-gray-900">Rajani</span> — General Secretary</li>
              <li><span className="font-medium text-gray-900">Pawan Pratap Singh</span> — Treasurer</li>
              <li><span className="font-medium text-gray-900">Smt. Rajani Nakul Lungase</span> — Auditor</li>
            </ul>
          </section>

          {/* Key National Leadership */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-4">Key National Leadership</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium text-gray-900">Sh. Awaran Singh</span> — National Administrative Chairman</li>
              <li><span className="font-medium text-gray-900">Prof. Dr. Balaji Anand Navle</span> — Chief National Academic Advisor</li>
              <li><span className="font-medium text-gray-900">Dr. Sunil Diwakar</span> — Chief National Health Advisor</li>
              <li><span className="font-medium text-gray-900">Sh. Raja Ram Kanojiya</span> — Chief National Advisor</li>
              <li><span className="font-medium text-gray-900">Sh. Govind Rajak</span> — State Patron (Jharkhand)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}


