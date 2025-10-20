export default function HeroCarousel(){
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-light text-gray-900 mb-6">Quality Education for All</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Optimising Employment Opportunity through Quality Education. 
          Get Educated, Be United, and Gain Prosperity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/join-us" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-sm rounded">Join Our Mission</a>
          <a href="/volunteer" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 text-sm rounded">Become a Volunteer</a>
        </div>
      </div>
    </section>
  )
}


