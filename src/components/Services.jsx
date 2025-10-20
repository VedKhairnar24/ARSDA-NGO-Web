const services = [
  'Career Guidance',
  'Personality Development',
  'Motivation',
  'Time Management',
]

export default function Services(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service)=> (
            <div key={service} className="text-center p-4">
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


