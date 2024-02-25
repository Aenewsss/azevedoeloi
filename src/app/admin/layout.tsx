import type { Metadata } from "next";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: "400" });
import "../globals.css";

export const metadata: Metadata = {
  title: 'Admin Azevedo & Eloi',
  description: 'Admin Azevedo Eloi',
  authors: {
    name: "Aenã Martinelli",
    url: "https://aenamartinelli.com.br"
  },
  creator: "Aenã Martinelli",
  category: "Escritório com atuação em Direito de Família Sucessões, Direito imobiliário, contratos, aposentadoria, auxílio-doença, INSS, Direito Penal.",
  applicationName: "Azevedo & Eloi Advogados Associados",
  appleWebApp: true,
}

export default function AdminLayout({
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
          {children}
        </body>
      </html>
    );
  }
  