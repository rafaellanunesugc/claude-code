import { createClient } from "@/lib/supabase/server";
import {
  PORTFOLIO_VIDEOS,
  type ContentCategory,
  type PortfolioVideo,
} from "@/lib/data/placeholders";

// Nome do bucket e das pastas exatamente como criados no Supabase Storage
// (o Storage do Supabase diferencia maiúsculas/minúsculas, e a API rejeita
// nomes de bucket com acento/maiúscula — por isso o bucket é "videos").
const BUCKET_NAME = "videos";
const CATEGORY_FOLDERS: Record<ContentCategory, string> = {
  influenciadora: "influenciadora",
  ugc: "UGC",
};

const GRADIENTS = [
  "from-brand-400 via-brand-600 to-ink-900",
  "from-ink-800 via-brand-700 to-brand-400",
  "from-brand-600 via-ink-800 to-ink-900",
  "from-brand-300 via-brand-500 to-ink-800",
];

const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".m4v"];

function stripExtensions(filename: string) {
  let name = filename;
  let ext = VIDEO_EXTENSIONS.find((e) => name.toLowerCase().endsWith(e));
  while (ext) {
    name = name.slice(0, -ext.length);
    ext = VIDEO_EXTENSIONS.find((e) => name.toLowerCase().endsWith(e));
  }
  return name;
}

function prettify(segment: string) {
  return segment.replace(/[-_]+/g, " ").trim();
}

// Convenção de nome de arquivo: "formato-titulo.mp4" ou, quando o
// formato tem mais de uma palavra, "formato-com-varias-palavras_titulo.mp4"
// (usa "_" pra separar formato de título nesse caso). Sem separador,
// o nome inteiro vira o título e não tem formato.
function parseFilename(filename: string): { format?: string; title: string } {
  const base = stripExtensions(filename);

  if (base.includes("_")) {
    const index = base.indexOf("_");
    return {
      format: prettify(base.slice(0, index)),
      title: prettify(base.slice(index + 1)) || prettify(base),
    };
  }

  if (base.includes("-")) {
    const index = base.indexOf("-");
    return {
      format: prettify(base.slice(0, index)),
      title: prettify(base.slice(index + 1)) || prettify(base),
    };
  }

  return { title: prettify(base) };
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

  if (error || !data) {
    return [
      {
        id: `debug-error-${category}`,
        category,
        videoUrl: "",
        gradient: GRADIENTS[0],
        title: `DEBUG erro (${folder}): ${error?.message ?? "sem dados"}`,
        format: "debug",
      },
    ];
  }

  if (data.length === 0) {
    return [
      {
        id: `debug-empty-${category}`,
        category,
        videoUrl: "",
        gradient: GRADIENTS[0],
        title: `DEBUG: pasta "${folder}" está vazia pro Supabase`,
        format: "debug",
      },
    ];
  }

  return data
    .filter((file) =>
      VIDEO_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))
    )
    .map((file, index) => {
      const path = `${folder}/${file.name}`;
      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(path);
      const { format, title } = parseFilename(file.name);

      return {
        id: `${category}-${file.name}`,
        category,
        videoUrl: publicUrlData.publicUrl,
        gradient: GRADIENTS[index % GRADIENTS.length],
        title,
        format,
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
  } catch (err) {
    return [
      {
        id: "debug-error-catch",
        category: "ugc" as ContentCategory,
        videoUrl: "",
        gradient: GRADIENTS[0],
        title: `DEBUG exceção: ${err instanceof Error ? err.message : String(err)}`,
        format: "debug",
      },
    ];
  }
}
