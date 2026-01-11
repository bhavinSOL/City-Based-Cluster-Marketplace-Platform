import { AnimatedCounter } from './AnimatedCounter';
import { Users, MapPin, IndianRupee, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Teams Matched',
    description: 'Successful founder-team connections',
  },
  {
    icon: MapPin,
    value: 6,
    suffix: '',
    label: 'Cities',
    description: 'Active hardware hubs in India',
  },
  {
    icon: IndianRupee,
    value: 40,
    suffix: 'Cr+',
    label: 'Project Value',
    description: 'Total hardware projects facilitated',
  },
  {
    icon: CheckCircle2,
    value: 92,
    suffix: '%',
    label: 'Success Rate',
    description: 'Projects delivered on time',
  },
];

export function StatsSection() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground hidden md:block">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}