import { useState, useEffect } from 'react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: './images/Yoga_program.jpg',
      title: 'Quality Education for All',
      subtitle: 'Empowering minds, building futures',
      description: 'Optimising Employment Opportunity through Quality Education'
    },
    {
      id: 2,
      image: '../images/education.jpg',
      title: 'Building Strong Communities',
      subtitle: 'United we grow, together we prosper',
      description: 'Creating opportunities for social development and community growth'
    },
    {
      id: 3,
        image: '../images/president.jpg',
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#2980B9]/80 via-[#2980B9]/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center lg:text-left">
          <div className="max-w-4xl lg:max-w-2xl">
            <div key={currentSlide} className="transition-all duration-1000 ease-in-out transform">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 mb-3 sm:mb-4 animate-fade-in-up animation-delay-200">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
                {slides[currentSlide].description}
              </p>
            </div>
            
            {/* Main Slogan */}
            <div key={`slogan-${currentSlide}`} className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-600">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white bg-[#2980B9]/90 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg inline-block shadow-lg hover-lift">
                "GET EDUCATED, BE UNITED AND GAIN PROSPERITY"
              </h3>
            </div>
            
            {/* Action Button */}
            <div key={`button-${currentSlide}`} className="flex justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              <a 
                href="/join-us" 
                className="bg-[#C0392B] hover:bg-[#A93226] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 ease-out hover-lift"
              >
                Join Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-500 ease-out hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-500 ease-out hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ease-out transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white scale-110 shadow-sm' 
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Organization Name */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20">
        <h4 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold bg-[#2980B9]/80 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg">
          <span className="hidden sm:inline">All Round Social Development Association (Regd.), Delhi</span>
          <span className="sm:hidden">ARSDA (Regd.), Delhi</span>
        </h4>
      </div>
    </section>
  )
}

