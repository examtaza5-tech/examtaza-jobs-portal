import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is ExamTaza.in?",
    a: "ExamTaza.in is an independent informational portal that publishes the latest government job notifications, admit cards, results, answer keys, syllabus and admission updates from across India in one place.",
  },
  {
    q: "How do I stay updated with latest jobs?",
    a: "You can bookmark our homepage and visit daily, or join our official WhatsApp and Telegram channels to receive instant alerts for every new job, admit card and result the moment we publish it.",
  },
  {
    q: "Are all notifications authentic?",
    a: "We collect information directly from official government sources and notifications. However, we always recommend verifying every detail on the respective official website before applying or making any decision.",
  },
  {
    q: "Is this service free?",
    a: "Yes. ExamTaza.in is 100% free for everyone. You do not need to register, subscribe or pay anything to access jobs, admit cards, results, syllabus or admission updates on our website.",
  },
];

export function FAQ() {
  return (
    <section className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-14 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-green)]">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-muted-foreground">Everything you need to know about ExamTaza.in</p>
        </div>
        <Accordion type="single" collapsible className="w-full rounded-xl border border-border bg-card divide-y divide-border shadow-sm">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-0 px-5">
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
