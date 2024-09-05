import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Agenda Paragominas",
  description: "Todos os empreendimentos da cidade em um só lugar !",
  keywords: [
    "Agenda Paragominas",
    "Estabelecimentos em Paragominas",
    "paragominas",
    "Bares",
    "Academia",
    "Perto de mim",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },

  openGraph: {
    title: "Agenda Paragominas",
    description: "Todos os empreendimentos da cidade em um só lugar !",
    type: "website",
    locale: "pt_BR",
    url: "https://agenda-pgm.vercel.app/",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-accent">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
