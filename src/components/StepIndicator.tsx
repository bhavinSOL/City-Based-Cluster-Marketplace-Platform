import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Step } from '@/types/platform';

const steps: { id: Step; label: string }[] = [
  { id: 'city', label: 'Location' },
  { id: 'recommendation', label: 'Match Type' },
  { id: 'comparison', label: 'Compare' },
  { id: 'action', label: 'Connect' },
];

type StepIndicatorProps = {
  currentStep: Step;
  onStepClick?: (step: Step) => void;
};

export function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  const getCurrentIndex = () => {
    if (currentStep === 'landing') return -1;
    return steps.findIndex(s => s.id === currentStep);
  };

  const currentIndex = getCurrentIndex();

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isPending = index > currentIndex;

        return (
          <div key={step.id} className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => isCompleted && onStepClick?.(step.id)}
              disabled={!isCompleted}
              className={cn(
                "flex items-center gap-2 transition-all duration-300",
                isCompleted && "cursor-pointer hover:opacity-80",
                !isCompleted && "cursor-default"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                  isCompleted && "bg-success text-success-foreground",
                  isCurrent && "bg-primary text-primary-foreground",
                  isPending && "bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  "hidden sm:block text-sm font-medium transition-colors",
                  isCurrent && "text-foreground",
                  !isCurrent && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 sm:w-12 h-0.5 transition-colors",
                  index < currentIndex ? "bg-success" : "bg-muted"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
