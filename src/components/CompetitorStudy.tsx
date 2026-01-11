import { ExternalLink, ThumbsUp, ThumbsDown, ArrowRight, Lightbulb } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Competitor = {
  name: string;
  website: string;
  description: string;
  firstCTA: string;
  trustDesign: string;
  choiceReduction: string;
  steal: string;
  avoid: string;
};

const competitors: Competitor[] = [
  {
    name: 'Toptal',
    website: 'toptal.com',
    description: 'Elite freelancer network for top 3% of talent',
    firstCTA: '"Hire Top Talent" — immediate action with quality promise',
    trustDesign: 'Heavy emphasis on "top 3%" exclusivity, rigorous vetting process highlighted, enterprise client logos (Microsoft, Airbnb)',
    choiceReduction: 'No browsing — you describe needs, they match you with 2-3 candidates',
    steal: 'Concierge matching model — removes decision anxiety by curating options',
    avoid: 'Opaque pricing until deep in the funnel — creates friction and distrust',
  },
  {
    name: 'Upwork',
    website: 'upwork.com',
    description: 'Largest freelance marketplace with millions of providers',
    firstCTA: '"Post a Job" — focuses on employer intent',
    trustDesign: 'Star ratings, job success scores, earnings badges, verified payment history',
    choiceReduction: 'AI "Talent Scout" suggests matches, but still shows hundreds of options',
    steal: 'Granular trust signals (response time, rehire rate, skill tests) — builds confidence',
    avoid: 'Choice overload with endless scrolling — paralyzes decision-making',
  },
  {
    name: 'Gigster',
    website: 'gigster.com',
    description: 'Managed teams for software development projects',
    firstCTA: '"Get Started" with project type selection — intent qualification',
    trustDesign: 'Project-based pricing shown early, team profiles with past work, satisfaction guarantee',
    choiceReduction: 'Users don\'t choose individuals — they get an assembled team',
    steal: 'Team assembly abstraction — "we build the team, you focus on product"',
    avoid: 'Complex multi-step forms before seeing any options — creates abandonment',
  },
];

export function CompetitorStudy() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Market Research</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Competitor Analysis
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We studied leading talent platforms to understand what builds trust 
              and what creates friction in high-stakes hiring decisions.
            </p>
          </div>

          {/* Competitor Cards */}
          <Accordion type="single" collapsible className="space-y-4">
            {competitors.map((competitor, index) => (
              <AccordionItem 
                key={competitor.name} 
                value={competitor.name}
                className="border rounded-xl bg-card px-6 data-[state=open]:ring-2 data-[state=open]:ring-primary/20"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-display font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">{competitor.name}</h3>
                      <p className="text-sm text-muted-foreground">{competitor.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">First CTA</p>
                        <p className="text-sm">{competitor.firstCTA}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Trust Design</p>
                        <p className="text-sm">{competitor.trustDesign}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Choice Reduction</p>
                        <p className="text-sm">{competitor.choiceReduction}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                        <div className="flex items-center gap-2 mb-2">
                          <ThumbsUp className="w-4 h-4 text-success" />
                          <p className="text-xs font-semibold text-success">Pattern to Steal</p>
                        </div>
                        <p className="text-sm">{competitor.steal}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                        <div className="flex items-center gap-2 mb-2">
                          <ThumbsDown className="w-4 h-4 text-destructive" />
                          <p className="text-xs font-semibold text-destructive">Pattern to Avoid</p>
                        </div>
                        <p className="text-sm">{competitor.avoid}</p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={`https://${competitor.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-4"
                  >
                    Visit {competitor.website}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Key Insights */}
          <div className="mt-12 p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Key Takeaways for ClusterMatch</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Curate aggressively</strong> — Max 3 options prevents decision paralysis (Toptal model)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Show trust early</strong> — Verification, past work, and specialization match before pricing (Upwork signals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Abstract complexity</strong> — Assemble teams for users, don't make them build from scratch (Gigster model)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Low-commitment CTAs</strong> — "Request proposal" not "Hire now" reduces friction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
