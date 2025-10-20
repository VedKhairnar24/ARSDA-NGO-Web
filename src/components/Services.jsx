const services = [
  'Career Guidance',
  'Soft Skills Training',
  'Self-Study Skills Training',
  'Personality Development Training',
  'Time Management Training',
  'Motivational Sessions',
  'Blending Career with Capabilities Training',
]

export default function Services(){
  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-light text-[#34495E] mb-6 sm:mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx)=> (
            <div key={service} className={`text-center p-3 sm:p-5 rounded-lg border border-gray-200 bg-white hover-lift ${idx%3===1?'animation-delay-200':''} ${idx%3===2?'animation-delay-400':''} animate-fade-in-up`}>
              <p className="text-xs sm:text-sm text-[#34495E]">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


