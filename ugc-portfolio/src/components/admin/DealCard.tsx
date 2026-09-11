"use client";

import { useTransition } from "react";
import { updateDealStage } from "@/lib/actions/admin";
import { DEAL_STAGES } from "@/lib/data/placeholders";
import { formatCurrencyBRL, formatDateBR } from "@/lib/utils";
import type { Deal, DealStage } from "@/lib/types";

export function DealCard({
  deal,
  onEdit,
  onDragStart,
}: {
  deal: Deal;
  onEdit: () => void;
  onDragStart: (id: string) => void;
}) {
  const [isPending, startTransition] = useTransition();

  function handleStageChange(stage: DealStage) {
    startTransition(() => {
      updateDealStage(deal.id, stage);
    });
  }

  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", deal.id);
        onDragStart(deal.id);
      }}
      className="cursor-grab rounded-xl border border-ink-900/10 bg-white p-3.5 shadow-sm transition active:cursor-grabbing"
      style={{ opacity: isPending ? 0.6 : 1 }}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-ink-900">{deal.brand_name}</p>
        <button
          onClick={onEdit}
          className="text-xs font-medium text-brand-600 hover:underline"
        >
          Editar
        </button>
      </div>
      {deal.contact_info && (
        <p className="mt-1 text-xs text-ink-700/70">{deal.contact_info}</p>
      )}
      <div className="mt-2 flex items-center justify-between text-xs text-ink-700">
        <span>{formatCurrencyBRL(deal.value)}</span>
        <span>{formatDateBR(deal.deadline)}</span>
      </div>
      <select
        value={deal.stage}
        onChange={(event) => handleStageChange(event.target.value as DealStage)}
        className="mt-3 w-full rounded-lg border border-ink-900/10 bg-ink-900/[0.02] px-2 py-1.5 text-xs"
      >
        {DEAL_STAGES.map((stage) => (
          <option key={stage.key} value={stage.key}>
            {stage.label}
          </option>
        ))}
      </select>
    </div>
  );
}
