"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { logFormOpened, submitContactForm } from "@/lib/actions/public";
import { BUDGET_RANGES, SOCIAL_LINKS } from "@/lib/data/placeholders";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Translations } from "@/lib/i18n/translations";

const initialState = { status: "idle" as const };

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

export function ContactForm({ t }: { t: Translations["contact"] }) {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const hasLoggedOpen = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (hasLoggedOpen.current) return;
    if (typeof window === "undefined") return;

    const alreadyLogged = window.sessionStorage.getItem("ugc_form_opened");
    if (alreadyLogged) return;

    hasLoggedOpen.current = true;
    window.sessionStorage.setItem("ugc_form_opened", "1");
    logFormOpened();
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">{t.title}</h2>
          <p className="mt-2 text-ink-700">{t.subtitle}</p>

          <div className="mt-6 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br from-blush-300 to-wine-600">
            {/* Placeholder de foto — trocar por foto real */}
          </div>

          <div className="mt-6 space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-ink-900/10 bg-white px-4 py-2.5 text-sm text-ink-900 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                <SocialIcon name={link.icon} className="h-5 w-5 flex-none" />
                <span className="font-medium">{link.label}</span>
                <span className="ml-auto text-ink-700/60">{link.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          action={formAction}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-ink-900">
              {t.fields.name}
            </label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-ink-900">
              {t.fields.brand}
            </label>
            <input
              name="brand"
              className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-ink-900">
              {t.fields.email}
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-ink-900">
              {t.fields.whatsapp}
            </label>
            <input
              name="whatsapp"
              placeholder="(00) 00000-0000"
              className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-ink-900">
              {t.fields.budget}
            </label>
            <select
              name="budget_range"
              defaultValue=""
              className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            >
              <option value="" disabled>
                {t.fields.budgetPlaceholder}
              </option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-ink-900">
              {t.fields.message}
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={t.fields.messagePlaceholder}
              className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>

          <div className="sm:col-span-2 flex items-center gap-4">
            <SubmitButton label={t.submit} pendingLabel={t.submitting} />
            {state.status === "success" && (
              <p className="text-sm font-medium text-green-600">
                {t.successMessage}
              </p>
            )}
            {state.status === "error" && (
              <p className="text-sm font-medium text-red-600">
                {state.reason === "validation" ? t.validationError : t.submitError}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
