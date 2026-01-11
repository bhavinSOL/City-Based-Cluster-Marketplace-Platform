// Microcopy examples for the ClusterMatch platform
// These are documented examples for reference and implementation

export const microcopy = {
  // City Selection
  citySelection: {
    heading: 'Where is your startup based?',
    helperText: 'We\'ll match you with verified hardware teams in your city. Local teams mean easier collaboration, site visits, and manufacturing partnerships.',
    searchPlaceholder: 'Search cities...',
    emptySearch: (query: string) => `No cities match "${query}"`,
    emptySearchHelper: 'Try searching for a different city or check the spelling.',
    noAvailability: 'No cities available yet',
    noAvailabilityHelper: 'We\'re expanding our network. Check back soon or request your city.',
  },

  // Cluster vs Freelancer Explanation
  teamType: {
    clusterTitle: 'Pre-vetted Cluster',
    clusterSubtitle: 'Full team, end-to-end delivery',
    clusterDescription: 'A coordinated team of 3-8 specialists covering embedded, PCB, mechanical, and firmware. They handle coordination internally — you get a single point of contact.',
    clusterBenefits: [
      'Faster execution (parallel workstreams)',
      'Lower coordination overhead for you',
      'Project-based pricing clarity',
    ],

    expertTitle: 'Individual Expert',
    expertSubtitle: 'Specialist contractor, specific skills',
    expertDescription: 'A senior engineer with deep expertise in one area (e.g., PCB layout, firmware architecture). Best when you have a specific skill gap or need a technical advisor.',
    expertBenefits: [
      'Deep specialized expertise',
      'Flexible engagement (hourly/monthly)',
      'Direct communication, no layers',
    ],

    recommendationReason: (type: 'cluster' | 'expert', city: string, count: number) => 
      type === 'cluster'
        ? `${city} has a strong cluster ecosystem with ${count} active teams. Teams here are well-coordinated and used to working with startups on end-to-end projects.`
        : `${city} has excellent individual experts (${count}+ available). For specialized work or filling skill gaps, individual experts here deliver outstanding results.`,
  },

  // Trust Disclaimers
  trust: {
    vettingDisclaimer: 'Both options are pre-vetted. Every cluster and expert on our platform has been background-verified, with validated project history and references checked.',
    privacyDisclaimer: 'Your information is shared only with the team you select. We never sell your data or spam you.',
    pricingDisclaimer: 'Cost ranges are estimates based on typical projects. Final pricing depends on scope, timeline, and complexity.',
    availabilityDisclaimer: 'Availability status is updated weekly. "Limited" means the team may have partial capacity.',
  },

  // Empty/Error States
  emptyStates: {
    noClusters: (city: string) => ({
      title: `No clusters available in ${city}`,
      message: 'We\'re actively onboarding teams in this city. Leave your email to be notified when matches are available.',
      action: 'Notify me when available',
    }),
    
    noExperts: (city: string) => ({
      title: `No experts available in ${city}`,
      message: 'Individual experts in this city are fully booked. Try selecting a cluster instead, or check back in a few weeks.',
      action: 'View clusters instead',
    }),

    searchNoResults: (query: string) => ({
      title: `No results for "${query}"`,
      message: 'Try adjusting your search terms or clearing filters to see more options.',
      action: 'Clear search',
    }),

    connectionError: {
      title: 'Connection lost',
      message: 'Unable to load team data. Please check your internet connection and try again.',
      action: 'Retry',
    },

    serverError: {
      title: 'Something went wrong',
      message: 'We couldn\'t process your request. Our team has been notified. Please try again in a few moments.',
      action: 'Try again',
    },
  },

  // Action Screen
  actions: {
    proposalTitle: 'Request Proposal',
    proposalDescription: 'Get a detailed proposal with scope, timeline, cost breakdown, and team allocation. Usually delivered within 5 business days.',
    proposalMeta: ['No commitment required', 'Free of charge'],

    callTitle: 'Book Discovery Call',
    callDescription: '30-minute video call with the team lead to discuss your project, ask questions, and assess fit before any formal engagement.',
    callMeta: ['30 minutes', 'Available this week'],

    reserveTitle: 'Reserve Availability',
    reserveDescription: 'Hold their capacity for 7 days while you finalize internally. Useful if you\'re comparing multiple options or waiting on budget approval.',
    reserveMeta: ['7-day hold', 'No penalty to cancel'],
  },

  // Success States
  success: {
    title: 'You\'re all set! 🎉',
    message: (teamName: string) => `We've notified ${teamName} about your interest. They typically respond within 24-48 hours.`,
    nextSteps: (teamName: string, action: 'proposal' | 'call' | 'reserve') => [
      `${teamName} reviews your request`,
      'You\'ll receive an email with their response',
      action === 'call' 
        ? 'Calendar invite sent for discovery call'
        : action === 'proposal'
        ? 'Detailed proposal shared within 5 business days'
        : 'Availability confirmed and reserved for 7 days',
    ],
  },

  // Tooltips
  tooltips: {
    verificationBadge: 'This team has been background-verified with validated project history and references checked.',
    matchScore: 'Match score is calculated based on your project needs, team specializations, and past project success rate.',
    availability: {
      available: 'Available immediately for new projects',
      limited: 'Partial capacity available, may require scheduling',
      unavailable: 'Fully booked, check back later or join waitlist',
    },
  },
};

export default microcopy;
