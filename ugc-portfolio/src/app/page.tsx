import { PageContent } from "@/components/public/PageContent";
import { fetchPortfolioVideos } from "@/lib/data/fetch-portfolio-videos";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const videos = await fetchPortfolioVideos();

  return <PageContent videos={videos} />;
}
