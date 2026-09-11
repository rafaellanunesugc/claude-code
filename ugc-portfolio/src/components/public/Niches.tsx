const NICHES = [
  {
    title: "Saúde e Bem-estar",
    forWho: "Suplementos, produtos naturais, fitness, sono, rotina saudável.",
    whatIRecord:
      "Rotina de uso do produto, antes/depois de hábito, review honesto, unboxing.",
  },
  {
    title: "Beleza",
    forWho: "Skincare, maquiagem, cabelo natural, cuidados pessoais.",
    whatIRecord:
      "Get ready with me, resenha de produto, passo a passo de aplicação, first impressions.",
  },
];

export function Niches() {
  return (
    <section id="nichos" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
        Pra que marcas eu sirvo
      </h2>
      <p className="mt-2 max-w-2xl text-ink-700">
        Trabalho com dois nichos principais — foco em autenticidade e
        conteúdo que converte, não só que parece bonito.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {NICHES.map((niche) => (
          <div
            key={niche.title}
            className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft"
          >
            <h3 className="text-lg font-bold text-brand-700">{niche.title}</h3>
            <p className="mt-3 text-sm text-ink-700">
              <span className="font-semibold text-ink-900">Pra quem: </span>
              {niche.forWho}
            </p>
            <p className="mt-2 text-sm text-ink-700">
              <span className="font-semibold text-ink-900">O que gravo: </span>
              {niche.whatIRecord}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
