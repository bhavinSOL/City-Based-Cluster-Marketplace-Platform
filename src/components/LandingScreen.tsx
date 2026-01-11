import { ArrowRight, Shield, Users, Zap, Play, FileText, Map, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HowItWorks } from './HowItWorks';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { StatsSection } from './StatsSection';
import { Footer } from './Footer';
import { CompetitorStudy } from './CompetitorStudy';
import { UserJourneyMap } from './UserJourneyMap';
import { UXDecisions } from './UXDecisions';

type LandingScreenProps = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-trust flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">ClusterMatch</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Research
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Success stories
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            For Teams
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-surface">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            {/* Problem Statement */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                For Hardware Founders
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Stop guessing who can
              <span className="block text-muted-foreground">build your hardware</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We match you with pre-vetted execution teams in your city. 
              No marketplace overwhelm. No blind hiring. 
              Just trusted recommendations based on your project needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                variant="warm" 
                size="xl" 
                onClick={onStart}
                className="group w-full sm:w-auto"
              >
                Find your team
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto gap-2"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-4 h-4" />
                See how it works
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Usually takes 3 minutes. No account required. Completely free.
            </p>
          </div>

          {/* Value Props */}
          <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Pre-Vetted Teams</h3>
              <p className="text-sm text-muted-foreground">
                Every team is background-verified with proven hardware project history and references checked
              </p>
            </div>

            <div className="text-center animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">City-Based Clusters</h3>
              <p className="text-sm text-muted-foreground">
                Work with local teams who understand your manufacturing ecosystem and enable on-site visits
              </p>
            </div>

            <div className="text-center animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Guided Matching</h3>
              <p className="text-sm text-muted-foreground">
                We recommend 2-3 best-fit options based on your specific needs — no endless browsing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Research Section */}
      <div id="research" className="border-t">
        {/* Section Header */}
        <div className="bg-muted/30 py-12 text-center border-b">
          <span className="section-label">Platform Design Documentation</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Research & Design Rationale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Transparency in our design process. Here's how we built a high-trust 
            decision flow for hardware founders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#competitor-study" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:border-primary transition-colors">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Competitor Study</span>
            </a>
            <a href="#user-journey" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:border-primary transition-colors">
              <Map className="w-4 h-4" />
              <span className="text-sm font-medium">User Journey</span>
            </a>
            <a href="#ux-decisions" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:border-primary transition-colors">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">Key UX Decisions</span>
            </a>
          </div>
        </div>

        {/* Competitor Study */}
        <div id="competitor-study">
          <CompetitorStudy />
        </div>

        {/* User Journey */}
        <div id="user-journey">
          <UserJourneyMap />
        </div>

        {/* UX Decisions */}
        <div id="ux-decisions">
          <UXDecisions />
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FAQ />
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to find your team?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Join 150+ hardware founders who've found their execution teams through ClusterMatch.
          </p>
          <Button 
            variant="warm" 
            size="xl" 
            onClick={onStart}
            className="group"
          >
            Start matching now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
