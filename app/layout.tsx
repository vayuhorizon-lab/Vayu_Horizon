import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAYU — HORIZON",
  description: "A journey begins where the comfort ends. Beyond the Horizon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-midnight text-moon-white font-sans selection:bg-ice-blue selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
