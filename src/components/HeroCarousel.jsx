import { useState, useEffect } from 'react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: 'public/img/community.jpg',
      title: 'Quality Education for All',
      subtitle: 'Empowering minds, building futures',
      description: 'Optimising Employment Opportunity through Quality Education'
    },
    {
      id: 2,
      image: 'public/img/education.jpg',
      title: 'Building Strong Communities',
      subtitle: 'United we grow, together we prosper',
      description: 'Creating opportunities for social development and community growth'
    },
    {
      id: 3,
        image: 'public/img/president.jpg',
      title: 'Path to Prosperity',
      subtitle: 'Education leads to success',
      description: 'Transforming lives through education and employment opportunities'
    }
  ]

  // Auto-slide functionality with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds for smoother experience

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-in-out carousel-bg"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1) translateZ(0)' : 'scale(1.05) translateZ(0)',
                willChange: 'transform, opacity'
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 via-teal-600/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <div key={currentSlide} className="transition-all duration-1000 ease-in-out transform">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-teal-100 mb-4 animate-fade-in-up animation-delay-200">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg lg:text-xl text-teal-50 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
                {slides[currentSlide].description}
              </p>
            </div>
            
            {/* Main Slogan */}
            <div key={`slogan-${currentSlide}`} className="mb-8 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl lg:text-3xl font-bold text-white bg-teal-600/90 px-6 py-3 rounded-lg inline-block shadow-lg hover-lift">
                "GET EDUCATED, BE UNITED AND GAIN PROSPERITY"
              </h3>
            </div>
            
            {/* Action Buttons */}
            <div key={`buttons-${currentSlide}`} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              <a 
                href="/join-us" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 ease-out hover-lift"
              >
                Join Our Mission
              </a>
              <a 
                href="/volunteer" 
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 ease-out hover-lift"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-500 ease-out hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-500 ease-out hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-out transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Organization Name */}
      <div className="absolute top-8 left-8 z-20">
        <h4 className="text-white text-lg font-semibold bg-teal-600/80 px-4 py-2 rounded-lg">
          All Round Social Development Association (Regd.), Delhi
        </h4>
      </div>
    </section>
  )
}


