import { FAQ_ITEMS } from "@/lib/data/placeholders";

export function FAQ() {
  return (
    <section id="faq" className="bg-ink-900/[0.03] py-16">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Dúvidas frequentes
        </p>
        <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
          Perguntas frequentes
        </h2>

        <div className="mt-6 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink-900">
                {item.question}
                <span className="ml-4 text-brand-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
