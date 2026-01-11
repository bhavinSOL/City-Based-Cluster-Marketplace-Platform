import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  quote: string;
  rating: number;
  teamMatched: string;
  projectType: string;
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Vikram Patel',
    role: 'Founder & CEO',
    company: 'AgroSense Technologies',
    city: 'Ahmedabad',
    quote: 'Found our perfect embedded team in 48 hours. They understood agricultural IoT from day one — no hand-holding needed.',
    rating: 5,
    teamMatched: 'Sabarmati Tech Collective',
    projectType: 'Agricultural IoT Sensor',
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    role: 'CTO',
    company: 'MedTech Innovations',
    city: 'Bengaluru',
    quote: 'The vetting process gave us confidence. Our device passed FDA pre-submission on the first attempt thanks to their compliance expertise.',
    rating: 5,
    teamMatched: 'Spectrum Hardware Labs',
    projectType: 'Medical Wearable',
  },
  {
    id: '3',
    name: 'Arjun Mehta',
    role: 'Hardware Lead',
    company: 'EV Mobility Startup',
    city: 'Pune',
    quote: 'Deccan Hardware Works delivered our BMS prototype 2 weeks ahead of schedule. Their automotive background made all the difference.',
    rating: 5,
    teamMatched: 'Deccan Hardware Works',
    projectType: 'EV Battery Management',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">Success Stories</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
            Founders who found their teams
          </h2>
          <p className="helper-text max-w-lg mx-auto">
            Real hardware startups. Real matches. Real outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "relative p-6 rounded-xl border bg-background",
                "animate-fade-in hover:shadow-elevated transition-all duration-300"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 right-6">
                <div className="w-8 h-8 rounded-full gradient-warm flex items-center justify-center">
                  <Quote className="w-4 h-4 text-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-start gap-3 pt-4 border-t">
                <div className="w-10 h-10 rounded-full gradient-trust flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company} • {testimonial.city}</p>
                </div>
              </div>

              {/* Project Badge */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Matched with</span>
                  <span className="font-medium text-accent">{testimonial.teamMatched}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}