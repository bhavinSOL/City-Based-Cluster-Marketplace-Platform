import { MapPin, Users, GitCompare, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: MapPin,
    title: 'Choose Your City',
    description: 'Select where your startup is based. We prioritize local teams for easier collaboration.',
    time: '30 seconds',
  },
  {
    icon: Users,
    title: 'Get Recommendations',
    description: 'We analyze your city\'s ecosystem and recommend cluster teams or individual experts.',
    time: '1 minute',
  },
  {
    icon: GitCompare,
    title: 'Compare Options',
    description: 'Review up to 3 pre-vetted options with transparent pricing, timelines, and trust signals.',
    time: '2 minutes',
  },
  {
    icon: Handshake,
    title: 'Connect & Start',
    description: 'Request a proposal, book a call, or reserve availability — all low-commitment.',
    time: 'Your pace',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
            From search to team in 4 steps
          </h2>
          <p className="helper-text max-w-lg mx-auto">
            No browsing endless profiles. No guessing. Just guided matching.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-border" />
            
            <div className="grid md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "relative text-center animate-fade-in",
                      "md:text-center"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Step Number & Icon */}
                    <div className="relative mx-auto mb-4">
                      <div className="w-12 h-12 rounded-xl gradient-trust flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    <span className="text-xs text-accent font-medium">{step.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}