import Image from 'next/image'
import { notFound } from 'next/navigation'
import TeamMemberCard from './TeamMemberCard'
import type { TeamMember } from '@/types/team'

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch('https://rummerlab.com/api/scholar/ynWS968AAAAJ/team', {
      next: { 
        revalidate: 86400, // Revalidate daily (24 hours = 86400 seconds)
        tags: ['team']
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Response status:', response.status);
      console.error('Response status text:', response.statusText);
      const text = await response.text();
      console.error('Response body:', text);
      
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`Failed to fetch team data: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      console.error('Invalid data format or empty array received:', data);
      notFound();
    }

    // Process team members and filter for those with 'shark' in their description
    const processedMembers = data.map(member => ({
      ...member,
      name: member.name || 'Unknown Member',
      role: member.role || 'Role Not Available',
      description: member.description || '',
      alt: member.alt || `${member.name || 'Team member'}'s profile picture`,
      image: member.image?.trim() || '/images/partner-rummer-lab-logo.png'
    }));
    
    // Filter to only include members with 'shark' in their description (case insensitive)
    const filteredMembers = processedMembers.filter(member => 
      member.description.toLowerCase().includes('shark')
    );
    
    return filteredMembers;
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