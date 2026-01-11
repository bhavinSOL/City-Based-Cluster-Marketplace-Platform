import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are teams vetted?",
    answer: "Every team undergoes a 3-step verification: identity check (government ID), project history validation (we contact past clients), and technical assessment (portfolio review by our hardware experts). Certified teams also have their facilities audited."
  },
  {
    question: "What's the difference between a Cluster and an Expert?",
    answer: "A Cluster is a pre-formed team of 3-8 specialists who work together regularly — they handle coordination internally. An Expert is an individual contractor with deep specialization in one area. Choose Cluster for end-to-end projects, Expert for specific skill gaps."
  },
  {
    question: "Do I need to pay to see recommendations?",
    answer: "No. The entire matching process is free. You only pay when you decide to engage a team — and pricing is discussed directly with them. We charge teams a success fee, not founders."
  },
  {
    question: "Can I meet teams before committing?",
    answer: "Absolutely. Every team offers a free discovery call (30 min) where you can assess fit, ask questions, and understand their process. There's no commitment until you sign a statement of work."
  },
  {
    question: "What if no teams match my needs?",
    answer: "If our current network doesn't have a great match, we'll tell you honestly. You can request to be notified when new teams in your city or specialization become available."
  },
  {
    question: "How is pricing handled?",
    answer: "We show cost ranges upfront (e.g., ₹5L-10L for a project). Exact pricing is provided in the proposal after teams understand your specific requirements. This prevents lowball quotes and ensures realistic expectations."
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label">Common Questions</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3">
            Before you start
          </h2>
          <p className="helper-text max-w-lg mx-auto">
            Quick answers to help you understand how this works.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-sm hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}