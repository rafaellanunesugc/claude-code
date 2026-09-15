import { CONTENT_FORMATS } from "@/lib/data/placeholders";

export function UGCSection() {
  return (
    <section id="ugc" className="bg-ink-900/[0.03] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Como UGC Creator
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold text-ink-900 md:text-3xl">
          Conteúdo feito pra vender, gravado com cara de gente real.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-700">
          Gosto de explorar diferentes formatos e ângulos, desde tutoriais e
          demonstrações até storytelling, reviews, conteúdos de rotina e
          criativos para anúncios.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {CONTENT_FORMATS.map((format) => (
            <span
              key={format}
              className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700"
            >
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
