import { SOCIAL_HANDLES } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { PercentBar } from "@/components/ui/PercentBar";

type PlatformMetrics = Translations["influencer"]["metrics"]["instagram"];

function PlatformCard({
  data,
  t,
  location,
}: {
  data: PlatformMetrics | Translations["influencer"]["metrics"]["tiktok"];
  t: Translations["influencer"]["metrics"];
  location?: { brazil: number; cities: string[] };
}) {
  const ageColors = ["bg-wine-300", "bg-wine-500", "bg-wine-700"];

  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-bold text-ink-900">{data.heading}</h3>
        <span className="text-xs text-ink-700/60">{t.periodLabel}</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {data.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-cream p-3">
            <p className="text-lg font-extrabold text-ink-900">{stat.value}</p>
            <p className="text-xs text-ink-700/70">{stat.label}</p>
          </div>
        ))}
      </div>

      {"topFormats" in data && (
        <p className="mt-3 text-xs text-ink-700/70">{data.topFormats}</p>
      )}

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-ink-700/60">
            {t.genderLabel}
          </p>
          <div className="space-y-2">
            {data.gender.map((item, index) => (
              <PercentBar
                key={item.label}
                label={item.label}
                value={item.value}
                colorClass={index === 0 ? "bg-brand-600" : "bg-wine-400"}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-ink-700/60">
            {t.ageLabel}
          </p>
          <div className="space-y-2">
            {data.age.map((item, index) => (
              <PercentBar
                key={item.label}
                label={item.label}
                value={item.value}
                colorClass={ageColors[index % ageColors.length]}
              />
            ))}
          </div>
        </div>
      </div>

      {location && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase text-ink-700/60">
            {t.locationLabel}
          </p>
          <PercentBar label="Brasil" value={location.brazil} colorClass="bg-olive-500" />
          <p className="mt-3 text-xs font-semibold uppercase text-ink-700/60">
            {t.citiesLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {location.cities.map((city) => (
              <span
                key={city}
                className="rounded-full bg-olive-100 px-3 py-1 text-xs text-olive-800"
              >
                {city}
              </span>
            ))}
          </div>
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
    <section id="influenciadora" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        {t.eyebrow}
      </p>
      <h2 className="mt-2 max-w-2xl text-2xl font-bold text-ink-900 md:text-3xl">
        {t.title}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-700">{t.subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm">
          Instagram · {SOCIAL_HANDLES.instagram}
        </span>
        <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm">
          TikTok · {SOCIAL_HANDLES.tiktok}
        </span>
        <span className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
          {followers} {t.followersSuffix}
        </span>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <PlatformCard data={t.metrics.instagram} t={t.metrics} location={t.metrics.instagram.location} />
        <PlatformCard data={t.metrics.tiktok} t={t.metrics} />
      </div>

      <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">
          {t.profileTopicsTitle}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-olive-100 px-3 py-1.5 text-sm text-olive-800"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
