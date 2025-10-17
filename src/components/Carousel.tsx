import { useEffect, useRef, useState } from 'react'

type CarouselProps = {
  images: string[]
  autoPlayMs?: number
  className?: string
}

export default function Carousel({ images, autoPlayMs = 5000, className = '' }: CarouselProps) {
  const [active, setActive] = useState(0)
  const timerRef = useRef<number | null>(null)

  const goTo = (index: number) => {
    const normalized = (index + images.length) % images.length
    setActive(normalized)
  }

  const next = () => goTo(active + 1)
  const prev = () => goTo(active - 1)

  useEffect(() => {
    if (!autoPlayMs) return
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      next()
    }, autoPlayMs)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [active, autoPlayMs])

  return (
    <div className={`relative w-full ${className}`} data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((src, idx) => (
          <div
            key={src + idx}
            className={`duration-700 ease-in-out ${idx === active ? '' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="slide"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            type="button"
            className={`w-3 h-3 rounded-full ${idx === active ? 'bg-white' : 'bg-white/60'}`}
            aria-current={idx === active}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>

      {/* prev */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* next */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={next}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}


