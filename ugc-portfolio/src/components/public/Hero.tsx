import { FEATURED_VIDEOS } from "@/lib/data/placeholders";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-6xl px-5 pt-12 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-600 text-2xl font-bold text-white">
            {/* Placeholder de foto — trocar por foto real */}
            RA
          </div>
          <Badge>Saúde &amp; Bem-estar · Beleza</Badge>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
            Rafa, UGC Creator
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-700">
            Crio conteúdo autêntico em vídeo para marcas de saúde, bem-estar e
            beleza — do roteiro à edição, pronto para orgânico ou anúncio.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Quero fazer um orçamento
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900/5"
            >
              Ver portfólio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {FEATURED_VIDEOS.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
