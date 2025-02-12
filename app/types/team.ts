export interface TeamMember {
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