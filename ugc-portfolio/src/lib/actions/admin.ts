"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { DealStage } from "@/lib/types";

export async function createDeal(formData: FormData) {
  const supabase = await createClient();

  const brand_name = String(formData.get("brand_name") || "").trim();
  if (!brand_name) return;

  const contact_info = String(formData.get("contact_info") || "").trim() || null;
  const valueRaw = String(formData.get("value") || "").trim();
  const value = valueRaw ? Number(valueRaw) : 0;
  const deadline = String(formData.get("deadline") || "").trim() || null;

  await supabase.from("deals").insert({
    brand_name,
    contact_info,
    value,
    deadline,
    stage: "contato",
  });

  revalidatePath("/admin/funil");
}

export async function updateDealStage(id: string, stage: DealStage) {
  const supabase = await createClient();

  const patch: Record<string, unknown> = { stage, updated_at: new Date().toISOString() };
  if (stage === "proposta") patch.proposal_sent_at = new Date().toISOString().slice(0, 10);
  if (stage === "entregue") patch.delivery_date = new Date().toISOString().slice(0, 10);

  await supabase.from("deals").update(patch).eq("id", id);

  revalidatePath("/admin/funil");
  revalidatePath("/admin/propostas");
  revalidatePath("/admin/entregas");
}

export async function updateDeal(id: string, formData: FormData) {
  const supabase = await createClient();

  const brand_name = String(formData.get("brand_name") || "").trim();
  const contact_info = String(formData.get("contact_info") || "").trim() || null;
  const valueRaw = String(formData.get("value") || "").trim();
  const value = valueRaw ? Number(valueRaw) : 0;
  const deadline = String(formData.get("deadline") || "").trim() || null;
  const proposal_sent_at =
    String(formData.get("proposal_sent_at") || "").trim() || null;
  const delivery_date = String(formData.get("delivery_date") || "").trim() || null;
  const notes = String(formData.get("notes") || "").trim() || null;

  await supabase
    .from("deals")
    .update({
      brand_name,
      contact_info,
      value,
      deadline,
      proposal_sent_at,
      delivery_date,
      notes,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  revalidatePath("/admin/funil");
  revalidatePath("/admin/propostas");
  revalidatePath("/admin/entregas");
}

export async function deleteDeal(id: string) {
  const supabase = await createClient();
  await supabase.from("deals").delete().eq("id", id);

  revalidatePath("/admin/funil");
  revalidatePath("/admin/propostas");
  revalidatePath("/admin/entregas");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
