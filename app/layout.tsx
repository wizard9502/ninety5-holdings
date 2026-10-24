import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ninety5 Holdings | Building the Future of African Enterprise",
  description:
    "Ninety5 Holdings is the parent company of Ninety5 Ventures, Ninety5 Capital, and Ninety5 Properties. First incubated project: Bouteek — next-gen e-commerce for Africa.",
  keywords: ["Ninety5", "Holdings", "Ventures", "Capital", "Properties", "Bouteek", "Africa", "Fintech"],
  openGraph: {
    title: "Ninety5 Holdings",
    description: "Parent company of Ninety5 Ventures, Capital & Properties. Incubating Bouteek.",
    url: "https://ninety5-holdings.vercel.app",
    siteName: "Ninety5 Holdings",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0a0a0b] text-zinc-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
