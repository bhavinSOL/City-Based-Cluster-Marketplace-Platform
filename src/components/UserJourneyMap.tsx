import { ArrowRight, MapPin, Users, BarChart3, MousePointerClick, CheckCircle2 } from 'lucide-react';

type JourneyStep = {
  id: string;
  title: string;
  userThinking: string;
  action: string;
  outcome: string;
  icon: React.ReactNode;
};

const journeySteps: JourneyStep[] = [
  {
    id: 'intent',
    title: 'Intent',
    userThinking: '"I need help building my hardware product but don\'t know where to start"',
    action: 'Lands on homepage, reads value proposition',
    outcome: 'Understands platform helps find execution teams locally',
    icon: <MousePointerClick className="w-5 h-5" />,
  },
  {
    id: 'city',
    title: 'City Selection',
    userThinking: '"I want to work with people I can meet in person"',
    action: 'Selects their city from 6 options',
    outcome: 'Sees available clusters & experts in their area',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 'recommendation',
    title: 'Team Type',
    userThinking: '"Should I hire freelancers or a service company?"',
    action: 'Reviews cluster vs expert recommendation',
    outcome: 'Gets system recommendation based on city ecosystem',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'comparison',
    title: 'Compare Options',
    userThinking: '"How do I evaluate quality and fit?"',
    action: 'Compares max 3 curated matches',
    outcome: 'Reviews trust signals, cost ranges, deliverables',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: 'commitment',
    title: 'Low Commitment',
    userThinking: '"I\'m not ready to commit, but want to explore"',
    action: 'Chooses: proposal, call, or reserve',
    outcome: 'Takes action without payment or contract',
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

export function UserJourneyMap() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Information Architecture</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              User Journey Map
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A guided decision flow from intent to commitment, designed to 
              reduce anxiety and build trust at every step.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-muted via-primary/30 to-primary" />

            {/* Steps */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-4">
              {journeySteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Card */}
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-primary">{step.icon}</span>
                    </div>

                    {/* Step Number */}
                    <span className="text-xs font-semibold text-muted-foreground mb-1">
                      Step {index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="font-display font-semibold mb-3">{step.title}</h3>

                    {/* Card Content */}
                    <div className="w-full p-4 rounded-xl border bg-card space-y-3">
                      {/* User Thinking */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">User Thinking</p>
                        <p className="text-xs italic text-foreground">{step.userThinking}</p>
                      </div>

                      {/* Action */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Action</p>
                        <p className="text-xs">{step.action}</p>
                      </div>

                      {/* Outcome */}
                      <div>
                        <p className="text-xs font-semibold text-success mb-1">Outcome</p>
                        <p className="text-xs text-muted-foreground">{step.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow - Mobile */}
                  {index < journeySteps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* IA Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border bg-card">
              <h3 className="font-display font-semibold mb-3">Navigation Model</h3>
              <p className="text-sm text-muted-foreground">
                Linear wizard flow with progress indicator. Users can go back to any 
                completed step but cannot skip ahead. Reduces cognitive load.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <h3 className="font-display font-semibold mb-3">Content Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Progressive disclosure — show only what's needed at each step. 
                Defer detailed information (full profiles, exact pricing) until user 
                shows interest.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <h3 className="font-display font-semibold mb-3">Trust Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Trust signals appear throughout: verification badges, project counts, 
                availability status, and disclaimers. Trust is built incrementally, 
                not demanded upfront.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
