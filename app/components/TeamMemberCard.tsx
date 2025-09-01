'use client';

import Image from 'next/image';
import { useState } from 'react';
import { TeamMember } from '@/types/team';

function Description({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = content.split('\n\n');
  
  // Check if content is long enough to warrant a "Read More" button
  const isLongContent = content.length > 200;
  
  // Get truncated content for collapsed state
  const getTruncatedContent = () => {
    if (content.length <= 200) return content;
    
    // Find a good breaking point near 200 characters
    const truncated = content.substring(0, 200);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 150 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  };

  const displayContent = isExpanded ? content : getTruncatedContent();
  const displayParagraphs = displayContent.split('\n\n');

  return (
    <div className="prose prose-sm max-w-none text-gray-600">
      {displayParagraphs.map((paragraph, i) => (
        <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
      
      {isLongContent && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 font-medium text-xs transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded italic"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}

function TeamMemberLinks({ links }: { links: TeamMember['links'] }) {
  if (!links || Object.keys(links).length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {links.personalWebsite && (
        <a 
          href={links.personalWebsite.startsWith('http') ? links.personalWebsite : `https://${links.personalWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Personal Website
        </a>
      )}
      {links.labWebsite && (
        <a 
          href={links.labWebsite.startsWith('http') ? links.labWebsite : `https://${links.labWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Lab Website
        </a>
      )}
      {links.projectWebsite && links.projectWebsite !== "physioshark.org" && (
        <a 
          href={links.projectWebsite.startsWith('http') ? links.projectWebsite : `https://${links.projectWebsite}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Project Website
        </a>
      )}
      {/* Social Media Links */}
      {[
        { key: 'facebook', prefix: 'https://www.facebook.com/' },
        { key: 'instagram', prefix: 'https://www.instagram.com/' },
        { key: 'linkedin', prefix: 'https://www.linkedin.com/in/' },
        { key: 'github', prefix: 'https://github.com/' },
        { key: 'x', prefix: 'https://x.com/' }
      ].map(({ key, prefix }) => 
        links[key as keyof typeof links] ? (
          <a
            key={key}
            href={links[key as keyof typeof links]!.startsWith('http') 
              ? links[key as keyof typeof links]! 
              : `${prefix}${links[key as keyof typeof links]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 capitalize"
          >
            {key === 'x' ? 'Twitter' : key}
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
        {affiliations.map((affiliation: { 
          institution: string; 
          department?: string; 
          role: string; 
          location?: string; 
        }, index: number) => (
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

export default function TeamMemberCard({ 
  member, 
  index, 
  totalInRow 
}: { 
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
          src={member.image || '/images/partner-rummer-lab-logo.png'} // Use lab logo as placeholder
          alt={member.alt || `${member.name}'s profile picture`}
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