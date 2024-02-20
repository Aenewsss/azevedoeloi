import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: 'Escritório com atuação em Direito de Família Sucessões, Direito imobiliário, contratos, aposentadoria, auxílio-doença, INSS, Direito Penal.',
  description: 'Escritório com atuação em Direito de Família Sucessões, Direito imobiliário, contratos, aposentadoria, auxílio-doença, INSS, Direito Penal.',
  authors: {
    name: "Aenã Martinelli",
    url: "https://aenamartinelli.com.br"
  },
  creator: "Aenã Martinelli",
  category: "Energia Solar, painéis solares",
  applicationName: "Azevedo & Eloi Advogados Associados",
  appleWebApp: true,
  twitter: { card: "summary_large_image", site: "@site", creator: "@creator" },
  openGraph: {
    type: "website", locale: "pt_BR",
    description: "Escritório com atuação em Direito de Família Sucessões, Direito imobiliário, contratos, aposentadoria, auxílio-doença, INSS, Direito Penal.",
    url: "https://azevedoeloi.adv.br/", siteName: "Azevedo & Eloi Advogados Associados",
    title: "Escritório com atuação em Direito de Família Sucessões, Direito imobiliário, contratos, aposentadoria, auxílio-doença, INSS, Direito Penal."
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" ></script>
        <link rel="icon" sizes="192x192" href="favicon.png"></link>
      </head>
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
