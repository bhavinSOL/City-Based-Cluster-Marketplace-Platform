import { useState } from 'react';
import { 
  FileText, Phone, CalendarClock, 
  Shield, CheckCircle2, ArrowRight, Clock, PartyPopper, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TeamOption } from '@/types/platform';
import { specializationLabels } from '@/data/cities';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';
import { useToast } from '@/hooks/use-toast';

type ActionType = 'proposal' | 'call' | 'reserve';

type ActionScreenProps = {
  team: TeamOption;
  onAction: (action: ActionType) => void;
  onBack: () => void;
};

export function ActionScreen({ team, onAction, onBack }: ActionScreenProps) {
  const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedAction) return;
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onAction(selectedAction);
      
      toast({
        title: "Request sent successfully! 🎉",
        description: `${team.name} will respond within 24-48 hours.`,
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in text-center py-16 max-w-lg mx-auto">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6 animate-bounce">
          <PartyPopper className="w-10 h-10 text-success" />
        </div>
        <h2 className="font-display text-3xl font-bold mb-4">You're all set! 🎉</h2>
        <p className="text-muted-foreground mb-8">
          We've notified {team.name} about your interest. 
          They typically respond within 24-48 hours.
        </p>
        <div className="p-6 rounded-xl bg-muted text-left mb-8">
          <p className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            What happens next?
          </p>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <span>{team.name} reviews your request</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <span>You'll receive an email with their response</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <span>
                {selectedAction === 'call' 
                  ? 'Calendar invite sent for discovery call'
                  : selectedAction === 'proposal'
                  ? 'Detailed proposal shared within 5 business days'
                  : 'Availability confirmed and reserved for 7 days'
                }
              </span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={onBack}>
            View other options
          </Button>
          <Button variant="warm" onClick={() => window.location.reload()}>
            Start a new search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      {/* Progress */}
      <ProgressBar currentStep="action" />

      {/* Header */}
      <div className="text-center mb-8">
        <span className="section-label">Final Step</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
          Connect with {team.name}
        </h2>
        <p className="helper-text max-w-lg mx-auto">
          Choose how you'd like to start. All options are low-commitment — 
          no payment required until you're ready to proceed.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Team Summary Card */}
        <div className="lg:col-span-1 p-6 rounded-xl border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-trust flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
              {team.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-display font-semibold">{team.name}</h3>
              <p className="text-sm text-muted-foreground">{team.city}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span className="capitalize">{team.verificationLevel}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>{team.projectsCompleted} projects completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>
                {team.availability === 'available' 
                  ? 'Available now' 
                  : `Available from ${team.availableFrom}`}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-muted-foreground mb-2">Specializations</p>
            <div className="flex flex-wrap gap-1.5">
              {team.specializations.map(spec => (
                <span key={spec} className="text-xs px-2 py-0.5 rounded bg-muted">
                  {specializationLabels[spec]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Options */}
        <div className="lg:col-span-2 space-y-4">
          {/* Request Proposal */}
          <div
            onClick={() => setSelectedAction('proposal')}
            className={cn(
              "p-6 rounded-xl border cursor-pointer transition-all",
              selectedAction === 'proposal' 
                ? "border-primary ring-2 ring-primary/10 bg-primary/5"
                : "hover:border-primary/50"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                selectedAction === 'proposal' ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-1">Request Proposal</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get a detailed proposal with scope, timeline, cost breakdown, and team allocation. 
                  Usually delivered within 5 business days.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>• No commitment required</span>
                  <span>• Free of charge</span>
                </div>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0",
                selectedAction === 'proposal' ? "border-primary bg-primary" : "border-muted-foreground"
              )}>
                {selectedAction === 'proposal' && (
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </div>
          </div>

          {/* Book Discovery Call */}
          <div
            onClick={() => setSelectedAction('call')}
            className={cn(
              "p-6 rounded-xl border cursor-pointer transition-all",
              selectedAction === 'call' 
                ? "border-primary ring-2 ring-primary/10 bg-primary/5"
                : "hover:border-primary/50"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                selectedAction === 'call' ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-1">Book Discovery Call</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  30-minute video call with the team lead to discuss your project, 
                  ask questions, and assess fit before any formal engagement.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>• 30 minutes</span>
                  <span>• Available this week</span>
                </div>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0",
                selectedAction === 'call' ? "border-primary bg-primary" : "border-muted-foreground"
              )}>
                {selectedAction === 'call' && (
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </div>
          </div>

          {/* Reserve Availability */}
          <div
            onClick={() => setSelectedAction('reserve')}
            className={cn(
              "p-6 rounded-xl border cursor-pointer transition-all",
              selectedAction === 'reserve' 
                ? "border-primary ring-2 ring-primary/10 bg-primary/5"
                : "hover:border-primary/50"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                selectedAction === 'reserve' ? "bg-primary text-primary-foreground" : "bg-muted"
              )}>
                <CalendarClock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg mb-1">Reserve Availability</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Hold their capacity for 7 days while you finalize internally. 
                  Useful if you're comparing multiple options or waiting on budget approval.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>• 7-day hold</span>
                  <span>• No penalty to cancel</span>
                </div>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0",
                selectedAction === 'reserve' ? "border-primary bg-primary" : "border-muted-foreground"
              )}>
                {selectedAction === 'reserve' && (
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" onClick={onBack}>
          Back to comparison
        </Button>
        <Button 
          variant="warm" 
          size="lg"
          onClick={handleSubmit}
          disabled={!selectedAction || isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            <>
              Continue
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>

      {/* Trust Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          <Shield className="w-3.5 h-3.5 inline-block mr-1.5" />
          Your information is shared only with the team you select. 
          We never sell your data or spam you.
        </p>
      </div>
    </div>
  );
}
