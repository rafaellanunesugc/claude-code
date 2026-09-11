import { DELIVERY_INFO, HIRE_FORMATS } from "@/lib/data/placeholders";

export function HowToHire() {
  return (
    <section id="contratar" className="bg-ink-900/[0.03] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
          Como me contratar
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {HIRE_FORMATS.map((format) => (
            <div
              key={format.title}
              className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft"
            >
              <h3 className="font-bold text-ink-900">{format.title}</h3>
              <p className="mt-2 text-sm text-ink-700">{format.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase text-ink-700/60">
              Prazo padrão
            </p>
            <p className="mt-1 text-sm text-ink-900">{DELIVERY_INFO.prazoPadrao}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-ink-700/60">
              Prazo expresso
            </p>
            <p className="mt-1 text-sm text-ink-900">{DELIVERY_INFO.prazoExpress}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-ink-700/60">
              Nota fiscal
            </p>
            <p className="mt-1 text-sm text-ink-900">{DELIVERY_INFO.emiteNota}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
