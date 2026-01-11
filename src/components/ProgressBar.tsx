import { Step } from '@/types/platform';
import { cn } from '@/lib/utils';

type ProgressBarProps = {
  currentStep: Step;
};

const steps: { step: Step; label: string }[] = [
  { step: 'city', label: 'Location' },
  { step: 'recommendation', label: 'Type' },
  { step: 'comparison', label: 'Compare' },
  { step: 'action', label: 'Connect' },
];

export function ProgressBar({ currentStep }: ProgressBarProps) {
  const currentIndex = steps.findIndex(s => s.step === currentStep);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-3">
        <div 
          className="h-full gradient-warm transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Step labels */}
      <div className="flex justify-between">
        {steps.map((s, index) => (
          <span
            key={s.step}
            className={cn(
              "text-xs font-medium transition-colors",
              index <= currentIndex ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}