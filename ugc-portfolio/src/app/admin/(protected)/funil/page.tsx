import { createClient } from "@/lib/supabase/server";
import { KanbanBoard } from "@/components/admin/KanbanBoard";
import type { Deal } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function FunilPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("deals")
    .select("*")
    .order("created_at", { ascending: false });

  return <KanbanBoard deals={(data as Deal[]) ?? []} />;
}
