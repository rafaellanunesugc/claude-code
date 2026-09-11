"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { logFormOpened, submitContactForm } from "@/lib/actions/public";
import { BUDGET_RANGES } from "@/lib/data/placeholders";

const initialState = { status: "idle" as const };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
    >
      {pending ? "Enviando..." : "Enviar mensagem"}
    </button>
  );
}

export function ContactForm() {
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
    <section id="contato" className="mx-auto max-w-3xl px-5 py-16">
      <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
        Vamos trabalhar juntas?
      </h2>
      <p className="mt-2 text-ink-700">
        Preencha os dados abaixo e te retorno com uma proposta.
      </p>

      <form
        ref={formRef}
        action={formAction}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-900">Seu nome</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-900">Marca</label>
          <input
            name="brand"
            className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-900">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-900">WhatsApp</label>
          <input
            name="whatsapp"
            placeholder="(00) 00000-0000"
            className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink-900">
            Faixa de orçamento
          </label>
          <select
            name="budget_range"
            defaultValue=""
            className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          >
            <option value="" disabled>
              Selecione uma faixa
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink-900">Mensagem</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Conte um pouco sobre a campanha, produto e prazo desejado."
            className="mt-1 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>

        <div className="sm:col-span-2 flex items-center gap-4">
          <SubmitButton />
          {state.status === "success" && (
            <p className="text-sm font-medium text-green-600">{state.message}</p>
          )}
          {state.status === "error" && (
            <p className="text-sm font-medium text-red-600">{state.message}</p>
          )}
        </div>
      </form>
    </section>
  );
}
