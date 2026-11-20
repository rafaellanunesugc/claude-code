import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ({ t }: { t: Translations["faq"] }) {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <SectionHeading number="09" eyebrow={t.eyebrow} title={t.title} />
        </div>
        <div className="border-t border-ink-900/15 md:col-span-7 md:col-start-6">
          {t.items.map((item) => (
            <details key={item.question} className="group border-b border-ink-900/15 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-ink-900 md:text-2xl">
                {item.question}
                <span className="relative h-4 w-4 flex-none" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-ink-900" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-ink-900 transition group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
