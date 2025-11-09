import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-blacktip-reef-shark-moorea-research.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <span className="sr-only">
        Blacktip reef sharks swimming in the crystal clear waters of Moorea lagoon
      </span>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
            Protecting<br />
            Future<br />
            Generations<br />
            of<br />
            Sharks
          </h1>
          <div className="w-24 h-1 bg-white" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
        <Link 
          href="#our-mission"
          className="inline-flex flex-col items-center text-white hover:text-white/80 transition-colors"
        >
          <span className="text-lg mb-2">Scroll to Discover</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
} 
