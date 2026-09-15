import { FEEDBACK_PLACEHOLDERS } from "@/lib/data/placeholders";
import { cn } from "@/lib/utils";

export function Feedbacks() {
  return (
    <section id="feedbacks" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
        Feedbacks
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        O que estão falando do meu trabalho
      </h2>
      <p className="mt-2 max-w-2xl text-ink-700">
        Espaço reservado para prints de resultado e depoimentos de marcas.
        (Placeholders — em breve com casos reais.)
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {FEEDBACK_PLACEHOLDERS.map((item, index) => (
          <div
            key={index}
            className="flex h-56 flex-col justify-between rounded-2xl border border-dashed border-ink-900/20 bg-white p-5"
          >
            <span
              className={cn(
                "w-fit rounded-full px-3 py-1 text-xs font-semibold",
                item.type === "resultado"
                  ? "bg-brand-100 text-brand-700"
                  : "bg-ink-900/10 text-ink-800"
              )}
            >
              {item.type === "resultado" ? "Print de resultado" : "Depoimento"}
            </span>
            <p className="text-sm text-ink-700">{item.caption}</p>
            <span className="text-xs text-ink-700/50">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
