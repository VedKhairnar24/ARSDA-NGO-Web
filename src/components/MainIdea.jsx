const items = [
  'English Medium Schools',
  'Polytechnic Colleges', 
  'Awareness Programs',
  'Webinars & Seminars',
]

export default function MainIdea(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Our Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item)=> (
            <div key={item} className="text-center p-4">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


