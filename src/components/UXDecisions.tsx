import { Target, Shield, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

type Decision = {
  id: string;
  title: string;
  rationale: string;
  focus: ('trust' | 'clarity' | 'conversion')[];
  implementation: string;
  alternative: string;
  icon: React.ReactNode;
};

const decisions: Decision[] = [
  {
    id: 'city-first',
    title: 'City-First Selection',
    rationale: 'Geography is the primary trust filter for hardware founders. Local teams enable site visits, faster iteration, and access to regional manufacturing ecosystems.',
    focus: ['trust', 'clarity'],
    implementation: 'City selection is Step 1, before any other filtering. Each city shows cluster count, expert count, and key specializations upfront.',
    alternative: 'Skill-first filtering would require more upfront decisions and miss the locality trust advantage.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: 'max-three',
    title: 'Maximum 3 Options',
    rationale: 'Paradox of choice research shows more options decrease satisfaction. For high-stakes decisions, curated choices outperform open browsing.',
    focus: ['clarity', 'conversion'],
    implementation: 'System always presents exactly 2-3 pre-curated matches with one marked as "Best Match." No pagination, no "load more."',
    alternative: 'Marketplace-style browsing with filters would increase time-to-decision and lower conversion.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'low-commitment',
    title: 'Low-Commitment CTAs',
    rationale: 'Hardware decisions are high-stakes and slow. Pushing for immediate commitment creates friction. Low-commitment actions let users "try before they buy."',
    focus: ['trust', 'conversion'],
    implementation: 'Three CTA options: Request Proposal (explore), Book Discovery Call (engage), Reserve Availability (hold). All free, no contract.',
    alternative: '"Hire Now" or "Get Quote" CTAs would increase abandonment and decrease trust.',
    icon: <Shield className="w-6 h-6" />,
  },
];

const focusLabels = {
  trust: { label: 'Trust', color: 'bg-success/10 text-success' },
  clarity: { label: 'Clarity', color: 'bg-accent/10 text-accent' },
  conversion: { label: 'Conversion', color: 'bg-primary/10 text-primary' },
};

export function UXDecisions() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Design Rationale</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              3 Key UX Decisions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every design choice is intentional. Here are the three most critical 
              decisions and their rationale focused on trust, clarity, and conversion.
            </p>
          </div>

          {/* Decision Cards */}
          <div className="space-y-8">
            {decisions.map((decision, index) => (
              <div 
                key={decision.id}
                className="p-6 md:p-8 rounded-2xl border bg-card shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Number */}
                  <div className="flex items-start gap-4 md:flex-col md:items-center md:w-24 shrink-0">
                    <div className="w-14 h-14 rounded-2xl gradient-trust flex items-center justify-center text-primary-foreground">
                      {decision.icon}
                    </div>
                    <span className="text-4xl font-display font-bold text-muted-foreground/30 md:mt-2">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="font-display font-semibold text-xl">{decision.title}</h3>
                      {decision.focus.map(f => (
                        <span 
                          key={f}
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${focusLabels[f].color}`}
                        >
                          {focusLabels[f].label}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6">{decision.rationale}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span className="text-xs font-semibold text-success">Implementation</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{decision.implementation}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted border">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs font-semibold text-muted-foreground">Alternative Rejected</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{decision.alternative}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Design Philosophy:</strong> Guide, don't overwhelm. 
              Trust is earned through transparency, not promised through marketing. 
              Every additional option is a potential point of friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
