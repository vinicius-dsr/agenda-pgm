import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Agenda Paragominas",
  description: "Todos os empreendimentos da cidade em um só lugar !",
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
          "min-h-screen bg-background font-sans antialiased",
          roboto.variable,
        )}
      >
        {children}
        <Analytics />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
