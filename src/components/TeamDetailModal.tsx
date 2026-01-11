import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TeamOption } from "@/types/platform";
import { specializationLabels } from "@/data/cities";
import {
  Shield, Award, Briefcase, Clock, DollarSign,
  CheckCircle2, MapPin, Users, Star
} from "lucide-react";
import { cn } from "@/lib/utils";

type TeamDetailModalProps = {
  team: TeamOption | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (team: TeamOption) => void;
};

export function TeamDetailModal({
  team,
  isOpen,
  onClose,
  onSelect,
}: TeamDetailModalProps) {
  if (!team) return null;

  const formatCost = (t: TeamOption) => {
    const { min, max, unit } = t.costRange;
    if (unit === 'project') return `₹${min}L - ₹${max}L per project`;
    if (unit === 'month') return `₹${min}L - ₹${max}L per month`;
    return `₹${min} - ₹${max} per hour`;
  };

  const formatTimeline = (t: TeamOption) => {
    const { min, max, unit } = t.timelineRange;
    return `${min}-${max} ${unit}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl gradient-trust flex items-center justify-center text-primary-foreground font-display font-bold text-xl shrink-0">
              {team.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {team.isRecommended && (
                  <span className="px-2 py-0.5 rounded-full gradient-warm text-xs font-semibold">
                    Best Match
                  </span>
                )}
                <span className="px-2 py-0.5 rounded-full bg-muted text-xs capitalize">
                  {team.type}
                </span>
              </div>
              <DialogTitle className="font-display text-xl">{team.name}</DialogTitle>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {team.city}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{team.matchScore}%</div>
              <div className="text-xs text-muted-foreground">match score</div>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Tagline */}
          <p className="text-muted-foreground">{team.tagline}</p>

          {/* Trust Signals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-muted/30">
            <div className="text-center">
              <Shield className="w-5 h-5 text-success mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Verification</p>
              <p className="text-sm font-semibold capitalize">{team.verificationLevel}</p>
            </div>
            <div className="text-center">
              <Award className="w-5 h-5 text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Projects</p>
              <p className="text-sm font-semibold">{team.projectsCompleted}</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="text-sm font-semibold">{team.yearsExperience} years</p>
            </div>
            <div className="text-center">
              <div className={cn(
                "w-3 h-3 rounded-full mx-auto mb-1.5",
                team.availability === 'available' && "bg-available",
                team.availability === 'limited' && "bg-limited",
                team.availability === 'unavailable' && "bg-unavailable"
              )} />
              <p className="text-xs text-muted-foreground">Availability</p>
              <p className="text-sm font-semibold capitalize">{team.availability}</p>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-accent" />
              Specializations
            </h4>
            <div className="flex flex-wrap gap-2">
              {team.specializations.map(spec => (
                <span 
                  key={spec} 
                  className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
                >
                  {specializationLabels[spec]}
                </span>
              ))}
            </div>
          </div>

          {/* Cost & Timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <DollarSign className="w-4 h-4" />
                Cost Range
              </div>
              <p className="font-semibold">{formatCost(team)}</p>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                Timeline
              </div>
              <p className="font-semibold">{formatTimeline(team)}</p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              What You'll Get
            </h4>
            <ul className="space-y-2">
              {team.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration Model */}
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              How They Work
            </h4>
            <p className="text-sm text-muted-foreground">{team.collaborationModel}</p>
          </div>

          {/* Trust Signals Detail */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Verified Trust Signals</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {team.trustSignals.map((signal, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className={cn(
                    "w-4 h-4",
                    signal.verified ? "text-success" : "text-muted-foreground"
                  )} />
                  <span className="text-muted-foreground">{signal.label}:</span>
                  <span className="font-medium">{signal.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6 pt-6 border-t">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Back to list
          </Button>
          <Button 
            variant="warm" 
            onClick={() => onSelect(team)} 
            className="flex-1"
          >
            Select this team
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}