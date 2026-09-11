export type DealStage =
  | "contato"
  | "conversando"
  | "proposta"
  | "fechado"
  | "entregue";

export type Deal = {
  id: string;
  brand_name: string;
  contact_info: string | null;
  value: number | null;
  deadline: string | null;
  stage: DealStage;
  proposal_sent_at: string | null;
  delivery_date: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  brand: string | null;
  email: string;
  whatsapp: string | null;
  budget_range: string | null;
  message: string | null;
  created_at: string;
};

export type ContactEvent = {
  id: string;
  event_type: "form_opened" | "form_submitted";
  created_at: string;
};
