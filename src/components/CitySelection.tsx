import { MapPin, Users, User, Search } from 'lucide-react';
import { City } from '@/types/platform';
import { cities, specializationLabels } from '@/data/cities';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

type CitySelectionProps = {
  selectedCity: City | null;
  onSelectCity: (city: City) => void;
};

export function CitySelection({ selectedCity, onSelectCity }: CitySelectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <ProgressBar currentStep="city" />

      {/* Helper Text */}
      <div className="text-center mb-8">
        <span className="section-label">Step 1 of 4</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
          Where is your startup based?
        </h2>
        <p className="helper-text max-w-lg mx-auto">
          We'll match you with verified hardware teams in your city. 
          Local teams mean easier collaboration, site visits, and manufacturing partnerships.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* City Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {filteredCities.map((city, index) => (
          <button
            key={city.id}
            onClick={() => onSelectCity(city)}
            className={cn(
              "city-card text-left animate-fade-in",
              selectedCity?.id === city.id && "selected"
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold text-lg">{city.name}</h3>
                <p className="text-sm text-muted-foreground">{city.region}</p>
              </div>
              <MapPin className={cn(
                "w-5 h-5 transition-colors",
                selectedCity?.id === city.id ? "text-primary" : "text-muted-foreground"
              )} />
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{city.clusterCount} teams</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{city.expertCount} experts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {city.specializations.slice(0, 3).map((spec) => (
                <span
                  key={spec}
                  className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                >
                  {specializationLabels[spec]}
                </span>
              ))}
            </div>

            {/* Selection Indicator */}
            {selectedCity?.id === city.id && (
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Empty State Fallback */}
      {filteredCities.length === 0 && (
        <div className="text-center py-12 border rounded-xl bg-muted/50 max-w-md mx-auto">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-display font-semibold text-lg mb-2">
            {searchQuery ? `No cities match "${searchQuery}"` : 'No cities available yet'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {searchQuery 
              ? 'Try searching for a different city or check the spelling.'
              : "We're expanding our network. Check back soon or request your city."
            }
          </p>
        </div>
      )}
    </div>
  );
}
