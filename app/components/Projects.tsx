'use client';

import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Research",
      description: `Our research focuses on the populations of newborn blacktip reef and lemon sharks that use nursery areas around the island of Moorea. The primary objective is to understand how sharks in nursery habitats maintain or alter their physiology to cope with stressful environmental conditions.

We collect newborn sharks from these nurseries and, in the nearby laboratory, simulate a variety of conditions, including increased water temperatures, low oxygen, an elevated carbon dioxide (low pH). Then, via a series of performance tests, we can determine how sharks may or may not cope with future ocean conditions. We then release the sharks back to the habitats in which they were captured, as we also do field monitoring of their whereabouts as well as the environmental conditions of their habitats.`,
      image: "/images/shark-research-moorea-lagoon.jpg",
      alt: "Shark research being conducted in Moorea's lagoon",
      position: "left"
    },
    {
      title: "Community and Education",
      description: `It is important for us to connect with the future generations of marine stewards and conservationists. By visiting local schools on Moorea and Tahiti in French Polynesia and across Australia, we are able to educate kids and young adults about the the problems our oceans are facing and the science we are doing to hopefully understand and solve those problems. Not only will our youth be the future decision-makers faced with cleaning up and preserving biodiversity and natural resources, both land and sea, but even today, our youth are able to influence the adults in their lives that are key to current decision-making and management of marine resources.

Indeed, our presence in French Polynesia extends beyond the laboratory; we undertake vital outreach and education programs to give back to those who generously host us.

Dr Jodie Rummer and her team also frequently present at international conferences and public events including the World Science Festival, TED, and via media platforms including the Discovery Channel, National Geographic, and ABC.`,
      image: "/images/community-education-shark-conservation.jpg",
      alt: "Community engagement and education about shark conservation",
      position: "right"
    },
    {
      title: "Get Involved",
      description: `We love the passion that people bring to our project, and we are always on the look out for collaborators and partners.

There is plenty that you can do, from connecting with us on social media to hosting a screening of our new documentary.

If you have any questions about our project or how you can support us in our research, you can contact us here.`,
      image: "/images/get-involved-shark-research-volunteer.jpg",
      alt: "Volunteer opportunities in shark research",
      position: "left"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/shark-nursery-habitat-moorea-lagoon.jpg"
            alt="Shark physiology research in Moorea"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white text-center uppercase tracking-wide">
            Our Projects
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`flex flex-col ${project.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <div className="prose prose-lg text-gray-600">
                    {project.description.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Baby Sharks in a Changing World Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Baby Sharks in a Changing World</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The Physioshark Research Program at James Cook University is dedicated to understanding how climate change is impacting sharks and informing conservation efforts. The team investigates the effects of rising sea temperatures, ocean acidification, and declining oxygen on the physiology and behaviour of sharks. Sharks are an important element of healthy environments and without them entire ocean ecosystems can fall out of balance.
              </p>
              <p>
                Based on the Great Barrier Reef and in French Polynesia the Physioshark Research Program seeks to understand and protect sharks in a changing world. By working to safeguard these important predators, the team is contributing to the health and sustainability of marine ecosystems, which are essential to the well-being of our planet.
              </p>
              <p>
                To encourage donations to the cause, JCU has set up{' '}
                <a 
                  href="https://www.jcu.edu.au/give/give-to-innovation-and-discovery/baby-sharks-in-a-changing-world" 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  a page for non-U.S. donors
                </a>
                {' '}and{' '}
                <a 
                  href="https://jcuamerica.org/home/jcu-physioshark-research-program" 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  a page for U.S. donors
                </a>
                {' '}(for U.S.-specific tax deduction purposes).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 