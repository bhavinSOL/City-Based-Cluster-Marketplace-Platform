import { Code, FileText, Palette, Layers, CheckCircle2 } from 'lucide-react';

type WireframeScreen = {
  id: string;
  name: string;
  description: string;
  elements: string[];
};

const wireframes: WireframeScreen[] = [
  {
    id: 'landing',
    name: 'Landing / Problem Framing',
    description: 'Hero section with clear value proposition and single primary CTA',
    elements: [
      'Header: Logo + Navigation (How it works, Success stories, FAQ)',
      'Hero: Problem headline "Stop guessing who can build your hardware"',
      'Subheadline: Solution promise with trust signals',
      'Primary CTA: "Find your team" (warm, prominent)',
      'Secondary CTA: "See how it works" (outline, subtle)',
      'Value props: 3 cards (Pre-vetted, City-based, Guided matching)',
      'Social proof: Stats section with animated counters',
    ],
  },
  {
    id: 'city',
    name: 'City Selection',
    description: 'Grid of 6 cities with team counts and specializations',
    elements: [
      'Progress: Step indicator (1 of 4)',
      'Heading: "Where is your startup based?"',
      'Helper text: Explains locality advantage',
      'Search: City filter input',
      'City cards: 6 cards in 2x3 grid',
      '  - City name + Region',
      '  - Team count + Expert count',
      '  - Top 3 specialization tags',
      '  - Selection checkmark indicator',
      'Empty state: "No cities match" with retry prompt',
    ],
  },
  {
    id: 'recommendation',
    name: 'Cluster vs Expert Recommendation',
    description: 'Side-by-side comparison with system recommendation highlighted',
    elements: [
      'Progress: Step indicator (2 of 4)',
      'Heading: "How should you work in [City]?"',
      'Recommendation banner: Why we recommend X for this city',
      'Option cards: 2 cards side by side',
      '  - Cluster: Team icon, benefits list, availability count',
      '  - Expert: Person icon, benefits list, availability count',
      'Recommended badge: "Recommended for you" on preferred option',
      'Trust disclaimer: "Both options are pre-vetted"',
    ],
  },
  {
    id: 'comparison',
    name: 'Results Comparison (Max 3)',
    description: 'Curated matches with trust signals and key details',
    elements: [
      'Progress: Step indicator (3 of 4)',
      'Heading: "Your top matches in [City]"',
      'Match cards: 3 cards in horizontal layout',
      '  - Best Match badge on recommended option',
      '  - Team name, location, match score %',
      '  - Trust signals: Verification, projects, years, availability',
      '  - Specialization tags',
      '  - Cost range + Timeline range',
      '  - Key deliverables (3 items)',
      '  - Select button + View profile link',
      'Empty state: "No [type] available" with notify option',
    ],
  },
  {
    id: 'action',
    name: 'CTA Screen',
    description: 'Low-commitment action selection with team summary',
    elements: [
      'Progress: Step indicator (Final step)',
      'Heading: "Connect with [Team Name]"',
      'Team summary card: Avatar, name, verification, availability',
      'Action options: 3 radio cards',
      '  - Request Proposal: Description, "No commitment, Free"',
      '  - Book Discovery Call: Description, "30 min, This week"',
      '  - Reserve Availability: Description, "7-day hold, No penalty"',
      'Submit button: "Continue" (disabled until selection)',
      'Trust footer: Privacy disclaimer',
      'Success state: Confirmation with next steps',
    ],
  },
];

export function WireframeDocumentation() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Low-Fidelity Wireframes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Screen-by-Screen Breakdown
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Text-based wireframes documenting key screens, their purpose, 
              and UI elements in the guided decision flow.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-sm">
              <Layers className="w-4 h-4 text-primary" />
              <span>Layout Structure</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-accent" />
              <span>Content Elements</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Palette className="w-4 h-4 text-success" />
              <span>Visual Indicators</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Code className="w-4 h-4 text-muted-foreground" />
              <span>Interactive States</span>
            </div>
          </div>

          {/* Wireframe Cards */}
          <div className="space-y-8">
            {wireframes.map((screen, index) => (
              <div 
                key={screen.id}
                className="p-6 md:p-8 rounded-2xl border bg-card"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Screen Number */}
                  <div className="flex items-start gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-display font-bold text-xl text-primary">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl mb-2">{screen.name}</h3>
                    <p className="text-muted-foreground mb-6">{screen.description}</p>

                    {/* Elements List */}
                    <div className="p-4 rounded-lg bg-muted/50 font-mono text-sm">
                      <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">UI Elements</p>
                      <ul className="space-y-1.5">
                        {screen.elements.map((element, i) => (
                          <li 
                            key={i}
                            className={`flex items-start gap-2 ${element.startsWith('  ') ? 'pl-4 text-muted-foreground' : ''}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-1" />
                            <span>{element.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
