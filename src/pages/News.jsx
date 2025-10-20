export default function News(){
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-3xl font-light text-gray-900 mb-8">News & Updates</h1>
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-light text-gray-900 mb-2">Current Status</h2>
            <p className="text-gray-600">News & Updates and Articles/Blogs are currently under development.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-light text-gray-900">Recommended Updates</h2>
            <div className="space-y-4">
              <article className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-medium text-gray-900">Scholarship Funds Quadrupled</h3>
                <p className="text-sm text-gray-500">To be published</p>
                <p className="text-gray-700 text-sm mt-1">Publish an article detailing the recent quadrupling of scholarship funds and its impact.</p>
              </article>
              <article className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-medium text-gray-900">Medical Camps Report</h3>
                <p className="text-sm text-gray-500">To be published</p>
                <p className="text-gray-700 text-sm mt-1">Share reports with photos/videos on recent health camps, including eye check-ups and cataract referrals.</p>
                <img src="/img/IMG-20251015-WA0060.jpg" alt="Medical camp" className="mt-3 w-full h-56 object-cover rounded-lg border border-gray-200" />
              </article>
              <article className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-medium text-gray-900">Upcoming Awareness Programs</h3>
                <p className="text-sm text-gray-500">To be announced</p>
                <p className="text-gray-700 text-sm mt-1">Announce sessions on "Quality Education, Employment & Prosperity".</p>
              </article>
              <article className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-medium text-gray-900">Blog: Educational, Professional, Financial Counselling</h3>
                <p className="text-sm text-gray-500">Ongoing</p>
                <p className="text-gray-700 text-sm mt-1">Use the blog to publish articles offering guidance and counselling for youth.</p>
                <img src="../images/Yoga program.jpg" alt="Yoga program" className="mt-3 w-full h-56 object-cover rounded-lg border border-gray-200" />
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


