import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./paths.css";
import "./energy-check.css";
import "./analysis.css";
import "./media.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JL Vertrieb | Vertriebspartner werden & Energie-Check",
  description: "Persönliches Onboarding, Akademie und Führung im Strom- und Gasvertrieb – oder kostenlosen Energie-Check starten.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/media/jl-logo.png",
    shortcut: "/media/jl-logo.png",
    apple: "/media/jl-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
