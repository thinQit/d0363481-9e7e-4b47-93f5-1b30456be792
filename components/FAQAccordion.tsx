'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQAccordionProps {
  faqs?: { q: string; a: string }[]
}

export default function FAQAccordion({
  faqs = [
    { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but appointments are recommended for peak hours.' },
    { q: 'How long does gel coating last?', a: 'Typically 2–3 weeks depending on daily wear and aftercare.' },
    { q: 'Do you use sanitized tools?', a: 'Yes. We follow strict sanitation standards for every client and service.' }
  ]
}: Partial<FAQAccordionProps>) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 md:px-6">
      <h2 className="mb-6 font-[DM Sans] text-3xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={'item-' + i}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
