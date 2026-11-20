import type { Metadata } from "next";
import { PageContent } from "@/components/public/PageContent";
import { fetchPortfolioVideos } from "@/lib/data/fetch-portfolio-videos";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Portfólio UGC`,
  description: `Portfólio de vídeos UGC e conteúdo de influenciadora de ${SITE_NAME}. Solicite uma proposta para a sua campanha.`,
};

export default async function HomePage() {
  const videos = await fetchPortfolioVideos();

  return <PageContent videos={videos} />;
}
