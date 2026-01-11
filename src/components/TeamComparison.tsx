import { useState } from 'react';
import { 
  Shield, Clock, DollarSign, CheckCircle2, 
  Calendar, Award, Briefcase, MapPin, Eye 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { City, TeamOption, TeamType } from '@/types/platform';
import { getTeamsForCity } from '@/data/teams';
import { specializationLabels } from '@/data/cities';
import { cn } from '@/lib/utils';
import { TeamDetailModal } from './TeamDetailModal';
import { ProgressBar } from './ProgressBar';

type TeamComparisonProps = {
  city: City;
  teamType: TeamType;
  selectedTeam: TeamOption | null;
  onSelectTeam: (team: TeamOption) => void;
};

export function TeamComparison({
  city,
  teamType,
  selectedTeam,
  onSelectTeam,
}: TeamComparisonProps) {
  const [detailTeam, setDetailTeam] = useState<TeamOption | null>(null);
  const allTeams = getTeamsForCity(city.id);
  const filteredTeams = allTeams.filter(t => t.type === teamType).slice(0, 3);

  const handleViewDetails = (team: TeamOption, e: React.MouseEvent) => {
    e.stopPropagation();
    setDetailTeam(team);
  };

  const handleSelectFromModal = (team: TeamOption) => {
    onSelectTeam(team);
    setDetailTeam(null);
  };

  const formatCost = (team: TeamOption) => {
    const { min, max, unit } = team.costRange;
    if (unit === 'project') return `₹${min}L - ₹${max}L`;
    if (unit === 'month') return `₹${min}L - ₹${max}L/mo`;
    return `₹${min} - ₹${max}/hr`;
  };

  const formatTimeline = (team: TeamOption) => {
    const { min, max, unit } = team.timelineRange;
    return `${min}-${max} ${unit}`;
  };

  if (filteredTeams.length === 0) {
    return (
      <div className="animate-fade-in text-center py-16">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
          <Briefcase className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-display text-2xl font-semibold mb-3">
          No {teamType === 'cluster' ? 'clusters' : 'experts'} available in {city.name}
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          We're actively onboarding teams in this city. Leave your email to be notified when matches are available.
        </p>
        <Button variant="outline">Notify me when available</Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <ProgressBar currentStep="comparison" />

      {/* Header */}
      <div className="text-center mb-8">
        <span className="section-label">Step 3 of 4</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
          Your top matches in {city.name}
        </h2>
        <p className="helper-text max-w-lg mx-auto">
          We've curated {filteredTeams.length} {teamType === 'cluster' ? 'teams' : 'experts'} based on 
          availability, specialization match, and verified track record. Compare and choose.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredTeams.map((team, index) => (
          <div
            key={team.id}
            className={cn(
              "comparison-card cursor-pointer animate-fade-in",
              team.isRecommended && "ring-2 ring-accent shadow-glow",
              selectedTeam?.id === team.id && "ring-2 ring-primary"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onSelectTeam(team)}
          >
            {/* Header */}
            <div className="p-6 border-b">
              {team.isRecommended && (
                <div className="inline-block px-2.5 py-1 rounded-full gradient-warm text-xs font-semibold mb-3">
                  Best Match
                </div>
              )}
              
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display font-semibold text-lg">{team.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {team.city}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{team.matchScore}%</div>
                  <div className="text-xs text-muted-foreground">match</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{team.tagline}</p>
            </div>

            {/* Trust Signals */}
            <div className="p-6 border-b bg-muted/30">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span className="text-xs">{team.verificationLevel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-xs">{team.projectsCompleted} projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs">{team.yearsExperience} years</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    team.availability === 'available' && "bg-available",
                    team.availability === 'limited' && "bg-limited",
                    team.availability === 'unavailable' && "bg-unavailable"
                  )} />
                  <span className="text-xs capitalize">{team.availability}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              {/* Specializations */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Specializations</p>
                <div className="flex flex-wrap gap-1.5">
                  {team.specializations.map(spec => (
                    <span key={spec} className="text-xs px-2 py-0.5 rounded bg-muted">
                      {specializationLabels[spec]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cost & Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    Cost Range
                  </div>
                  <p className="font-semibold text-sm">{formatCost(team)}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    Timeline
                  </div>
                  <p className="font-semibold text-sm">{formatTimeline(team)}</p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Key Deliverables</p>
                <ul className="space-y-1.5">
                  {team.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0 space-y-2">
              <Button 
                variant={selectedTeam?.id === team.id ? 'default' : 'outline'} 
                className="w-full"
              >
                {selectedTeam?.id === team.id ? 'Selected' : 'Select this team'}
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full gap-2"
                onClick={(e) => handleViewDetails(team, e)}
              >
                <Eye className="w-4 h-4" />
                View full profile
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Team Detail Modal */}
      <TeamDetailModal
        team={detailTeam}
        isOpen={!!detailTeam}
        onClose={() => setDetailTeam(null)}
        onSelect={handleSelectFromModal}
      />
    </div>
  );
}
