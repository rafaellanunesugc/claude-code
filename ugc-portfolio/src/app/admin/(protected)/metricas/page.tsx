import { createClient } from "@/lib/supabase/server";
import { StatCard } from "@/components/ui/StatCard";

export const dynamic = "force-dynamic";

export default async function MetricasPage() {
  const supabase = await createClient();

  const [{ count: opened }, { count: submitted }] = await Promise.all([
    supabase
      .from("contact_events")
      .select("*", { count: "exact", head: true })
      .eq("event_type", "form_opened"),
    supabase
      .from("contact_events")
      .select("*", { count: "exact", head: true })
      .eq("event_type", "form_submitted"),
  ]);

  const opens = opened ?? 0;
  const submits = submitted ?? 0;
  const conversionRate = opens > 0 ? Math.round((submits / opens) * 100) : 0;

  return (
    <div>
      <h1 className="text-xl font-bold text-ink-900">
        Métricas do formulário de contato
      </h1>
      <p className="mb-5 text-sm text-ink-700/70">
        Quantas vezes o formulário foi visto e quantas vezes foi enviado.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Formulário aberto" value={opens} />
        <StatCard label="Formulário enviado" value={submits} />
        <StatCard
          label="Taxa de conversão"
          value={`${conversionRate}%`}
          hint="Enviados ÷ abertos"
        />
      </div>
    </div>
  );
}
