import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

// Placeholders até recebermos os arquivos das fontes reais:
// Tan Mon Cheri (títulos) e TT Commons Pro (texto). Trocar para
// next/font/local apontando pros arquivos assim que chegarem.
const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Rafa Nunes | UGC Creator, Videomaker e Influenciadora",
  description:
    "Vídeos que conectam e vendem — UGC, conteúdo de influenciadora e produção audiovisual para marcas de Goiânia e de todo o Brasil.",
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
