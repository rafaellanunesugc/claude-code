import { SOCIAL_HANDLES } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { PercentBar } from "@/components/ui/PercentBar";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Metrics = Translations["influencer"]["metrics"];

function PlatformPanel({
  data,
  t,
  handle,
  location,
}: {
  data: Metrics["instagram"] | Metrics["tiktok"];
  t: Metrics;
  handle: string;
  location?: { brazil: number; cities: string[] };
}) {
  return (
    <div className="border border-ink-900/15 bg-paper p-6 md:p-8">
      <div className="flex items-baseline justify-between gap-4 border-b border-ink-900/10 pb-4">
        <h3 className="font-display text-2xl text-ink-900">
          {data.heading} <span className="text-base italic text-ink-700/60">{handle}</span>
        </h3>
        <span className="text-[10px] uppercase tracking-[0.2em] text-ink-700/60">{t.periodLabel}</span>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
        {data.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-700/60">{stat.label}</dt>
            <dd className="mt-1 font-display text-2xl text-ink-900">{stat.value}</dd>
          </div>
        ))}
      </dl>

      {"topFormats" in data && <p className="mt-5 text-sm italic text-ink-700">{data.topFormats}</p>}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-700/60">{t.genderLabel}</p>
          {data.gender.map((item) => (
            <PercentBar key={item.label} label={item.label} value={item.value} colorClass="bg-wine-600" />
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-700/60">{t.ageLabel}</p>
          {data.age.map((item) => (
            <PercentBar key={item.label} label={item.label} value={item.value} colorClass="bg-brand-600" />
          ))}
        </div>
      </div>

      {location && (
        <div className="mt-8 space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-700/60">{t.locationLabel}</p>
          <PercentBar label="Brasil" value={location.brazil} colorClass="bg-olive-600" />
          <p className="pt-2 text-sm text-ink-700">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-700/60">{t.citiesLabel}: </span>
            {location.cities.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export function InfluencerSection({
  t,
  followers,
}: {
  t: Translations["influencer"];
  followers: string;
}) {
  return (
    <section id="influenciadora" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading number="05" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:text-right">
            <p className="font-display text-6xl text-wine-700">{followers}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-ink-700">{t.followersSuffix}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <PlatformPanel
            data={t.metrics.instagram}
            t={t.metrics}
            handle={SOCIAL_HANDLES.instagram}
            location={t.metrics.instagram.location}
          />
          <PlatformPanel data={t.metrics.tiktok} t={t.metrics} handle={SOCIAL_HANDLES.tiktok} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-900/15 pt-8 md:flex-row md:items-baseline md:gap-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink-700">{t.profileTopicsTitle}</p>
          <p className="font-display text-xl italic text-ink-900 md:text-2xl">{t.topics.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
