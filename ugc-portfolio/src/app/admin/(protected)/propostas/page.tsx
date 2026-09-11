import { createClient } from "@/lib/supabase/server";
import { ProposalsTable } from "@/components/admin/ProposalsTable";
import type { Deal } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function PropostasPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("deals")
    .select("*")
    .not("proposal_sent_at", "is", null)
    .order("proposal_sent_at", { ascending: false });

  return (
    <div>
      <h1 className="text-xl font-bold text-ink-900">Propostas enviadas</h1>
      <p className="mb-5 text-sm text-ink-700/70">
        Marcas que já receberam uma proposta, com o status atual no funil.
      </p>
      <ProposalsTable deals={(data as Deal[]) ?? []} />
    </div>
  );
}
