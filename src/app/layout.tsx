import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivyn | Modern Software Solutions",
  description: "Innovative software solutions for modern businesses. We build scalable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable}`}>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 80px - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
