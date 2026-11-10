import { WHATSAPP_NUMBER } from "@/lib/data/placeholders";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a]"
    >
      <SocialIcon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
