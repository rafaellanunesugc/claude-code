"use server";

import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  reason?: "validation" | "submit";
};

const NOTIFICATION_EMAIL = "rafaellanunes.contato@gmail.com";

async function notifyNewSubmission(data: {
  name: string;
  brand: string;
  email: string;
  whatsapp: string;
  budgetRange: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY) return;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfólio Rafa Nunes <onboarding@resend.dev>",
      to: NOTIFICATION_EMAIL,
      replyTo: data.email || undefined,
      subject: `Novo pedido de orçamento — ${data.brand || data.name}`,
      text: [
        `Nome: ${data.name}`,
        `Marca: ${data.brand || "-"}`,
        `Email: ${data.email}`,
        `WhatsApp: ${data.whatsapp || "-"}`,
        `Faixa de orçamento: ${data.budgetRange || "-"}`,
        "",
        "Mensagem:",
        data.message || "-",
      ].join("\n"),
    });
  } catch {
    // Falha no envio do email não deve impedir o envio do formulário —
    // a mensagem já foi salva no banco e aparece no painel admin.
  }
}

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
    return { status: "error", reason: "validation" };
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
    return { status: "error", reason: "submit" };
  }

  await supabase.from("contact_events").insert({ event_type: "form_submitted" });

  await notifyNewSubmission({ name, brand, email, whatsapp, budgetRange, message });

  return { status: "success" };
}
