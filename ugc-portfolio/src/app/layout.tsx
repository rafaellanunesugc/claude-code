import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Rafa UGC Creator | Saúde, Bem-estar e Beleza",
  description:
    "Portfólio de UGC Creator especializada em conteúdo orgânico e para anúncios nos nichos de saúde, bem-estar e beleza.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
