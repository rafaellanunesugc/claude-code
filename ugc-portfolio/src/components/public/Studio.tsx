import Image from "next/image";
import type { Translations } from "@/lib/i18n/translations";

export function Studio({ t }: { t: Translations["studio"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/portrait-2.jpg"
            alt="Rafa Nunes gravando"
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">{t.title}</h2>

          <div className="mt-6 space-y-5">
            {t.items.map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-ink-900">{item.title}</p>
                <p className="mt-1 text-sm text-ink-700/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
