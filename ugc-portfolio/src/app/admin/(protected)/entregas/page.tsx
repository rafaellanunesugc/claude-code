import { createClient } from "@/lib/supabase/server";
import { DeliveriesTable } from "@/components/admin/DeliveriesTable";
import type { Deal } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function EntregasPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("deals")
    .select("*")
    .not("delivery_date", "is", null)
    .order("delivery_date", { ascending: false });

  return (
    <div>
      <h1 className="text-xl font-bold text-ink-900">Entregas</h1>
      <p className="mb-5 text-sm text-ink-700/70">
        Trabalhos com data de entrega registrada.
      </p>
      <DeliveriesTable deals={(data as Deal[]) ?? []} />
    </div>
  );
}
