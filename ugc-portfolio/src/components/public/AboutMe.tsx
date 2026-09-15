import { ABOUT_ME_PARAGRAPHS } from "@/lib/data/placeholders";

export function AboutMe() {
  return (
    <section id="sobre" className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        Sobre mim
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        Muito além de uma creator.
      </h2>

      <div className="mt-6 space-y-4 text-ink-700">
        {ABOUT_ME_PARAGRAPHS.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <span className="rounded-full bg-wine-50 px-4 py-2 text-center text-sm font-semibold text-wine-700">
          Videomaker
        </span>
        <span className="rounded-full bg-wine-50 px-4 py-2 text-center text-sm font-semibold text-wine-700">
          UGC Creator
        </span>
        <span className="rounded-full bg-wine-50 px-4 py-2 text-center text-sm font-semibold text-wine-700">
          Influenciadora
        </span>
      </div>
    </section>
  );
}
