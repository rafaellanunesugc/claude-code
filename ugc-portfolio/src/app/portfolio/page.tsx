import type { Metadata } from "next";
import { PageContent } from "@/components/public/PageContent";
import { fetchPortfolioVideos } from "@/lib/data/fetch-portfolio-videos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rafa Nunes | Portfólio UGC",
  description:
    "Portfólio de vídeos UGC e conteúdo de influenciadora da Rafa Nunes. +60 marcas atendidas. Solicite uma proposta para a sua campanha.",
  alternates: { canonical: "/portfolio" },
};

export default async function HomePage() {
  const videos = await fetchPortfolioVideos();

  return <PageContent videos={videos} />;
}
