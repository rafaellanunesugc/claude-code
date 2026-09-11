import { formatCurrencyBRL, formatDateBR } from "@/lib/utils";
import type { Deal } from "@/lib/types";

export function DeliveriesTable({ deals }: { deals: Deal[] }) {
  if (deals.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-ink-900/20 bg-white p-6 text-sm text-ink-700/60">
        Nenhuma entrega registrada ainda.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-900/10 bg-white shadow-soft">
      <table className="w-full text-left text-sm">
        <thead className="bg-ink-900/[0.03] text-xs uppercase text-ink-700/60">
          <tr>
            <th className="px-4 py-3">Marca</th>
            <th className="px-4 py-3">Valor</th>
            <th className="px-4 py-3">Data de entrega</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="border-t border-ink-900/5">
              <td className="px-4 py-3 font-medium text-ink-900">
                {deal.brand_name}
              </td>
              <td className="px-4 py-3 text-ink-700">
                {formatCurrencyBRL(deal.value)}
              </td>
              <td className="px-4 py-3 text-ink-700">
                {formatDateBR(deal.delivery_date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
