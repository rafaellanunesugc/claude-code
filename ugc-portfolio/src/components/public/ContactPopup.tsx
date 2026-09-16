"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { logFormOpened, submitContactForm } from "@/lib/actions/public";
import type { Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "ugc_popup_shown";
const initialState = { status: "idle" as const };

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
    >
      {pending ? "..." : label}
    </button>
  );
}

export function ContactPopup({ t }: { t: Translations["popup"] }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const hasLoggedOpen = useRef(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage indisponível — mostra o popup mesmo assim.
    }

    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || hasLoggedOpen.current) return;
    hasLoggedOpen.current = true;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // segue sem persistir.
    }
    logFormOpened();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 text-ink-700 hover:text-ink-900"
        >
          ✕
        </button>

        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {t.eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-ink-900">
          {t.title} <em className="not-italic text-wine-700">{t.titleHighlight}</em>
        </h3>
        <p className="mt-1 text-sm text-ink-700">{t.subtitle}</p>

        {state.status === "success" ? (
          <p className="mt-6 text-sm font-medium text-green-600">
            {t.successMessage}
          </p>
        ) : (
          <form action={formAction} className="mt-5 space-y-3">
            <input
              name="name"
              placeholder={t.fields.name}
              required
              className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
            <input
              name="brand"
              placeholder={t.fields.brand}
              className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
            <input
              type="email"
              name="email"
              placeholder={t.fields.email}
              required
              className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
            <textarea
              name="message"
              placeholder={t.fields.message}
              required
              rows={3}
              className="w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
            <SubmitButton label={t.submit} />
          </form>
        )}
      </div>
    </div>
  );
}
