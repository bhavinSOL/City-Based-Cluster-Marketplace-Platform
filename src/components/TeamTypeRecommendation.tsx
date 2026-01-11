import { Users, User, ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { City, TeamType } from '@/types/platform';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';

type TeamTypeRecommendationProps = {
  city: City;
  selectedType: TeamType | null;
  onSelectType: (type: TeamType) => void;
};

export function TeamTypeRecommendation({
  city,
  selectedType,
  onSelectType,
}: TeamTypeRecommendationProps) {
  const recommendedType: TeamType = city.clusterCount >= 4 ? 'cluster' : 'expert';

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <ProgressBar currentStep="recommendation" />

      {/* Header */}
      <div className="text-center mb-8">
        <span className="section-label">Step 2 of 4</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
          How should you work in {city.name}?
        </h2>
        <p className="helper-text max-w-lg mx-auto">
          Based on {city.name}'s ecosystem, we recommend starting with a 
          <strong className="text-foreground"> {recommendedType === 'cluster' ? 'pre-vetted team' : 'specialist expert'}</strong>. 
          But here's both options.
        </p>
      </div>

      {/* Recommendation Reason */}
      <div className="max-w-2xl mx-auto mb-8 p-4 rounded-lg bg-accent/5 border border-accent/20">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium mb-1">Why we recommend {recommendedType === 'cluster' ? 'clusters' : 'experts'} for {city.name}</p>
            <p className="text-xs text-muted-foreground">
              {recommendedType === 'cluster' 
                ? `${city.name} has a strong cluster ecosystem with ${city.clusterCount} active teams. Teams here are well-coordinated and used to working with startups on end-to-end projects.`
                : `${city.name} has excellent individual experts (${city.expertCount}+ available). For specialized work or filling skill gaps, individual experts here deliver outstanding results.`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Cluster Option */}
        <div
          className={cn(
            "recommendation-card cursor-pointer",
            recommendedType === 'cluster' && "recommended",
            selectedType === 'cluster' && "border-primary ring-2 ring-primary/10"
          )}
          onClick={() => onSelectType('cluster')}
        >
          {recommendedType === 'cluster' && (
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-warm text-xs font-semibold text-foreground">
              Recommended for you
            </div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              recommendedType === 'cluster' ? "bg-accent/10" : "bg-muted"
            )}>
              <Users className={cn(
                "w-6 h-6",
                recommendedType === 'cluster' ? "text-accent" : "text-muted-foreground"
              )} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl">Pre-vetted Cluster</h3>
              <p className="text-sm text-muted-foreground">Full team, end-to-end delivery</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            A coordinated team of 3-8 specialists covering embedded, PCB, mechanical, and firmware. 
            They handle coordination internally — you get a single point of contact.
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Faster execution (parallel workstreams)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Lower coordination overhead for you</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Project-based pricing clarity</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground">Available in {city.name}</p>
              <p className="font-semibold">{city.clusterCount} clusters</p>
            </div>
            <Button 
              variant={selectedType === 'cluster' ? 'default' : 'outline'} 
              size="sm"
              className="group"
            >
              Select
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>

        {/* Expert Option */}
        <div
          className={cn(
            "recommendation-card cursor-pointer",
            recommendedType === 'expert' && "recommended",
            selectedType === 'expert' && "border-primary ring-2 ring-primary/10"
          )}
          onClick={() => onSelectType('expert')}
        >
          {recommendedType === 'expert' && (
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-warm text-xs font-semibold text-foreground">
              Recommended for you
            </div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              recommendedType === 'expert' ? "bg-accent/10" : "bg-muted"
            )}>
              <User className={cn(
                "w-6 h-6",
                recommendedType === 'expert' ? "text-accent" : "text-muted-foreground"
              )} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl">Individual Expert</h3>
              <p className="text-sm text-muted-foreground">Specialist contractor, specific skills</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            A senior engineer with deep expertise in one area (e.g., PCB layout, firmware architecture). 
            Best when you have a specific skill gap or need a technical advisor.
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Deep specialized expertise</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Flexible engagement (hourly/monthly)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Direct communication, no layers</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground">Available in {city.name}</p>
              <p className="font-semibold">{city.expertCount} experts</p>
            </div>
            <Button 
              variant={selectedType === 'expert' ? 'default' : 'outline'} 
              size="sm"
              className="group"
            >
              Select
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Disclaimer */}
      <div className="max-w-2xl mx-auto mt-8 p-4 rounded-lg bg-muted/50 text-center">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Both options are pre-vetted.</strong> Every cluster and expert 
          on our platform has been background-verified, with validated project history and references checked.
        </p>
      </div>
    </div>
  );
}
