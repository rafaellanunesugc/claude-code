import { createClient } from "@/lib/supabase/server";
import { MessagesTable } from "@/components/admin/MessagesTable";
import type { ContactSubmission } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function MensagensPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-xl font-bold text-ink-900">Mensagens</h1>
      <p className="mb-5 text-sm text-ink-700/70">
        Pedidos de orçamento enviados pelo formulário de contato do site.
      </p>
      <MessagesTable submissions={(data as ContactSubmission[]) ?? []} />
    </div>
  );
}
