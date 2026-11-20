import Image from "next/image";
import { SITE_NAME } from "@/lib/site";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Studio({ t }: { t: Translations["studio"] }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:items-center md:px-10 md:py-28">
        <div className="relative md:col-span-5">
          <div className="absolute left-4 top-4 h-full w-full border border-wine-300" aria-hidden />
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/portrait-2.jpg"
              alt={`${SITE_NAME} gravando`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <SectionHeading number="02" eyebrow={t.eyebrow} title={t.title} />

          <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
            {t.items.map((item, index) => (
              <div key={item.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-lg italic text-wine-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xl text-ink-900">{item.title}</p>
                  <p className="mt-2 leading-relaxed text-ink-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-8 grid gap-x-8 gap-y-3 text-sm text-ink-900 sm:grid-cols-2">
            {t.gear.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-px w-4 bg-wine-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
