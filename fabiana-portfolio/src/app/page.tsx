import type { Metadata } from "next";
import { PageContent } from "@/components/public/PageContent";
import { fetchPortfolioVideos } from "@/lib/data/fetch-portfolio-videos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Fabiana Pizoni | Portfólio UGC",
  description:
    "Portfólio de vídeos UGC e conteúdo de influenciadora da Fabiana Pizoni. Solicite uma proposta para a sua campanha.",
};

export default async function HomePage() {
  const videos = await fetchPortfolioVideos();

  return <PageContent videos={videos} />;
}
