'use client';

import Image from 'next/image'

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
  links?: {
    website?: string;
    lab?: string;
  };
}

const Description = ({ content }: { content: string }) => {
  const paragraphs = content.split('\n\n');
  return (
    <div className="prose prose-sm max-w-none text-gray-600">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
};

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Jodie Rummer",
      role: "Chief Investigator",
      description: `Dr Jodie Rummer is an Professor of Marine Biology in the College of Science and Engineering at James Cook University and formally a researcher in the ARC Centre of Excellence for Coral Reef Studies. She was the 2015-2016 recipient of the highly prestigious UNESCO-L'Oréal Women in Science Fellowship for Australia and New Zealand, an Australian Research Council (ARC) Super Scientist (2011-2014), an ARC Early Career Discovery Fellow (2015-2017), named one of Australia's top five scientists under 40 (2016), and Queensland's (Australia) Tall Poppy Scientist of the Year (2019).

Dr Rummer is a leading authority on the evolution of oxygen transport in fish and how fish maintain performance during stress. Her research, combines ecology, evolution, and physiology to address issues important to conservation, such as the effects of climate change and other human-caused problems on coral reef fishes, sharks, and rays and their potential for adaptation. Dr Rummer founded the Physioshark Project and has been leading this research programme and the students, staff, and volunteers involved since 2013.`,
      image: "/images/dr-jodie-rummer-chief-investigator-physioshark-project.jpg",
      alt: "Dr. Jodie Rummer, Chief Investigator of the Physioshark Project",
      links: {
        website: "jodierummer.com",
        lab: "rummerlab.com"
      }
    },
    {
      name: "Dr. Johann Mourier",
      role: "Partner Researcher",
      description: `In the past 10 years, Dr Mourier has become one of France's leading shark scientists. His research has focused on the ecology and conservation of marine predators, primarily sharks. He has been studying the behavioural, trophic, and movement ecology as well as and conservation biology of sharks using multiple advanced and non-invasive approaches including underwater observations, biologging, genetics, stable isotope analyses, and network theory. Most of his first studies, including his PhD research, were conducted in the remote and healthy coral reefs of French Polynesia (Pacific Ocean) on blacktip reef sharks. His research on juvenile reef sharks in Moorea served as a baseline for project PhysioShark. He is also involved in a citizen science program on elasmobranch (Shark Observatory of French Polynesia; ORP) since 2011. Dr Mourier has now published over 40 research papers in the field of behavioural ecology and shark science. These have generated nearly 1,000 citations (Google Scholar), and he has an overall H-Index of 18. This has established him as one of the leading early-career scientists in his field.`,
      image: "/images/team-dr-johann-mourier-profile.jpg",
      alt: "Dr. Johann Mourier, Partner Researcher"
    },
    {
      name: "Dr. Serge Planes",
      role: "Partner Researcher",
      description: `Dr. Serge Planes, Research Director at the CNRS, has been involved in the study of population genetics of marine fish in the Pacific since the beginning of his career that started with his PhD in 1989. Over the past 30 years, he has published about 250 papers in international journals addressing population genetics of coral reefs, ecology, marine protected areas, and recruitment of marine fishes. With about 14,000 citations, his work has been highly recognized while demonstrating that coral reef fish populations are much more limited in space than was generally believed and that self-recruitment is significant drive. This view has major implications for conservation planning.

Such international recognition led Dr Planes to being invited to participate as a member of the Australian Centre of Excellence for Coral Reef Studies, and he was recently appointed as adjunct professor at Australian Institute or Marine Science. After having coordinated several European projects, numerous national projects, and the last Tara Pacific expedition, Dr Planes is presently directing the LABEX "CORAIL" awarded in 2011 for 10 years and renewed in 2019 for another 5 years, this being the major structural framework for research on coral reef ecology in France.`,
      image: "/images/team-dr-serge-planes-profile.jpg",
      alt: "Dr. Serge Planes, Partner Researcher"
    },
    {
      name: "Dr. Bridie Allan",
      role: "Partner Researcher",
      description: `Dr Bridie Allan is a researcher at the University of Otago in New Zealand. Her research explores how environmental changes can alter the mechanisms underlying population processes and how these changes scale to community dynamics. To do this, she uses field collections, observations and experiments in conjunction with laboratory experiments to investigate a wide range of environmental impacts that influence the physiology, behaviour and survival of fish. 

Dr Allan's field sites span both tropical, temperate and polar regions.`,
      image: "/images/team-dr-bridie-allan-profile.jpg",
      alt: "Dr. Bridie Allan, Partner Researcher"
    },
    {
      name: "Dr. Ian Bouyoucos",
      role: "Research collaborator",
      description: `Ian completed his Ph.D. as a co-tutelle at the Australian Research Council Centre of Excellence for Coral Reef Studies (James Cook University) and the Centre de Recherches Insulaires et Observatoire de l'Environnement (École Pratique des Hautes Études). He investigated the ecophysiology of global change for tropical sharks by testing hypotheses predicting species' vulnerability to global change phenomena, including ocean warming, acidification, and deoxygenation.

Ian has been involved in shark research since 2008. For his research, Ian utilises a range of techniques belonging to the "Conservation Physiology Toolbox." including respirometry and bio-logging. Before joining Physioshark in 2016, Ian's previous research focused on understanding the energetic costs, physiological stress, and behavioural responses of sharks to longline capture, including the implementation of bycatch devices. To learn more about Ian's research, <a href="https://ianbouyoucos.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">visit his website</a>.`,
      image: "/images/team-dr-ian-bouyoucos-profile.jpg",
      alt: "Dr. Ian Bouyoucos, Research Collaborator"
    },
    {
      name: "Dr. Gail Schwieterman",
      role: "Research collaborator",
      description: `Gail's research focuses on the understanding the impact of anthropogenic activities on coastal fish physiology with an emphasis on sharks and skates. She is interested in the intersections of basic physiology, ecology, and management, and seeks to further our understanding of multi-stressor impacts on ecologically important (yet understudied) species. 

Gail received the prestigious Thomas Watson Fellowship, which allowed her to spend a year traveling the world and exploring different issues related to marine conservation, as well as the highly competitive National Science Foundation Graduate Research Fellowship, which funded her graduate degree.`,
      image: "/images/team-dr-gail-schwieterman-profile.jpg",
      alt: "Dr. Gail Schwieterman, Research Collaborator"
    },
    {
      name: "Carolyn Wheeler",
      role: "PhD Candidate",
      description: `Carolyn Wheeler is a co-tutelle PhD student at the School for the Environment at the University of Massachusetts Boston and the ARC Centre of Excellence for Coral Reef Studies at James Cook University (JCU).

Carolyn spent the first half of her PhD working with the Anderson Cabot Center for Ocean Life at the New England Aquarium in Boston studying the effects of temperature on development and physiological performance of epaulette shark embryos and hatchlings. She was recently awarded a graduate research fellowship through the American Australian Association to continue her research at JCU assessing the impacts of thermal stress on reproductive success in adult epaulette sharks.`,
      image: "/images/team-carolyn-wheeler-profile.jpg",
      alt: "Carolyn Wheeler, PhD Candidate"
    },
    {
      name: "Dr. Ornella Weideli",
      role: "Research collaborator",
      description: `Ornella is a Swiss marine biologist that has been studying shark ecology for the past eleven years. She is particularly interested in the behavioural and trophic ecology of sharks, as well as the conservation of coastal juvenile shark populations. Ornella is experienced in using various non-invasive methods such as stable isotope analyses, DNA barcoding, catch and release practices, and underwater observations. 

Ornella first got involved into marine science during her internship at the renowned <a href="https://www.biminisharklab.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">Bimini Biological Field Station</a> (BBFS) in 2009. Fascinated by this experience, she returned to the station in early 2011 to investigate the diet of juvenile lemon sharks for her Master thesis. Following multiple jobs as a research assistant in the US, Seychelles, and French Polynesia, Ornella started her PhD at the French University EPHE in collaboration with the <a href="https://saveourseas.com/sosf-darros-research-centre/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">Save Our Seas Foundation - D'Arros</a> Research Centre (SOSF - DRC), the <a href="http://www.criobe.pf/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">CRIOBE</a> and the Physioshark research programme. As part of her PhD, Ornella investigated the coexistence of two juvenile reef shark species and the possible effects of competition on the species' ecological niches. After obtaining her Ph.D. in summer 2020, Ornella continues to investigate sharks' trophic ecology, as well as anthropogenic impacts on the ecology and physiology of sharks. In addition, Ornella raises awareness of sharks by sharing her knowledge through public presentations, media engagements, as a scientific expedition leader for the Sail and Explore Association, and as a mentor and consultant for undergrad students. To learn more about Ornella's versatile work, <a href="https://www.ornellaweideli.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">visit her website</a>.`,
      image: "/images/team-dr-ornella-weideli-profile.jpg",
      alt: "Dr. Ornella Weideli, Research Collaborator"
    },
    {
      name: "José E. Trujillo",
      role: "PhD Candidate",
      description: `José is a PhD student investigating the ecological importance of nursery grounds to shark populations. His research is focused in the interplay between the habitat configuration and the mechanisms newborn sharks employ to deal with predation. His research tries to understand how the structural complexity of habitats and the environmental conditions are related to sharks' refuge availability, and how the anti-predator strategies of newborn sharks are affected by the habitat they inhabit.

His previous study related to the ecology of shark nursery grounds investigated the effect of kelp forest complexity in nursery habitat selection in egg laying sharks.`,
      image: "/images/team-jose-trujillo-profile.jpg",
      alt: "José E. Trujillo, PhD Candidate"
    },
    {
      name: "Rachel Skubel",
      role: "Research collaborator",
      description: `Rachel completed her Ph.D. at the University of Miami's Abess Center for Ecosystem Science and Policy / Shark Research and Conservation Program.

She uses an interdisciplinary approach to study shark / climate / human interactions in South Florida, namely through ecophysiological indicators of risk in sharks, and socio-ecological systems analysis of shark fisheries.`,
      image: "/images/team-rachel-skubel-profile.jpg",
      alt: "Rachel Skubel, Research Collaborator"
    }
  ]

  return (
    <section id="team" className="bg-white">
      {/* Hero Header */}
      <div className="relative h-[40vh]">
        <Image
          src="/images/shark-physiology-research-moorea.jpg"
          alt="Shark research team conducting field work in Moorea"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wide">
            Our Team
          </h1>
        </div>
      </div>

      {/* Team Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class researchers dedicated to understanding and protecting shark populations
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="space-y-16">
          {/* First Row - 4 columns for first 4 members */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <Description content={member.description} />
                  {member.links && (
                    <div className="mt-4 flex gap-4">
                      {member.links.website && (
                        <a 
                          href={`https://${member.links.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Website
                        </a>
                      )}
                      {member.links.lab && (
                        <a 
                          href={`https://${member.links.lab}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Lab Website
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second Section - 3 columns for remaining 6 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.slice(4).map((member, index) => (
              <div 
                key={index + 4}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <Description content={member.description} />
                  {member.links && (
                    <div className="mt-4 flex gap-4">
                      {member.links.website && (
                        <a 
                          href={`https://${member.links.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Website
                        </a>
                      )}
                      {member.links.lab && (
                        <a 
                          href={`https://${member.links.lab}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Lab Website
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}