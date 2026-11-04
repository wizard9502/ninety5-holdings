import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ninety5 Holdings | Building the Future of African Enterprise",
  description:
    "Ninety5 Holdings is the parent company of Ninety5 Ventures, Ninety5 Capital, Ninety5 Properties, and the Ninety5 Foundation — a Dakar-based holding company building durable African enterprise.",
  keywords: ["Ninety5", "Holdings", "Ventures", "Capital", "Properties", "Foundation", "Africa", "Dakar"],
  openGraph: {
    title: "Ninety5 Holdings",
    description: "Parent company of Ninety5 Ventures, Capital, Properties & Foundation.",
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-black text-zinc-100 font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
