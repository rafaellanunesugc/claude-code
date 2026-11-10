import { WHATSAPP_NUMBER } from "@/lib/data/placeholders";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Abre o WhatsApp já com uma mensagem escrita.
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
