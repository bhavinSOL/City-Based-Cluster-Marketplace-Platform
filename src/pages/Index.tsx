import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepIndicator } from '@/components/StepIndicator';
import { LandingScreen } from '@/components/LandingScreen';
import { CitySelection } from '@/components/CitySelection';
import { TeamTypeRecommendation } from '@/components/TeamTypeRecommendation';
import { TeamComparison } from '@/components/TeamComparison';
import { ActionScreen } from '@/components/ActionScreen';
import { City, TeamType, TeamOption, Step } from '@/types/platform';

const Index = () => {
  const [step, setStep] = useState<Step>('landing');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedTeamType, setSelectedTeamType] = useState<TeamType | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<TeamOption | null>(null);

  const handleStart = () => setStep('city');

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
  };

  const handleTeamTypeSelect = (type: TeamType) => {
    setSelectedTeamType(type);
  };

  const handleTeamSelect = (team: TeamOption) => {
    setSelectedTeam(team);
  };

  const handleAction = (action: 'proposal' | 'call' | 'reserve') => {
    console.log('Action taken:', action, 'for team:', selectedTeam?.name);
  };

  const handleNext = () => {
    if (step === 'city' && selectedCity) setStep('recommendation');
    else if (step === 'recommendation' && selectedTeamType) setStep('comparison');
    else if (step === 'comparison' && selectedTeam) setStep('action');
  };

  const handleBack = () => {
    if (step === 'city') setStep('landing');
    else if (step === 'recommendation') setStep('city');
    else if (step === 'comparison') setStep('recommendation');
    else if (step === 'action') setStep('comparison');
  };

  const handleStepClick = (clickedStep: Step) => {
    // Only allow going to completed steps
    const stepOrder: Step[] = ['landing', 'city', 'recommendation', 'comparison', 'action'];
    const currentIndex = stepOrder.indexOf(step);
    const clickedIndex = stepOrder.indexOf(clickedStep);
    
    if (clickedIndex < currentIndex) {
      setStep(clickedStep);
    }
  };

  const canProceed = () => {
    if (step === 'city') return !!selectedCity;
    if (step === 'recommendation') return !!selectedTeamType;
    if (step === 'comparison') return !!selectedTeam;
    return false;
  };

  // Landing screen has its own layout
  if (step === 'landing') {
    return <LandingScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen gradient-surface">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => setStep('landing')}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg gradient-trust flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-display font-bold text-lg">ClusterMatch</span>
          </button>
          
          <StepIndicator currentStep={step} onStepClick={handleStepClick} />
          
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {step === 'city' && (
          <CitySelection 
            selectedCity={selectedCity} 
            onSelectCity={handleCitySelect} 
          />
        )}

        {step === 'recommendation' && selectedCity && (
          <TeamTypeRecommendation
            city={selectedCity}
            selectedType={selectedTeamType}
            onSelectType={handleTeamTypeSelect}
          />
        )}

        {step === 'comparison' && selectedCity && selectedTeamType && (
          <TeamComparison
            city={selectedCity}
            teamType={selectedTeamType}
            selectedTeam={selectedTeam}
            onSelectTeam={handleTeamSelect}
          />
        )}

        {step === 'action' && selectedTeam && (
          <ActionScreen
            team={selectedTeam}
            onAction={handleAction}
            onBack={handleBack}
          />
        )}
      </main>

      {/* Footer Navigation */}
      {step !== 'action' && (
        <footer className="fixed bottom-0 left-0 right-0 border-t bg-card/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={handleBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              variant={canProceed() ? 'warm' : 'subtle'}
              size="lg"
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2 min-w-[160px]"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </footer>
      )}

      {/* Spacer for fixed footer */}
      {step !== 'action' && <div className="h-24" />}
    </div>
  );
};

export default Index;
