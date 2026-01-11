export type City = {
  id: string;
  name: string;
  region: string;
  clusterCount: number;
  expertCount: number;
  specializations: string[];
};

export type TeamType = 'cluster' | 'expert';

export type Specialization = 
  | 'embedded-systems'
  | 'pcb-design'
  | 'mechanical-design'
  | 'firmware'
  | 'quality-assurance'
  | 'prototyping';

export type VerificationLevel = 'verified' | 'vetted' | 'certified';

export type Availability = 'available' | 'limited' | 'unavailable';

export type TrustSignal = {
  type: 'verification' | 'project' | 'specialization' | 'availability';
  label: string;
  value: string | number;
  verified: boolean;
};

export type TeamOption = {
  id: string;
  name: string;
  type: TeamType;
  city: string;
  avatar?: string;
  tagline: string;
  specializations: Specialization[];
  verificationLevel: VerificationLevel;
  availability: Availability;
  availableFrom?: string;
  projectsCompleted: number;
  yearsExperience: number;
  costRange: {
    min: number;
    max: number;
    unit: 'project' | 'month' | 'hour';
  };
  timelineRange: {
    min: number;
    max: number;
    unit: 'weeks' | 'months';
  };
  deliverables: string[];
  collaborationModel: string;
  trustSignals: TrustSignal[];
  matchScore: number;
  isRecommended: boolean;
};

export type Step = 'landing' | 'city' | 'recommendation' | 'comparison' | 'action';

export type UserIntent = {
  city: City | null;
  teamType: TeamType | null;
  selectedOption: TeamOption | null;
  action: 'proposal' | 'call' | 'reserve' | null;
};
