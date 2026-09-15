import { DELIVERY_INFO, LOCAL_SERVICE_CITIES, WORK_FORMATS } from "@/lib/data/placeholders";

export function WorkWithMe() {
  return (
    <section id="trabalhar-comigo" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        Como podemos trabalhar juntos
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        {WORK_FORMATS.length} formas de trabalhar comigo
      </h2>
      <p className="mt-2 max-w-2xl text-ink-700">
        Atendimento presencial em {LOCAL_SERVICE_CITIES.join(" e ")} — datas a
        combinar conforme disponibilidade na região.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORK_FORMATS.map((format) => (
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
    </section>
  );
}
