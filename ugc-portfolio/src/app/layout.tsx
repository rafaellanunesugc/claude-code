import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Tan Mon Cheri (a fonte real, estilo assinatura) é usada só no nome
// "Rafa Nunes" — em palavras normais ela embaralha algumas letras, então
// os títulos de seção continuam numa fonte normal (Poppins).
const signatureFont = localFont({
  src: "../fonts/tan-mon-cheri.ttf",
  variable: "--font-signature",
});
// Poppins (títulos, estilo bold & moderno).
const displayFont = localFont({
  src: [
    { path: "../fonts/poppins/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins/Poppins-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/poppins/Poppins-ExtraBold.woff2", weight: "800 900", style: "normal" },
  ],
  variable: "--font-display",
});
// Raleway (texto corrido).
const bodyFont = localFont({
  src: [
    { path: "../fonts/raleway/Raleway-Thin.woff2", weight: "100 200", style: "normal" },
    { path: "../fonts/raleway/Raleway-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/raleway/Raleway-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/raleway/Raleway-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/raleway/Raleway-SemiBold.woff2", weight: "600 900", style: "normal" },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rafa Nunes | UGC Creator, Videomaker e Influenciadora",
  description:
    "Vídeos que conectam e vendem: UGC, conteúdo de influenciadora e produção audiovisual para marcas de Goiânia e de todo o Brasil.",
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
