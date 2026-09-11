"use client";

import { useState, useTransition } from "react";
import { updateDealStage } from "@/lib/actions/admin";
import { DEAL_STAGES } from "@/lib/data/placeholders";
import { DealCard } from "@/components/admin/DealCard";
import { DealFormModal } from "@/components/admin/DealFormModal";
import type { Deal, DealStage } from "@/lib/types";

export function KanbanBoard({ deals }: { deals: Deal[] }) {
  const [editingDeal, setEditingDeal] = useState<Deal | "new" | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  function handleDrop(stage: DealStage) {
    if (!draggingId) return;
    startTransition(() => {
      updateDealStage(draggingId, stage);
    });
    setDraggingId(null);
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-ink-900">Funil de marcas</h1>
          <p className="text-sm text-ink-700/70">
            Arraste os cards entre as colunas ou use o seletor de estágio.
          </p>
        </div>
        <button
          onClick={() => setEditingDeal("new")}
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          + Nova marca
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 overflow-x-auto sm:grid-cols-2 lg:grid-cols-5">
        {DEAL_STAGES.map((stage) => {
          const stageDeals = deals.filter((deal) => deal.stage === stage.key);
          return (
            <div
              key={stage.key}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => handleDrop(stage.key)}
              className="min-h-[220px] rounded-2xl bg-ink-900/[0.03] p-3"
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <h2 className="text-sm font-bold text-ink-900">{stage.label}</h2>
                <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-ink-700">
                  {stageDeals.length}
                </span>
              </div>
              <div className="space-y-3">
                {stageDeals.map((deal) => (
                  <DealCard
                    key={deal.id}
                    deal={deal}
                    onEdit={() => setEditingDeal(deal)}
                    onDragStart={setDraggingId}
                  />
                ))}
                {stageDeals.length === 0 && (
                  <p className="px-1 text-xs text-ink-700/40">
                    Nenhuma marca aqui ainda.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <DealFormModal deal={editingDeal} onClose={() => setEditingDeal(null)} />
    </div>
  );
}
