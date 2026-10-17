import type { Metadata } from "next";
import { PageContent } from "@/components/public/PageContent";
import { fetchPortfolioVideos } from "@/lib/data/fetch-portfolio-videos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rafa Nunes | Portfólio UGC",
};

export default async function HomePage() {
  const videos = await fetchPortfolioVideos();

  return <PageContent videos={videos} />;
}
