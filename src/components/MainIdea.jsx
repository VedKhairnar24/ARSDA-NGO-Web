const items = [
  'Establish/Collaborate: English Medium CBSE Sr. Secondary School in each Panchayat',
  'Establish/Collaborate: Industrial Training Institute (ITI) in each Panchayat',
  'Work with Qualitative Polytechnic in each Panchayat and Council',
  'Work with Degree College in each Panchayat and Council',
  'Awareness Programs on "Quality Education, Employment & Prosperity"',
  'Educational, Professional, and Financial Counselling via seminars, webinars, and articles',
]

export default function MainIdea(){
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">Main Idea of the Organization</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item)=> (
            <div key={item} className="text-center p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


