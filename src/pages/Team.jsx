export default function Team(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Our Team</h1>
        <div className="space-y-10">
          {/* Photo Note */}
          <p className="text-gray-600">Profile photos are being added to showcase our leadership and advisors.</p>

          {/* Executive Body */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-4">Executive Body</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'Mr. Hari Singh', role: 'President', photo: '/img/members/IMG-20251015-WA0032.jpg' },
                { name: 'Mr. Babulal Kanojia', role: 'Vice President', photo: '/img/members/IMG-20251015-WA0033.jpg' },
                { name: 'Rajani', role: 'General Secretary', photo: '/img/members/IMG-20251015-WA0034.jpg' },
                { name: 'Pawan Pratap Singh', role: 'Treasurer', photo: '/img/members/IMG-20251015-WA0035.jpg' },
                { name: 'Smt. Rajani Nakul Lungase', role: 'Auditor', photo: '/img/members/IMG-20251015-WA0036.jpg' },
              ].map((m)=> (
                <div key={m.name} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white hover-lift animate-fade-in-up">
                  <img src={m.photo} alt={m.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-900">{m.name}</div>
                    <div className="text-sm text-teal-700">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key National Leadership */}
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-4">Key National Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'Sh. Awaran Singh', role: 'National Administrative Chairman', photo: '/img/WhatsApp Image 2025-10-15 at 06.39.31_ad420e70.jpg' },
                { name: 'Prof. Dr. Balaji Anand Navle', role: 'Chief National Academic Advisor', photo: '/img/IMG-20251015-WA0065.jpg' },
                { name: 'Dr. Sunil Diwakar', role: 'Chief National Health Advisor', photo: '/img/IMG-20251015-WA0064.jpg' },
                { name: 'Sh. Raja Ram Kanojiya', role: 'Chief National Advisor', photo: '/img/IMG-20251015-WA0063.jpg' },
                { name: 'Sh. Govind Rajak', role: 'State Patron (Jharkhand)', photo: '/img/IMG-20251015-WA0060.jpg' },
              ].map((m)=> (
                <div key={m.name} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white hover-lift animate-fade-in-up">
                  <img src={m.photo} alt={m.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-900">{m.name}</div>
                    <div className="text-sm text-teal-700">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


