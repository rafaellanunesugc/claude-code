import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Tan Mon Cheri (a fonte real, estilo assinatura) é usada só no nome
// "Rafa Nunes" — em palavras normais ela embaralha algumas letras, então
// os títulos de seção continuam numa serifada normal (Playfair Display)
// até recebermos a TT Commons Pro (fonte de texto) pra completar o par.
const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const signatureFont = localFont({
  src: "../fonts/tan-mon-cheri.ttf",
  variable: "--font-signature",
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
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${signatureFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
