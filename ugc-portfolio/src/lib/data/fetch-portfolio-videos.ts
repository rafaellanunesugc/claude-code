import { createClient } from "@/lib/supabase/server";
import {
  PORTFOLIO_VIDEOS,
  type ContentCategory,
  type PortfolioVideo,
} from "@/lib/data/placeholders";

// Nome do bucket e das pastas exatamente como criados no Supabase Storage
// (o Storage do Supabase diferencia maiúsculas/minúsculas e acentos).
const BUCKET_NAME = "Vídeos";
const CATEGORY_FOLDERS: Record<ContentCategory, string> = {
  influenciadora: "Influenciadora",
  ugc: "UGC",
};

const GRADIENTS = [
  "from-brand-400 via-brand-600 to-ink-900",
  "from-ink-800 via-brand-700 to-brand-400",
  "from-brand-600 via-ink-800 to-ink-900",
  "from-brand-300 via-brand-500 to-ink-800",
];

const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".m4v"];

function titleFromFilename(filename: string) {
  let name = filename;
  // Remove extensões repetidas no fim (ex: "video.mp4.mov").
  let ext = VIDEO_EXTENSIONS.find((e) => name.toLowerCase().endsWith(e));
  while (ext) {
    name = name.slice(0, -ext.length);
    ext = VIDEO_EXTENSIONS.find((e) => name.toLowerCase().endsWith(e));
  }
  return name.replace(/[-_]+/g, " ").trim();
}

type SupabaseClient = Awaited<ReturnType<typeof createClient>>;

async function listCategory(
  supabase: SupabaseClient,
  category: ContentCategory
): Promise<PortfolioVideo[]> {
  const folder = CATEGORY_FOLDERS[category];
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .list(folder, { sortBy: { column: "created_at", order: "desc" } });

  if (error || !data) return [];

  return data
    .filter((file) =>
      VIDEO_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))
    )
    .map((file, index) => {
      const path = `${folder}/${file.name}`;
      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(path);

      return {
        id: `${category}-${file.name}`,
        category,
        videoUrl: publicUrlData.publicUrl,
        gradient: GRADIENTS[index % GRADIENTS.length],
        title: titleFromFilename(file.name),
      };
    });
}

// Busca os vídeos reais do Supabase Storage; se o bucket ainda não
// existir ou estiver vazio, usa os vídeos de exemplo como fallback.
export async function fetchPortfolioVideos(): Promise<PortfolioVideo[]> {
  try {
    const supabase = await createClient();
    const results = await Promise.all(
      (Object.keys(CATEGORY_FOLDERS) as ContentCategory[]).map((category) =>
        listCategory(supabase, category)
      )
    );
    const combined = results.flat();
    return combined.length > 0 ? combined : PORTFOLIO_VIDEOS;
  } catch {
    return PORTFOLIO_VIDEOS;
  }
}
