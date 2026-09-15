import { HERO_STATS, PROFILE_TOPICS, SOCIAL_HANDLES } from "@/lib/data/placeholders";

export function InfluencerSection() {
  const followers = HERO_STATS.find((stat) => stat.label === "seguidores");

  return (
    <section id="influenciadora" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        Como influenciadora
      </p>
      <h2 className="mt-2 max-w-2xl text-2xl font-bold text-ink-900 md:text-3xl">
        Converso de perto com o público feminino, todos os dias.
      </h2>
      <p className="mt-3 max-w-2xl text-ink-700">
        Minha audiência confia no que eu recomendo porque a relação é próxima
        e diária — não é publicidade genérica, é conversa de verdade sobre
        beleza, saúde e rotina.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm">
          Instagram · {SOCIAL_HANDLES.instagram}
        </span>
        <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-900 shadow-sm">
          TikTok · {SOCIAL_HANDLES.tiktok}
        </span>
        {followers && (
          <span className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
            {followers.value} seguidores
          </span>
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">
          O que você vai encontrar no meu perfil
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {PROFILE_TOPICS.map((topic) => (
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
