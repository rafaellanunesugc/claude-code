"use client";

import { useTransition } from "react";
import { createDeal, deleteDeal, updateDeal } from "@/lib/actions/admin";
import type { Deal } from "@/lib/types";

export function DealFormModal({
  deal,
  onClose,
}: {
  deal: Deal | "new" | null;
  onClose: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  if (!deal) return null;

  const isNew = deal === "new";
  const current = isNew ? null : deal;

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      if (isNew) {
        await createDeal(formData);
      } else if (current) {
        await updateDeal(current.id, formData);
      }
      onClose();
    });
  }

  function handleDelete() {
    if (!current) return;
    startTransition(async () => {
      await deleteDeal(current.id);
      onClose();
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-ink-900">
            {isNew ? "Nova marca no funil" : "Editar marca"}
          </h3>
          <button onClick={onClose} className="text-ink-700 hover:text-ink-900">
            ✕
          </button>
        </div>

        <form action={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-medium text-ink-900">
              Nome da marca
            </label>
            <input
              name="brand_name"
              required
              defaultValue={current?.brand_name ?? ""}
              placeholder="Nome da Marca"
              className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-900">Contato</label>
            <input
              name="contact_info"
              defaultValue={current?.contact_info ?? ""}
              placeholder="Nome, email ou whatsapp do contato"
              className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-ink-900">
                Valor (R$)
              </label>
              <input
                type="number"
                min={0}
                step="0.01"
                name="value"
                defaultValue={current?.value ?? 0}
                className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-ink-900">Prazo</label>
              <input
                type="date"
                name="deadline"
                defaultValue={current?.deadline ?? ""}
                className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
            </div>
          </div>

          {!isNew && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-ink-900">
                  Proposta enviada em
                </label>
                <input
                  type="date"
                  name="proposal_sent_at"
                  defaultValue={current?.proposal_sent_at ?? ""}
                  className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ink-900">
                  Data de entrega
                </label>
                <input
                  type="date"
                  name="delivery_date"
                  defaultValue={current?.delivery_date ?? ""}
                  className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-ink-900">
              Observações
            </label>
            <textarea
              name="notes"
              rows={2}
              defaultValue={current?.notes ?? ""}
              className="mt-1 w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            {!isNew ? (
              <button
                type="button"
                onClick={handleDelete}
                disabled={isPending}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                Excluir
              </button>
            ) : (
              <span />
            )}
            <button
              type="submit"
              disabled={isPending}
              className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {isPending ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
