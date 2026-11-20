import { SOCIAL_LINKS } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

const instagramLink = SOCIAL_LINKS.find((link) => link.icon === "instagram");
const tiktokLink = SOCIAL_LINKS.find((link) => link.icon === "tiktok");

export function InfluencerSection({
  t,
  followers,
}: {
  t: Translations["influencer"];
  followers: string;
}) {
  return (
    <section id="influenciadora" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold text-ink-900 md:text-3xl">
          {t.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-700">{t.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {instagramLink && (
            <a
              href={instagramLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
            >
              Instagram · {instagramLink.handle}
            </a>
          )}
          {tiktokLink && (
            <a
              href={tiktokLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
            >
              TikTok · {tiktokLink.handle}
            </a>
          )}
          <span className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
            {followers} {t.followersSuffix}
          </span>
        </div>

        <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink-900">
            {t.profileTopicsTitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-olive-50 px-3 py-1.5 text-sm text-ink-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
