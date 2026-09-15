import { BRAND_LOGOS } from "@/lib/data/placeholders";

export function BrandLogos() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-brand-600">
        Marcas atendidas
      </p>
      <h2 className="mt-2 text-center text-2xl font-bold text-ink-900 md:text-3xl">
        Marcas que já confiaram
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink-700/70">
        Logos de exemplo — em breve com os logos reais das marcas parceiras.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {BRAND_LOGOS.map((brand) => (
          <div
            key={brand}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-900/10 bg-white text-center text-[11px] font-semibold text-ink-700/60 shadow-sm"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
