"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function logFormOpened() {
  const supabase = await createClient();
  await supabase.from("contact_events").insert({ event_type: "form_opened" });
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const brand = String(formData.get("brand") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const whatsapp = String(formData.get("whatsapp") || "").trim();
  const budgetRange = String(formData.get("budget_range") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Preencha ao menos nome, email e mensagem.",
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    brand: brand || null,
    email,
    whatsapp: whatsapp || null,
    budget_range: budgetRange || null,
    message,
  });

  if (error) {
    return {
      status: "error",
      message: "Não foi possível enviar agora. Tente novamente em instantes.",
    };
  }

  await supabase.from("contact_events").insert({ event_type: "form_submitted" });

  return { status: "success", message: "Recebi sua mensagem! Retorno em breve." };
}
