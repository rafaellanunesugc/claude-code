import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Tan Mon Cheri (a fonte real, estilo assinatura) é usada só no nome
// "Rafa Nunes" — em palavras normais ela embaralha algumas letras, então
// os títulos de seção continuam numa serifada normal (Playfair Display).
const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const signatureFont = localFont({
  src: "../fonts/tan-mon-cheri.ttf",
  variable: "--font-signature",
});
// TT Commons Pro (fonte real de texto). Não recebemos o peso "Regular",
// então o texto comum (400, sem classe de peso) usa o ExtraLight — mais
// perto de uma leitura normal do que o DemiBold, que fica pesado demais
// pra parágrafo. DemiBold fica reservado pra quando algo pede negrito
// médio de propósito (font-medium/font-semibold).
const bodyFont = localFont({
  src: [
    {
      path: "../fonts/tt-commons/TT-Commons-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/tt-commons/TT-Commons-ExtraLight.otf",
      weight: "200 400",
      style: "normal",
    },
    {
      path: "../fonts/tt-commons/TT-Commons-DemiBold.otf",
      weight: "500 600",
      style: "normal",
    },
    {
      path: "../fonts/tt-commons/TT-Commons-DemiBold-Italic.otf",
      weight: "200 600",
      style: "italic",
    },
    {
      path: "../fonts/tt-commons/TT-Commons-ExtraBold.otf",
      weight: "700 900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

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
