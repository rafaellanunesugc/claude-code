import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Fontes neutras provisórias (Google Fonts, gratuitas).
// TODO: trocar pelas fontes da identidade visual da Júlia quando ela definir.
const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const bodyFont = Inter({
  subsets: ["latin"],
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
