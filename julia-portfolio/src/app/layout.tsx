import type { Metadata } from "next";
import { Cormorant_Garamond, Tenor_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Fontes da identidade da Júlia:
// - Tenor Sans (texto) — a mesma da identidade visual.
// - Títulos: a identidade usa a "Higuen Elegant Serif", que é paga. Enquanto não
//   tivermos o arquivo da fonte, usamos a Cormorant Garamond (gratuita e parecida).
//   Para trocar: colocar o arquivo em src/fonts/ e usar next/font/local aqui.
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const bodyFont = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | UGC Creator e Influenciadora`,
  description:
    "Naturalidade com estratégia: vídeos UGC e conteúdo de influenciadora para marcas de beleza, skincare, moda, casa e alimentação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
