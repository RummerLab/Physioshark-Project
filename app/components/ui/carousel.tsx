'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"

interface CarouselProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  showControls?: boolean
}

export function Carousel({ 
  children, 
  className, 
  containerClassName,
  showControls = true,
}: CarouselProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(false)

  const checkScroll = React.useCallback(() => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      )
    }
  }, [])

  React.useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [checkScroll])

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScroll, 100)
    }
  }

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      setTimeout(checkScroll, 100)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      <div 
        ref={scrollContainerRef}
        className={cn(
          "overflow-hidden scroll-smooth",
          containerClassName
        )}
        onScroll={checkScroll}
      >
        <div className="flex">
          {children}
        </div>
      </div>

      {showControls && (
        <>
          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all",
              canScrollLeft 
                ? "opacity-0 group-hover:opacity-100 cursor-pointer" 
                : "opacity-0 cursor-default"
            )}
            disabled={!canScrollLeft}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all",
              canScrollRight 
                ? "opacity-0 group-hover:opacity-100 cursor-pointer" 
                : "opacity-0 cursor-default"
            )}
            disabled={!canScrollRight}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  )
} 