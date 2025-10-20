export default function Contact(){
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 animate-fade-in-up">
        <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8">Contact Us</h1>
        <div className="space-y-8 sm:space-y-10">
          <section>
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Get in Touch</h2>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
              <p><span className="font-medium text-gray-900">Office Address:</span> All Round Social Development Association (Regd.), B-266, Gali No. 2, Rajveer Colony, Gharoli Extension, Delhi – 110096.</p>
              <p><span className="font-medium text-gray-900">Email IDs:</span> <a className="text-teal-700 hover:underline" href="mailto:arsda2008@gmail.com">arsda2008@gmail.com</a> and <a className="text-teal-700 hover:underline" href="mailto:arsda2008gs@gmail.com">arsda2008gs@gmail.com</a></p>
              <div>
                <span className="font-medium text-gray-900">Phone / WhatsApp:</span>
                <ul className="mt-2 space-y-1">
                  <li><a className="text-teal-700 hover:underline" href="tel:+918130674739">8130674739</a> <span className="text-gray-500">(WhatsApp)</span></li>
                  <li><a className="text-teal-700 hover:underline" href="tel:+919013266400">9013266400</a></li>
                  <li><a className="text-teal-700 hover:underline" href="tel:+918130915249">8130915249</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Location Map</h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 hover-lift">
              <iframe
                title="ARSDA Location"
                src={"https://www.google.com/maps?q=" + encodeURIComponent("B-266, Gali No. 2, Rajveer Colony, Gharoli Extension, Delhi – 110096") + "&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">Social Media</h2>
            <div className="flex items-center gap-3 sm:gap-4">
              <a className="text-sm sm:text-base text-teal-700 hover:underline" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              <a className="text-sm sm:text-base text-teal-700 hover:underline" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


