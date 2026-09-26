import {
  PORTFOLIO_VIDEOS,
  REAL_PORTFOLIO_VIDEOS,
  type PortfolioVideo,
} from "@/lib/data/placeholders";

// Vídeos reais ficam hospedados como "não listados" no YouTube (ver
// REAL_PORTFOLIO_VIDEOS em placeholders.ts). Enquanto não houver nenhum
// vídeo real cadastrado, mostra os vídeos de exemplo no lugar.
export async function fetchPortfolioVideos(): Promise<PortfolioVideo[]> {
  return REAL_PORTFOLIO_VIDEOS.length > 0 ? REAL_PORTFOLIO_VIDEOS : PORTFOLIO_VIDEOS;
}
