import Image from 'next/image'
import { notFound } from 'next/navigation'

interface TeamMember {
  name: string;
  title?: string;
  role: string;
  email?: string;
  startDate?: string;
  endDate?: string;
  description: string;
  image: string;
  alt: string;
  links?: {
    personalWebsite?: string;
    labWebsite?: string;
    projectWebsite?: string;
    researchGateSlug?: string;
    googleScholarId?: string;
    x?: string;
    bluesky?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    orcid?: string;
  };
  affiliations?: Array<{
    institution: string;
    department?: string;
    role: string;
    location?: string;
  }>;
}

function Description({ content }: { content: string }) {
  const paragraphs = content.split('\n\n');
  return (
    <div className="prose prose-sm max-w-none text-gray-600">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
}

function TeamMemberLinks({ links }: { links: TeamMember['links'] }) {
  if (!links || Object.keys(links).length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {links.personalWebsite && (
        <a 
          href={`https://${links.personalWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Personal Website
        </a>
      )}
      {links.labWebsite && (
        <a 
          href={`https://${links.labWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Lab Website
        </a>
      )}
      {links.projectWebsite && (
        <a 
          href={`https://${links.projectWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Project Website
        </a>
      )}
      {/* Social Media Links */}
      {Object.entries({
        x: links.x,
        bluesky: links.bluesky,
        facebook: links.facebook,
        instagram: links.instagram,
        linkedin: links.linkedin,
        github: links.github,
      }).map(([platform, url]) => 
        url ? (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 capitalize"
          >
            {platform}
          </a>
        ) : null
      )}
    </div>
  );
}

function Affiliations({ affiliations }: { affiliations: TeamMember['affiliations'] }) {
  if (!affiliations?.length) return null;

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-gray-700 mb-2">Affiliations</h4>
      <ul className="space-y-2">
        {affiliations.map((affiliation, index) => (
          <li key={index} className="text-sm text-gray-600">
            {affiliation.role} at {affiliation.institution}
            {affiliation.department && `, ${affiliation.department}`}
            {affiliation.location && ` (${affiliation.location})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamMemberCard({ member, index, totalInRow }: { 
  member: TeamMember; 
  index: number;
  totalInRow: number;
}) {
  return (
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
          sizes={`(max-width: 768px) 100vw, ${100 / totalInRow}vw`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        {member.title && (
          <p className="text-gray-600 mb-1">{member.title}</p>
        )}
        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
        <Description content={member.description} />
        <TeamMemberLinks links={member.links} />
        <Affiliations affiliations={member.affiliations} />
      </div>
    </div>
  );
}

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch('https://rummerlab.com/api/scholar/team', {
      next: { 
        revalidate: 86400, // Revalidate daily (24 hours = 86400 seconds)
        tags: ['team']
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`Failed to fetch team data: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error('Error fetching team data:', error);
    throw error;
  }
}

export default async function Team() {
  const teamMembers = await getTeamMembers();

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
          priority
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
              <TeamMemberCard 
                key={index}
                member={member}
                index={index}
                totalInRow={4}
              />
            ))}
          </div>

          {/* Second Section - 3 columns for remaining members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.slice(4).map((member, index) => (
              <TeamMemberCard 
                key={index + 4}
                member={member}
                index={index + 4}
                totalInRow={3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}