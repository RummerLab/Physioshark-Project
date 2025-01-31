import Image from 'next/image'

interface Partner {
  name: string;
  logo: string;
  alt: string;
  website: string;
}

export default function Partners() {
  const partners: Partner[] = [
    {
      name: "CRIOBE",
      logo: "/images/partner-criobe-logo.png",
      alt: "CRIOBE - Centre de Recherches Insulaires et Observatoire de l'Environnement",
      website: "https://www.criobe.pf"
    },
    {
      name: "Save Our Seas Foundation",
      logo: "/images/partner-save-our-seas-logo.jpg",
      alt: "Save Our Seas Foundation logo",
      website: "https://saveourseas.com"
    },
    {
      name: "L'Oréal-UNESCO For Women in Science",
      logo: "/images/partner-loreal-unesco-logo.jpg",
      alt: "L'Oréal-UNESCO For Women in Science program logo",
      website: "https://www.forwomeninscience.com"
    },
    {
      name: "National Science Foundation",
      logo: "/images/partner-nsf-logo.jpg",
      alt: "National Science Foundation logo",
      website: "https://www.nsf.gov"
    },
    {
      name: "ARC Centre of Excellence",
      logo: "/images/partner-arc-logo.png",
      alt: "Australian Research Council Centre of Excellence logo",
      website: "https://www.arc.gov.au"
    },
    {
      name: "FIU",
      logo: "/images/partner-fiu-logo.png",
      alt: "Florida International University logo",
      website: "https://www.fiu.edu"
    },
    {
      name: "ARC CRS",
      logo: "/images/partner-arc-crs-logo.jpg",
      alt: "Australian Research Council Coral Reef Studies logo",
      website: "https://www.coralcoe.org.au"
    },
    {
      name: "Rummer Lab",
      logo: "/images/partner-rummer-lab-logo.png",
      alt: "Rummer Lab logo",
      website: "https://www.rummerlab.com"
    },
    {
      name: "Passions of Paradise",
      logo: "/images/partner-passions-of-paradise-logo.png",
      alt: "Passions of Paradise logo",
      website: "https://passions.com.au"
    }
  ]

  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">Our Supporters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with leading institutions to advance shark research and conservation
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* First row - 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.slice(0, 5).map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Second row - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.slice(5).map((partner, index) => (
              <a
                key={index + 5}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 